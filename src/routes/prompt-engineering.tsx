import { createFileRoute } from "@tanstack/react-router";
import { ServicePage } from "@/components/ServicePage";

export const Route = createFileRoute("/prompt-engineering")({
  head: () => ({
    meta: [
      { title: "Prompt Engineering | Mabasa eLearning" },
      { name: "description", content: "Prompt design, AI workflows and reusable prompt libraries for faster, higher-quality learning content." },
      { property: "og:title", content: "Prompt Engineering | Mabasa eLearning" },
      { property: "og:description", content: "Prompt design, AI workflows and reusable prompt libraries for faster, higher-quality learning content." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: PromptEngineeringPage,
});

const blocks = [
  { title: "Prompt Design", copy: "Structured prompt patterns \u2014 role, context, constraints, examples \u2014 tuned for instructional outputs rather than generic text.", tags: ["Role Prompting", "Few-shot", "Chain-of-thought"] },
  { title: "Prompt Libraries", copy: "Reusable, version-controlled prompt sets for storyboards, quiz banks, scenarios, and assessment rubrics.", tags: ["Templates", "Versioning", "Governance"] },
  { title: "Quality & Evaluation", copy: "Test harnesses and rubrics that measure accuracy, tone, and bias before AI output reaches learners.", tags: ["Rubrics", "Bias Checks", "Human Review"] },
];

const materialSections = [
  {
    title: "Avatars Prompting",
    blurb:
      "Prompt sets and worksheets used to generate consistent AI avatars, narration tone, and gamified learning activities.",
    items: [
      {
        name: "AI Avatar Image Prompting Guide",
        src: "https://docs.google.com/document/d/1ZyG0XoReb6op2_N3S6I_AZ2iiFz_3HwmH14bXCiJ0uY/preview",
        href: "https://docs.google.com/document/d/1ZyG0XoReb6op2_N3S6I_AZ2iiFz_3HwmH14bXCiJ0uY/view",
        action: "Open Document",
      },
      {
        name: "Gamified Learning Prompt Worksheet",
        src: "https://docs.google.com/document/d/1IMJZSaM928JGmkdZ-9z9uLTvGLHDQ47I1O3zmd0qk-U/preview",
        href: "https://docs.google.com/document/d/1IMJZSaM928JGmkdZ-9z9uLTvGLHDQ47I1O3zmd0qk-U/view",
        action: "Open Document",
      },
    ],
  },
];

function PromptEngineeringPage() {
  return (
    <ServicePage
      eyebrow="Design & Strategy"
      title="Prompt Engineering"
      intro="Precision-crafted prompts, structured AI workflows, and reusable frameworks designed to turn instructional intent into consistent, high-quality output."
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
