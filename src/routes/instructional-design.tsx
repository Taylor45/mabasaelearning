import { createFileRoute } from "@tanstack/react-router";
import { ServicePage } from "@/components/ServicePage";

export const Route = createFileRoute("/instructional-design")({
  head: () => ({
    meta: [
      { title: "Instructional Design | Mabasa eLearning" },
      { name: "description", content: "Learner-centred course design using ADDIE, Bloom's taxonomy, storyboards and measurable outcomes." },
      { property: "og:title", content: "Instructional Design | Mabasa eLearning" },
      { property: "og:description", content: "Learner-centred course design using ADDIE, Bloom's taxonomy, storyboards and measurable outcomes." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: InstructionalDesignPage,
});

const blocks = [
  { title: "Needs Analysis", copy: "Learner profiles, performance gaps, and success measures defined before a single slide is built.", tags: ["Audience Profile", "Gap Analysis", "Kirkpatrick"] },
  { title: "Curriculum & Storyboards", copy: "Objectives mapped to interactions and media, sequenced into storyboards that lock pacing and logic.", tags: ["Blooms Taxonomy", "Storyboards", "Interaction Map"] },
  { title: "Assessment Strategy", copy: "Formative checks, scenario assessments, and rubrics aligned to every stated learning objective.", tags: ["Knowledge Checks", "Scenarios", "Rubrics"] },
];

const materialSections = [
  {
    title: "Storyboard & Design Document",
    blurb:
      "Scripts and design documents that define objectives, structure, narration, and on-screen treatment before development starts.",
    items: [
      {
        name: "Mastering Stakeholder Communication: Strategies for Building Trust and Resolving Conflicts (Script)",
        src: "https://docs.google.com/document/d/1eKDP1lEPxj_rAiboQmzlIAGR7ggX1sRNjPzbIqNgwC4/preview",
        href: "https://docs.google.com/document/d/1eKDP1lEPxj_rAiboQmzlIAGR7ggX1sRNjPzbIqNgwC4/view",
        action: "Open Document",
      },
      {
        name: "Design Document",
        src: "https://docs.google.com/document/d/1TYlHIjUqmdO01_oJ4xOTnclFsvSGpzTO8A2s4ZNw2bg/preview",
        href: "https://docs.google.com/document/d/1TYlHIjUqmdO01_oJ4xOTnclFsvSGpzTO8A2s4ZNw2bg/view",
        action: "Open Document",
      },
    ],
  },
  {
    title: "Visual Storyboard & Wireframes",
    blurb:
      "Slide-by-slide visual storyboards and wireframes showing layout, interaction, and media placement for each screen.",
    items: [
      {
        name: "Storyboard - Bruce Mabasa",
        src: "https://docs.google.com/presentation/d/176EaR6tffi9aB69xWrPpqO38WecJj1BVWksGVQ7t7NE/embed?start=false&loop=false&delayms=5000",
        href: "https://docs.google.com/presentation/d/176EaR6tffi9aB69xWrPpqO38WecJj1BVWksGVQ7t7NE/present",
        action: "Open Presentation",
      },
    ],
  },
];

function InstructionalDesignPage() {
  return (
    <ServicePage
      eyebrow="Design & Strategy"
      title="Instructional Design"
      intro="Structured storyboards, scalable design systems, and polished academic writing crafted to translate complex content into clear, purposeful learning experiences."
      blocks={blocks}
    >
      {materialSections.map((section) => (
        <section key={section.title}>
          <div className="surface-band border-y border-foreground/10">
            <div className="mx-auto max-w-6xl px-5 py-7">
              <h2 className="font-body text-xl font-bold sm:text-2xl">{section.title}</h2>
              <p className="mt-2 max-w-2xl text-sm text-muted-foreground">{section.blurb}</p>
            </div>
          </div>
          <div className="mx-auto max-w-6xl px-5 py-12">
            <div className="grid gap-8 lg:grid-cols-2 lg:gap-10">
              {section.items.map((item) => (
                <article
                  key={item.name}
                  className="group flex flex-col overflow-hidden rounded-md border border-border bg-card shadow-elevated"
                >
                  <div className="aspect-[4/3] w-full bg-muted">
                    <iframe
                      src={item.src}
                      title={item.name}
                      loading="lazy"
                      allowFullScreen
                      className="h-full w-full border-0"
                    />
                  </div>
                  <div className="flex flex-1 flex-col items-start gap-4 p-6">
                    <h3 className="text-lg leading-snug">{item.name}</h3>
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-auto inline-flex items-center gap-2 rounded-sm border-2 border-accent px-5 py-2.5 text-xs uppercase tracking-[0.15em] transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-card"
                    >
                      {item.action}
                      <span aria-hidden="true" className="transition-transform group-hover:translate-x-0.5">→</span>
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      ))}
    </ServicePage>
  );
}
