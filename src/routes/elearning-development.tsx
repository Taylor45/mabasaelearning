import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { Button } from "@/components/ui/button";
import { DocumentPreviewButton } from "@/components/DocumentPreview";
import { solidBrandStates } from "@/lib/button-states";
import storylineStakeholder from "@/assets/storyline-stakeholder-communication.png.asset.json";
import storylineAiLiteracy from "@/assets/storyline-ai-literacy.png.asset.json";
import geniallyGuide1 from "@/assets/genially-guide-1.png.asset.json";
import geniallyGuide2 from "@/assets/genially-guide-2.png.asset.json";
import digitalEbook1 from "@/assets/digital-ebook-1.png.asset.json";
import ispringCourse1 from "@/assets/ispring-course-1.png.asset.json";
import ispringCourse2 from "@/assets/ispring-course-2.png.asset.json";
import ispringSafety1 from "@/assets/ispring-safety-1.png.asset.json";
import elearningBg from "@/assets/elearning-bg.jpg.asset.json";

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
          { label: "Design Process", href: "https://docs.google.com/document/d/119C3v8BY-gFXwdF89U8fu9tp6kT-b0idIahm7uO7evs/edit?usp=sharing", preview: true },
          { label: "View Course", href: "https://view.genially.com/6941bdb422107ef3f6f9798b" },
        ],
        images: [geniallyGuide1.url, geniallyGuide2.url],
      },
      {
        name: "Digital eBook",
        links: [
          { label: "VIEW EBOOK", href: "https://read.bookcreator.com/QPcUKyNvDVPMQ5RGGKJAjxWhTP12/JDaqxZtXT6mXbh1IHZoWkQ" },
          { label: "View PDF", href: "https://drive.google.com/file/d/13Fl8FXCEDHT1Nkhhnn132qx0_6qpq7Bg/view?usp=sharing", preview: true },
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
          { label: "Design Process", href: "https://taylor45.github.io/Onboarding-Course-Storyboard/" },
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
          <div className="mx-auto max-w-6xl px-5 pt-20 pb-24 sm:pb-28">
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

        <section className="flow-root relative bg-surface-light">
          <img
            src={elearningBg.url}
            alt=""
            aria-hidden="true"
            loading="lazy"
            className="absolute inset-0 h-full w-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-background/60" />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-[linear-gradient(115deg,oklch(0.158_0.08_263.1)_0%,oklch(0.187_0.09_262.5)_45%,oklch(0.375_0.15_260)_100%)] [mask-image:linear-gradient(to_bottom,black_0%,black_10%,transparent_100%)]"
          />
          <div className="relative mx-auto -mt-14 max-w-6xl px-5 pb-16 sm:-mt-16">
            <div

              aria-hidden="true"
              className="pointer-events-none absolute -inset-x-6 -top-2 bottom-8 rounded-[3rem] bg-[radial-gradient(ellipse_115%_95%_at_50%_58%,rgba(2,6,23,0.55),rgba(2,6,23,0.34)_52%,rgba(2,6,23,0)_88%)] blur-[10px]"
            />
            <div className="relative grid gap-10 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">

              {blocks.map((block) => (
                <article key={block.title} className="flex flex-col">
                  <div className="flex h-full flex-col items-center rounded-2xl bg-surface-light px-6 py-7 text-center shadow-[0_20px_44px_-16px_rgba(0,8,30,0.4),0_8px_18px_-10px_rgba(0,8,30,0.22)] transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_30px_60px_-18px_rgba(0,8,30,0.5),0_12px_26px_-12px_rgba(0,8,30,0.3)]">
                    <h2 className="font-inter text-xl font-bold text-surface-light-foreground">
                      {block.title}
                    </h2>
                    <p className="mt-4 flex-1 text-[0.95rem] leading-relaxed text-surface-light-foreground/75">
                      {block.copy}
                    </p>
                    <div className="mt-5 flex flex-wrap justify-center gap-2">
                      {block.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full border border-surface-light-foreground/20 bg-surface-light-foreground/5 px-3 py-1 text-[0.7rem] font-semibold text-surface-light-foreground/80 shadow-[0_1px_2px_rgba(0,8,30,0.08)]"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
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
                <h2 className="font-inter text-xl font-bold sm:text-2xl">{section.title}</h2>
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
                      <h3 className="font-inter text-lg leading-snug">{project.name}</h3>
                      <div className="mt-auto flex w-full min-w-0 flex-col items-stretch justify-end gap-3 lg:flex-row lg:flex-wrap lg:items-center">
                        {project.links.map((link, li) => {
                          const buttonClasses = `h-auto min-h-11 w-full min-w-0 justify-between whitespace-normal rounded-sm border-2 px-4 py-2.5 text-xs uppercase tracking-normal shadow-none lg:w-auto lg:justify-center lg:px-5 ${
                            li > 0
                              ? `border-btn-primary bg-btn-primary text-btn-primary-foreground ${solidBrandStates}`
                              : "border-btn-primary bg-transparent text-card-foreground hover:bg-btn-primary hover:text-btn-primary-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-btn-primary focus-visible:ring-offset-2 focus-visible:ring-offset-card"
                          } ${li === 0 && project.links.length > 1 ? "lg:mr-auto" : ""}`;
                          const inner = (
                            <>
                              <span className="min-w-0 break-words">{link.label}</span>
                              <span className="shrink-0" aria-hidden="true">→</span>
                            </>
                          );
                          return link.preview ? (
                            <DocumentPreviewButton
                              key={link.label}
                              href={link.href}
                              title={`${link.label} — ${project.name}`}
                              className={buttonClasses}
                            >
                              {inner}
                            </DocumentPreviewButton>
                          ) : (
                            <Button
                              asChild
                              variant="outline"
                              key={link.label}
                              className={buttonClasses}
                            >
                              <a href={link.href} target="_blank" rel="noreferrer">
                                {inner}
                              </a>
                            </Button>
                          );
                        })}
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
