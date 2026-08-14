import { useEffect, useRef, useState } from "react";
import { Link } from "@tanstack/react-router";

const serviceItems = [
  { to: "/elearning-development", label: "eLearning Development" },
  { to: "/prompt-engineering", label: "Prompt Engineering" },
  { to: "/instructional-design", label: "Instructional Design" },
  { to: "/web-design-ux-ui", label: "Web Design / UX & UI" },
  { to: "/elearning-multimedia", label: "eLearning Multimedia" },
  { to: "/ai-in-elearning", label: "AI In eLearning" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const wrapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function onDocClick(e: MouseEvent) {
      if (wrapRef.current && !wrapRef.current.contains(e.target as Node)) setOpen(false);
    }
    document.addEventListener("mousedown", onDocClick);
    return () => document.removeEventListener("mousedown", onDocClick);
  }, []);

  return (
    <header className="sticky top-0 z-50 bg-ink/95 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5">
        <Link to="/" className="flex items-center gap-3">
          <span className="font-display text-xl tracking-tight">Mabasa.</span>
          <span className="rounded-full border border-border px-3 py-0.5 text-[10px] uppercase tracking-[0.2em] text-muted-foreground max-sm:hidden">
            eLearning
          </span>
        </Link>
        <nav className="flex items-center gap-5 text-sm">
          <Link
            to="/"
            activeOptions={{ exact: true }}
            className="font-display text-muted-foreground transition-colors hover:text-foreground [&.active]:text-foreground [&.active]:underline [&.active]:underline-offset-8"
          >
            Home
          </Link>

          <div
            ref={wrapRef}
            className="relative"
            onMouseEnter={() => setOpen(true)}
            onMouseLeave={() => setOpen(false)}
          >
            <button
              type="button"
              aria-haspopup="menu"
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
              className="flex items-center gap-1.5 font-display text-muted-foreground transition-colors hover:text-foreground"
            >
              eLearning Development
              <span
                aria-hidden="true"
                className={`text-[0.65rem] transition-transform duration-200 ${open ? "rotate-180" : ""}`}
              >
                ▼
              </span>
            </button>
            {open && (
              <div
                role="menu"
                className="absolute right-0 top-full z-50 w-64 overflow-hidden rounded-xl border border-border bg-ink shadow-elevated"
              >
                {serviceItems.map((item) => (
                  <Link
                    key={item.to}
                    to={item.to}
                    role="menuitem"
                    onClick={() => setOpen(false)}
                    className="block px-4 py-2.5 text-sm text-muted-foreground transition-colors hover:bg-primary hover:text-primary-foreground [&.active]:text-foreground"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link
            to="/contact"
            className="font-display text-muted-foreground transition-colors hover:text-foreground [&.active]:text-foreground [&.active]:underline [&.active]:underline-offset-8"
          >
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
}
