import { createFileRoute } from "@tanstack/react-router";
import { CategoryPage } from "@/components/CategoryPage";
import img from "@/assets/ill-instructional-design.png";

export const Route = createFileRoute("/elearning-development/instructional-design")({
  head: () => ({
    meta: [
      { title: "Instructional Design | Mabasa eLearning" },
      {
        name: "description",
        content:
          "Learner-centered course design using ADDIE, measurable objectives, storyboards and assessment strategy.",
      },
      { property: "og:title", content: "Instructional Design" },
      {
        property: "og:description",
        content: "ADDIE-based course architecture, storyboards and assessment strategy.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: () => (
    <CategoryPage
      eyebrow="eLearning Development"
      title="Instructional Design"
      intro="Course architecture grounded in learning science — from needs analysis and objectives through storyboards to evaluation."
      img={img}
      highlights={[
        { title: "Needs Analysis", copy: "Learner profiles, performance gaps and success criteria defined before any build." },
        { title: "Learning Objectives", copy: "Measurable, Bloom-aligned outcomes that drive every activity and assessment." },
        { title: "Storyboarding", copy: "Detailed storyboards mapping content, interaction and media per screen." },
        { title: "Assessment Design", copy: "Formative checks, scenario quizzes and rubrics that prove learning happened." },
        { title: "ADDIE Delivery", copy: "A structured five-stage process keeping stakeholders aligned throughout." },
        { title: "Evaluation", copy: "Kirkpatrick-informed analytics reviews feeding a clear iteration plan." },
      ]}
    />
  ),
});