import { createFileRoute } from "@tanstack/react-router";
import { ServicePage } from "@/components/ServicePage";
import illustration from "@/assets/ill-instructional-design.png";

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

function InstructionalDesignPage() {
  return (
    <ServicePage
      eyebrow="Design & Strategy"
      title="Instructional Design"
      intro="Crafting learner-centred experiences that inspire understanding, retention, and measurable performance change."
      image={illustration}
      blocks={blocks}
    />
  );
}
