import type { ReactNode } from "react";
import { Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";

export type ServiceBlock = { title: string; copy: string; tags: string[] };

export function ServicePage({
  eyebrow,
  title,
  intro,
  blocks,
  children,
}: {
  eyebrow: string;
  title: string;
  intro: string;
  blocks: ServiceBlock[];
  children?: ReactNode;
}) {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <section className="surface-hero">
          <div className="mx-auto max-w-6xl px-5 py-20">
            <div>
              <span className="inline-block rounded-full border border-brand-sky px-4 py-1 text-[11px] uppercase tracking-[0.2em] text-brand-sky">
                {eyebrow}
              </span>
              <h1 className="mt-5 font-body text-4xl font-bold leading-tight sm:text-5xl">
                {title}
              </h1>
              <p className="mt-5 max-w-2xl text-muted-foreground">{intro}</p>
              <Link
                to="/contact"
                className="mt-8 inline-flex rounded-sm bg-primary px-6 py-2.5 font-display text-primary-foreground transition-opacity hover:opacity-90"
              >
                Start a project
              </Link>
            </div>
          </div>
        </section>

        <div className="surface-hero">
          <div className="h-0.5 w-full bg-foreground" />
        </div>

        <section className="bg-surface-light">
          <div className="mx-auto max-w-6xl px-5 py-16">
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {blocks.map((block) => (
                <article
                  key={block.title}
                  className="flex flex-col rounded-2xl border border-surface-light-foreground/12 bg-surface-light p-7 shadow-[0_2px_10px_rgba(0,8,30,0.06)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_38px_rgba(0,8,30,0.14)]"
                >
                  <h2 className="font-body text-xl font-bold text-surface-light-foreground">
                    {block.title}
                  </h2>
                  <p className="mt-3 flex-1 text-[0.95rem] leading-relaxed text-surface-light-foreground/75">
                    {block.copy}
                  </p>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {block.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-surface-light-foreground/20 px-3 py-1 text-[0.7rem] font-semibold text-surface-light-foreground/70"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {children}
      </main>
      <SiteFooter />
    </div>
  );
}
