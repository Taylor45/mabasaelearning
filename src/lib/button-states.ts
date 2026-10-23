// Shared interactive states for solid (filled) action buttons.
// Every solid button carries distinct hover lift + glow, a keyboard focus
// ring with an offset gap, and pressed feedback. Reduced-motion safe.
// Tokens only — no hardcoded hex. See mem://design/interactive-states.md.

export const solidPrimaryStates =
  "transition-all duration-200 ease-out hover:-translate-y-0.5 hover:brightness-95 hover:shadow-xl hover:shadow-primary/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background active:translate-y-0.5 active:scale-[0.98] active:brightness-90 active:shadow-none motion-reduce:transition-none motion-reduce:hover:translate-y-0 motion-reduce:active:translate-y-0 motion-reduce:active:scale-100";

// Solid primary action buttons (Design Process, Open Document, View App …)
// carry the cyan brand surface; see --btn-primary in src/styles.css.
export const solidBrandStates =
  "transition-all duration-200 ease-out hover:-translate-y-0.5 hover:brightness-95 hover:shadow-xl hover:shadow-btn-primary/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-btn-primary focus-visible:ring-offset-2 focus-visible:ring-offset-card active:translate-y-0.5 active:scale-[0.98] active:brightness-90 active:shadow-none motion-reduce:transition-none motion-reduce:hover:translate-y-0 motion-reduce:active:translate-y-0 motion-reduce:active:scale-100";
