import { Link } from "@tanstack/react-router";

const navItems = [
  { to: "/", label: "Home" },
  { to: "/elearning-development", label: "eLearning Development" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 bg-ink/95 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5">
        <Link to="/" className="flex items-center gap-3">
          <span className="font-display text-xl tracking-tight">Mabasa.</span>
          <span className="rounded-full border border-border px-3 py-0.5 text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
            eLearning
          </span>
        </Link>
        <nav className="flex items-center gap-5 text-sm">
          {navItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              activeOptions={{ exact: item.to === "/" }}
              className="font-display text-muted-foreground transition-colors hover:text-foreground [&.active]:text-foreground [&.active]:underline [&.active]:underline-offset-8"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}