const expertise = [
  "Instructional Desgin",
  "Articulate Storyline 360 & xAPI",
  "Generative AI (ChatGPTs & Claude",
  "eLearning Graphic Design",
  "eLearning Multimedia",
  "UX/UI Design",
  "eLearning & Development",
];

export function SiteFooter() {
  return (
    <footer className="bg-ink">
      <div className="mx-auto max-w-6xl px-5 py-16">
        <div className="grid gap-12 md:grid-cols-3">
          <div>
            <p className="text-sm text-muted-foreground">
              Set up courses on various LMS platforms, including Canvas, Blackboard
              Ultra, Moodle, NovaEd, and Brightspace.
            </p>
            <p className="mt-6 text-xs font-semibold uppercase tracking-[0.1em]">
              3+ years eLearning &amp; development leadership
            </p>
          </div>

          <div>
            <p className="text-sm font-semibold">CORE EXPERTISE</p>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              {expertise.map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-cyan" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-sm font-semibold">GLOBAL SUPPORT</p>
            <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
              <li>
                <a href="mailto:brucemabasa4@gmail.com" className="hover:text-foreground">
                  brucemabasa4@gmail.com
                </a>
              </li>
              <li>
                <a href="tel:+27825965691" className="hover:text-foreground">
                  +27 (0) 82 596 5691
                </a>
              </li>
              <li>Gauteng, South Africa &amp; Remote Global</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-wrap items-center justify-between gap-4 border-t border-border pt-6">
          <div className="flex items-center gap-3">
            <span className="font-display text-lg">Mabasa.</span>
            <span className="rounded-full border border-border px-3 py-0.5 text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
              eLearning
            </span>
          </div>
          <p className="text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} Mabasa eLearning Consulting. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}