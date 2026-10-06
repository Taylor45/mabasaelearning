import { createFileRoute } from "@tanstack/react-router";
import { ServicePage } from "@/components/ServicePage";
import { WireframeViewer } from "@/components/WireframeViewer";
import appImg from "@/assets/uxui/app.jpg.asset.json";
import wire1 from "@/assets/uxui/wire1.png.asset.json";
import wire2 from "@/assets/uxui/wire2.png.asset.json";
import wire3 from "@/assets/uxui/wire3.png.asset.json";
import wire4 from "@/assets/uxui/wire4.png.asset.json";

export const Route = createFileRoute("/web-design-ux-ui")({
  head: () => ({
    meta: [
      { title: "Web Design / UX & UI | Mabasa eLearning" },
      { name: "description", content: "Accessible, responsive learning interfaces, design systems and prototypes built in Figma." },
      { property: "og:title", content: "Web Design / UX & UI | Mabasa eLearning" },
      { property: "og:description", content: "Accessible, responsive learning interfaces, design systems and prototypes built in Figma." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: WebDesignPage,
});

const blocks = [
  { title: "UX Research", copy: "Journey maps, task flows, and usability testing that expose where learners stall or drop off.", tags: ["Journey Maps", "Usability Tests", "Personas"] },
  { title: "UI & Design Systems", copy: "Consistent components, type scales, and colour tokens that keep every course visually coherent.", tags: ["Figma", "Design Tokens", "Components"] },
  { title: "Accessibility", copy: "WCAG-aligned contrast, keyboard navigation, and screen-reader support built in from the first wireframe.", tags: ["WCAG 2.2 AA", "Keyboard Nav", "Alt Text"] },
];

const wireframes = [
  { src: wire1.url, alt: "High-fidelity wireframe — screen 1" },
  { src: wire2.url, alt: "High-fidelity wireframe — screen 2" },
  { src: wire3.url, alt: "High-fidelity wireframe — screen 3" },
  { src: wire4.url, alt: "High-fidelity wireframe — screen 4" },
];

function WebDesignPage() {
  return (
    <ServicePage
      eyebrow="Development & AI"
      title="Web Design / UX & UI"
      intro="Shaping clean, accessible interfaces and design systems that make learning effortless to navigate."
      blocks={blocks}
    >
      <section>
        <div className="surface-band border-y border-foreground/10">
          <div className="mx-auto max-w-6xl px-5 py-7">
            <h2 className="font-body text-xl font-bold sm:text-2xl">Coding Basics For Instructional Design</h2>
            <p className="mt-2 max-w-2xl text-sm text-muted-foreground">
              A UX research and design case study exploring how coding fundamentals can be taught through a thoughtfully designed learning app.
            </p>
          </div>
        </div>
        <div className="bg-surface-light">
          <div className="mx-auto max-w-6xl px-5 py-12">
            <h3 className="font-body text-lg font-bold text-surface-light-foreground sm:text-xl">UX Research &amp; Design Case Study</h3>
            <div className="mt-6 grid gap-8 lg:grid-cols-2 lg:gap-10">
              <article className="group flex flex-col overflow-hidden rounded-md border border-border bg-card shadow-elevated">
                <div className="aspect-[4/3] w-full bg-muted">
                  <iframe
                    src="https://docs.google.com/document/d/1jGBqk06KW8Ewx_I1Rl9H4BVB8nDX085YuJKeocU8X-Q/preview"
                    title="Coding-Basics-for-ID-UX-Research-Document"
                    loading="lazy"
                    allowFullScreen
                    className="h-full w-full border-0"
                  />
                </div>
                <div className="flex flex-1 flex-col items-start gap-4 p-6">
                  <h4 className="text-lg leading-snug">Coding-Basics-for-ID-UX-Research-Document</h4>
                  <a
                    href="https://docs.google.com/document/d/1jGBqk06KW8Ewx_I1Rl9H4BVB8nDX085YuJKeocU8X-Q/view"
                    target="_blank"
                    rel="noreferrer"
                    className="mt-auto inline-flex items-center gap-2 rounded-sm border-2 border-accent px-5 py-2.5 text-xs uppercase tracking-[0.15em] transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-card"
                  >
                    Open Document
                    <span aria-hidden="true" className="transition-transform group-hover:translate-x-0.5">→</span>
                  </a>
                </div>
              </article>
              <article className="group flex flex-col overflow-hidden rounded-md border border-border bg-card shadow-elevated">
                <div className="aspect-[4/3] w-full overflow-hidden bg-muted">
                  <img
                    src={appImg.url}
                    alt="Coding Basics for Instructional Design app interface"
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="flex flex-1 flex-col items-start gap-4 p-6">
                  <h4 className="text-lg leading-snug">Coding Basics For Instructional Design — App</h4>
                  <a
                    href="https://sites.google.com/view/mabasaelearning/elearning-development/elearning-multimedia"
                    target="_blank"
                    rel="noreferrer"
                    className="mt-auto inline-flex items-center gap-2 rounded-sm border-2 border-accent px-5 py-2.5 text-xs uppercase tracking-[0.15em] transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-card"
                  >
                    View the App Here
                    <span aria-hidden="true" className="transition-transform group-hover:translate-x-0.5">→</span>
                  </a>
                </div>
              </article>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="surface-band border-y border-foreground/10">
          <div className="mx-auto max-w-6xl px-5 py-7">
            <h2 className="font-body text-xl font-bold sm:text-2xl">Wireframes — High Fidelity</h2>
            <p className="mt-2 max-w-2xl text-sm text-muted-foreground">
              Polished high-fidelity wireframes showing layout, navigation, and visual hierarchy before development begins.
            </p>
          </div>
        </div>
        <div className="bg-surface-light">
          <div className="mx-auto max-w-6xl px-5 py-12">
            <WireframeViewer images={wireframes} />
          </div>
        </div>
      </section>
    </ServicePage>
  );
}
