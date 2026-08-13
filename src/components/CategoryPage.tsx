import { Link } from "@tanstack/react-router";

export type CategoryPageProps = {
  eyebrow: string;
  title: string;
  intro: string;
  img: string;
  highlights: { title: string; copy: string }[];
};

export function CategoryPage({ eyebrow, title, intro, img, highlights }: CategoryPageProps) {
  return (
    <>
      <section className="surface-hero">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 py-16 md:grid-cols-[1.2fr_0.8fr]">
          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-brand-cyan">{eyebrow}</p>
            <h1 className="mt-4 text-4xl sm:text-5xl">{title}</h1>
            <p className="mt-5 max-w-2xl text-muted-foreground">{intro}</p>
            <Link
              to="/elearning-development"
              className="mt-8 inline-flex items-center gap-2 rounded-sm border-2 border-accent px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.15em] transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
            >
              ← All eLearning Development
            </Link>
          </div>
          <img
            src={img}
            alt={title}
            loading="lazy"
            width={480}
            height={480}
            className="mx-auto h-64 w-full max-w-xs object-contain"
          />
        </div>
      </section>

      <section className="bg-surface-light">
        <div className="mx-auto max-w-6xl px-5 py-16">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {highlights.map((item) => (
              <article
                key={item.title}
                className="rounded-2xl border border-surface-light-foreground/12 bg-surface-light p-7 shadow-[0_2px_10px_rgba(0,8,30,0.06)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_38px_rgba(0,8,30,0.14)]"
              >
                <h2 className="font-body text-lg font-bold text-surface-light-foreground">
                  {item.title}
                </h2>
                <p className="mt-3 text-[0.95rem] leading-relaxed text-surface-light-foreground/75">
                  {item.copy}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}