import { createFileRoute, Link, Outlet } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";

export const Route = createFileRoute("/elearning-development")({
  component: ELearningLayout,
});

export const subPages = [
  { to: "/elearning-development/elearning-multimedia", label: "eLearning Multimedia" },
  { to: "/elearning-development/instructional-design", label: "Instructional Design" },
  { to: "/elearning-development/prompt-engineering", label: "Prompt Engineering" },
  { to: "/elearning-development/web-design-ux-ui", label: "Web Design / UX & UI" },
  { to: "/elearning-development/ai-in-elearning", label: "AI In eLearning" },
] as const;

function ELearningLayout() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <div className="border-b border-border bg-ink/60">
        <nav className="mx-auto flex max-w-6xl flex-wrap gap-x-6 gap-y-2 px-5 py-3 text-xs uppercase tracking-[0.15em]">
          {subPages.map((page) => (
            <Link
              key={page.to}
              to={page.to}
              className="text-muted-foreground transition-colors hover:text-foreground [&.active]:text-brand-cyan"
            >
              {page.label}
            </Link>
          ))}
        </nav>
      </div>
      <main className="flex-1">
        <Outlet />
      </main>
      <SiteFooter />
    </div>
  );
}
