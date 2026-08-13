import { createFileRoute, Link } from "@tanstack/react-router";
import illPrompt from "@/assets/ill-prompt-engineering.png";
import illDesign from "@/assets/ill-instructional-design.png";
import illWeb from "@/assets/ill-web-design.png";
import illMedia from "@/assets/ill-multimedia.png";
import illAi from "@/assets/ill-ai-elearning.png";

export const Route = createFileRoute("/elearning-development/")({
  head: () => ({
    meta: [
      { title: "eLearning Development Work | Mabasa eLearning" },
      {
        name: "description",
        content:
          "Multimedia, instructional design, prompt engineering, UX/UI and AI in eLearning work by Mabasa eLearning Consulting.",
      },
      { property: "og:title", content: "eLearning Development Work" },
      {
        property: "og:description",
        content: "Multimedia, instructional design, prompt engineering, UX/UI and AI in eLearning.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ELearningIndex,
});

const areas = [
  {
    to: "/elearning-development/elearning-multimedia" as const,
    title: "eLearning Multimedia",
    img: illMedia,
    copy: "Video, motion graphics, narration and interactive media that bring content to life.",
  },
  {
    to: "/elearning-development/instructional-design" as const,
    title: "Instructional Design",
    img: illDesign,
    copy: "Learner-centered course architecture built on ADDIE, objectives and assessment design.",
  },
  {
    to: "/elearning-development/prompt-engineering" as const,
    title: "Prompt Engineering",
    img: illPrompt,
    copy: "Prompt systems that speed up content production without losing instructional quality.",
  },
  {
    to: "/elearning-development/web-design-ux-ui" as const,
    title: "Web Design / UX & UI",
    img: illWeb,
    copy: "Clean, accessible interfaces and learning portals that are effortless to navigate.",
  },
  {
    to: "/elearning-development/ai-in-elearning" as const,
    title: "AI In eLearning",
    img: illAi,
    copy: "AI-assisted personalisation, tutoring and rapid course development workflows.",
  },
];

function ELearningIndex() {
  return (
    <>
      <section className="surface-hero">
        <div className="mx-auto max-w-6xl px-5 py-20">
          <h1 className="text-4xl sm:text-5xl">eLearning Development</h1>
          <p className="mt-4 max-w-2xl text-muted-foreground">
            A selection of courses, interactive experiences, and SCORM packages designed
            and developed end to end — explore each area below.
          </p>
        </div>
      </section>

      <section className="bg-surface-light">
        <div className="mx-auto max-w-6xl px-5 py-16">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {areas.map((item) => (
              <Link
                key={item.title}
                to={item.to}
                aria-label={`Explore ${item.title}`}
                className="group flex flex-col rounded-2xl border border-surface-light-foreground/12 bg-surface-light p-7 shadow-[0_2px_10px_rgba(0,8,30,0.06)] transition-all duration-300 hover:-translate-y-1 hover:border-accent/40 hover:shadow-[0_18px_38px_rgba(0,8,30,0.14)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-surface-light"
              >
                <img
                  src={item.img}
                  alt={item.title}
                  loading="lazy"
                  width={480}
                  height={480}
                  className="h-48 w-full object-contain"
                />
                <h2 className="mt-8 font-body text-xl font-bold text-surface-light-foreground">
                  {item.title}
                </h2>
                <p className="mt-3 flex-1 text-[0.95rem] leading-relaxed text-surface-light-foreground/75">
                  {item.copy}
                </p>
                <span className="mt-6 block h-px w-full bg-surface-light-foreground/12" />
                <span className="mt-5 flex items-center justify-between text-sm font-semibold text-brand-sky">
                  Explore
                  <span
                    aria-hidden="true"
                    className="text-lg transition-transform duration-300 group-hover:translate-x-1"
                  >
                    →
                  </span>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}