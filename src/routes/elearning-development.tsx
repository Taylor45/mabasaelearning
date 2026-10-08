import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { Button } from "@/components/ui/button";
import { DocumentPreviewButton } from "@/components/DocumentPreview";
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
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ELearningPage,
});

type ProjectLink = { label: string; href: string; preview?: boolean };

const sections: { title: string; blurb: string; projects: { name: string; links: ProjectLink[]; images: string[] }[] }[] = [
  {
    title: "Articulate Storyline Courses ",
    blurb:
      "Scenario-driven modules with branching, knowledge checks, and SCORM tracking built for LMS delivery.",
    projects: [
      {
        name: "Mastering Stakeholder Communication",
        links: [
          { label: "View Course", href: "https://taylor45.github.io/Mastering-Stakeholder-Communication/" },
          { label: "Design Process", href: "https://docs.google.com/document/d/1eKDP1lEPxj_rAiboQmzlIAGR7ggX1sRNjPzbIqNgwC4/edit?usp=sharing", preview: true },
        ],
        images: [
          "/__l5e/assets-v1/559cfe86-3387-41f3-9eb2-a5a03c362c4f/storyline-stakeholder-communication.png",
          storylineStakeholder.url,
        ],
      },
      {
        name: "AI Literacy for Instructional Design",
        links: [
          { label: "View Course", href: "https://taylor45.github.io/Storyline/" },
          { label: "Design Process", href: "https://docs.google.com/document/d/1Ayug1LSljBaM4HMgiFX-3Pg5vtfJzTMVeqQ8qWrTR0Y/edit?usp=sharing", preview: true },
        ],
        images: [
          "/__l5e/assets-v1/f8a711a1-f971-4a5d-90a1-eb7fa32d4106/storyline-ai-literacy.png",
          storylineAiLiteracy.url,
        ],
      },
    ],
  },
  {
    title: "Genially & Interactive eBook",
    blurb:
      "Highly visual interactive experiences and downloadable eBooks that pair storytelling with practice.",
    projects: [
      {
        name: "ADDIE Instructional Design Model",
        links: [
          { label: "Design Process", href: "https://docs.google.com/document/d/1Ayug1LSljBaM4HMgiFX-3Pg5vtfJzTMVeqQ8qWrTR0Y/edit?usp=sharing", preview: true },
          { label: "View Course", href: "https://view.genially.com/6941bdb422107ef3f6f9798b" },
        ],
        images: [geniallyGuide1.url, geniallyGuide2.url],
      },
      {
        name: "Digital eBook",
        links: [
          { label: "VIEW EBOOK", href: "https://read.bookcreator.com/QPcUKyNvDVPMQ5RGGKJAjxWhTP12/JDaqxZtXT6mXbh1IHZoWkQ" },
          { label: "View PDF", href: "https://drive.google.com/file/d/13Fl8FXCEDHT1Nkhhnn132qx0_6qpq7Bg/view?usp=sharing" },
        ],
        images: [digitalEbook1.url],
      },
    ],
  },
  {
    title: "iSpring & Interactive eBook ",
    blurb:
      "Rapid-authored PowerPoint-to-SCORM courses with quizzing, narration, and mobile-ready playback.",
    projects: [
      {
        name: "Onboarding Short Course",
        links: [
          { label: "Design Process", href: "https://docs.google.com/document/d/119C3v8BY-gFXwdF89U8fu9tp6kT-b0idIahm7uO7evs/edit?usp=sharing" },
          { label: "View Course", href: "https://taylor45.github.io/Onboarding-Course/" },
        ],
        images: [ispringCourse1.url, ispringCourse2.url],
      },
      {
        name: "Train the Trainer Guide",
        links: [{ label: "View Course", href: "https://taylor45.github.io/Interactive-Slides/" }],
        images: [ispringSafety1.url],
      },
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
            <span className="inline-block rounded-full border border-brand-sky px-4 py-1 text-[11px] uppercase tracking-[0.2em] text-brand-sky">
              Development &amp; AI
            </span>
            <h1 className="mt-5 text-4xl sm:text-5xl">eLearning Development</h1>
            <p className="mt-4 max-w-2xl text-muted-foreground">
              A selection of courses, interactive experiences, and SCORM packages
              designed and developed end to end.
            </p>
          </div>
        </section>

        <div className="surface-hero">
          <div className="h-0.5 w-full bg-foreground" />
        </div>

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

        {sections.map((section) => (
          <section key={section.title}>
            <div className="surface-band border-y border-foreground/10">
              <div className="mx-auto max-w-6xl px-5 py-7">
                <h2 className="font-body text-xl font-bold sm:text-2xl">{section.title}</h2>
                <p className="mt-2 max-w-2xl text-sm text-muted-foreground">
                  {section.blurb}
                </p>
              </div>
            </div>
            <div className="bg-surface-light">
              <div className="mx-auto max-w-6xl px-5 py-12">
                <div className="grid gap-8 sm:grid-cols-2 lg:gap-10">
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
                      <div className="mt-auto flex w-full min-w-0 flex-col items-stretch justify-end gap-3 lg:flex-row lg:flex-wrap lg:items-center">
                        {project.links.map((link, li) => (
                          <Button
                            asChild
                            variant="outline"
                            key={link.label}
                            className={`h-auto min-h-11 w-full min-w-0 justify-between whitespace-normal rounded-sm border-2 border-accent px-4 py-2.5 text-xs uppercase tracking-normal shadow-none hover:bg-accent hover:text-accent-foreground focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-card lg:w-auto lg:justify-center lg:px-5 ${
                              li > 0 ? "bg-accent text-accent-foreground hover:opacity-90" : "bg-transparent text-card-foreground"
                            } ${li === 0 && project.links.length > 1 ? "lg:mr-auto" : ""}`}
                          >
                            <a href={link.href} target="_blank" rel="noreferrer">
                              <span className="min-w-0 break-words">{link.label}</span>
                              <span className="shrink-0" aria-hidden="true">→</span>
                            </a>
                          </Button>
                        ))}
                      </div>
                    </div>
                  </article>
                ))}
                </div>
              </div>
            </div>
          </section>
        ))}
      </main>
      <SiteFooter />
    </div>
  );
}
