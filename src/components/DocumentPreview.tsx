import * as Dialog from "@radix-ui/react-dialog";
import { ExternalLink, Maximize, X } from "lucide-react";
import { Button } from "@/components/ui/button";

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
    </Dialog.Root>
  );
}