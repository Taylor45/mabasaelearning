import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, ArrowUpRight, Lightbulb, Target, TrendingUp } from "lucide-react";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import appImg from "@/assets/uxui/app.jpg.asset.json";
import wire1 from "@/assets/uxui/wire1.png.asset.json";
import wire2 from "@/assets/uxui/wire2.png.asset.json";
import wire3 from "@/assets/uxui/wire3.png.asset.json";
import wire4 from "@/assets/uxui/wire4.png.asset.json";

export const Route = createFileRoute("/case-study-coding-basics")({
  head: () => ({
    meta: [
      { title: "Case Study: Coding Basics for Instructional Design | Mabasa eLearning" },
      {
        name: "description",
        content:
          "A UX research and design case study: how a thoughtfully designed learning app makes coding fundamentals approachable for instructional designers.",
      },
      { property: "og:title", content: "Case Study: Coding Basics for Instructional Design | Mabasa eLearning" },
      {
        property: "og:description",
        content:
          "A UX research and design case study: how a thoughtfully designed learning app makes coding fundamentals approachable for instructional designers.",
      },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: CaseStudyPage,
});

const wireframes = [
  { src: wire1.url, alt: "High-fidelity wireframe — screen 1" },
  { src: wire2.url, alt: "High-fidelity wireframe — screen 2" },
  { src: wire3.url, alt: "High-fidelity wireframe — screen 3" },
  { src: wire4.url, alt: "High-fidelity wireframe — screen 4" },
];

function CaseStudyPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <section className="surface-hero">
          <div className="mx-auto max-w-6xl px-5 py-20">
            <Link
              to="/web-design-ux-ui"
              className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-brand-sky transition-colors hover:text-foreground"
            >
              <ArrowLeft className="h-4 w-4" aria-hidden="true" />
              Back to Web Design / UX &amp; UI
            </Link>
            <h1 className="mt-5 text-4xl font-bold leading-tight sm:text-5xl">
              Coding Basics for Instructional Design
            </h1>
            <p className="mt-5 max-w-2xl text-muted-foreground">
              A UX research and design case study exploring how coding fundamentals can be taught
              to instructional designers through a thoughtfully designed learning app.
            </p>
          </div>
        </section>

        <div className="surface-hero">
          <div className="h-0.5 w-full bg-foreground" />
        </div>

        <section className="bg-surface-light">
          <div className="mx-auto max-w-6xl px-5 py-16">
            <div className="grid gap-6 lg:grid-cols-3">
              <article className="rounded-2xl border border-surface-light-foreground/12 bg-surface-light p-7 shadow-[0_2px_10px_rgba(0,8,30,0.06)]">
                <Target className="h-10 w-10 text-accent" strokeWidth={1.5} aria-hidden="true" />
                <h2 className="mt-4 font-inter text-xl font-bold text-surface-light-foreground">The Challenge</h2>
                <p className="mt-3 text-[0.95rem] leading-relaxed text-surface-light-foreground/75">
                  Instructional designers increasingly work alongside developers, yet most have never
                  been taught how code actually works. Existing coding courses are built for software
                  engineers — dense, jargon-heavy, and disconnected from learning design. The result:
                  designers struggle to scope technical solutions, communicate with development teams,
                  or prototype interactive learning themselves.
                </p>
              </article>
              <article className="rounded-2xl border border-surface-light-foreground/12 bg-surface-light p-7 shadow-[0_2px_10px_rgba(0,8,30,0.06)]">
                <Lightbulb className="h-10 w-10 text-accent" strokeWidth={1.5} aria-hidden="true" />
                <h2 className="mt-4 font-inter text-xl font-bold text-surface-light-foreground">My Approach</h2>
                <p className="mt-3 text-[0.95rem] leading-relaxed text-surface-light-foreground/75">
                  I began with UX research — mapping the instructional designer's journey, identifying
                  where coding concepts cause the most friction, and reframing each concept through a
                  learning-design lens. From there I designed the app in Figma: wireframes first, then
                  high-fidelity screens with a clear visual hierarchy, plain-language explanations, and
                  bite-sized lessons that build confidence progressively.
                </p>
              </article>
              <article className="rounded-2xl border border-surface-light-foreground/12 bg-surface-light p-7 shadow-[0_2px_10px_rgba(0,8,30,0.06)]">
                <TrendingUp className="h-10 w-10 text-accent" strokeWidth={1.5} aria-hidden="true" />
                <h2 className="mt-4 font-inter text-xl font-bold text-surface-light-foreground">The Outcome</h2>
                <p className="mt-3 text-[0.95rem] leading-relaxed text-surface-light-foreground/75">
                  A working learning app that teaches coding fundamentals in the language instructional
                  designers already speak. Concepts like variables, logic and structure are anchored to
                  familiar course-design scenarios, so learners apply what they learn immediately — in
                  their storyboards, their authoring tools, and their conversations with developers.
                </p>
              </article>
            </div>
          </div>
        </section>

        <section>
          <div className="surface-band border-y border-foreground/10">
            <div className="mx-auto max-w-6xl px-5 py-7">
              <h2 className="font-inter text-xl font-bold sm:text-2xl">The Design</h2>
              <p className="mt-2 max-w-2xl text-sm text-muted-foreground">
                High-fidelity wireframes and the final app interface, designed in Figma.
              </p>
            </div>
          </div>
          <div className="bg-surface-light">
            <div className="mx-auto max-w-6xl px-5 py-12">
              <div className="grid gap-6 sm:grid-cols-2">
                <figure className="overflow-hidden rounded-2xl border border-surface-light-foreground/12 shadow-[0_2px_10px_rgba(0,8,30,0.06)] sm:col-span-2">
                  <img
                    src={appImg.url}
                    alt="Coding Basics for Instructional Design app interface"
                    loading="lazy"
                    className="block h-auto w-full"
                  />
                </figure>
                {wireframes.map((wire) => (
                  <figure
                    key={wire.src}
                    className="overflow-hidden rounded-2xl border border-surface-light-foreground/12 shadow-[0_2px_10px_rgba(0,8,30,0.06)]"
                  >
                    <img src={wire.src} alt={wire.alt} loading="lazy" className="block h-auto w-full" />
                  </figure>
                ))}
              </div>
              <div className="mt-10 flex flex-wrap gap-4">
                <a
                  href="https://docs.google.com/document/d/1jGBqk06KW8Ewx_I1Rl9H4BVB8nDX085YuJKeocU8X-Q/view"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-sm bg-accent px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.15em] text-accent-foreground transition-colors hover:bg-accent/85 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
                >
                  UX Research Document
                  <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                </a>
                <a
                  href="https://sites.google.com/view/mabasaelearning/elearning-development/elearning-multimedia"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-sm border-2 border-accent px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.15em] text-surface-light-foreground transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
                >
                  View the App
                  <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
