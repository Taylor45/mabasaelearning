import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import storylineStakeholder from "@/assets/storyline-stakeholder-communication.png.asset.json";
import storylineAiLiteracy from "@/assets/storyline-ai-literacy.png.asset.json";

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
      {
        name: "Mastering Stakeholder Communication",
        action: "View Course",
        image: storylineStakeholder.url,
      },
      {
        name: "AI Literacy for Instructional Design",
        action: "View Course",
        image: storylineAiLiteracy.url,
      },
    ],
  },
  {
    title: "Genially & Interactive eBook (SCORM Package)",
    blurb:
      "Highly visual interactive experiences and downloadable eBooks that pair storytelling with practice.",
    projects: [
      { name: "Interactive Learning Guide", action: "View Course", image: null },
      { name: "Digital eBook", action: "View eBook", image: null },
    ],
  },
  {
    title: "iSpring & Interactive eBook (SCORM Package)",
    blurb:
      "Rapid-authored PowerPoint-to-SCORM courses with quizzing, narration, and mobile-ready playback.",
    projects: [
      { name: "Product Knowledge Course", action: "View Course", image: null },
      { name: "Safety Refresher", action: "View Course", image: null },
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
              <div className="mt-7 grid gap-8 sm:grid-cols-2 lg:gap-10">
                {section.projects.map((project) => (
                  <article
                    key={project.name}
                    className="group flex flex-col overflow-hidden rounded-md border border-border bg-card shadow-elevated transition-transform duration-300 hover:-translate-y-1"
                  >
                    {project.image ? (
                      <div className="aspect-video w-full overflow-hidden bg-muted">
                        <img
                          src={project.image}
                          alt={`${project.name} course preview`}
                          loading="lazy"
                          width={1000}
                          height={563}
                          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                        />
                      </div>
                    ) : (
                      <div className="surface-band aspect-video w-full" />
                    )}
                    <div className="flex flex-1 flex-col items-start gap-4 p-6">
                      <h3 className="text-lg leading-snug">{project.name}</h3>
                      <a
                        href="#"
                        className="mt-auto inline-flex items-center gap-2 rounded-sm border-2 border-accent px-5 py-2.5 text-xs uppercase tracking-[0.15em] transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-card"
                      >
                        {project.action}
                        <span aria-hidden="true" className="transition-transform group-hover:translate-x-0.5">→</span>
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