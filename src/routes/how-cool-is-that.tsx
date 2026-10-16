import { createFileRoute, Link } from "@tanstack/react-router";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { ArrowRight, Image as ImageIcon, Plus } from "lucide-react";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { solidAccentStates } from "@/lib/button-states";
import { Button } from "@/components/ui/button";

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
          "Five trends reshaping eLearning and Development in 2026, and what I build differently because of each one.",
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
];

function BandTitle({
  heading,
  blurb,
  padClass = "py-16",
}: {
  heading: string;
  blurb: string;
  padClass?: string;
}) {
  return (
    <section className="surface-band">
      <div className={`mx-auto max-w-6xl px-5 text-center ${padClass}`}>
        <h2 className="font-inter text-xl font-bold text-white sm:text-2xl">{heading}</h2>
        <p className="mx-auto mt-2 max-w-2xl text-sm text-muted-foreground">
          {blurb}
        </p>
      </div>
    </section>
  );
}

function WorkTile({ label, wide = false }: { label: string; wide?: boolean }) {
  return (
    <div
      className={`flex min-w-0 items-center justify-center rounded-2xl border border-dashed border-border/60 bg-foreground/[0.05] px-4 ${
        wide ? "aspect-[16/9] sm:col-span-2" : "aspect-video"
      }`}
    >
      <span className="flex flex-col items-center gap-2 text-center text-xs text-muted-foreground">
        <ImageIcon aria-hidden="true" className="h-7 w-7" />
        {label}
      </span>
    </div>
  );
}

function HowCoolIsThatPage() {
  return (
    <div className="surface-hero flex min-h-screen flex-col">
      <SiteHeader />
      <main className="surface-hero flex-1">
        {/* Hero */}
        <section className="surface-hero relative overflow-hidden">
          <span
            aria-hidden="true"
            className="pointer-events-none absolute -right-6 top-4 select-none font-display text-[16rem] font-bold leading-none text-foreground/[0.06] sm:text-[22rem]"
          >
            ?
          </span>
          <div className="relative mx-auto max-w-6xl px-5 py-20 sm:py-24">
            <span className="inline-block rounded-full border border-brand-sky px-4 py-1 text-[11px] uppercase tracking-[0.2em] text-brand-sky">
              Latest Trends &middot; eLearning &amp; Development
            </span>
            <h1 className="mt-5 max-w-3xl text-4xl font-bold leading-tight sm:text-5xl">
              How <span className="text-brand-cyan">cool</span> is that?
            </h1>
            <p className="mt-5 max-w-2xl text-muted-foreground">
              A plain-language read on the trends reshaping eLearning and Development in 2026 —
              what each one actually changes about how learning gets built, and what it is worth
              to the person doing the work.
            </p>
            <div className="mt-8 flex flex-wrap gap-x-10 gap-y-3 text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
              {["Read", "Filter", "Apply"].map((step, i) => (
                <span key={step} className="flex items-center gap-2">
                  <span className="text-brand-cyan">0{i + 1}</span>
                  {step}
                </span>
              ))}
            </div>
          </div>
        </section>

        <div className="surface-hero">
          <div className="h-0.5 w-full bg-foreground" />
        </div>

        {/* Intro */}
        <section className="surface-hero">
          <div className="mx-auto max-w-6xl px-5 py-16">
            <p className="mx-auto max-w-3xl text-center text-sm leading-relaxed text-foreground/80 sm:text-base">
              Every year I read the research, sit with the tools, and then ask the only question
              that matters on a project: does this actually make learning better for the person
              doing the work? This page is that filter — the trends shaping eLearning and
              Development in 2026, in plain language, with the honest bit about what I would
              build differently because of each one.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-2">
              {forces.map((force) => (
                <span
                  key={force}
                  className="rounded-full border border-border bg-foreground/[0.05] px-3 py-1 text-xs text-muted-foreground"
                >
                  {force}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Trend list */}
        <BandTitle
          heading="Check out our Frequently Asked Questions section!"
          blurb="The questions I am asked most often about where learning is heading — answered in plain language, with the reasoning and the evidence behind each one."
          padClass="pt-8 pb-4"
        />
        <section className="surface-hero pt-8">
          <AccordionPrimitive.Root type="multiple" className="mx-auto flex max-w-4xl flex-col gap-5 px-5 pb-20">
            {trends.map((trend) => (
              <AccordionPrimitive.Item
                key={trend.number}
                value={trend.number}
                className="group min-w-0 rounded-2xl border border-border/60 bg-foreground/[0.06] shadow-[0_2px_12px_rgba(0,0,0,0.25)] backdrop-blur-sm transition-colors duration-300 hover:border-brand-sky/50 hover:bg-foreground/[0.1]"
              >
                <AccordionPrimitive.Header>
                  <AccordionPrimitive.Trigger className="flex w-full items-center justify-between gap-4 rounded-2xl px-5 py-6 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring sm:px-8 sm:py-8">
                    <span className="flex min-w-0 items-baseline gap-4">
                      <span className="font-display text-2xl text-brand-cyan">{trend.number}</span>
                      <span className="font-inter min-w-0 text-lg font-bold text-foreground sm:text-xl">
                        {trend.title}
                      </span>
                    </span>
                    <Plus aria-hidden="true" className="h-6 w-6 shrink-0 text-brand-sky transition-transform duration-200 group-data-[state=open]:rotate-45" />
                  </AccordionPrimitive.Trigger>
                </AccordionPrimitive.Header>
                <AccordionPrimitive.Content className="overflow-hidden data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down">
                  <div className="px-5 pb-7 sm:px-8 sm:pl-[4.5rem]">
                    <p className="text-[0.95rem] leading-relaxed text-muted-foreground">{trend.copy}</p>
                    <p className="mt-5 border-l-2 border-brand-cyan pl-3 text-[0.9rem] font-medium italic text-foreground">
                      {trend.cool}
                    </p>
                    <div className="mt-6 flex flex-wrap gap-2">
                      {trend.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full border border-border px-3 py-1 text-[0.7rem] font-semibold text-muted-foreground"
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

        {/* Latest work */}
        <BandTitle
          heading="Latest work"
          blurb="A snapshot of recent builds across instructional design, multimedia and AI-assisted learning — the same filter applied to every one of them."
          padClass="pt-8 pb-4"
        />
        <section className="surface-hero pt-8 pb-24">
          <div className="mx-auto grid max-w-6xl min-w-0 items-stretch gap-5 px-5 lg:grid-cols-[1.6fr_1fr]">
            <div className="grid min-w-0 grid-cols-1 content-start gap-5 sm:grid-cols-2">
              <WorkTile wide label="Featured project image" />
              <WorkTile label="Project detail image" />
              <WorkTile label="Project detail image" />
            </div>
            <article className="flex min-w-0 flex-col rounded-2xl border border-border/60 bg-foreground/[0.06] p-7 shadow-[0_2px_12px_rgba(0,0,0,0.25)] backdrop-blur-sm">
              <h3 className="font-inter text-lg font-bold text-foreground sm:text-xl">
                Learning that holds up at the desk
              </h3>
              <p className="mt-3 flex-1 text-[0.95rem] leading-relaxed text-muted-foreground">
                Every project here started from the same question: what does the person doing the
                work actually need at the moment of need? The answer usually looks shorter, more
                visual and more honest than the course someone asked for.
              </p>
              <Button asChild className={`mt-6 w-fit rounded-sm bg-accent px-6 py-2.5 font-display text-accent-foreground ${solidAccentStates}`}>
                <Link to="/elearning-multimedia">
                  View
                  <ArrowRight aria-hidden="true" className="h-4 w-4" />
                </Link>
              </Button>
            </article>
          </div>
        </section>

      </main>
      <SiteFooter />
    </div>
  );
}
