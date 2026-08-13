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

const unusedSections = [
  {
    title: "Articulate Storyline Courses (Interactive & SCORM Package)",
    blurb:
      "Scenario-driven modules with branching, knowledge checks, and SCORM tracking built for LMS delivery.",
    projects: [
      { name: "Compliance Essentials", action: "View Course" },
      { name: "Onboarding Journey", action: "View Course" },
    ],
  },
  {
    title: "Genially & Interactive eBook (SCORM Package)",
    blurb:
      "Highly visual interactive experiences and downloadable eBooks that pair storytelling with practice.",
    projects: [
      { name: "Interactive Learning Guide", action: "View Course" },
      { name: "Digital eBook", action: "View eBook" },
    ],
  },
  {
    title: "iSpring & Interactive eBook (SCORM Package)",
    blurb:
      "Rapid-authored PowerPoint-to-SCORM courses with quizzing, narration, and mobile-ready playback.",
    projects: [
      { name: "Product Knowledge Course", action: "View Course" },
      { name: "Safety Refresher", action: "View Course" },
    ],
  },
];