import { createFileRoute } from "@tanstack/react-router";
import { ServicePage } from "@/components/ServicePage";
import * as Dialog from "@radix-ui/react-dialog";
import { DocumentPreviewFrame, PreviewDialog } from "@/components/DocumentPreview";
import { Button } from "@/components/ui/button";
import { solidBrandStates } from "@/lib/button-states";

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
        name: "Design Document: Mastering Stakeholder Communication: Strategies for Building Trust and Resolving Conflicts",
        src: "https://docs.google.com/document/d/1eKDP1lEPxj_rAiboQmzlIAGR7ggX1sRNjPzbIqNgwC4/preview",
        href: "https://docs.google.com/document/d/1eKDP1lEPxj_rAiboQmzlIAGR7ggX1sRNjPzbIqNgwC4/view",
        action: "Open Document",
      },
      {
        name: "Storyboard: AI Literacy for Instructional Design: Mastering the Art of Prompting",
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
        name: " Visual Storyboard & Wireframe: AI Literacy for Instructional Design: Mastering the Art of Prompting",
        src: "https://docs.google.com/presentation/d/176EaR6tffi9aB69xWrPpqO38WecJj1BVWksGVQ7t7NE/embed?start=false&loop=false&delayms=5000",
        href: "https://docs.google.com/presentation/d/176EaR6tffi9aB69xWrPpqO38WecJj1BVWksGVQ7t7NE/present",
        action: "Open Presentation",
      },
    ],
  },
  {
    title: "Course Content Development",
    blurb:
      "Course development instructions that translate approved storyboards into structured, build-ready content for development.",
    items: [
      {
        name: "Course Development Instructions",
        src: "https://docs.google.com/document/d/12Mi2LwwQJKDtUH9iXlZJz1tX6qPnAih81NI9eKfhHrg/preview",
        href: "https://docs.google.com/document/d/12Mi2LwwQJKDtUH9iXlZJz1tX6qPnAih81NI9eKfhHrg/view",
        action: "Open Document",
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
              <h2 className="font-inter text-xl font-bold sm:text-2xl">{section.title}</h2>
              <p className="mt-2 max-w-2xl text-sm text-muted-foreground">{section.blurb}</p>
            </div>
          </div>
          <div className="bg-surface-light">
            <div className="mx-auto max-w-6xl px-5 py-12">
               <div className="grid min-w-0 grid-cols-1 items-start gap-8 lg:grid-cols-2 lg:gap-10">
              {section.items.map((item) => (
                <Dialog.Root key={item.name}>
                  <article className="group flex min-w-0 flex-col overflow-hidden rounded-md border border-border bg-card shadow-elevated">
                    <DocumentPreviewFrame
                      src={item.src}
                      title={item.name}
                      presentation={item.action === "Open Presentation"}
                    />
                    <div className="flex min-w-0 flex-1 flex-col items-start gap-4 p-4 sm:p-6">
                      <h3 className="font-inter max-w-full break-words text-lg leading-snug">{item.name}</h3>
                      <Dialog.Trigger asChild>
                        <Button
                          type="button"
                          variant="outline"
                          className={`mt-auto h-auto min-h-11 w-full min-w-0 justify-between whitespace-normal rounded-sm border-2 border-btn-primary bg-btn-primary px-4 py-2.5 text-xs uppercase tracking-normal text-btn-primary-foreground shadow-none lg:w-auto lg:justify-center lg:px-5 ${solidBrandStates}`}
                        >
                          <span className="min-w-0 break-words">{item.action}</span>
                          <span className="shrink-0" aria-hidden="true">→</span>
                        </Button>
                      </Dialog.Trigger>
                    </div>
                  </article>
                  <PreviewDialog src={item.src} title={item.name} />
                </Dialog.Root>
              ))}
              </div>
            </div>
          </div>
        </section>
      ))}
    </ServicePage>
  );
}
