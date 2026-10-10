import { createFileRoute, Link } from "@tanstack/react-router";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { ArrowUpRight, Plus } from "lucide-react";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";

export const Route = createFileRoute("/how-cool-is-that")({
  head: () => ({
    meta: [
      { title: "How Cool Is That? | eLearning Trends 2026 | Mabasa eLearning" },
      {
        name: "description",
        content:
          "Bruce Mabasa's read on the latest trends in eLearning and Development for 2026: conversational learning in the flow of work, context engineering, gamification 2.0, live experiential learning, AI literacy and learning debt.",
      },
      {
        property: "og:title",
        content: "How Cool Is That? | eLearning Trends 2026 | Mabasa eLearning",
      },
      {
        property: "og:description",
        content:
          "Nine trends reshaping eLearning and Development in 2026, and what I build differently because of each one.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: HowCoolIsThatPage,
});

const forces = [
  "AI & Data Intelligence",
  "Learning Technology",
  "Learner Experience",
  "Culture & Enablement",
  "L&D Operations & Strategy",
];

const signals = [
  {
    index: "01",
    headline: "AI has stopped being a pilot",
    copy: "After years of experimentation, AI is now embedded in the daily workflow of most learning teams — the hard part is no longer adopting it, it is governing it.",
    source: {
      label: "Confirm — State of Digital Learning Report 2026",
      href: "https://www.confirm.com/guides/state-of-digital-learning-2026",
    },
  },
  {
    index: "02",
    headline: "Learning debt is quietly building",
    copy: "Work keeps outpacing development, so skills and knowledge bleed away unless someone is measuring the gap. It is now a named macro trend, not a feeling.",
    source: {
      label: "TalentLMS — 2026 L&D Benchmark Report",
      href: "https://www.talentlms.com/research/learning-development-report-2026",
    },
  },
  {
    index: "03",
    headline: "Proof, or the budget moves",
    copy: "Investment is being held to a higher standard. The ask is a visible line from a learning experience to business effect, not a completion certificate.",
    source: {
      label: "EIDesign — L&D Trends 2026",
      href: "https://elearningindustry.com/ld-trends-2026-forces-reshaping-enterprise-elearning-ebook-launch",
    },
  },
];

const trends = [
  {
    number: "01",
    title: "Change-Forward Culture",
    copy: "Change is no longer an initiative with a start and end date. The work is building change capacity — helping managers and teams meet constant shift with curiosity instead of fatigue.",
    tags: ["Change Capacity", "Resilience", "Manager Capability"],
    cool: "You stop training people to survive change and start training them to like it.",
  },
  {
    number: "02",
    title: "Strategic Staff Augmentation",
    copy: "Budgets are trimmed while demand for specialist skills climbs. Teams right-size by bringing in vetted instructional designers and SMEs for the length of a project, then scale back down.",
    tags: ["Agile Teams", "SME Access", "Lean Budgets"],
    cool: "You can rent a senior designer for six weeks instead of hiring one for six years.",
  },
  {
    number: "03",
    title: "Context Engineering",
    copy: "A curated, secure layer between your organisation's knowledge and a large language model. It keeps data in house and returns answers that actually match how your business works.",
    tags: ["Knowledge Base", "Secure LLMs", "Iterative Design"],
    cool: "Your best answers on tap, without your data walking out the door.",
  },
  {
    number: "04",
    title: "Conversational Learning In The Flow Of Work",
    copy: "Just-in-time support at the moment of need, delivered as two-way speech or text rather than a course. It scales the feel of one-to-one coaching to a whole workforce.",
    tags: ["Moment of Need", "Just-in-Time", "Two-Way Dialogue"],
    cool: "Ask the question at your desk and get an answer — not a 20-minute module.",
  },
  {
    number: "05",
    title: "Thinking Outside The LMS",
    copy: "The LMS keeps doing what it does well, but AI-powered experiences get embedded where the work happens. With AI-generated content flooding in, the designer's job shifts to curator and editor.",
    tags: ["Ecosystem", "Curation", "Communities of Practice"],
    cool: "The library stops being a warehouse and starts being a concierge.",
  },
  {
    number: "06",
    title: "Designing For Data",
    copy: "The waterfall model — first best guess, then measure afterwards — is finished. What learners know, what they can do, and how confident they are get asked before design starts.",
    tags: ["Evidence", "Measurement", "Credibility"],
    cool: "Every course arrives with evidence, not just a completion percentage.",
  },
  {
    number: "07",
    title: "Live Experiential Learning",
    copy: "A high-energy reimagining of instructor-led training: shared quests, in person or virtual, where people adapt to nuanced situations in real time and coach one another.",
    tags: ["Peer Facilitation", "Virtual Quests", "Collaboration"],
    cool: "Rooms with energy again — and peers doing the scaling, on a lean budget.",
  },
  {
    number: "08",
    title: "Gamification 2.0",
    copy: "AI collapses the old trade-off between authentic and affordable. Intrinsic rewards — mastery, purpose, autonomy — replace superficial points, and simulations adapt to each decision.",
    tags: ["Dynamic Simulations", "Intrinsic Rewards", "Adaptive Storylines"],
    cool: "Scenarios that react to your choices instead of scoring your clicks.",
  },
  {
    number: "09",
    title: "AI Literacy & Psychological Safety",
    copy: "AI upskilling can trigger fear and shame. The work is role-based AI skills alongside a clear message: people are not training their replacements. Then protect the unpromptable — empathy, creativity, connection.",
    tags: ["Role-Based Skills", "Trust", "The Unpromptable"],
    cool: "Teach the tool, protect the human. The parts AI cannot do are the parts worth paying for.",
  },
];

const responses = [
  {
    title: "Build the knowledge base first",
    copy: "Before anyone asks for a chatbot, the source material needs to be cleaned, indexed and owned. That is where conversational learning either works or embarrasses you.",
    to: "/ai-in-elearning",
    label: "AI In eLearning",
  },
  {
    title: "Design the moment of need",
    copy: "I map the real performance gap first, then decide whether the answer is a course at all — often it is a job aid, a prompt, or a scenario.",
    to: "/instructional-design",
    label: "Instructional Design",
  },
  {
    title: "Build the simulation, not click-next",
    copy: "Branching scenarios in Articulate 360 and H5P that adapt to what the learner decides, so practice feels like the job rather than a quiz.",
    to: "/elearning-development",
    label: "eLearning Development",
  },
  {
    title: "Give it a face and a voice",
    copy: "Narrated video, motion and cloned narration make short-form content land — and make it cheap enough to refresh when the answer changes.",
    to: "/elearning-multimedia",
    label: "eLearning Multimedia",
  },
  {
    title: "Make it readable on a phone",
    copy: "Flow-of-work learning is mobile learning. Wireframes, accessibility and contrast get settled before a single slide is produced.",
    to: "/web-design-ux-ui",
    label: "Web Design / UX & UI",
  },
  {
    title: "Write prompts that hold up",
    copy: "Prompt patterns for drafting, branching logic, localisation and quiz banks — reviewed by a human before anything reaches a learner.",
    to: "/prompt-engineering",
    label: "Prompt Engineering",
  },
];

const sources = [
  {
    label: "SweetRush — L&D And Talent Trends 2026: Human Connection, AI, And \u201CUnpromptability\u201D",
    href: "https://elearningindustry.com/ld-and-talent-trends-2026-human-connection-ai-and-unpromptability",
  },
  {
    label: "Confirm — State Of Digital Learning Report 2026",
    href: "https://www.confirm.com/guides/state-of-digital-learning-2026",
  },
  {
    label: "TalentLMS — The 2026 L&D Benchmark Report",
    href: "https://www.talentlms.com/research/learning-development-report-2026",
  },
  {
    label: "EIDesign — L&D Trends 2026: The 5 Forces Reshaping Enterprise eLearning",
    href: "https://elearningindustry.com/ld-trends-2026-forces-reshaping-enterprise-elearning-ebook-launch",
  },
  {
    label: "Gartner — Hype Cycle for Corporate Learning Technologies, 2026",
    href: "https://emt.gartnerweb.com/en/documents/8164329",
  },
  {
    label: "Training Industry — Learning and Development Trends",
    href: "https://trainingindustry.com/learning-and-development-trends/",
  },
];

function BandTitle({ heading, blurb }: { heading: string; blurb: string }) {
  return (
    <section className="surface-band">
      <div className="mx-auto max-w-6xl px-5 py-16 text-center">
        <h2 className="font-body text-3xl font-bold text-white sm:text-4xl">{heading}</h2>
        <p className="mx-auto mt-4 max-w-2xl text-sm text-muted-foreground sm:text-base">
          {blurb}
        </p>
      </div>
    </section>
  );
}

function HowCoolIsThatPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        {/* Hero */}
        <section className="surface-hero">
          <div className="mx-auto max-w-6xl px-5 py-20">
            <span className="inline-block rounded-full border border-brand-sky px-4 py-1 text-[11px] uppercase tracking-[0.2em] text-brand-sky">
              Latest Trends &middot; eLearning &amp; Development
            </span>
            <h1 className="mt-5 font-body text-4xl font-bold leading-tight sm:text-5xl">
              How cool is that?
            </h1>
            <p className="mt-5 max-w-2xl text-muted-foreground">
              Every year I read the research, sit with the tools, and then ask the only question
              that matters on a project: does this actually make learning better for the person
              doing the work? This page is that filter — the trends shaping eLearning and
              Development in 2026, in plain language, with the honest bit about what I would
              build differently because of each one.
            </p>
            <div className="mt-8 flex flex-wrap gap-2">
              {forces.map((force) => (
                <span
                  key={force}
                  className="rounded-full border border-border px-3 py-1 text-xs text-muted-foreground"
                >
                  {force}
                </span>
              ))}
            </div>
          </div>
        </section>

        <div className="surface-hero">
          <div className="h-0.5 w-full bg-foreground" />
        </div>

        {/* Signals */}
        <section className="bg-ink">
          <div className="mx-auto grid max-w-6xl gap-8 px-5 py-14 sm:grid-cols-3">
            {signals.map((signal) => (
              <div key={signal.index} className="min-w-0">
                <span className="text-[10px] tracking-[0.2em] text-brand-sky">
                  {signal.index}
                </span>
                <h2 className="mt-2 font-body text-lg font-bold text-white">
                  {signal.headline}
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {signal.copy}
                </p>
                <a
                  href={signal.source.href}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-4 inline-flex items-center gap-2 text-xs font-semibold text-brand-cyan hover:underline"
                >
                  {signal.source.label}
                  <ArrowUpRight aria-hidden="true" size={14} className="shrink-0" />
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* Trend list */}
        <BandTitle
          heading="Nine trends worth your attention"
          blurb="Pulled from this year's research and expert panels, then rewritten as the things I actually have to decide on a build."
        />
        <section className="bg-surface-light">
          <AccordionPrimitive.Root type="multiple" className="mx-auto flex max-w-4xl flex-col gap-5 px-5 pb-20">
            {trends.map((trend) => (
              <AccordionPrimitive.Item
                key={trend.number}
                value={trend.number}
                className="min-w-0 border border-surface-light-foreground/15 bg-surface-light shadow-[0_2px_8px_rgba(0,8,30,0.05)]"
              >
                <AccordionPrimitive.Header>
                  <AccordionPrimitive.Trigger className="group flex w-full items-center justify-between gap-4 px-5 py-6 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring sm:px-8 sm:py-8">
                    <span className="flex min-w-0 items-baseline gap-3">
                      <span className="font-display text-lg text-brand-sky">{trend.number}</span>
                      <span className="font-body text-lg font-bold text-surface-light-foreground sm:text-xl">
                        {trend.title}
                      </span>
                    </span>
                    <Plus aria-hidden="true" className="h-6 w-6 shrink-0 text-brand-sky transition-transform duration-200 group-data-[state=open]:rotate-45" />
                  </AccordionPrimitive.Trigger>
                </AccordionPrimitive.Header>
                <AccordionPrimitive.Content className="overflow-hidden data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down">
                  <div className="px-5 pb-7 sm:px-8">
                    <p className="text-[0.95rem] leading-relaxed text-surface-light-foreground/75">{trend.copy}</p>
                    <p className="mt-5 border-l-2 border-brand-sky pl-3 text-[0.9rem] font-medium italic text-surface-light-foreground">
                      {trend.cool}
                    </p>
                    <div className="mt-6 flex flex-wrap gap-2">
                      {trend.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full border border-surface-light-foreground/20 px-3 py-1 text-[0.7rem] font-semibold text-surface-light-foreground/70"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </AccordionPrimitive.Content>
              </AccordionPrimitive.Item>
            ))}
          </AccordionPrimitive.Root>
        </section>

        {/* What I do about it */}
        <BandTitle
          heading="What I build differently because of them"
          blurb="A trend is only useful when it changes a decision. Here is where each one lands in my process."
        />
        <section className="bg-surface-light">
          <div className="mx-auto grid max-w-6xl items-start gap-6 px-5 pb-20 sm:grid-cols-2 lg:grid-cols-3">
            {responses.map((response) => (
              <article
                key={response.title}
                className="flex h-full min-w-0 flex-col rounded-2xl border border-surface-light-foreground/12 bg-surface-light p-7 shadow-[0_2px_10px_rgba(0,8,30,0.06)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_38px_rgba(0,8,30,0.14)]"
              >
                <h3 className="font-body text-lg font-bold text-surface-light-foreground">
                  {response.title}
                </h3>
                <p className="mt-3 flex-1 text-[0.95rem] leading-relaxed text-surface-light-foreground/75">
                  {response.copy}
                </p>
                <Link
                  to={response.to}
                  className="mt-6 inline-flex w-fit items-center gap-2 text-sm font-semibold text-surface-light-foreground underline-offset-4 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                >
                  {response.label}
                  <ArrowUpRight aria-hidden="true" size={16} className="shrink-0" />
                </Link>
              </article>
            ))}
          </div>
        </section>

        {/* Sources */}
        <section className="bg-ink">
          <div className="mx-auto max-w-6xl px-5 py-16">
            <h2 className="font-body text-2xl font-bold text-white sm:text-3xl">
              Where this comes from
            </h2>
            <p className="mt-3 max-w-2xl text-sm text-muted-foreground">
              I would rather cite the research than repeat it from memory. These are the 2026
              reports and panels behind the trends above.
            </p>
            <ul className="mt-8 grid gap-3 sm:grid-cols-2">
              {sources.map((source) => (
                <li key={source.href}>
                  <a
                    href={source.href}
                    target="_blank"
                    rel="noreferrer"
                    className="flex min-w-0 items-start justify-between gap-4 rounded-xl border border-border px-4 py-3 text-sm text-muted-foreground transition-colors hover:border-brand-cyan hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                  >
                    <span>{source.label}</span>
                    <ArrowUpRight
                      aria-hidden="true"
                      size={16}
                      className="mt-0.5 shrink-0 text-brand-cyan"
                    />
                  </a>
                </li>
              ))}
            </ul>
            <p className="mt-8 text-xs text-muted-foreground">
              Published 2026. I keep this page as a running read on where learning is going, so
              it gets revised as the tools settle.
            </p>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
