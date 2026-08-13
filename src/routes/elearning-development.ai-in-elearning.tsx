import { createFileRoute } from "@tanstack/react-router";
import { CategoryPage } from "@/components/CategoryPage";
import img from "@/assets/ill-ai-elearning.png";

export const Route = createFileRoute("/elearning-development/ai-in-elearning")({
  head: () => ({
    meta: [
      { title: "AI In eLearning | Mabasa eLearning" },
      {
        name: "description",
        content:
          "Applying AI to personalise learning paths, support learners and accelerate course production responsibly.",
      },
      { property: "og:title", content: "AI In eLearning" },
      {
        property: "og:description",
        content: "AI for personalised learning paths, learner support and rapid course production.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: () => (
    <CategoryPage
      eyebrow="eLearning Development"
      title="AI In eLearning"
      intro="Practical, ethical uses of AI across the learning lifecycle — from adaptive paths to production speed."
      img={img}
      highlights={[
        { title: "Adaptive Learning", copy: "Personalised paths that respond to learner performance and preference." },
        { title: "AI Tutors", copy: "Course-aware assistants that answer learner questions around the clock." },
        { title: "Rapid Production", copy: "AI-assisted scripting, translation and media generation at scale." },
        { title: "Learning Analytics", copy: "Pattern detection across LMS data to surface at-risk learners early." },
        { title: "Assessment Support", copy: "Auto-generated question banks and rubric-aligned feedback drafts." },
        { title: "Responsible AI", copy: "Bias checks, transparency and human review baked into every workflow." },
      ]}
    />
  ),
});