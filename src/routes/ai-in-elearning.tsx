import { createFileRoute } from "@tanstack/react-router";
import { ServicePage } from "@/components/ServicePage";
import { Button } from "@/components/ui/button";
import { DocumentPreviewButton } from "@/components/DocumentPreview";
import { actionPrimary, actionSecondary } from "@/lib/action-buttons";
import app1 from "@/assets/ai-workflow-app-1.png.asset.json";
import app2 from "@/assets/ai-workflow-app-2.png.asset.json";

const apps = [
  // Guide/app links pending — buttons render without navigation until real URLs arrive.
  { name: "PDF to SCORM Packager App", image: app1.url, guide: "#", app: "#" },
  {
    name: "Storyline Theme Generator",
    image: app2.url,
    guide: "https://docs.google.com/document/d/1AyTC3RxYmw3bJ0Rscer7hGmxMAUVI8SEwtr1pWM1PEA/view",
    app: "https://storyline-theme.vercel.app/",
  },
] as { name: string; image: string; guide?: string; app?: string }[];

const buttonBase =
  "h-auto min-h-11 w-full min-w-0 justify-between whitespace-normal rounded-sm border-2 px-4 py-2.5 text-xs uppercase tracking-normal shadow-none lg:w-auto lg:justify-center lg:px-5";
const buttonOutline = `${buttonBase} ${actionSecondary}`;
const buttonSolid = `${buttonBase} ${actionPrimary}`;

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
                <article key={item.name} className="card-grow group flex min-w-0 flex-col overflow-hidden rounded-md border border-border bg-card shadow-elevated">
                  <img src={item.image} alt={`${item.name} screenshot`} loading="lazy" className="block h-auto w-full" />
                  <div className="flex min-w-0 flex-1 flex-col items-start gap-4 p-4 sm:p-6">
                    <h3 className="font-inter max-w-full break-words text-lg leading-snug">{item.name}</h3>
                    {(item.guide || item.app) && (
                      <div className="mt-auto flex w-full min-w-0 flex-col items-stretch justify-end gap-3 lg:flex-row lg:flex-wrap lg:items-center">
                        {item.guide && (
                          item.guide === "#" ? (
                            <Button
                              type="button"
                              variant="outline"
                              title={`${item.name} \u2014 App Guide (link coming soon)`}
                              className={`${buttonOutline} ${item.app ? "lg:mr-auto" : ""}`}
                            >
                              <span className="min-w-0 break-words">App Guide</span>
                              <span className="shrink-0" aria-hidden="true">→</span>
                            </Button>
                          ) : (
                            <DocumentPreviewButton
                              href={item.guide}
                              title={`${item.name} \u2014 App Guide`}
                              className={`${buttonOutline} ${item.app ? "lg:mr-auto" : ""}`}
                            >
                              <span className="min-w-0 break-words">App Guide</span>
                              <span className="shrink-0" aria-hidden="true">→</span>
                            </DocumentPreviewButton>
                          )
                        )}
                        {item.app && (
                          item.app === "#" ? (
                            <Button type="button" variant="outline" className={buttonSolid} title={`${item.name} (link coming soon)`}>
                              <span className="min-w-0 break-words">View App</span>
                              <span className="shrink-0" aria-hidden="true">→</span>
                            </Button>
                          ) : (
                            <Button asChild variant="outline" className={buttonSolid}>
                              <a href={item.app} target="_blank" rel="noopener noreferrer">
                                <span className="min-w-0 break-words">View App</span>
                                <span className="shrink-0" aria-hidden="true">→</span>
                              </a>
                            </Button>
                          )
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
