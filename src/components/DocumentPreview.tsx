import * as Dialog from "@radix-ui/react-dialog";
import { ExternalLink, Maximize, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export function toPreviewSrc(url: string) {
  const doc = url.match(/docs\.google\.com\/document\/d\/([^/]+)/);
  if (doc) return `https://docs.google.com/document/d/${doc[1]}/preview`;
  const pres = url.match(/docs\.google\.com\/presentation\/d\/([^/]+)/);
  if (pres) return `https://docs.google.com/presentation/d/${pres[1]}/preview`;
  const drive = url.match(/drive\.google\.com\/file\/d\/([^/]+)/);
  if (drive) return `https://drive.google.com/file/d/${drive[1]}/preview`;
  return url;
}

function PreviewDialog({ src, title, href }: { src: string; title: string; href: string }) {
  return (
    <Dialog.Portal>
      <Dialog.Overlay className="fixed inset-0 z-50 bg-background" />
      <Dialog.Content aria-describedby={undefined} className="fixed inset-0 z-50 flex h-dvh min-w-0 flex-col bg-background text-foreground focus:outline-none">
        <header className="grid shrink-0 grid-cols-[minmax(0,1fr)_auto] items-center gap-3 border-b border-border p-3 sm:px-6">
          <Dialog.Title className="min-w-0 truncate font-body text-sm font-semibold">{title}</Dialog.Title>
          <div className="flex shrink-0 items-center gap-1">
            <Button asChild variant="ghost" size="icon" className="h-11 w-11" title="Open original document">
              <a href={href} target="_blank" rel="noreferrer" aria-label="Open original document"><ExternalLink /></a>
            </Button>
            <Dialog.Close asChild>
              <Button variant="ghost" size="icon" className="h-11 w-11" title="Close fullscreen preview" aria-label="Close fullscreen preview"><X /></Button>
            </Dialog.Close>
          </div>
        </header>
        <iframe src={src} title={`${title} — fullscreen`} allowFullScreen className="block min-h-0 w-full min-w-0 flex-1 border-0 bg-surface-light" />
      </Dialog.Content>
    </Dialog.Portal>
  );
}

export function DocumentPreview({ src, title, href, presentation = false }: {
  src: string;
  title: string;
  href: string;
  presentation?: boolean;
}) {
  return (
    <Dialog.Root>
      <div className={presentation
        ? "relative aspect-video w-full min-w-0 bg-muted sm:aspect-[4/3]"
        : "relative h-[min(480px,70dvh)] w-full min-w-0 bg-muted sm:aspect-[4/3] sm:h-auto"}>
        <iframe src={src} title={title} loading="lazy" allowFullScreen className="block h-full w-full max-w-full border-0" />
        <Dialog.Trigger asChild>
          <Button variant="outline" size="icon" className="absolute right-3 top-3 h-11 w-11" title="Open fullscreen preview" aria-label={`Open fullscreen preview: ${title}`}>
            <Maximize />
          </Button>
        </Dialog.Trigger>
      </div>
      <PreviewDialog src={src} title={title} href={href} />
    </Dialog.Root>
  );
}

/** Button that opens a document in the shared fullscreen preview dialog. */
export function DocumentPreviewButton({ href, title, className, children }: {
  href: string;
  title: string;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <Button type="button" variant="outline" title={`Preview: ${title}`} className={className}>
          {children}
        </Button>
      </Dialog.Trigger>
      <PreviewDialog src={toPreviewSrc(href)} title={title} href={href} />
    </Dialog.Root>
  );
}
