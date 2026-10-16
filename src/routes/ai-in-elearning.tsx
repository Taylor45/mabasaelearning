import { createFileRoute } from "@tanstack/react-router";
import { ServicePage } from "@/components/ServicePage";
import { DocumentPreviewButton } from "@/components/DocumentPreview";
import { solidAccentStates } from "@/lib/button-states";
import app1 from "@/assets/ai-workflow-app-1.png.asset.json";
import app2 from "@/assets/ai-workflow-app-2.png.asset.json";

const apps = [
  { name: "Production Workflow App", image: app1.url },
  {
    name: "Storyline Theme Generator",
    image: app2.url,
    guide: "https://docs.google.com/document/d/1AyTC3RxYmw3bJ0Rscer7hGmxMAUVI8SEwtr1pWM1PEA/view",
    app: "https://storyline-theme.vercel.app/",
  },
] as { name: string; image: string; guide?: string; app?: string }[];

const outline =
  "h-auto min-h-11 gap-2 whitespace-normal rounded-sm border-2 border-accent px-5 py-2.5 text-xs uppercase tracking-[0.15em] transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-card";

export const Route = createFileRoute("/ai-in-elearning")({
  head: () => ({
    meta: [
      { title: "AI In eLearning | Mabasa eLearning" },
      { name: "description", content: "Applying AI to personalise learning paths, accelerate content production and surface learning analytics." },
      { property: "og:title", content: "AI In eLearning | Mabasa eLearning" },
      { property: "og:description", content: "Applying AI to personalise learning paths, accelerate content production and surface learning analytics." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: AiInELearningPage,
});

const blocks = [
  { title: "Personalised Paths", copy: "Adaptive sequencing and recommendations that respond to each learner\u2019s prior knowledge and pace.", tags: ["Adaptive Learning", "Recommendations", "Diagnostics"] },
  { title: "Content Acceleration", copy: "AI-assisted drafting of scripts, quiz banks, and scenario branches \u2014 always human-reviewed before release.", tags: ["Drafting", "Quiz Generation", "Localisation"] },
  { title: "Learning Analytics", copy: "xAPI and LMS data turned into dashboards that show what landed and what needs revision.", tags: ["xAPI", "Dashboards", "Iteration"] },
];

function AiInELearningPage() {
  return (
    <ServicePage
      eyebrow="Development & AI"
      title="AI In eLearning"
      intro="Applying AI to personalise learning, accelerate content production, and turn learner data into decisions."
      blocks={blocks}
    >
      <section>
        <div className="surface-band border-y border-foreground/10">
          <div className="mx-auto max-w-6xl px-5 py-7">
            <h2 className="font-inter text-xl font-bold sm:text-2xl">Production Workflow Applications</h2>
            <p className="mt-2 max-w-2xl text-sm text-muted-foreground">
              Adaptive content generators, workflow and production systems engineered to speed up development and implementation, for more engaging and interactive learning experiences.
            </p>
          </div>
        </div>
        <div className="bg-surface-light">
          <div className="mx-auto max-w-6xl px-5 py-12">
            <div className="grid min-w-0 grid-cols-1 items-start gap-8 lg:grid-cols-2 lg:gap-10">
              {apps.map((item) => (
                <article key={item.name} className="flex min-w-0 flex-col overflow-hidden rounded-md border border-border bg-card shadow-elevated">
                  <img src={item.image} alt={`${item.name} screenshot`} loading="lazy" className="block h-auto w-full" />
                  <div className="flex min-w-0 flex-col items-start gap-4 p-4 sm:p-6">
                    <h3 className="font-inter text-lg leading-snug">{item.name}</h3>
                    {(item.guide || item.app) && (
                      <div className="flex w-full min-w-0 flex-col items-stretch gap-3 sm:flex-row sm:items-center sm:justify-between">
                        {item.guide && (
                          <DocumentPreviewButton href={item.guide} title={`${item.name} — App Guide`} className={outline}>
                            App Guide <span aria-hidden="true">→</span>
                          </DocumentPreviewButton>
                        )}
                        {item.app && (
                          <a href={item.app} target="_blank" rel="noopener noreferrer" className={`inline-flex items-center justify-center gap-2 rounded-sm border-2 border-accent px-5 py-2.5 text-xs font-medium uppercase tracking-[0.15em] min-h-11 ${solidAccentStates}`}>
                            View App <span aria-hidden="true">→</span>
                          </a>
                        )}
                      </div>
                    )}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>
    </ServicePage>
  );
}
