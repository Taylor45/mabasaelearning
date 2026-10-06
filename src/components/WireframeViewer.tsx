import { useEffect, useRef, useState } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { ArrowLeft, ArrowRight, RotateCcw, X, ZoomIn, ZoomOut } from "lucide-react";
import { Button } from "@/components/ui/button";

type Wireframe = { src: string; alt: string };

export function WireframeViewer({ images }: { images: Wireframe[] }) {
  const [active, setActive] = useState<number | null>(null);
  const [zoom, setZoom] = useState(1);
  const [viewport, setViewport] = useState({ width: 1, height: 1 });
  const [natural, setNatural] = useState({ width: 1, height: 1 });
  const canvas = useRef<HTMLDivElement>(null);
  const drag = useRef<{ x: number; y: number; left: number; top: number } | null>(null);
  const image = active === null ? undefined : images[active];

  useEffect(() => {
    if (active === null || !canvas.current) return;
    const element = canvas.current;
    const observer = new ResizeObserver(() => {
      setViewport({ width: element.clientWidth, height: element.clientHeight });
    });
    observer.observe(element);
    element.scrollTo(0, 0);
    return () => observer.disconnect();
  }, [active]);

  function move(direction: number) {
    setActive((current) => current === null ? null : (current + direction + images.length) % images.length);
    setZoom(1);
  }

  const fit = Math.min((viewport.width - 32) / natural.width, (viewport.height - 32) / natural.height);
  const width = Math.max(1, natural.width * fit * zoom);
  const height = Math.max(1, natural.height * fit * zoom);

  return (
    <Dialog.Root open={active !== null} onOpenChange={(open) => { if (!open) setActive(null); }}>
      <div className="grid gap-8 sm:grid-cols-2 lg:gap-10">
        {images.map((wire, index) => (
          <figure key={wire.src} className="aspect-[4/3] overflow-hidden rounded-md border border-border bg-card shadow-elevated">
            <Button
              variant="ghost"
              className="group h-full w-full rounded-none p-0 focus-visible:ring-inset"
              aria-label={`Open ${wire.alt}`}
              onClick={() => { setActive(index); setZoom(1); }}
            >
              <img src={wire.src} alt={wire.alt} loading="lazy" className="h-full w-full object-contain transition-transform duration-500 motion-reduce:transition-none group-hover:scale-105" />
            </Button>
          </figure>
        ))}
      </div>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-50 bg-ink" />
        <Dialog.Content
          aria-describedby={undefined}
          className="fixed inset-0 z-50 flex h-dvh flex-col bg-ink text-foreground focus:outline-none"
          onKeyDown={(event) => {
            if (event.key === "ArrowRight") { event.preventDefault(); move(1); }
            if (event.key === "ArrowLeft") { event.preventDefault(); move(-1); }
            if (event.key === "+" || event.key === "=") setZoom((value) => Math.min(4, value + 0.5));
            if (event.key === "-") setZoom((value) => Math.max(1, value - 0.5));
          }}
        >
          <header className="flex shrink-0 flex-wrap items-center justify-between gap-2 border-b border-border px-3 py-3 sm:px-6">
            <Dialog.Title className="font-body text-sm font-semibold">Wireframe {(active ?? 0) + 1} / {images.length}</Dialog.Title>
            <div className="flex items-center gap-1">
              <Button variant="ghost" size="icon" title="Zoom out" aria-label="Zoom out" disabled={zoom <= 1} onClick={() => setZoom((value) => Math.max(1, value - 0.5))}><ZoomOut /></Button>
              <output aria-live="polite" className="w-12 text-center text-xs tabular-nums">{Math.round(zoom * 100)}%</output>
              <Button variant="ghost" size="icon" title="Zoom in" aria-label="Zoom in" disabled={zoom >= 4} onClick={() => setZoom((value) => Math.min(4, value + 0.5))}><ZoomIn /></Button>
              <Button variant="ghost" size="icon" title="Fit image" aria-label="Fit image" onClick={() => { setZoom(1); canvas.current?.scrollTo(0, 0); }}><RotateCcw /></Button>
              <Dialog.Close asChild><Button variant="ghost" size="icon" title="Close viewer" aria-label="Close viewer"><X /></Button></Dialog.Close>
            </div>
          </header>
          <div
            ref={canvas}
            className={`min-h-0 flex-1 overflow-auto overscroll-contain ${zoom > 1 ? "cursor-grab active:cursor-grabbing" : ""}`}
            onDoubleClick={() => setZoom((value) => value === 1 ? 2 : 1)}
            onPointerDown={(event) => {
              if (zoom <= 1 || event.pointerType === "touch") return;
              event.currentTarget.setPointerCapture(event.pointerId);
              drag.current = { x: event.clientX, y: event.clientY, left: event.currentTarget.scrollLeft, top: event.currentTarget.scrollTop };
            }}
            onPointerMove={(event) => {
              if (!drag.current) return;
              event.currentTarget.scrollLeft = drag.current.left + drag.current.x - event.clientX;
              event.currentTarget.scrollTop = drag.current.top + drag.current.y - event.clientY;
            }}
            onPointerUp={() => { drag.current = null; }}
            onPointerCancel={() => { drag.current = null; }}
          >
            <div className="flex min-h-full min-w-full items-center justify-center p-4" style={{ width: width + 32, height: height + 32 }}>
              {image && <img key={image.src} src={image.src} alt={image.alt} draggable={false} className="max-w-none shrink-0 select-none object-contain" style={{ width, height }} onLoad={(event) => setNatural({ width: event.currentTarget.naturalWidth, height: event.currentTarget.naturalHeight })} />}
            </div>
          </div>
          <footer className="flex shrink-0 items-center justify-center gap-5 border-t border-border px-4 py-3">
            <Button variant="outline" size="icon" title="Previous wireframe" aria-label="Previous wireframe" onClick={() => move(-1)}><ArrowLeft /></Button>
            <span aria-live="polite" className="text-sm">{image?.alt}</span>
            <Button variant="outline" size="icon" title="Next wireframe" aria-label="Next wireframe" onClick={() => move(1)}><ArrowRight /></Button>
          </footer>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}