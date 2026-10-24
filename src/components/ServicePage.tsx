import type { ReactNode } from "react";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import heroBg from "@/assets/elearning-hero-bg.jpg.asset.json";

import { ServiceFeatures, type ServiceBlock } from "@/components/ServiceFeatures";

export type { ServiceBlock } from "@/components/ServiceFeatures";

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
        <section className="relative overflow-hidden">
          <img
            src={heroBg.url}
            alt=""
            aria-hidden="true"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="surface-hero-scrim absolute inset-0" aria-hidden="true" />
          <div className="relative mx-auto max-w-6xl px-5 pt-20 pb-36 sm:pb-44">
            <div>
              <span className="inline-block rounded-full border border-brand-sky px-4 py-1 text-[11px] uppercase tracking-[0.2em] text-brand-sky">
                {eyebrow}
              </span>
              <h1 className="mt-5 text-4xl font-bold leading-tight sm:text-5xl">
                {title}
              </h1>
              <p className="mt-5 max-w-2xl text-muted-foreground">{intro}</p>
            </div>
          </div>
        </section>

        <ServiceFeatures blocks={blocks} />

        {children}
      </main>
      <SiteFooter />
    </div>
  );
}
