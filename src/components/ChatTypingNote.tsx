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

  const bodyClasses = "font-inter text-[0.8rem] leading-snug text-foreground";

  return (
    <div
      id={id}
      ref={ref}
      role="note"
      tabIndex={-1}
      className="mt-6 w-full min-w-0 max-w-full sm:mt-8 lg:max-w-2xl animate-in fade-in slide-in-from-bottom-2 duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-cyan focus-visible:ring-offset-0"
    >
      <div className="relative overflow-hidden rounded-[2rem] bg-transparent">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -left-16 -top-16 h-64 w-64 rounded-full bg-gradient-to-br from-brand-cyan/25 via-brand-sky/10 to-transparent blur-2xl"
        />
        <div className="relative flex items-center p-3 sm:p-4">
          <div className="flex w-14 shrink-0 items-center justify-center sm:w-24">
            <span className="block rounded-full bg-gradient-to-br from-brand-cyan to-brand-sky p-[3px]">
              <span className="block h-10 w-10 overflow-hidden rounded-full bg-surface-light sm:h-16 sm:w-16">
                <img
                  src={avatarSrc}
                  alt={avatarAlt}
                  className="h-full w-full scale-[1.5] object-cover"
                  width={64}
                  height={64}
                />
              </span>
            </span>
          </div>
          <div aria-hidden="true" className="mx-2.5 w-px self-stretch bg-border/50 sm:mx-4" />
          <div className="min-w-0 flex-1">
            <span
              aria-hidden="true"
              className="block text-gradient-accent font-inter text-xl font-black leading-none sm:text-2xl"
            >
              &ldquo;
            </span>
            {/* Full text sits invisibly in flow so the card height never shifts; the typed copy overlays it. */}
            <div className="relative mt-0.5">
              <div aria-hidden="true" className={`invisible ${bodyClasses}`}>
                {text}
              </div>
              <span className="sr-only">{text}</span>
              {phase === "dots" ? (
                <span
                  aria-hidden="true"
                  className="absolute top-0 left-0 flex h-6 items-center gap-1.5"
                >
                  {[0, 150, 300].map((d) => (
                    <span
                      key={d}
                      className="h-1.5 w-1.5 animate-bounce rounded-full bg-brand-sky"
                      style={{ animationDelay: `${d}ms` }}
                    />
                  ))}
                </span>
              ) : (
                <p aria-hidden="true" className={`absolute inset-x-0 top-0 ${bodyClasses}`}>
                  {text.slice(0, count)}
                  {phase === "typing" && (
                    <span className="ml-0.5 inline-block h-3.5 w-0.5 translate-y-0.5 animate-pulse bg-foreground" />
                  )}
                </p>
              )}
            </div>
            <div className="flex h-6 items-end justify-end">
              <span
                aria-hidden="true"
                className="text-gradient-accent font-inter text-xl font-black leading-none transition-opacity duration-500 sm:text-2xl"
              >
                &rdquo;
              </span>
            </div>
            <div
              aria-hidden="true"
              className="mt-1.5 h-[3px] w-2/3 rounded-full bg-gradient-to-r from-brand-cyan to-brand-sky"
            />
          </div>
        </div>
      </div>
    </div>
  );
});
