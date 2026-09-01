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

function PromptEngineeringPage() {
  return (
    <ServicePage
      eyebrow="Design & Strategy"
      title="Prompt Engineering"
      intro="Designing effective prompts and AI workflows that drive clearer thinking, faster drafting, and smarter learning outputs."
      blocks={blocks}
    />
  );
}
