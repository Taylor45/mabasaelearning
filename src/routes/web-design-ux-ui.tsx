import { createFileRoute } from "@tanstack/react-router";
import { ServicePage } from "@/components/ServicePage";

export const Route = createFileRoute("/web-design-ux-ui")({
  head: () => ({
    meta: [
      { title: "Web Design / UX & UI | Mabasa eLearning" },
      { name: "description", content: "Accessible, responsive learning interfaces, design systems and prototypes built in Figma." },
      { property: "og:title", content: "Web Design / UX & UI | Mabasa eLearning" },
      { property: "og:description", content: "Accessible, responsive learning interfaces, design systems and prototypes built in Figma." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: WebDesignPage,
});

const blocks = [
  { title: "UX Research", copy: "Journey maps, task flows, and usability testing that expose where learners stall or drop off.", tags: ["Journey Maps", "Usability Tests", "Personas"] },
  { title: "UI & Design Systems", copy: "Consistent components, type scales, and colour tokens that keep every course visually coherent.", tags: ["Figma", "Design Tokens", "Components"] },
  { title: "Accessibility", copy: "WCAG-aligned contrast, keyboard navigation, and screen-reader support built in from the first wireframe.", tags: ["WCAG 2.2 AA", "Keyboard Nav", "Alt Text"] },
];

function WebDesignPage() {
  return (
    <ServicePage
      eyebrow="Development & AI"
      title="Web Design / UX & UI"
      intro="Shaping clean, accessible interfaces and design systems that make learning effortless to navigate."
      blocks={blocks}
    />
  );
}
