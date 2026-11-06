import { createContext, useContext, useEffect, useRef, useState, type ReactNode } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { ArrowLeft, ArrowRight, Maximize, Scan, X, ZoomIn, ZoomOut } from "lucide-react";
import { Button, type ButtonProps } from "@/components/ui/button";

type Image = { src: string; alt: string };
const ViewerContext = createContext<{ isOpen: boolean; open: (index: number, trigger: HTMLButtonElement) => void } | null>(null);

export function useImageLightbox() {
  const context = useContext(ViewerContext);
  if (!context) throw new Error("Image preview requires ImageLightbox");
  return context;
}

export function ImageLightboxTrigger({ index, ...props }: ButtonProps & { index: number }) {
  const { open } = useImageLightbox();
  return <Button {...props} aria-haspopup="dialog" onClick={(event) => open(index, event.currentTarget)} />;
}

export function ImageLightbox({ images, children }: { images: Image[]; children: ReactNode }) {
  const [active, setActive] = useState<number | null>(null);
  const [scale, setScale] = useState<number | null>(null);
  const [natural, setNatural] = useState({ width: 1, height: 1 });
  const [viewport, setViewport] = useState({ width: 1, height: 1 });
  const [canvas, setCanvas] = useState<HTMLDivElement | null>(null);
  const trigger = useRef<HTMLButtonElement | null>(null);
  const image = active === null ? undefined : images[active];

  useEffect(() => {
    if (!canvas) return;
    const observer = new ResizeObserver(() => setViewport({ width: canvas.clientWidth, height: canvas.clientHeight }));
    observer.observe(canvas);
    return () => observer.disconnect();
  }, [canvas]);

  useEffect(() => { canvas?.scrollTo(0, 0); }, [active, scale, canvas]);

  const fit = Math.max(0.01, Math.min(1, (viewport.width - 32) / natural.width, (viewport.height - 32) / natural.height));
  const actualScale = scale ?? fit;
  const width = natural.width * actualScale;
  const height = natural.height * actualScale;
  function move(direction: number) {
    setActive((current) => current === null ? null : (current + direction + images.length) % images.length);
    setScale(null);
  }
  function zoom(direction: number) { setScale(Math.max(0.1, Math.min(4, actualScale * (direction > 0 ? 1.5 : 1 / 1.5)))); }

  return (
    <ViewerContext.Provider value={{ isOpen: active !== null, open: (index, element) => { trigger.current = element; setScale(null); setActive(index); } }}>
      <Dialog.Root open={active !== null} onOpenChange={(open) => { if (!open) setActive(null); }}>
        {children}
        <Dialog.Portal>
          <Dialog.Overlay className="fixed inset-0 z-50 bg-ink/95" />
          <Dialog.Content
            aria-describedby={undefined}
            className="fixed inset-0 z-50 flex h-dvh min-w-0 flex-col bg-ink text-foreground focus:outline-none"
            onCloseAutoFocus={(event) => { event.preventDefault(); trigger.current?.focus({ preventScroll: true }); }}
            onKeyDown={(event) => {
              if (event.key === "ArrowRight") { event.preventDefault(); move(1); }
              if (event.key === "ArrowLeft") { event.preventDefault(); move(-1); }
            }}
          >
            <header className="flex shrink-0 flex-wrap items-center justify-between gap-2 border-b border-border px-3 py-3 sm:px-6">
              <Dialog.Title className="font-body text-sm font-semibold">Banner {(active ?? 0) + 1} / {images.length}</Dialog.Title>
              <div className="flex items-center gap-1">
                <Button variant="ghost" size="icon" title="Zoom out" aria-label="Zoom out" disabled={actualScale <= 0.1} onClick={() => zoom(-1)}><ZoomOut /></Button>
                <output aria-live="polite" className="w-12 text-center text-xs tabular-nums">{Math.round(actualScale * 100)}%</output>
                <Button variant="ghost" size="icon" title="Zoom in" aria-label="Zoom in" disabled={actualScale >= 4} onClick={() => zoom(1)}><ZoomIn /></Button>
                <Button variant="ghost" size="icon" title="Original size" aria-label="Original size" onClick={() => setScale(1)}><Scan /></Button>
                <Button variant="ghost" size="icon" title="Fit image" aria-label="Fit image" onClick={() => setScale(null)}><Maximize /></Button>
                <Dialog.Close asChild><Button variant="ghost" size="icon" title="Close viewer" aria-label="Close viewer"><X /></Button></Dialog.Close>
              </div>
            </header>
            <div ref={setCanvas} className="min-h-0 flex-1 overflow-auto overscroll-contain" tabIndex={0} aria-label="Banner image">
              <div className="flex min-h-full min-w-full items-center justify-center p-4" style={{ width: width + 32, height: height + 32 }}>
                {image && <img key={image.src} src={image.src} alt={image.alt} draggable={false} className="max-w-none shrink-0 object-contain" style={{ width, height }} onLoad={(event) => setNatural({ width: event.currentTarget.naturalWidth, height: event.currentTarget.naturalHeight })} />}
              </div>
            </div>
            <footer className="flex shrink-0 items-center justify-between gap-3 border-t border-border px-3 py-3 sm:px-6">
              <Button variant="ghost" size="icon" title="Previous banner" aria-label="Previous banner" onClick={() => move(-1)}><ArrowLeft /></Button>
              <span aria-live="polite" className="min-w-0 text-center text-xs sm:text-sm">{image?.alt}</span>
              <Button variant="ghost" size="icon" title="Next banner" aria-label="Next banner" onClick={() => move(1)}><ArrowRight /></Button>
            </footer>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </ViewerContext.Provider>
  );
}