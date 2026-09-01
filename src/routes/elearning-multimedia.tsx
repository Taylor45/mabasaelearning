import { createFileRoute } from "@tanstack/react-router";
import { ServicePage } from "@/components/ServicePage";

export const Route = createFileRoute("/elearning-multimedia")({
  head: () => ({
    meta: [
      { title: "eLearning Multimedia | Mabasa eLearning" },
      { name: "description", content: "Video production, motion graphics, narration and interactive media that bring course content to life." },
      { property: "og:title", content: "eLearning Multimedia | Mabasa eLearning" },
      { property: "og:description", content: "Video production, motion graphics, narration and interactive media that bring course content to life." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: MultimediaPage,
});

const blocks = [
  { title: "Video Production", copy: "Scripted, narrated, and edited learning video \u2014 screen capture, talking head, and explainer formats.", tags: ["Camtasia", "Screen Capture", "Editing"] },
  { title: "Motion & Graphics", copy: "Animated explainers, custom illustration, and branded visual assets built in the Adobe Suite.", tags: ["After Effects", "Illustrator", "Branding"] },
  { title: "Audio & Narration", copy: "Clean voice-over, sound design, and accurate captioning for accessible playback everywhere.", tags: ["Voice-over", "Captions", "Sound Design"] },
];

function MultimediaPage() {
  return (
    <ServicePage
      eyebrow="Development & AI"
      title="eLearning Multimedia"
      intro="Producing video, motion, and interactive media that bring learning content to life across every device."
      blocks={blocks}
    />
  );
}
