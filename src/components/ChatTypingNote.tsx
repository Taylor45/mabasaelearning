import { forwardRef, useEffect, useState } from "react";

type Props = { id: string; text: string; avatarSrc: string; avatarAlt: string };

export const ChatTypingNote = forwardRef<HTMLDivElement, Props>(function ChatTypingNote(
  { id, text, avatarSrc, avatarAlt },
  ref,
) {
  const [phase, setPhase] = useState<"dots" | "typing" | "done">("dots");
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setCount(text.length);
      setPhase("done");
      return;
    }
    let interval: ReturnType<typeof setInterval> | undefined;
    const start = setTimeout(() => {
      setPhase("typing");
      interval = setInterval(() => {
        setCount((c) => {
          if (c + 1 >= text.length) {
            clearInterval(interval);
            setPhase("done");
            return text.length;
          }
          return c + 1;
        });
      }, 25);
    }, 800);
    return () => {
      clearTimeout(start);
      if (interval) clearInterval(interval);
    };
  }, [text]);

  return (
    <div
      id={id}
      ref={ref}
      role="note"
      tabIndex={-1}
      className="mt-8 flex max-w-xl items-start gap-3 animate-in fade-in slide-in-from-bottom-2 duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
    >
      <img
        src={avatarSrc}
        alt={avatarAlt}
        className="h-10 w-10 shrink-0 rounded-full border-2 border-brand-cyan object-cover"
        width={40}
        height={40}
      />
      <div className="min-w-0 flex-1 border border-border/10 bg-surface-light p-4 text-surface-light-foreground shadow-elevated">
        <span className="sr-only">{text}</span>
        {phase === "dots" ? (
          <span aria-hidden="true" className="flex h-6 items-center gap-1.5">
            {[0, 150, 300].map((d) => (
              <span
                key={d}
                className="h-2 w-2 animate-bounce rounded-full bg-surface-light-foreground/50"
                style={{ animationDelay: `${d}ms` }}
              />
            ))}
          </span>
        ) : (
          <p aria-hidden="true" className="font-inter text-[0.9rem] leading-relaxed">
            {text.slice(0, count)}
            {phase === "typing" && (
              <span className="ml-0.5 inline-block h-4 w-0.5 translate-y-0.5 animate-pulse bg-surface-light-foreground" />
            )}
          </p>
        )}
      </div>
    </div>
  );
});
