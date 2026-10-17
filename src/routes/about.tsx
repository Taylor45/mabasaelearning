import { createFileRoute } from "@tanstack/react-router";
import { Puzzle, BookOpenCheck, BarChart3, Accessibility, Handshake } from "lucide-react";
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

const elearningTech = [
  "xAPI & CMI5 development and integration",
  "SCORM and LMS communication",
  "Learning Record Store (LRS) integrations",
  "Custom eLearning and LMS integrations",
  "Learning data and API development",
  "JavaScript-based course functionality",
];

const softwareTech = [
  "Custom web applications and APIs",
  "Database design and integration",
  "Third-party API integrations",
  "Custom tools and automation",
  "Software debugging and technical troubleshooting",
  "Cloud-based application development",
];

function AboutPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        {/* Hero */}
        <section className="surface-hero">
          <div className="mx-auto max-w-6xl px-5 py-20 text-center">
            <span className="inline-block rounded-full border border-brand-sky px-4 py-1 text-[11px] uppercase tracking-[0.2em] text-brand-sky">
              About Me
            </span>
            <h1 className="mt-5 text-4xl font-bold leading-tight sm:text-5xl">
              Never stop <span className="text-brand-cyan">learning</span>
            </h1>
            <p className="mx-auto mt-5 max-w-2xl text-muted-foreground">
              With nearly three years plus of experience in the field of learning and
              development, I am blessed to work in a career that I truly love and strive to
              improve. Living a, "Never stop learning," lifestyle, I do what I can to not only
              better myself, but the principles, models, and practices of this thing we call
              instructional design.
            </p>
          </div>
        </section>

        <div className="surface-hero">
          <div className="h-0.5 w-full bg-foreground" />
        </div>

        {/* eLearning Development + strengths */}
        <section className="bg-surface-light">
          <div className="mx-auto max-w-6xl px-5 py-16">
            <h2 className="font-inter text-center text-xl font-bold text-surface-light-foreground sm:text-2xl">
              eLearning Development
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-center text-[0.95rem] leading-relaxed text-surface-light-foreground/75">
              Tap into our creative and technical expertise. Our team delivers high-impact
              courses and interactive experiences that grab attention and drive results.
            </p>
            <div className="mt-12 grid gap-x-10 gap-y-12 sm:grid-cols-3">
              {strengths.map((item) => (
                <article
                  key={item.title}
                  className="flex min-w-0 flex-col items-center text-center"
                >
                  <span
                    aria-hidden="true"
                    className="flex h-32 w-32 items-center justify-center rounded-full border border-accent/25 bg-accent/10 shadow-[0_10px_30px_-12px_rgba(0,80,200,0.35)]"
                  >
                    <item.icon
                      aria-hidden="true"
                      strokeWidth={1.5}
                      className="h-16 w-16 text-accent"
                    />
                  </span>
                  <h3 className="font-inter mt-6 text-lg font-bold text-surface-light-foreground">
                    {item.title}
                  </h3>
                  <p className="mt-3 max-w-64 text-sm leading-relaxed text-surface-light-foreground/75">
                    {item.copy}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Bridge the gaps */}
        <section className="surface-band">
          <div className="mx-auto max-w-6xl px-5 py-16 text-center">
            <h2 className="font-inter text-xl font-bold text-white sm:text-2xl">
              I aim to bridge the following gaps
            </h2>
            <p className="mx-auto mt-2 max-w-2xl text-sm text-muted-foreground">
              Instructional design on one side, the technology underneath it on the other.
            </p>
          </div>
        </section>
        <section className="surface-hero">
          <div className="mx-auto max-w-6xl px-5 py-16">
            <div className="mx-auto max-w-3xl text-center">
              <h3 className="font-inter text-xl font-bold text-white sm:text-2xl">
                Software Engineering &amp; eLearning Technology
              </h3>
              <p className="mt-4 text-[0.95rem] leading-relaxed text-muted-foreground">
                Sometimes an eLearning project requires more than authoring tools. With
                extensive software engineering experience, we can develop the technology behind
                your learning experience—or help solve a technical challenge in an existing
                application.
              </p>
              <p className="mt-4 text-[0.95rem] leading-relaxed text-muted-foreground">
                Our expertise includes both <strong>eLearning-specific technologies</strong> and{" "}
                <strong>general software development</strong>, allowing us to bridge the gap
                between instructional design and the underlying technology.
              </p>
            </div>
            <div className="mt-10 grid gap-6 md:grid-cols-2">
              <article className="rounded-2xl border border-surface-light-foreground/12 bg-surface-light p-7 shadow-[0_2px_10px_rgba(0,8,30,0.06)]">
                <h4 className="font-inter text-lg font-bold text-surface-light-foreground">
                  eLearning Technology
                </h4>
                <ul className="mt-4 space-y-2 text-[0.95rem] leading-relaxed text-surface-light-foreground/75">
                  {elearningTech.map((item) => (
                    <li key={item} className="flex gap-3">
                      <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-cyan" />
                      {item}
                    </li>
                  ))}
                </ul>
              </article>
              <article className="rounded-2xl border border-surface-light-foreground/12 bg-surface-light p-7 shadow-[0_2px_10px_rgba(0,8,30,0.06)]">
                <h4 className="font-inter text-lg font-bold text-surface-light-foreground">
                  Software Development
                </h4>
                <ul className="mt-4 space-y-2 text-[0.95rem] leading-relaxed text-surface-light-foreground/75">
                  {softwareTech.map((item) => (
                    <li key={item} className="flex gap-3">
                      <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-cyan" />
                      {item}
                    </li>
                  ))}
                </ul>
              </article>
            </div>
          </div>
        </section>

        {/* Accessibility & UIX */}
        <section className="bg-surface-light">
          <div className="mx-auto max-w-6xl px-5 pb-16">
            <article className="rounded-2xl border border-surface-light-foreground/12 bg-surface-light p-7 shadow-[0_2px_10px_rgba(0,8,30,0.06)] sm:p-9">
              <div className="flex items-center gap-3">
                <Accessibility aria-hidden="true" className="h-7 w-7 text-brand-sky" />
                <h3 className="font-inter text-xl font-bold text-surface-light-foreground sm:text-2xl">
                  Accessibility &amp; UIX
                </h3>
              </div>
              <p className="mt-4 text-[0.95rem] leading-relaxed text-surface-light-foreground/75">
                <strong>
                  Accessibility isn't just a requirement for some levels of training; it helps
                  ALL learners/users in the final deliverables.
                </strong>{" "}
                While certain entities mandate accessibility-driven materials, experienced
                instructional designers know that designing with accessibility in mind promotes
                easier learning and higher engagement among typical learners/users as well.
                Elements such as sound visual design (color, font, and design), closed captions
                paired with audio, and multiple modalities help everyone.
              </p>
            </article>
          </div>
        </section>

        {/* My Clients */}
        <section className="bg-surface-light">
          <div className="mx-auto max-w-6xl px-5 pb-20">
            <article className="rounded-2xl border border-surface-light-foreground/12 bg-surface-light p-7 shadow-[0_2px_10px_rgba(0,8,30,0.06)] sm:p-9">
              <div className="flex items-center gap-3">
                <Handshake aria-hidden="true" className="h-7 w-7 text-brand-sky" />
                <h3 className="font-inter text-xl font-bold text-surface-light-foreground sm:text-2xl">
                  My Clients
                </h3>
              </div>
              <p className="mt-4 text-[0.95rem] leading-relaxed text-surface-light-foreground/75">
                I have been honored to work with a variety of Clients over the years, some
                long-term, some short-term. But each has allowed me to grow as a designer and
                consultant as well as providing me the opportunity to work alongside their
                leaders to design, develop, and implement training programs and individual
                courses alike.
              </p>
            </article>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
