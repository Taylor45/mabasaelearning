import * as Dialog from "@radix-ui/react-dialog";
import { PreviewDialog } from "@/components/DocumentPreview";
import termsAsset from "@/assets/mabasa-terms-of-use.pdf.asset.json";
import privacyAsset from "@/assets/mabasa-privacy-policy.pdf.asset.json";

/** Footer link that opens its document in the shared fullscreen reader. */
const LegalLink = ({ href, title, children }: {
  href: string;
  title: string;
  children: React.ReactNode;
}) => (
  <Dialog.Root>
    <Dialog.Trigger asChild>
      <button
        type="button"
        title={`Preview: ${title}`}
        className="rounded-sm text-xs text-muted-foreground underline-offset-4 hover:text-foreground hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-cyan focus-visible:ring-offset-2 focus-visible:ring-offset-ink motion-safe:transition-colors motion-safe:duration-200"
      >
        {children}
      </button>
    </Dialog.Trigger>
    <PreviewDialog src={href} title={title} />
  </Dialog.Root>
);
const SolidMail = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
    <path d="M1.5 8.67v8.58a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V8.67l-8.928 5.493a3 3 0 0 1-3.144 0L1.5 8.67Z" />
    <path d="M22.5 6.908V6.75a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3v.158l9.714 5.978a1.5 1.5 0 0 0 1.572 0L22.5 6.908Z" />
  </svg>
);

const SolidPhone = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
    <path d="M2 3a1 1 0 0 1 1-1h2.153a1 1 0 0 1 .986.836l.74 4.435a1 1 0 0 1-.54 1.06l-1.548.773a11.037 11.037 0 0 0 6.105 6.105l.774-1.548a1 1 0 0 1 1.059-.54l4.435.74a1 1 0 0 1 .836.986V17a1 1 0 0 1-1 1h-2C7.82 18 2 12.18 2 5V3z" />
  </svg>
);

const SolidMapPin = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M11.54 22.351l.07.04.035.02.004.004.002-.002a.354.354 0 0 1 .277 0l.002.002.035-.02.07-.04c.2-.124.4-.246.601-.37.552-.34 1.107-.706 1.66-1.096 2.943-2.054 5.798-4.766 5.798-8.406C21.75 8.858 18.092 5.25 13.5 5.25c-4.592 0-8.25 3.608-8.25 7.624 0 3.64 2.855 6.352 5.798 8.406.553.39 1.108.755 1.66 1.096.201.123.4.245.602.37zM12 15a2.25 2.25 0 1 0 0-4.5 2.25 2.25 0 0 0 0 4.5z"
    />
  </svg>
);

const SolidLinkedin = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" />
  </svg>
);

/**
 * White square tile behind a contact icon, as in the reference picture:
 * flat white surface, sharp corners, dark navy glyph.
 */
const IconTile = (props: { children: React.ReactNode }) => (
  <span
    aria-hidden="true"
    className="grid size-9 shrink-0 place-items-center bg-white text-background shadow-sm ring-1 ring-white/70 motion-safe:transition-transform motion-safe:duration-200 motion-safe:group-hover:scale-105 motion-safe:group-focus-visible:scale-105 motion-safe:group-focus-visible:ring-2 motion-safe:group-focus-visible:ring-brand-cyan motion-safe:group-focus-visible:ring-offset-2 motion-safe:group-focus-visible:ring-offset-ink"
  >
    {props.children}
  </span>
);

const expertise = [
  "Instructional Desgin",
  "Articulate Storyline 360 & xAPI",
  "Prompt Engineering-Generative AIs",
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
              Ultra, Moodle, NovoEd, and Brightspace.
            </p>
            <p className="mt-6 text-xs font-semibold uppercase tracking-[0.1em]">
              3+ years eLearning &amp; development leadership
            </p>
            <div className="mt-8 flex items-center gap-4">
              <span className="font-display text-3xl">Mabasa.</span>
              <span className="rounded-full border border-border px-4 py-1 text-xs uppercase tracking-[0.2em] text-muted-foreground">
                eLearning
              </span>
            </div>
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
                <a
                  href="mailto:brucemabasa4@gmail.com"
                  className="group inline-flex items-center gap-4 hover:text-foreground"
                >
                  <IconTile>
                    <SolidMail width={18} height={18} />
                  </IconTile>
                  brucemabasa4@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="tel:+27825965691"
                  className="group inline-flex items-center gap-4 hover:text-foreground"
                >
                  <IconTile>
                    <SolidPhone width={18} height={18} />
                  </IconTile>
                  +27 (0) 82 596 5691
                </a>
              </li>
              <li className="inline-flex items-center gap-4">
                <IconTile>
                  <SolidMapPin width={18} height={18} />
                </IconTile>
                Gauteng, South Africa &amp; Remote Global
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/bruce-mabasa-12121426a"
                  target="_blank"
                  rel="noreferrer"
                  className="group inline-flex items-center gap-4 hover:text-foreground"
                >
                  <IconTile>
                    <SolidLinkedin width={18} height={18} />
                  </IconTile>
                  Let`s Connect: LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-border pt-6">
          <nav
            aria-label="Legal"
            className="flex flex-wrap items-center justify-between gap-x-4 gap-y-2"
          >
            <p className="text-xs text-muted-foreground">
              &copy; {new Date().getFullYear()} Mabasa eLearning. All rights
              reserved.
            </p>
            <div className="flex items-center gap-x-4">
              <LegalLink href={termsAsset.url} title="Terms of Use">
                Terms of Use
              </LegalLink>
              <span aria-hidden="true" className="text-xs text-muted-foreground">
                |
              </span>
              <LegalLink href={privacyAsset.url} title="Privacy Policy">
                Privacy Policy
              </LegalLink>
            </div>
          </nav>
        </div>
      </div>
    </footer>
  );
}
