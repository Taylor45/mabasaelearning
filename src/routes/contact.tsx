import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Melvon Mabasa | eLearning Designer" },
      {
        name: "description",
        content:
          "Get in touch with Melvon Mabasa for instructional design, eLearning development, and AI-assisted learning projects.",
      },
      { property: "og:title", content: "Contact Melvon Mabasa" },
      {
        property: "og:description",
        content: "Reach out about instructional design and eLearning development work.",
      },
    ],
  }),
  component: ContactPage,
});

const channels = [
  { label: "LinkedIn", value: "Let`s Connect: LinkedIn", href: "https://www.linkedin.com" },
  { label: "Resume", value: "View Resume", href: "#" },
];

function ContactPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <section className="surface-hero">
          <div className="mx-auto max-w-3xl px-5 py-24 text-center">
            <h1 className="text-4xl sm:text-5xl">Let`s work together</h1>
            <p className="mx-auto mt-5 max-w-xl text-muted-foreground">
              Available for instructional design, course development, and learning
              experience consulting.
            </p>
            <div className="mt-10 flex flex-col items-center gap-3">
              {channels.map((c) => (
                <a
                  key={c.label}
                  href={c.href}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full max-w-sm rounded-sm border border-border bg-primary/0 px-6 py-3 font-display transition-colors hover:bg-primary hover:text-primary-foreground"
                >
                  {c.value}
                </a>
              ))}
              <a
                href="mailto:hello@example.com"
                className="w-full max-w-sm rounded-sm bg-primary px-6 py-3 font-display text-primary-foreground transition-opacity hover:opacity-90"
              >
                Send an Email
              </a>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}