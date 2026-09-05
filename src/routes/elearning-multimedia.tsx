import { createFileRoute } from "@tanstack/react-router";
import { ServicePage } from "@/components/ServicePage";
import graphicDesign1 from "@/assets/graphic-design-1.jpg.asset.json";
import graphicDesign2 from "@/assets/graphic-design-2.jpg.asset.json";
import graphicDesign3 from "@/assets/graphic-design-3.jpg.asset.json";
import graphicDesign4 from "@/assets/graphic-design-4.jpg.asset.json";
import aiAvatarsBoard from "@/assets/ai-avatars-board.jpg.asset.json";
import aiAvatarPortrait from "@/assets/ai-avatar-portrait.jpg.asset.json";
import aiScenes1 from "@/assets/ai-scenes-1.jpg.asset.json";
import aiScenes2 from "@/assets/ai-scenes-2.jpg.asset.json";
import healthBanner from "@/assets/health-banner.jpg.asset.json";
import healthIcon from "@/assets/health-icon.jpg.asset.json";

export const Route = createFileRoute("/elearning-multimedia")({
  head: () => ({
    meta: [
      { title: "eLearning Multimedia | Mabasa eLearning" },
      { name: "description", content: "Video production, motion graphics, narration and interactive media that bring course content to life." },
      { property: "og:title", content: "eLearning Multimedia | Mabasa eLearning" },
      { property: "og:description", content: "Video production, motion graphics, narration and interactive media that bring course content to life." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: MultimediaPage,
});

const blocks = [
  { title: "Video Production", copy: "Scripted, narrated, and edited learning video \u2014 screen capture, talking head, and explainer formats.", tags: ["Camtasia", "Screen Capture", "Editing"] },
  { title: "Motion & Graphics", copy: "Animated explainers, custom illustration, and branded visual assets built in the Adobe Suite.", tags: ["After Effects", "Illustrator", "Branding"] },
  { title: "Audio & Narration", copy: "Clean voice-over, sound design, and accurate captioning for accessible playback everywhere.", tags: ["Voice-over", "Captions", "Sound Design"] },
];

const graphicDesigns = [
  { src: graphicDesign1.url, alt: "Online distance education symposium keynote graphic" },
  { src: graphicDesign2.url, alt: "Online distance education symposium AI graphic" },
  { src: graphicDesign3.url, alt: "Fully Online Distance Education Symposium banner" },
  { src: graphicDesign4.url, alt: "Online symposium opening screen graphic" },
];

const videos = [
  { id: "c7jg8flVMd0", title: "AI-Powered Learning Experience Design with NoteLMS" },
  { id: "NKolBmwAArU", title: "SOAR banner created with Camtasia" },
  { id: "ZwUPGMLVuVI", title: "Learning summary video" },
  { id: "Fdfm1x-EQrk", title: "FODES highlight video" },
  { id: "ql_PpesheF8", title: "ACADEX reflection session motion graphic" },
];

function ShowcaseHeading({ children }: { children: string }) {
  return (
    <div className="surface-band border-y border-foreground/10">
      <div className="mx-auto max-w-6xl px-5 py-7">
        <h2 className="font-body text-xl font-bold sm:text-2xl">{children}</h2>
      </div>
    </div>
  );
}

function GalleryImage({ src, alt, className = "" }: { src: string; alt: string; className?: string }) {
  return (
    <figure className={`overflow-hidden rounded-md border border-foreground/15 bg-card ${className}`}>
      <img
        src={src}
        alt={alt}
        loading="lazy"
        width={1280}
        height={720}
        className="h-full w-full object-contain transition-transform duration-500 hover:scale-[1.015]"
      />
    </figure>
  );
}

function MultimediaShowcase() {
  return (
    <section aria-label="Multimedia portfolio" className="surface-hero">
      <ShowcaseHeading>Graphic Design</ShowcaseHeading>
      <div className="mx-auto grid max-w-6xl gap-6 px-5 py-10 sm:grid-cols-2">
        {graphicDesigns.map((image) => (
          <GalleryImage key={image.src} {...image} className="aspect-video" />
        ))}
      </div>

      <ShowcaseHeading>Videos (Canva, CapCut &amp; Camtasia)</ShowcaseHeading>
      <div className="mx-auto grid max-w-6xl gap-6 px-5 py-10 sm:grid-cols-2 lg:grid-cols-3">
        {videos.map((video, index) => (
          <figure
            key={video.id}
            className={`overflow-hidden rounded-md border border-foreground/15 bg-card ${index === 4 ? "sm:col-span-2" : ""}`}
          >
            <iframe
              src={`https://www.youtube-nocookie.com/embed/${video.id}`}
              title={video.title}
              loading="lazy"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              className="aspect-video w-full"
            />
          </figure>
        ))}
      </div>

      <ShowcaseHeading>Generative AI Prompt Engineering (Avatars)</ShowcaseHeading>
      <div className="mx-auto grid max-w-6xl gap-6 px-5 py-10 lg:grid-cols-[3fr_1fr]">
        <GalleryImage src={aiAvatarsBoard.url} alt="Collection of AI-generated professional learning avatars" className="aspect-video" />
        <GalleryImage src={aiAvatarPortrait.url} alt="AI-generated professional male learning avatar" className="min-h-72" />
      </div>

      <ShowcaseHeading>Generative AI &amp; Prompt Engineering (Scenes)</ShowcaseHeading>
      <div className="mx-auto grid max-w-6xl gap-6 px-5 py-10 sm:grid-cols-2">
        <GalleryImage src={aiScenes1.url} alt="AI-generated workplace learning scenario storyboard" className="aspect-video" />
        <GalleryImage src={aiScenes2.url} alt="AI-generated healthcare learning scenario storyboard" className="aspect-video" />
      </div>

      <ShowcaseHeading>Banners / Icons</ShowcaseHeading>
      <div className="mx-auto grid max-w-6xl items-center gap-6 px-5 py-10 lg:grid-cols-[4fr_1fr]">
        <GalleryImage src={healthBanner.url} alt="Health policy and management course banner" className="aspect-[5/1]" />
        <GalleryImage src={healthIcon.url} alt="Learning module target icon" className="mx-auto aspect-square w-full max-w-48" />
      </div>

      <ShowcaseHeading>Interactive Images</ShowcaseHeading>
      <div className="mx-auto grid max-w-6xl gap-6 px-5 py-10 sm:grid-cols-2">
        <iframe
          src="https://view.genially.com/6729c6fc4c6f9a8e6bcb4bf3"
          title="Sample approach interactive learning image"
          loading="lazy"
          allowFullScreen
          className="aspect-video w-full rounded-md border border-foreground/15 bg-card"
        />
        <iframe
          src="https://view.genially.com/69b97876a4fe1ca25e3c3d18"
          title="Fourth Industrial Revolution interactive learning image"
          loading="lazy"
          allowFullScreen
          className="aspect-video w-full rounded-md border border-foreground/15 bg-card"
        />
      </div>
    </section>
  );
}

function MultimediaPage() {
  return (
    <ServicePage
      eyebrow="Development & AI"
      title="eLearning Multimedia"
      intro="High-fidelity audiovisual assets, animated microlearning lessons, and studio-grade narration designed to turn passive viewing into active learning."
      blocks={blocks}
    >
      <MultimediaShowcase />
    </ServicePage>
  );
}
