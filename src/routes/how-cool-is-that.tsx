import { createFileRoute } from "@tanstack/react-router";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { Plus } from "lucide-react";
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
        <section className="bg-surface-light">
          <div className="mx-auto max-w-6xl px-5 py-16">
            <h2 className="text-center font-body text-3xl font-bold text-surface-light-foreground sm:text-4xl">
              Software Engineering &amp; eLearning Technology
            </h2>
            <p className="mx-auto mt-5 max-w-3xl text-center text-sm leading-relaxed text-surface-light-foreground/75 sm:text-base">
              Sometimes an eLearning project requires more than authoring tools. With extensive
              software engineering experience, we can develop the technology behind your learning
              experience—or help solve a technical challenge in an existing application.
            </p>
            <p className="mx-auto mt-4 max-w-3xl text-center text-sm leading-relaxed text-surface-light-foreground/75 sm:text-base">
              Our expertise includes both{" "}
              <strong className="font-bold text-surface-light-foreground">
                eLearning-specific technologies
              </strong>{" "}
              and{" "}
              <strong className="font-bold text-surface-light-foreground">
                general software development
              </strong>
              , allowing us to bridge the gap between instructional design and the underlying
              technology.
            </p>
            <div className="mx-auto mt-10 grid max-w-4xl gap-10 sm:grid-cols-2">
              <div className="min-w-0">
                <h3 className="font-body text-xl font-bold text-surface-light-foreground">
                  eLearning Technology
                </h3>
                <ul className="mt-4 list-disc space-y-1.5 pl-5 text-sm leading-relaxed text-surface-light-foreground/75">
                  <li>xAPI &amp; CMI5 development and integration</li>
                  <li>SCORM and LMS communication</li>
                  <li>Learning Record Store (LRS) integrations</li>
                  <li>Custom eLearning and LMS integrations</li>
                  <li>Learning data and API development</li>
                  <li>JavaScript-based course functionality</li>
                </ul>
              </div>
              <div className="min-w-0">
                <h3 className="font-body text-xl font-bold text-surface-light-foreground">
                  Software Development
                </h3>
                <ul className="mt-4 list-disc space-y-1.5 pl-5 text-sm leading-relaxed text-surface-light-foreground/75">
                  <li>Custom web applications and APIs</li>
                  <li>Database design and integration</li>
                  <li>Third-party API integrations</li>
                  <li>Custom tools and automation</li>
                  <li>Software debugging and technical troubleshooting</li>
                  <li>Cloud-based application development</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Trend list */}
        <BandTitle
          heading="Check out our Frequently Asked Questions section!"
          blurb="The questions I am asked most often about where learning is heading — answered in plain language, with the reasoning and the evidence behind each one."
          padClass="pt-8 pb-4"
        />
        <section className="bg-surface-light pt-8">
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


      </main>
      <SiteFooter />
    </div>
  );
}
