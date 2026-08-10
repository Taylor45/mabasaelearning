import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import portrait from "@/assets/melvon-portrait.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Melvon Mabasa | eLearning & Instructional Design Portfolio" },
      {
        name: "description",
        content:
          "Portfolio of Melvon Mabasa — instructional design, eLearning development, prompt engineering, UX/UI and AI in learning.",
      },
      { property: "og:title", content: "Melvon Mabasa | eLearning Portfolio" },
      {
        property: "og:description",
        content:
          "Instructional design, eLearning development, multimedia and AI in learning.",
      },
    ],
  }),
  component: Index,
});

const specialties = [
  {
    title: "Prompt engineering",
    copy: "Designing prompts and AI workflows that speed up content creation without losing instructional quality.",
  },
  {
    title: "Instructional Design",
    copy: "Needs analysis, learning objectives, storyboards and assessment strategy grounded in adult learning theory.",
  },
  {
    title: "eLearning Development",
    copy: "Storyline, Genially and iSpring builds packaged as SCORM and tested across LMS platforms.",
  },
  {
    title: "Web design / UX & UI",
    copy: "Clean, accessible interfaces and learning portals that make content easy to navigate.",
  },
  {
    title: "eLearning Multimedia",
    copy: "Graphics, narration, video and interactions that carry the message rather than decorate it.",
  },
  {
    title: "AI In eLearning",
    copy: "Applying AI tooling to authoring, personalisation and learner support at scale.",
  },
];

function Index() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <section className="surface-hero">
          <div className="mx-auto grid max-w-6xl items-center gap-14 px-5 py-24 md:grid-cols-2">
            <div>
              <p className="text-xs uppercase tracking-[0.35em] text-muted-foreground">
                Portfolio
              </p>
              <h1 className="mt-5 text-5xl leading-tight sm:text-6xl">
                Melvon Mabasa
              </h1>
              <p className="mt-5 max-w-md text-lg text-muted-foreground">
                Instructional Designer and eLearning Developer crafting learning
                experiences that people actually finish.
              </p>
              <div className="mt-9 flex flex-col gap-3 sm:max-w-xs">
                <a
                  href="https://www.linkedin.com"
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-sm border border-border px-6 py-3 text-center font-display transition-colors hover:bg-primary hover:text-primary-foreground"
                >
                  Let`s Connect: LinkedIn
                </a>
                <a
                  href="#"
                  className="rounded-sm bg-primary px-6 py-3 text-center font-display text-primary-foreground transition-opacity hover:opacity-90"
                >
                  View Resume
                </a>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="rounded-full border border-border p-3">
                <div className="rounded-full border border-border p-2">
                  <img
                    src={portrait}
                    alt="Portrait of Melvon Mabasa"
                    className="h-64 w-64 rounded-full object-cover sm:h-80 sm:w-80"
                    width={320}
                    height={320}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-ink py-6" />

        <section className="surface-band">
          <div className="mx-auto max-w-6xl px-5 py-20 text-center">
            <h2 className="text-3xl sm:text-4xl">What I do</h2>
            <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
              From analysis to a published SCORM package — design, build, and
              multimedia handled in one place.
            </p>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-5 py-20">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {specialties.map((item) => (
              <Link
                key={item.title}
                to="/elearning-development"
                className="group rounded-sm border border-border bg-card p-7 shadow-elevated transition-colors hover:border-accent"
              >
                <h3 className="text-xl group-hover:text-accent-foreground">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm text-muted-foreground">{item.copy}</p>
                <span className="mt-6 inline-block text-xs uppercase tracking-[0.2em] text-muted-foreground">
                  View work &rarr;
                </span>
              </Link>
            ))}
          </div>
        </section>

        <section className="surface-hero">
          <div className="mx-auto max-w-3xl px-5 py-20 text-center">
            <h2 className="text-3xl sm:text-4xl">Have a project in mind?</h2>
            <p className="mt-4 text-muted-foreground">
              Let`s talk about your learners, your content, and the outcome you need.
            </p>
            <Link
              to="/contact"
              className="mt-8 inline-block rounded-sm bg-primary px-8 py-3 font-display text-primary-foreground transition-opacity hover:opacity-90"
            >
              Get in touch
            </Link>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
