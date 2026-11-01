import { forwardRef, useEffect, useRef, useState } from "react";

type Props = { id: string; text: string; avatarSrc: string; avatarAlt: string };

export const ChatTypingNote = forwardRef<HTMLDivElement, Props>(function ChatTypingNote(
  { id, text, avatarSrc, avatarAlt },
  ref,
) {
  const [phase, setPhase] = useState<"dots" | "typing" | "done">("dots");
  const [count, setCount] = useState(0);
  const measureRef = useRef<HTMLDivElement>(null);
  const [minH, setMinH] = useState(0);

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

  // Reserve the final text height up front so the card frame never shifts
  // while the words type out.
  useEffect(() => {
    const update = () => {
      if (measureRef.current) setMinH(measureRef.current.offsetHeight);
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, [text]);

  const bodyClasses = "font-inter text-[0.95rem] leading-relaxed text-surface-light-foreground";

  return (
    <div
      id={id}
      ref={ref}
      role="note"
      tabIndex={-1}
      className="mt-8 w-full max-w-2xl sm:w-[calc(100%+2.5rem)] md:w-[calc(100%+3.5rem)] animate-in fade-in slide-in-from-bottom-2 duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
    >
      <div className="relative overflow-hidden rounded-[2rem] bg-surface-light shadow-testimonial">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -left-16 -top-16 h-64 w-64 rounded-full bg-gradient-to-br from-brand-cyan/25 via-brand-sky/10 to-transparent blur-2xl"
        />
        <div className="relative flex items-center p-4 sm:p-5">
          <div className="flex w-16 shrink-0 items-center justify-center sm:w-28">
            <span className="block rounded-full bg-gradient-to-br from-brand-cyan to-brand-sky p-[3px]">
              <span className="block h-12 w-12 overflow-hidden rounded-full bg-surface-light sm:h-20 sm:w-20">
                <img
                  src={avatarSrc}
                  alt={avatarAlt}
                  className="h-full w-full scale-[1.5] object-cover"
                  width={96}
                  height={96}
                />
              </span>
            </span>
          </div>
          <div aria-hidden="true" className="mx-3 w-px self-stretch bg-border/50 sm:mx-5" />
          <div className="min-w-0 flex-1">
            <span
              aria-hidden="true"
              className="block text-gradient-accent font-inter text-3xl font-black leading-none sm:text-4xl"
            >
              &ldquo;
            </span>
            <div className="relative mt-1" style={minH ? { minHeight: `${minH}px` } : undefined}>
              <div
                ref={measureRef}
                aria-hidden="true"
                className={`pointer-events-none invisible absolute inset-x-0 top-0 ${bodyClasses}`}
              >
                {text}
              </div>
              <span className="sr-only">{text}</span>
              {phase === "dots" ? (
                <span aria-hidden="true" className="flex h-6 items-center gap-1.5">
                  {[0, 150, 300].map((d) => (
                    <span
                      key={d}
                      className="h-2 w-2 animate-bounce rounded-full bg-brand-sky"
                      style={{ animationDelay: `${d}ms` }}
                    />
                  ))}
                </span>
              ) : (
                <p aria-hidden="true" className={bodyClasses}>
                  {text.slice(0, count)}
                  {phase === "typing" && (
                    <span className="ml-0.5 inline-block h-4 w-0.5 translate-y-0.5 animate-pulse bg-surface-light-foreground" />
                  )}
                </p>
              )}
            </div>
            <div className="-mt-4 flex h-8 items-end justify-end">
              <span
                aria-hidden="true"
                className="text-gradient-accent font-inter text-4xl font-black leading-none transition-opacity duration-500 sm:text-5xl"
              >
                &rdquo;
              </span>
            </div>
            <div
              aria-hidden="true"
              className="mt-2 h-1 w-2/3 rounded-full bg-gradient-to-r from-brand-cyan to-brand-sky"
            />
          </div>
        </div>
      </div>
    </div>
  );
});
