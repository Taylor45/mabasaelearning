import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Bruce Mabasa | eLearning Designer" },
      {
        name: "description",
        content:
          "Get in touch with Bruce Mabasa for instructional design, eLearning development, and AI-assisted learning projects.",
      },
      { property: "og:title", content: "Contact Bruce Mabasa" },
      {
        property: "og:description",
        content: "Reach out about instructional design and eLearning development work.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ContactPage,
});

const channels = [
  { label: "LinkedIn", value: "Let`s Connect: LinkedIn", href: "https://www.linkedin.com/in/bruce-mabasa-12121426a" },
  { label: "Resume", value: "View Resume", href: "#" },
];

function ContactPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <section className="surface-hero">
          <div className="mx-auto max-w-3xl px-5 py-12 text-center sm:py-24">
            <h1 className="text-4xl sm:text-5xl">Let`s work together</h1>
            <p className="mx-auto mt-5 max-w-xl text-muted-foreground">
              Available for instructional design, course development, and learning
              experience consulting.
            </p>
            <div className="mt-10 flex flex-col items-center gap-3">
              {channels.map((c) => (
                <Button asChild variant={c.label === "LinkedIn" ? "portfolioOutline" : "portfolio"} key={c.label} className="w-full max-w-sm"><a
                  href={c.href}
                  target="_blank"
                  rel="noreferrer"
                >
                  {c.value}
                </a></Button>
              ))}
              <Button asChild variant="portfolio" className="w-full max-w-sm"><a
                href="mailto:hello@example.com"
              >
                Send an Email
              </a></Button>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}