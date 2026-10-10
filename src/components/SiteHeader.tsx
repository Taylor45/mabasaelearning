import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { ChevronDown, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";

const serviceItems = [
  { to: "/elearning-development", label: "eLearning Development" },
  { to: "/prompt-engineering", label: "Prompt Engineering" },
  { to: "/instructional-design", label: "Instructional Design" },
  { to: "/web-design-ux-ui", label: "Web Design / UX & UI" },
  { to: "/elearning-multimedia", label: "eLearning Multimedia" },
  { to: "/ai-in-elearning", label: "AI In eLearning" },
] as const;

export function SiteHeader() {
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const desktop = window.matchMedia("(min-width: 768px)");
    const closeOnDesktop = () => { if (desktop.matches) setMobileOpen(false); };
    desktop.addEventListener("change", closeOnDesktop);
    return () => desktop.removeEventListener("change", closeOnDesktop);
  }, []);

  return (
    <header className="sticky top-0 z-50 bg-ink/95 backdrop-blur">
      <div className="grid h-16 w-full grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-5 md:flex md:justify-between">
        <Link to="/" className="flex min-w-0 items-center gap-3">
          <span className="font-display text-lg">Mabasa.</span>
          <span className="rounded-full border border-border px-3 py-0.5 text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
            eLearning
          </span>
        </Link>
        <nav aria-label="Main navigation" className="hidden shrink-0 items-center gap-5 text-sm md:flex">
          <Link
            to="/"
            activeOptions={{ exact: true }}
            className="font-display text-muted-foreground transition-colors hover:text-foreground [&.active]:text-foreground [&.active]:underline [&.active]:underline-offset-8"
          >
            Home
          </Link>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="h-11 px-0 font-display font-normal text-muted-foreground hover:bg-transparent hover:text-foreground">
                eLearning Development <ChevronDown aria-hidden="true" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-64 bg-ink text-foreground">
                {serviceItems.map((item) => (
                  <DropdownMenuItem key={item.to} asChild>
                    <Link to={item.to} className="min-h-11 cursor-pointer [&.active]:underline">{item.label}</Link>
                  </DropdownMenuItem>
                ))}
            </DropdownMenuContent>
          </DropdownMenu>

          <Link
            to="/how-cool-is-that"
            className="font-display text-muted-foreground transition-colors hover:text-foreground [&.active]:text-foreground [&.active]:underline [&.active]:underline-offset-8"
          >
            How Cool Is That?
          </Link>

          <Link
            to="/contact"
            className="font-display text-muted-foreground transition-colors hover:text-foreground [&.active]:text-foreground [&.active]:underline [&.active]:underline-offset-8"
          >
            Contact
          </Link>
        </nav>
        <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" aria-label="Open navigation" className="h-11 w-11 shrink-0 text-foreground md:hidden">
              <Menu aria-hidden="true" />
            </Button>
          </SheetTrigger>
          <SheetContent className="w-[min(90vw,360px)] overflow-y-auto bg-ink px-5 pt-7" aria-describedby={undefined}>
            <SheetTitle className="font-display text-xl">Mabasa.</SheetTitle>
            <nav aria-label="Mobile navigation" className="mt-8 flex flex-col gap-1">
              <Link to="/" activeOptions={{ exact: true }} onClick={() => setMobileOpen(false)} className="flex min-h-12 items-center rounded-md px-3 font-display text-foreground hover:bg-muted [&.active]:bg-muted">Home</Link>
              <p className="mb-1 mt-5 px-3 text-xs uppercase tracking-widest text-muted-foreground">eLearning</p>
              {serviceItems.map((item) => (
                <Link key={item.to} to={item.to} onClick={() => setMobileOpen(false)} className="flex min-h-12 items-center rounded-md px-3 py-3 text-sm text-foreground hover:bg-muted [&.active]:bg-muted">{item.label}</Link>
              ))}
              <Link to="/contact" onClick={() => setMobileOpen(false)} className="mt-4 flex min-h-12 items-center rounded-md border-t border-border px-3 font-display text-foreground hover:bg-muted [&.active]:bg-muted">Contact</Link>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
