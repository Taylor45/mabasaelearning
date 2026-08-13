import { createFileRoute } from "@tanstack/react-router";
import { CategoryPage } from "@/components/CategoryPage";
import img from "@/assets/ill-multimedia.png";

export const Route = createFileRoute("/elearning-development/elearning-multimedia")({
  head: () => ({
    meta: [
      { title: "eLearning Multimedia | Mabasa eLearning" },
      {
        name: "description",
        content:
          "Video production, motion graphics, narration and interactive media crafted for engaging online courses.",
      },
      { property: "og:title", content: "eLearning Multimedia" },
      {
        property: "og:description",
        content: "Video, motion graphics and interactive media for online learning.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: () => (
    <CategoryPage
      eyebrow="eLearning Development"
      title="eLearning Multimedia"
      intro="Video, motion, audio and interactive media produced to make learning content memorable, accessible and on-brand."
      img={img}
      highlights={[
        { title: "Video Production", copy: "Scripted, recorded and edited lesson videos in Camtasia with captions and clean audio." },
        { title: "Motion Graphics", copy: "Animated explainers and transitions built in Adobe Suite to visualise complex ideas." },
        { title: "Interactive Media", copy: "H5P and Genially interactions, hotspots, and branching media embedded in courses." },
        { title: "Narration & Audio", copy: "Professional voice-over, audio clean-up and synchronised on-screen text." },
        { title: "Graphic Design", copy: "Course visuals, infographics and icon sets aligned to a single style guide." },
        { title: "Accessibility", copy: "Captions, transcripts and contrast-checked visuals so media works for every learner." },
      ]}
    />
  ),
});