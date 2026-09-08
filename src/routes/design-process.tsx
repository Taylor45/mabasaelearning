import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";

export const Route = createFileRoute("/design-process")({
  head: () => ({
    meta: [
      { title: "Design Process — AI Literacy Course | Mabasa eLearning" },
      {
        name: "description",
        content:
          "The full design process behind AI Literacy for Instructional Design: ADDIE, Bloom's Taxonomy, design thinking, and the course materials.",
      },
      { property: "og:title", content: "Design Process — AI Literacy Course" },
      {
        property: "og:description",
        content:
          "ADDIE, Bloom's Taxonomy, design thinking and the materials behind the AI Literacy Storyline course.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: DesignProcessPage,
});

const bloom = ["Remember", "Understand", "Apply", "Analyze", "Evaluate", "Create"];

const addie = [
  {
    stage: "Analyze",
    copy: "Get to understand the learners and their needs (analyzing the problem).",
  },
  { stage: "Design", copy: "Plan the learning structure and flow (designing a storyboard)." },
  {
    stage: "Develop",
    copy: "Create the actual content and materials (visual mockups, characters, building).",
  },
  {
    stage: "Implement",
    copy: "Deliver the actual course on the authoring tool (Articulate Storyline).",
  },
  {
    stage: "Evaluate",
    copy: "Check what worked and what needs improvement (user testing and quality assurance with colleagues).",
  },
];

const materials = [
  {
    title: "Design Document",
    kind: "Document",
    embed: "https://docs.google.com/document/d/1t1lIlC26Q3s3KLNpfIU5uK5PS7qRTmYZ/preview",
    href: "https://docs.google.com/document/d/1t1lIlC26Q3s3KLNpfIU5uK5PS7qRTmYZ/edit?usp=sharing",
  },
  {
    title: "Instructional Design",
    kind: "Document",
    embed: "https://docs.google.com/document/d/11pm16RwdBOGvrFy3Scc4Au8Vy-k1JhFu/preview",
    href: "https://docs.google.com/document/d/11pm16RwdBOGvrFy3Scc4Au8Vy-k1JhFu/edit?usp=sharing",
  },
  {
    title: "Storyboard",
    kind: "Presentation",
    embed:
      "https://docs.google.com/presentation/d/176EaR6tffi9aB69xWrPpqO38WecJj1BVWksGVQ7t7NE/embed?start=false&loop=false",
    href: "https://docs.google.com/presentation/d/176EaR6tffi9aB69xWrPpqO38WecJj1BVWksGVQ7t7NE/edit?usp=sharing",
  },
];

const tools = [
  "Articulate Storyline 360",
  "PowerPoint",
  "Freepik",
  "Claude.ai",
  "ChatGPT",
  "Canva Pro",
  "Photoshop",
  "Adobe Firefly",
];

function Band({ title, blurb }: { title: string; blurb?: string }) {
  return (
    <div className="surface-band border-y border-foreground/10">
      <div className="mx-auto max-w-6xl px-5 py-7">
        <h2 className="font-body text-xl font-bold sm:text-2xl">{title}</h2>
        {blurb && <p className="mt-2 max-w-2xl text-sm text-muted-foreground">{blurb}</p>}
      </div>
    </div>
  );
}

function DesignProcessPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <section className="surface-hero">
          <div className="mx-auto max-w-6xl px-5 py-20">
            <span className="inline-block rounded-full border border-brand-sky px-4 py-1 text-[11px] uppercase tracking-[0.2em] text-brand-sky">
              Passion Project: Self-Managed
            </span>
            <h1 className="mt-5 font-body text-4xl font-bold leading-tight sm:text-5xl">
              AI Literacy for Instructional Design: Mastering the art of prompting
            </h1>
            <p className="mt-5 max-w-3xl text-muted-foreground">
              A short course I designed and developed on Articulate Storyline 360, focused on
              empowering instructional designers with AI prompting skills.
            </p>
          </div>
        </section>

        <div className="surface-hero">
          <div className="h-0.5 w-full bg-foreground" />
        </div>

        <Band title="Overview" />
        <div className="mx-auto max-w-6xl space-y-5 px-5 py-12 text-muted-foreground">
          <p>
            AI Literacy has become one of my favourite areas to explore within learning experience
            design. Throughout my journey as a Learning Experience Designer, I have noticed common
            misunderstandings and gaps in how educators and designers approach the use of AI tools
            in learning.
          </p>
          <p>
            These challenges inspired me to create the AI Literacy for Instructional Designers:
            Mastering the art of prompting course, to help instructional designers not only
            understand AI but also learn how to craft and analyse effective prompts for more
            accurate, relevant and impactful results in their design process.
          </p>
        </div>

        <Band
          title="My Process"
          blurb="To plan and create an effective learning experience I used two frameworks: ADDIE and Bloom's Taxonomy."
        />
        <div className="mx-auto max-w-6xl px-5 py-12">
          <p className="max-w-3xl text-muted-foreground">
            When starting a new module or course, I always begin by asking: who are the learners,
            and what is the desired outcome? This helps me design content that feels relevant, not
            generic.
          </p>

          <h3 className="mt-10 text-xl">1. Bloom&apos;s Taxonomy</h3>
          <p className="mt-2 max-w-3xl text-muted-foreground">
            This helps shift learning from just remembering to actually applying and creating. It
            guides me to build outcomes like:
          </p>
          <div className="mt-5 flex flex-wrap gap-2">
            {bloom.map((b) => (
              <span
                key={b}
                className="rounded-full border border-accent px-4 py-1.5 text-sm text-white"
              >
                {b}
              </span>
            ))}
          </div>

          <h3 className="mt-12 text-xl">2. ADDIE Model</h3>
          <p className="mt-2 max-w-3xl text-muted-foreground">
            A simple step-by-step approach to building learning content that helps me structure a
            course in a more effective way.
          </p>
          <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {addie.map((item) => (
              <article
                key={item.stage}
                className="rounded-2xl border border-surface-light-foreground/12 bg-surface-light p-6 shadow-[0_2px_10px_rgba(0,8,30,0.06)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_38px_rgba(0,8,30,0.14)]"
              >
                <h4 className="font-body text-lg font-bold text-surface-light-foreground">
                  {item.stage}
                </h4>
                <p className="mt-2 text-[0.95rem] leading-relaxed text-surface-light-foreground/75">
                  {item.copy}
                </p>
              </article>
            ))}
          </div>
        </div>

        <Band
          title="Design Thinking"
          blurb="How does design change behaviour? Good design increases retention and drives measurable results."
        />
        <div className="mx-auto max-w-6xl space-y-5 px-5 py-12 text-muted-foreground">
          <p>
            I strive for clear design and intuitive navigation to remove barriers, so that learners
            can focus on building skills rather than fighting the platform. UX and UI are the bridge
            between learning goals and learner success, keeping the experience simple and engaging.
          </p>
          <ul className="list-disc space-y-2 pl-5">
            <li>
              <span className="text-foreground">Knowledge checks:</span> true/false, drag-and-drop
              and short-answer questions.
            </li>
            <li>
              <span className="text-foreground">Multimedia elements:</span> text-to-speech audio and
              unique characters.
            </li>
            <li>
              <span className="text-foreground">Content development:</span> the course structure and
              content were developed and refined using ChatGPT, Claude.ai and other reliable
              sources.
            </li>
          </ul>
          <div className="flex flex-wrap gap-2 pt-2">
            {tools.map((tool) => (
              <span
                key={tool}
                className="rounded-full border border-border px-3 py-1 text-xs text-white"
              >
                {tool}
              </span>
            ))}
          </div>
        </div>

        <Band
          title="Course Materials"
          blurb="Explore the design document, instructional design and storyboard behind the course."
        />
        <div className="mx-auto max-w-6xl space-y-10 px-5 py-12">
          {materials.map((m) => (
            <article
              key={m.title}
              className="overflow-hidden rounded-md border border-border bg-card shadow-elevated"
            >
              <div className="flex flex-wrap items-center justify-between gap-4 border-b border-border px-6 py-5">
                <h3 className="text-lg">{m.title}</h3>
                <a
                  href={m.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-sm border-2 border-accent px-5 py-2.5 text-xs uppercase tracking-[0.15em] transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-card"
                >
                  Open {m.kind}
                  <span aria-hidden="true">→</span>
                </a>
              </div>
              <iframe
                src={m.embed}
                title={m.title}
                loading="lazy"
                className="h-[560px] w-full bg-white"
              />
            </article>
          ))}
        </div>

        <Band title="Design System" blurb="Design process behind the course thumbnail." />
        <div className="mx-auto max-w-6xl grid gap-6 px-5 py-12 sm:grid-cols-2">
          <article className="rounded-2xl border border-surface-light-foreground/12 bg-surface-light p-7">
            <h3 className="font-body text-lg font-bold text-surface-light-foreground">
              Initial design
            </h3>
            <p className="mt-3 text-[0.95rem] leading-relaxed text-surface-light-foreground/75">
              The concept was inspired by a reference image depicting a group of professionals. My
              objective was to represent a diverse, modern workforce, ensuring inclusivity across
              gender and cultural identity.
            </p>
          </article>
          <article className="rounded-2xl border border-surface-light-foreground/12 bg-surface-light p-7">
            <h3 className="font-body text-lg font-bold text-surface-light-foreground">
              Final design
            </h3>
            <p className="mt-3 text-[0.95rem] leading-relaxed text-surface-light-foreground/75">
              The final image was designed to clearly communicate its intended context. A clean
              image was generated from the reference image and refined in Photoshop.
            </p>
          </article>
        </div>

        <Band title="Project Reflection" />
        <div className="mx-auto max-w-6xl space-y-5 px-5 py-12 text-muted-foreground">
          <p>
            When the project was completed, I shared it with several colleagues and the response was
            overwhelmingly positive. They particularly appreciated the scenario-based approach,
            noting that it reflected a highly relatable challenge within learning design practice.
            The feedback highlighted the strength of the central theme, the authenticity of the
            dialogue, and the effectiveness of the knowledge checks in reinforcing key concepts.
          </p>
          <p>
            Although this was developed as a concept project, I see several opportunities for future
            enhancement. One key improvement would be to make the knowledge check questions
            adaptive, tailoring follow-up questions based on the learner&apos;s initial responses.
            This would allow the experience to build progressively on their answers, offering more
            personalised feedback and deeper, constructive critique.
          </p>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
