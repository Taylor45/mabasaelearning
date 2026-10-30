import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import heroBg from "@/assets/elearning-hero-bg.jpg.asset.json";
import techBg from "@/assets/elearning-tech-bg.jpg.asset.json";
import expertiseBadge from "@/assets/eLearning_Expertise_Badge.png.asset.json";
import engagementBadge from "@/assets/Learning_Engagement_Badge.png.asset.json";
import lmsBadge from "@/assets/LMS_Knowledge_Badge.png.asset.json";

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
    image: expertiseBadge,
    alt: "eLearning Expertise badge",
    title: "eLearning Expertise",
    copy: "Custom Storyline & Rise course development.",
  },
  {
    image: engagementBadge,
    alt: "Learning Engagement badge",
    title: "Learning Engagement",
    copy: "Media assets built for learning, not just watching.",
  },
  {
    image: lmsBadge,
    alt: "LMS Knowledge badge",
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

const techRows = [
  {
    icon: Network,
    title: "eLearning Technology",
    copy: "Sometimes an eLearning project requires more than authoring tools. Our expertise in eLearning-specific technologies allows us to bridge the gap between instructional design and the underlying technology, developing the functionality behind your learning experience.",
    details: elearningTech,
  },
  {
    icon: CodeXml,
    title: "Software Development",
    copy: "With extensive software engineering experience, we can develop the technology behind your learning experience—or help solve a technical challenge in an existing application. Our general software development expertise supports custom applications, integrations, and tools.",
    details: softwareTech,
  },
  {
    icon: Accessibility,
    title: "Accessibility & UIX",
    copy: "Accessibility isn't just a requirement for some levels of training; it helps ALL learners/users in the final deliverables. Designing with accessibility in mind promotes easier learning and higher engagement. Sound visual design, closed captions paired with audio, and multiple modalities help everyone.",
    note: "While certain entities mandate accessibility-driven materials, experienced instructional designers know that designing with accessibility in mind promotes easier learning and higher engagement among typical learners/users as well. Elements such as sound visual design (color, font, and design), closed captions paired with audio, and multiple modalities help everyone.",
  },
];

function AboutPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        {/* Hero */}
        <section className="relative overflow-hidden">
          <img
            src={heroBg.url}
            alt=""
            aria-hidden="true"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="surface-hero-scrim absolute inset-0" aria-hidden="true" />
          <div className="relative mx-auto max-w-6xl px-5 py-20 text-center">
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
                  <img
                    src={item.image.url}
                    alt={item.alt}
                    loading="lazy"
                    className="h-36 w-36 drop-shadow-[0_12px_28px_rgba(0,60,160,0.25)]"
                  />
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

        {/* eLearning Technology */}
        <section className="relative overflow-hidden">
          <img
            src={techBg.url}
            alt=""
            aria-hidden="true"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="surface-hero-scrim absolute inset-0" aria-hidden="true" />
          <div className="relative mx-auto max-w-6xl px-5 py-16">
            <div className="rounded-3xl border border-foreground/10 bg-expertise-software/85 p-6 shadow-[0_30px_80px_-40px_rgba(0,0,0,0.8)] sm:p-10 lg:p-12">
              <h2 className="font-inter text-2xl font-bold uppercase tracking-wide text-foreground sm:text-3xl lg:text-4xl">
                eLearning <span className="text-gradient-accent">Technology</span>
              </h2>
              <div
                aria-hidden="true"
                className="mt-4 h-[3px] w-14 rounded-full bg-gradient-to-r from-brand-cyan to-brand-sky"
              />
              <div className="mt-10 divide-y divide-foreground/10">
                {techRows.map((row) => (
                  <article
                    key={row.title}
                    className="grid gap-5 py-8 first:pt-0 last:pb-0 sm:grid-cols-[auto_1fr] sm:gap-7"
                  >
                    <span
                      aria-hidden="true"
                      className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-brand-cyan to-brand-sky shadow-[0_0_28px_-8px_rgba(25,212,200,0.6)]"
                    >
                      <row.icon strokeWidth={2} className="h-5 w-5 text-foreground" />
                    </span>
                    <div className="min-w-0">
                      <h3 className="font-inter text-lg font-bold text-foreground sm:text-xl">
                        {row.title}
                      </h3>
                      <p className="mt-3 max-w-3xl text-sm leading-relaxed text-muted-foreground">
                        {row.copy}
                      </p>
                      {row.note ? (
                        <p className="mt-3 max-w-3xl text-sm leading-relaxed text-muted-foreground/80">
                          {row.note}
                        </p>
                      ) : null}
                      {row.details ? (
                        <ul
                          aria-label={`${row.title} capabilities`}
                          className="mt-4 grid list-disc gap-x-10 gap-y-2 pl-5 text-sm text-muted-foreground marker:text-brand-sky sm:grid-cols-2"
                        >
                          {row.details.map((detail) => (
                            <li key={detail} className="leading-relaxed">
                              {detail}
                            </li>
                          ))}
                        </ul>
                      ) : null}
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* My Clients */}
        <section className="bg-surface-light">
          <div className="mx-auto max-w-6xl px-5 pt-14 pb-20" />
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
