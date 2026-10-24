export type ServiceBlock = { title: string; copy: string; tags: string[] };

export function ServiceFeatures({
  blocks,
  titleStyle = "brand",
}: {
  blocks: ServiceBlock[];
  titleStyle?: "brand" | "hero";
}) {
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
              <ul aria-label="Tools and techniques used" className="mt-5 flex list-none flex-wrap justify-center gap-1.5 p-0">
                {block.tags.map((tag) => (
                  <li key={tag} className="whitespace-nowrap rounded-full border-[1.2px] border-[#1DA8E2]/50 bg-white px-[9px] py-1 text-[8.5px] font-semibold uppercase tracking-[0.02em] text-[#0047B3] transition-all duration-200 hover:-translate-y-px hover:border-transparent hover:bg-[linear-gradient(120deg,#19D4C8,#1DA8E2)] hover:text-white sm:px-[11px] sm:py-[5px] sm:text-[9px]">{tag}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}