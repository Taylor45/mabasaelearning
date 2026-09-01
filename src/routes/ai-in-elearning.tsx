import { createFileRoute } from "@tanstack/react-router";
import { ServicePage } from "@/components/ServicePage";

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
    />
  );
}
