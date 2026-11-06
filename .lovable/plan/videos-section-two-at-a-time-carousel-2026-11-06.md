# Videos section: two-at-a-time carousel

## What changes
- The Videos section on the eLearning Multimedia page shows **two videos side by side**. Each video card is **544 × 307 px**, the same size as the Graphic Design cards.
- **Dots** below the videos show which pair is on screen. Click a dot to go to that pair.
- The section has **6 videos**, so they form **3 pairs**, which means 3 dots. The carousel does not move by itself.
- Small previous and next arrows sit next to the dots. Visitors can also swipe on a phone or use the arrow keys.
- On phones, one video shows at a time at full width.
- When you move to another pair, any video that is playing pauses. This stops two videos from playing sound at once.
- The faded cube artwork at the section edges stays as it is. The section title and description stay the same.

## Technical details
- In `src/routes/elearning-multimedia.tsx`, replace the video grid with the existing shadcn `Carousel` (Embla). Use `CarouselItem` at `basis-full sm:basis-1/2` inside a `max-w-6xl` container with a 24px gap, so each card is 544px wide at a 16:9 shape.
- Build the dots from `api.scrollSnapList()` and track the active one with `api.on("select")`. Dot buttons get `aria-label="Go to videos N–M"` and `aria-current`, with the active dot in brand cyan.
- Keep `VideoPreview` as is: one player per video, using the shared dialog. Inline playback stops when the slide changes.
