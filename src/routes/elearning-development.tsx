import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";

export const Route = createFileRoute("/elearning-development")({
  head: () => ({
    meta: [
      { title: "eLearning Development Work | Melvon Mabasa" },
      {
        name: "description",
        content:
          "Articulate Storyline, Genially, iSpring and interactive eBook SCORM projects built by Melvon Mabasa.",
      },
      { property: "og:title", content: "eLearning Development Work" },
      {
        property: "og:description",
        content: "Storyline, Genially, iSpring and interactive eBook SCORM projects.",
      },
    ],
  }),
  component: ELearningPage,
});

const sections = [
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

function ELearningPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <section className="surface-hero">
          <div className="mx-auto max-w-6xl px-5 py-20">
            <h1 className="text-4xl sm:text-5xl">eLearning Development</h1>
            <p className="mt-4 max-w-2xl text-muted-foreground">
              A selection of courses, interactive experiences, and SCORM packages
              designed and developed end to end.
            </p>
          </div>
        </section>

        <div className="mx-auto max-w-6xl px-5 py-16">
          {sections.map((section) => (
            <section key={section.title} className="mb-16 last:mb-0">
              <h2 className="text-2xl">{section.title}</h2>
              <p className="mt-2 max-w-2xl text-sm text-muted-foreground">
                {section.blurb}
              </p>
              <div className="mt-7 grid gap-6 sm:grid-cols-2">
                {section.projects.map((project) => (
                  <article
                    key={project.name}
                    className="overflow-hidden rounded-sm border border-border bg-card shadow-elevated"
                  >
                    <div className="surface-band h-44" />
                    <div className="flex items-center justify-between gap-4 p-5">
                      <h3 className="text-base">{project.name}</h3>
                      <a
                        href="#"
                        className="shrink-0 rounded-sm border border-border px-4 py-2 text-xs uppercase tracking-[0.15em] transition-colors hover:bg-primary hover:text-primary-foreground"
                      >
                        {project.action}
                      </a>
                    </div>
                  </article>
                ))}
              </div>
            </section>
          ))}
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}