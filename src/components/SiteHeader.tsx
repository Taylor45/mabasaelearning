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
            <DropdownMenuContent align="end" className="w-72 rounded-none border-border/10 bg-surface-light p-0 py-2 text-surface-light-foreground shadow-elevated">
                {serviceItems.map((item) => (
                  <DropdownMenuItem key={item.to} asChild>
                    <Link
                      to={item.to}
                      className="min-h-11 cursor-pointer rounded-none! px-5 py-2.5 text-[15px] font-normal text-surface-light-foreground data-[highlighted]:rounded-none data-[highlighted]:bg-menu-highlight data-[highlighted]:text-foreground [&.active]:bg-menu-highlight [&.active]:text-foreground"
                    >
                      {item.label}
                    </Link>
                  </DropdownMenuItem>
                ))}
            </DropdownMenuContent>
          </DropdownMenu>


          <Link
            to="/about"
            className="font-display text-muted-foreground transition-colors hover:text-foreground [&.active]:text-foreground [&.active]:underline [&.active]:underline-offset-8"
          >
            About
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
          <SheetContent
            className="w-[min(90vw,360px)] overflow-y-auto border-border/10 bg-surface-light px-0 pt-7 text-surface-light-foreground"
            aria-describedby={undefined}
          >
            <SheetTitle className="px-5 font-display text-xl text-surface-light-foreground">Mabasa.</SheetTitle>
            <nav aria-label="Mobile navigation" className="mt-6 flex flex-col py-2">
              <Link
                to="/"
                activeOptions={{ exact: true }}
                onClick={() => setMobileOpen(false)}
                className="flex min-h-12 items-center px-5 text-[15px] text-surface-light-foreground hover:bg-menu-highlight hover:text-expertise-foreground focus-visible:bg-menu-highlight focus-visible:text-expertise-foreground focus-visible:outline-none [&.active]:bg-menu-highlight [&.active]:text-expertise-foreground"
              >
                Home
              </Link>
              <p className="mb-1 mt-5 px-5 text-xs uppercase tracking-widest text-surface-light-foreground/60">eLearning</p>
              {serviceItems.map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  onClick={() => setMobileOpen(false)}
                  className="flex min-h-12 items-center px-5 text-[15px] text-surface-light-foreground hover:bg-menu-highlight hover:text-expertise-foreground focus-visible:bg-menu-highlight focus-visible:text-expertise-foreground focus-visible:outline-none [&.active]:bg-menu-highlight [&.active]:text-expertise-foreground"
                >
                  {item.label}
                </Link>
              ))}
              <Link
                to="/about"
                onClick={() => setMobileOpen(false)}
                className="flex min-h-12 items-center px-5 text-[15px] text-surface-light-foreground hover:bg-menu-highlight hover:text-expertise-foreground focus-visible:bg-menu-highlight focus-visible:text-expertise-foreground focus-visible:outline-none [&.active]:bg-menu-highlight [&.active]:text-expertise-foreground"
              >
                About
              </Link>
              <Link
                to="/contact"
                onClick={() => setMobileOpen(false)}
                className="flex min-h-12 items-center px-5 text-[15px] text-surface-light-foreground hover:bg-menu-highlight hover:text-expertise-foreground focus-visible:bg-menu-highlight focus-visible:text-expertise-foreground focus-visible:outline-none [&.active]:bg-menu-highlight [&.active]:text-expertise-foreground"
              >
                Contact
              </Link>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
