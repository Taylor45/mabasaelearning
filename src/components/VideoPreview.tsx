import { useState } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { Maximize, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const videoPermissions = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share";

export function VideoPreview({ id, title }: { id: string; title: string }) {
  const [open, setOpen] = useState(false);
  const src = `https://www.youtube-nocookie.com/embed/${id}`;

  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <figure className="relative aspect-video overflow-hidden rounded-md border border-foreground/15 bg-card">
        {!open && (
          <iframe src={src} title={title} loading="lazy" allow={videoPermissions} allowFullScreen className="block h-full w-full border-0" />
        )}
        <Dialog.Trigger asChild>
          <Button variant="outline" size="icon" className="absolute right-3 top-3 h-11 w-11" title="Open fullscreen preview" aria-label={`Open fullscreen preview: ${title}`}>
            <Maximize />
          </Button>
        </Dialog.Trigger>
      </figure>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-50 bg-ink" />
        <Dialog.Content aria-describedby={undefined} className="fixed inset-0 z-50 flex h-dvh min-w-0 flex-col bg-ink text-foreground focus:outline-none">
          <header className="flex shrink-0 items-center justify-between gap-3 border-b border-border p-3 sm:px-6">
            <Dialog.Title className="min-w-0 font-body text-sm font-semibold">{title}</Dialog.Title>
            <Dialog.Close asChild>
              <Button variant="ghost" size="icon" className="h-11 w-11 shrink-0" title="Close fullscreen preview" aria-label="Close fullscreen preview"><X /></Button>
            </Dialog.Close>
          </header>
          <div className="flex min-h-0 flex-1 items-center justify-center">
            <iframe src={src} title={`${title} — fullscreen`} allow={videoPermissions} allowFullScreen className="block h-full w-full min-w-0 border-0" />
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}