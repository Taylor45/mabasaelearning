import { createFileRoute } from "@tanstack/react-router";
import { CategoryPage } from "@/components/CategoryPage";
import img from "@/assets/ill-web-design.png";

export const Route = createFileRoute("/elearning-development/web-design-ux-ui")({
  head: () => ({
    meta: [
      { title: "Web Design / UX & UI | Mabasa eLearning" },
      {
        name: "description",
        content:
          "Accessible learning portals and course interfaces designed in Figma with clean UX and consistent UI systems.",
      },
      { property: "og:title", content: "Web Design / UX & UI" },
      {
        property: "og:description",
        content: "Accessible learning portals and course interfaces designed in Figma.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: () => (
    <CategoryPage
      eyebrow="eLearning Development"
      title="Web Design / UX & UI"
      intro="Interfaces and learning portals that feel effortless — clear navigation, consistent components and accessible by default."
      img={img}
      highlights={[
        { title: "UX Research", copy: "Learner journeys, task flows and usability testing that shape the structure." },
        { title: "UI Systems", copy: "Reusable component libraries and design tokens built in Figma." },
        { title: "Course Interfaces", copy: "Player layouts, navigation and progress patterns designed for focus." },
        { title: "Responsive Design", copy: "Layouts that hold up from mobile study sessions to desktop deep work." },
        { title: "Accessibility", copy: "WCAG contrast, keyboard navigation and semantic structure throughout." },
        { title: "Prototyping", copy: "Clickable prototypes that validate flows before development starts." },
      ]}
    />
  ),
});