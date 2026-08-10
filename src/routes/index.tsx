import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import portrait from "@/assets/melvon-portrait.png";
import illPrompt from "@/assets/ill-prompt-engineering.png";
import illDesign from "@/assets/ill-instructional-design.png";
import illDev from "@/assets/ill-elearning-development.png";
import illWeb from "@/assets/ill-web-design.png";
import illMedia from "@/assets/ill-multimedia.png";
import illAi from "@/assets/ill-ai-elearning.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Mabasa | eLearning & Instructional Design Portfolio" },
      {
        name: "description",
        content:
          "Portfolio of  Mabasa — instructional design, eLearning development, prompt engineering, UX/UI and AI in learning.",
      },
      { property: "og:title", content: "Mabasa | eLearning & Instructional Design Portfolio" },
      {
        property: "og:description",
        content:
          "Portfolio of  Mabasa — instructional design, eLearning development, prompt engineering, UX/UI and AI in learning.",
      },
    ],
  }),
  component: Index,
});

const categoryOne = [
  { title: "Prompt engineering", img: illPrompt },
  { title: "Instructional Design", img: illDesign },
  { title: "eLearning Development", img: illDev },
];

const categoryTwo = [
  { title: "Web design/UX & UI", img: illWeb },
  { title: "eLearning Multimedia", img: illMedia },
  { title: "AI In eLearning", img: illAi },
];

const authoringTools = [
  { short: "H5", name: "H5P", tag: "Interactive content" },
  { short: "A3", name: "Articulate 360", tag: "Authoring" },
  { short: "Ca", name: "Camtasia", tag: "Video" },
  { short: "Ai", name: "Adobe Suite", tag: "Graphics" },
  { short: "Ge", name: "Genially", tag: "Interactions" },
  { short: "Fi", name: "Figma", tag: "UX / UI" },
];

const lmsPlatforms = [
  { short: "Mo", name: "Moodle", tag: "LMS" },
  { short: "Ca", name: "Canvas", tag: "LMS" },
  { short: "Bb", name: "Blackboard Ultra", tag: "LMS" },
  { short: "No", name: "NovaEd", tag: "LMS" },
  { short: "Br", name: "Brightspace", tag: "LMS" },
  { short: "GC", name: "Google Classroom", tag: "LMS" },
];

const addieStages = [
  {
    stage: "Stage 1 · Analysis",
    title: "Understanding the Need",
    copy: "We unpack the learning gap — who the learners are, what they know, and what success looks like — then audit content to flag what becomes video, H5P, or text.",
    tags: ["Needs assessment", "Audience profile", "Content audit"],
  },
  {
    stage: "Stage 2 · Design",
    title: "Storyboarding the Experience",
    copy: "Every objective is mapped to an interaction, visual, or media type. Storyboards lock pacing, logic, and look and feel before development time is spent.",
    tags: ["Storyboards", "Interaction mapping", "Visual style guide"],
  },
  {
    stage: "Stage 3 · Development",
    title: "Building the Multimedia",
    copy: "The hands-on build: narrated video in Camtasia, branching scenarios in Articulate 360 and H5P, motion and graphics in Adobe Suite — tested against the storyboard.",
    tags: ["Video production", "H5P / Articulate builds", "Motion & graphics"],
  },
  {
    stage: "Stage 4 · Implementation",
    title: "Launching in Your LMS",
    copy: "Assets are packaged into your LMS — typically Blackboard Ultra — with SCORM/xAPI tracking, then piloted with a small group before full rollout.",
    tags: ["LMS integration", "SCORM / xAPI setup", "Pilot testing"],
  },
  {
    stage: "Stage 5 · Evaluation",
    title: "Measuring What Landed",
    copy: "We review completion, engagement, and quiz data against the Kirkpatrick levels set in Stage 1 — findings feed straight into a revision plan.",
    tags: ["Learning analytics", "Kirkpatrick evaluation", "Iteration plan"],
  },
];

function CategoryBand({ label, highlight }: { label: string; highlight: string }) {
  return (
    <section className="surface-band">
      <div className="mx-auto max-w-6xl px-5 py-16 text-center">
        <h2 className="text-3xl font-semibold sm:text-4xl">
          {label} <span className="text-brand-cyan">{highlight}</span>
        </h2>
      </div>
    </section>
  );
}

function CardRow({ items }: { items: { title: string; img: string }[] }) {
  return (
    <section className="bg-surface-light">
      <div className="mx-auto grid max-w-6xl gap-12 px-5 py-16 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((item) => (
          <div key={item.title} className="flex flex-col items-center">
            <img
              src={item.img}
              alt={item.title}
              loading="lazy"
              className="h-56 w-full object-contain"
              width={480}
              height={480}
            />
            <Link
              to="/elearning-development"
              className="mt-6 w-full rounded-sm bg-[var(--gradient-cta,transparent)] border border-transparent bg-card px-6 py-2.5 text-center font-display text-card-foreground transition-opacity hover:opacity-90"
            >
              {item.title}
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}

function ToolColumn({
  label,
  items,
}: {
  label: string;
  items: { short: string; name: string; tag: string }[];
}) {
  return (
    <div>
      <p className="text-center text-xs uppercase tracking-[0.3em] text-muted-foreground">
        {label}
      </p>
      <div className="mt-6 grid gap-4 sm:grid-cols-3">
        {items.map((tool) => (
          <div
            key={tool.name}
            className="flex flex-col items-center rounded-xl bg-surface-light px-4 py-6 text-surface-light-foreground"
          >
            <span className="flex h-14 w-14 items-center justify-center rounded-xl bg-accent font-display text-lg text-accent-foreground">
              {tool.short}
            </span>
            <p className="mt-3 text-center text-sm font-semibold">{tool.name}</p>
            <span className="mt-2 rounded-full bg-accent/15 px-3 py-0.5 text-[10px] uppercase tracking-[0.15em]">
              {tool.tag}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

function Index() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        {/* Hero */}
        <section className="surface-hero">
          <div className="mx-auto grid max-w-6xl items-center gap-14 px-5 py-20 md:grid-cols-[1.35fr_1fr]">
            <div>
              <span className="inline-block rounded-full border border-border px-4 py-1 text-[11px] font-semibold uppercase tracking-[0.2em]">
                About me
              </span>
              <h1 className="mt-5 text-4xl font-bold leading-tight sm:text-5xl">
                Hi, I&apos;m Bruce Mabasa.
              </h1>
              <p className="mt-5 max-w-xl text-muted-foreground">
                I&apos;m passionate about transforming the way people learn. I believe
                learning should be{" "}
                <strong className="font-semibold text-foreground">
                  evolving, inclusive, impactful, interactive
                </strong>
                , and most importantly,{" "}
                <strong className="font-semibold text-foreground">fun</strong>.
              </p>
              <p className="mt-4 max-w-xl text-muted-foreground">
                I stand at the intersection of{" "}
                <span className="font-semibold text-brand-sky">Education</span>,{" "}
                <span className="font-semibold text-brand-sky">Creativity</span>, and{" "}
                <span className="font-semibold text-brand-sky">Technology</span>.
              </p>
              <ul className="mt-6 space-y-3 text-muted-foreground">
                {[
                  ["Mission:", "To craft engaging and visually compelling user experiences that enhance digital education and foster meaningful skills development."],
                  ["Vision:", "To shape the future of learning through innovative and human-centered design."],
                  ["Values:", "Creativity, innovation, inclusivity, continuous learning, and design excellence."],
                ].map(([label, copy]) => (
                  <li key={label} className="flex gap-3">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-cyan" />
                    <span>
                      <strong className="font-semibold text-foreground">{label}</strong>{" "}
                      {copy}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col items-center">
              <div className="rounded-full border-2 border-foreground/80 p-3">
                <div className="rounded-full border border-foreground/50 p-2">
                  <img
                    src={portrait}
                    alt="Portrait of Bruce Mabasa"
                    className="h-60 w-60 rounded-full object-cover sm:h-72 sm:w-72"
                    width={288}
                    height={288}
                  />
                </div>
              </div>
              <div className="mt-10 flex w-full max-w-sm flex-col gap-4">
                <a
                  href="https://www.linkedin.com"
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-sm border border-foreground/70 px-6 py-2.5 text-center font-display transition-colors hover:bg-primary hover:text-primary-foreground"
                >
                  Let`s Connect: LinkedIn
                </a>
                <a
                  href="#"
                  className="rounded-sm bg-primary px-6 py-2.5 text-center font-display text-primary-foreground transition-opacity hover:opacity-90"
                >
                  View Resume
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Thin rule */}
        <div className="bg-surface-light">
          <div className="mx-auto h-0.5 max-w-6xl bg-accent" />
        </div>

        {/* Stat band */}
        <section className="bg-ink">
          <div className="mx-auto flex max-w-6xl flex-wrap items-center gap-x-10 gap-y-4 px-5 py-10">
            {[
              ["01", "3+", "Years experience"],
              ["02", "Engaging", "Highly engaging course"],
              ["03", "Impactful", "Learning experiences"],
            ].map(([num, big, small]) => (
              <div key={num} className="flex items-baseline gap-2">
                <span className="text-[10px] tracking-[0.2em] text-brand-sky">{num}</span>
                <span className="text-lg font-bold">{big}</span>
                <span className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                  {small}
                </span>
              </div>
            ))}
            <span className="ml-auto text-sm text-muted-foreground">
              — Instructional Designer
            </span>
          </div>
        </section>

        <CategoryBand label="Category 1:" highlight="Design & Strategy" />
        <CardRow items={categoryOne} />

        <CategoryBand label="Category 2:" highlight="Development & AI" />
        <CardRow items={categoryTwo} />

        {/* Tools & LMS */}
        <section className="surface-band">
          <div className="mx-auto max-w-6xl px-5 py-16 text-center">
            <h2 className="text-3xl font-semibold sm:text-4xl">
              eLearning Tools &amp;{" "}
              <span className="text-brand-cyan">Learning Management Systems</span>
            </h2>
          </div>
        </section>
        <section className="surface-hero">
          <div className="mx-auto grid max-w-6xl gap-12 px-5 py-16 lg:grid-cols-2">
            <ToolColumn label="Authoring & design tools" items={authoringTools} />
            <ToolColumn label="Learning management systems" items={lmsPlatforms} />
          </div>
        </section>

        <div className="surface-hero">
          <div className="mx-auto h-0.5 max-w-6xl bg-accent" />
        </div>

        {/* ADDIE methodology */}
        <section className="surface-hero">
          <div className="mx-auto max-w-6xl px-5 py-20">
            <div className="text-center">
              <span className="inline-block rounded-full border border-brand-sky px-4 py-1 text-[11px] uppercase tracking-[0.2em] text-brand-sky">
                Methodology
              </span>
              <h2 className="mt-6 text-4xl font-bold sm:text-5xl">
                How your course gets built
                <br />
                <span className="text-brand-cyan">the ADDIE</span>{" "}
                <span className="text-brand-sky">way</span>
              </h2>
              <p className="mx-auto mt-5 max-w-xl text-muted-foreground">
                Every Learning materials &amp; courses are developed following the
                instructional design backbone, adapted for your content, your LMS, and
                your learners.
              </p>
            </div>

            <div className="mt-14 grid gap-6 md:grid-cols-2">
              {addieStages.map((stage, i) => (
                <div
                  key={stage.title}
                  className={`rounded-2xl bg-surface-light px-8 py-8 text-center text-surface-light-foreground shadow-elevated ${
                    i === addieStages.length - 1 ? "md:col-span-2 md:mx-auto md:max-w-md" : ""
                  }`}
                >
                  <span className="inline-block rounded-full bg-accent px-3 py-1 text-[11px] font-medium text-accent-foreground">
                    {stage.stage}
                  </span>
                  <h3 className="mt-4 text-xl font-bold">{stage.title}</h3>
                  <p className="mt-3 text-sm opacity-80">{stage.copy}</p>
                  <div className="mt-5 flex flex-wrap justify-center gap-2">
                    {stage.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-accent/40 px-3 py-1 text-[10px] uppercase tracking-[0.12em]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
