import { createFileRoute } from "@tanstack/react-router";
import { CategoryPage } from "@/components/CategoryPage";
import img from "@/assets/ill-prompt-engineering.png";

export const Route = createFileRoute("/elearning-development/prompt-engineering")({
  head: () => ({
    meta: [
      { title: "Prompt Engineering | Mabasa eLearning" },
      {
        name: "description",
        content:
          "Prompt systems and AI workflows that accelerate course content production without losing instructional quality.",
      },
      { property: "og:title", content: "Prompt Engineering" },
      {
        property: "og:description",
        content: "Prompt systems and AI workflows for faster, higher-quality course content.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: () => (
    <CategoryPage
      eyebrow="eLearning Development"
      title="Prompt Engineering"
      intro="Reusable prompt frameworks that turn generative AI into a dependable co-author for learning content."
      img={img}
      highlights={[
        { title: "Prompt Frameworks", copy: "Role, context, constraint and output patterns packaged as reusable templates." },
        { title: "Content Drafting", copy: "Rapid first drafts of scripts, scenarios and quiz banks that SMEs refine." },
        { title: "Quality Guardrails", copy: "Review checklists and fact-checking steps that keep AI output accurate." },
        { title: "Custom GPTs", copy: "Purpose-built assistants trained on your style guide and course standards." },
        { title: "Team Enablement", copy: "Workshops that upskill design teams to prompt confidently and ethically." },
        { title: "Workflow Design", copy: "Where AI fits — and where it doesn't — across the ADDIE pipeline." },
      ]}
    />
  ),
});