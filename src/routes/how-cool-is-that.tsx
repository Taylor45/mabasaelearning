import { createFileRoute } from "@tanstack/react-router";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { ArrowRight, Plus } from "lucide-react";
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



const articles = [
  {
    slug: "ai-moved-from-pilot-to-plumbing",
    date: "October 2026",
    tag: "AI in Learning",
    title: "AI has moved from pilot to plumbing",
    excerpt:
      "The question on projects is no longer \"should we use AI?\" — it is \"where does it quietly remove friction?\" Here is where I see it earning its keep.",
    body: [
      "Two years ago every proposal had an AI experiment bolted onto the side of it. This year the conversation has changed: AI is expected to be inside the workflow, invisible, doing the boring parts well.",
      "On my builds that means three things. First, drafting and localisation happen in hours, not weeks — which frees budget for the design decisions that actually need a human. Second, learners get answers at the moment of need instead of a module they will never open. Third, the data coming back is finally useful: not completion rates, but the questions people actually ask.",
      "The risk is sameness. When everyone can generate a course in an afternoon, the differentiator is curation, context and tone — the things that make learning feel like it came from your organisation, not from a template.",
    ],
  },
  {
    slug: "learning-debt-is-real",
    date: "September 2026",
    tag: "Strategy",
    title: "Learning debt is real — and it is compounding",
    excerpt:
      "Every quick fix, skipped induction and outdated module adds up. Learning debt behaves exactly like technical debt, and most organisations are carrying more than they think.",
    body: [
      "Technical debt is a familiar idea: ship fast now, pay interest later. Learning works the same way. Every process that changed without the training changing with it, every work-around a team invented and never documented, every new hire who learned from the person next to them instead of from a designed experience — that is principal plus interest.",
      "You feel it as longer ramp-up times, inconsistent quality between teams, and the same questions landing in the same inboxes every week.",
      "The fix is not a bigger course catalogue. It is a habit: treat every process change as a learning change, keep content small enough to update in an afternoon, and measure whether people can do the thing — not whether they opened the thing.",
    ],
  },
  {
    slug: "budgets-want-proof",
    date: "August 2026",
    tag: "Measurement",
    title: "Budgets now demand proof, not completions",
    excerpt:
      "Completion rates and smile sheets no longer unlock budget. The teams getting funded are the ones who can show behaviour change and business movement.",
    body: [
      "The most useful sentence I heard at a panel this year: \"Nobody ever cut a budget they could prove was working.\" L&D has spent years reporting activity — seats filled, modules completed, satisfaction scores — and wondering why it is first in line for cuts.",
      "The shift I am making on projects: agree the business metric before storyboarding a single screen. If the course is about safety, the metric is incidents. If it is onboarding, the metric is time-to-competence. If we cannot name the metric, we are not ready to build.",
      "It sounds obvious, but it changes the design. You build less content and more practice, because practice is what moves the number.",
    ],
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
        <h2 className="font-body text-xl font-bold text-white sm:text-2xl">{heading}</h2>
        <p className="mx-auto mt-2 max-w-2xl text-sm text-muted-foreground">
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
          </div>
        </section>

        <div className="surface-hero">
          <div className="h-0.5 w-full bg-foreground" />
        </div>

        {/* Intro */}
        <section className="bg-surface-light">
          <div className="mx-auto max-w-6xl px-5 py-16">
            <p className="mx-auto max-w-3xl text-center text-sm leading-relaxed text-surface-light-foreground/75 sm:text-base">
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
                  className="rounded-full border border-surface-light-foreground/20 px-3 py-1 text-xs text-surface-light-foreground/70"
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

        {/* Blog */}
        <BandTitle
          heading="From the blog"
          blurb="Articles I publish on eLearning trends, tools and the craft of building learning that actually works."
          padClass="pt-8 pb-4"
        />
        <section className="bg-surface-light pt-8">
          <div className="mx-auto flex max-w-4xl flex-col gap-5 px-5 pb-20">
            {articles.map((article) => (
              <AccordionPrimitive.Root key={article.slug} type="multiple">
                <AccordionPrimitive.Item
                  value={article.slug}
                  className="min-w-0 border border-surface-light-foreground/15 bg-surface-light shadow-[0_2px_8px_rgba(0,8,30,0.05)]"
                >
                  <div className="px-5 py-6 sm:px-8 sm:py-8">
                    <div className="flex flex-wrap items-center gap-3">
                      <span className="rounded-full border border-surface-light-foreground/20 px-3 py-1 text-[0.7rem] font-semibold text-surface-light-foreground/70">
                        {article.tag}
                      </span>
                      <span className="text-xs text-surface-light-foreground/60">{article.date}</span>
                    </div>
                    <h3 className="mt-3 font-body text-lg font-bold text-surface-light-foreground sm:text-xl">
                      {article.title}
                    </h3>
                    <p className="mt-2 text-[0.95rem] leading-relaxed text-surface-light-foreground/75">
                      {article.excerpt}
                    </p>
                    <AccordionPrimitive.Content className="overflow-hidden data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down">
                      <div className="mt-4 space-y-4 border-t border-surface-light-foreground/10 pt-4">
                        {article.body.map((paragraph) => (
                          <p
                            key={paragraph.slice(0, 40)}
                            className="text-[0.95rem] leading-relaxed text-surface-light-foreground/75"
                          >
                            {paragraph}
                          </p>
                        ))}
                      </div>
                    </AccordionPrimitive.Content>
                    <AccordionPrimitive.Header className="mt-4">
                      <AccordionPrimitive.Trigger className="group inline-flex items-center gap-2 text-sm font-semibold text-brand-sky focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">
                        <span className="group-data-[state=open]:hidden">Read article</span>
                        <span className="hidden group-data-[state=open]:inline">Close article</span>
                        <ArrowRight
                          aria-hidden="true"
                          className="h-4 w-4 transition-transform duration-200 group-data-[state=open]:rotate-90"
                        />
                      </AccordionPrimitive.Trigger>
                    </AccordionPrimitive.Header>
                  </div>
                </AccordionPrimitive.Item>
              </AccordionPrimitive.Root>
            ))}
          </div>
        </section>

      </main>
      <SiteFooter />
    </div>
  );
}
