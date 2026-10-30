import { createFileRoute } from "@tanstack/react-router";
import { BookOpenCheck, BarChart3, Accessibility, Network, CodeXml } from "lucide-react";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Me | Mabasa eLearning" },
      {
        name: "description",
        content:
          "Meet Bruce Mabasa — instructional designer and eLearning developer with 3+ years in learning and development, bridging the gap between instructional design and the technology behind it.",
      },
      { property: "og:title", content: "About Me | Mabasa eLearning" },
      {
        property: "og:description",
        content:
          "Nearly three years of experience in learning and development — custom Storyline & Rise courses, learning media, LMS knowledge and software engineering behind the learning.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: AboutPage,
});

const strengths = [
  {
    icon: BookOpenCheck,
    title: "eLearning Expertise",
    copy: "Custom Storyline & Rise course development.",
  },
  {
    icon: BarChart3,
    title: "Learning Engagement",
    copy: "Media assets built for learning, not just watching.",
  },
  {
    icon: Puzzle,
    title: "LMS Knowledge",
    copy: "Experienced with LMS requirements and constraints.",
  },
];
