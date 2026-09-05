import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import storylineStakeholder from "@/assets/storyline-stakeholder-communication.png.asset.json";
import storylineAiLiteracy from "@/assets/storyline-ai-literacy.png.asset.json";
import geniallyGuide1 from "@/assets/genially-guide-1.png.asset.json";
import geniallyGuide2 from "@/assets/genially-guide-2.png.asset.json";
import digitalEbook1 from "@/assets/digital-ebook-1.png.asset.json";
import ispringCourse1 from "@/assets/ispring-course-1.png.asset.json";
import ispringCourse2 from "@/assets/ispring-course-2.png.asset.json";
import ispringSafety1 from "@/assets/ispring-safety-1.png.asset.json";

export const Route = createFileRoute("/elearning-development")({
  head: () => ({
    meta: [
      { title: "eLearning Development Work | Melvon Mabasa" },
      {
        name: "description",
        content:
          "Articulate Storyline, Genially, iSpring and interactive eBook SCORM projects built by Melvon Mabasa.",
      },
      { property: "og:title", content: "eLearning Development Work" },
      {
        property: "og:description",
        content: "Storyline, Genially, iSpring and interactive eBook SCORM projects.",
      },
    ],
  }),
  component: ELearningPage,
});

const sections = [
  {
    title: "Articulate Storyline Courses (Interactive & SCORM Package)",
    blurb:
      "Scenario-driven modules with branching, knowledge checks, and SCORM tracking built for LMS delivery.",
    projects: [
      {
        name: "Mastering Stakeholder Communication",
        action: "View Course",
        images: [
          "/__l5e/assets-v1/559cfe86-3387-41f3-9eb2-a5a03c362c4f/storyline-stakeholder-communication.png",
          storylineStakeholder.url,
        ],
      },
      {
        name: "AI Literacy for Instructional Design",
        action: "View Course",
        images: [
          "/__l5e/assets-v1/f8a711a1-f971-4a5d-90a1-eb7fa32d4106/storyline-ai-literacy.png",
          storylineAiLiteracy.url,
        ],
      },
    ],
  },
  {
    title: "Genially & Interactive eBook (SCORM Package)",
    blurb:
      "Highly visual interactive experiences and downloadable eBooks that pair storytelling with practice.",
    projects: [
      {
        name: "Interactive Learning Guide",
        action: "View Course",
        images: [geniallyGuide1.url, geniallyGuide2.url],
      },
      { name: "Digital eBook", action: "View eBook", images: [digitalEbook1.url] },
    ],
  },
  {
    title: "iSpring & Interactive eBook (SCORM Package)",
    blurb:
      "Rapid-authored PowerPoint-to-SCORM courses with quizzing, narration, and mobile-ready playback.",
    projects: [
      {
        name: "Product Knowledge Course",
        action: "View Course",
        images: [ispringCourse1.url, ispringCourse2.url],
      },
      { name: "Safety Refresher", action: "View Course", images: [ispringSafety1.url] },
    ],
  },
];

function ImageCarousel({ images, alt }: { images: string[]; alt: string }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (images.length < 2) return;
    const id = setInterval(
      () => setIndex((i) => (i + 1) % images.length),
      4000
    );
    return () => clearInterval(id);
  }, [images.length]);

  return (
    <div className="relative aspect-video w-full overflow-hidden bg-muted">
      {images.map((src, i) => (
        <img
          key={src}
          src={src}
          alt={i === 0 ? alt : ""}
          aria-hidden={i !== index}
          loading="lazy"
          width={1000}
          height={563}
          className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 group-hover:scale-[1.03] ${
            i === index ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}
      {images.length > 1 && (
        <div className="absolute bottom-3 left-1/2 flex -translate-x-1/2 gap-2">
          {images.map((_, i) => (
            <button
              key={i}
              type="button"
              aria-label={`Show image ${i + 1}`}
              onClick={() => setIndex(i)}
              className={`h-2 w-2 rounded-full transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent ${
                i === index ? "bg-accent" : "bg-foreground/50"
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
}

const blocks = [
  {
    title: "Interactive Course Development",
    copy: "Scenario-based modules with branching, knowledge checks, and gamified interactions that keep learners engaged from start to finish.",
    tags: ["Articulate Storyline", "Branching", "Gamification"],
  },
  {
    title: "SCORM & LMS Packaging",
    copy: "Courses packaged to SCORM 1.2 / xAPI standards with completion tracking, quiz scoring, and seamless upload to any LMS.",
    tags: ["SCORM", "xAPI", "LMS Testing"],
  },
  {
    title: "Rapid Authoring",
    copy: "Fast-turnaround PowerPoint-to-SCORM builds with narration, quizzing, and mobile-ready playback using iSpring and Genially.",
    tags: ["iSpring", "Genially", "Mobile-Ready"],
  },
];

function ELearningPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <section className="surface-hero">
          <div className="mx-auto max-w-6xl px-5 py-20">
            <h1 className="text-4xl sm:text-5xl">eLearning Development</h1>
            <p className="mt-4 max-w-2xl text-muted-foreground">
              A selection of courses, interactive experiences, and SCORM packages
              designed and developed end to end.
            </p>
          </div>
        </section>

        <section className="bg-surface-light">
          <div className="mx-auto max-w-6xl px-5 py-16">
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {blocks.map((block) => (
                <article
                  key={block.title}
                  className="flex flex-col rounded-2xl border border-surface-light-foreground/12 bg-surface-light p-7 shadow-[0_2px_10px_rgba(0,8,30,0.06)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_38px_rgba(0,8,30,0.14)]"
                >
                  <h2 className="font-body text-xl font-bold text-surface-light-foreground">
                    {block.title}
                  </h2>
                  <p className="mt-3 flex-1 text-[0.95rem] leading-relaxed text-surface-light-foreground/75">
                    {block.copy}
                  </p>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {block.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-surface-light-foreground/20 px-3 py-1 text-[0.7rem] font-semibold text-surface-light-foreground/70"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <div className="mx-auto max-w-6xl px-5 py-16">
          {sections.map((section) => (
            <section key={section.title} className="mb-16 last:mb-0">
              <h2 className="text-2xl">{section.title}</h2>
              <p className="mt-2 max-w-2xl text-sm text-muted-foreground">
                {section.blurb}
              </p>
              <div className="mt-7 grid gap-8 sm:grid-cols-2 lg:gap-10">
                {section.projects.map((project) => (
                  <article
                    key={project.name}
                    className="group flex flex-col overflow-hidden rounded-md border border-border bg-card shadow-elevated transition-transform duration-300 hover:-translate-y-1"
                  >
                    {project.images.length > 0 ? (
                      <ImageCarousel
                        images={project.images}
                        alt={`${project.name} course preview`}
                      />
                    ) : (
                      <div className="surface-band aspect-video w-full" />
                    )}
                    <div className="flex flex-1 flex-col items-start gap-4 p-6">
                      <h3 className="text-lg leading-snug">{project.name}</h3>
                      <a
                        href="#"
                        className="mt-auto inline-flex items-center gap-2 rounded-sm border-2 border-accent px-5 py-2.5 text-xs uppercase tracking-[0.15em] transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-card"
                      >
                        {project.action}
                        <span aria-hidden="true" className="transition-transform group-hover:translate-x-0.5">→</span>
                      </a>
                    </div>
                  </article>
                ))}
              </div>
            </section>
          ))}
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
