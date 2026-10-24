export type ServiceBlock = { title: string; copy: string; tags: string[] };

export function ServiceFeatures({ blocks }: { blocks: ServiceBlock[] }) {
  return (
    <section aria-label="Service expertise" className="flow-root bg-surface-light">
      <div className="relative mx-auto -mt-14 max-w-6xl px-5 pb-16 sm:-mt-16">
        <div className="grid items-stretch gap-10 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {blocks.map((block, index) => (
            <article key={block.title} aria-labelledby={`service-block-title-${index}`} className="flex flex-col items-center text-center">
              <div tabIndex={0} aria-labelledby={`service-block-title-${index}`} className="surface-hero service-feature-title dev-card-focus flex min-h-24 w-full origin-center items-center justify-center rounded-2xl border border-foreground/25 px-5 py-4">
                <h2 id={`service-block-title-${index}`} className="font-inter text-xl font-bold text-foreground">{block.title}</h2>
              </div>
              <p className="mt-5 flex-1 px-2 text-[0.95rem] leading-relaxed text-surface-light-foreground/75">{block.copy}</p>
              <ul aria-label="Tools and techniques used" className="mt-5 flex list-none flex-wrap justify-center gap-2 p-0">
                {block.tags.map((tag) => (
                  <li key={tag} className="rounded-full border border-surface-light-foreground/20 px-3 py-1 text-[0.7rem] font-semibold text-surface-light-foreground/70">{tag}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}