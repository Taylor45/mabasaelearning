# Apply the navy hero gradient to the eLearning Technology card

## What changes
On the About page, the dark eLearning Technology card gets the home page's deep midnight navy to royal indigo gradient as its background. Right now it uses a flat, semi-transparent navy fill.

- The section around it stays white.
- The heading, cyan underline, icon tiles, text, bullets, dividers, border and shadow all stay the same.

## Technical details
- In `src/routes/about.tsx` (the card div at line 164), replace `bg-expertise-software/85` with the existing `surface-hero` utility. That utility uses `--gradient-hero`, the exact 115deg gradient you gave.
- Update `mem://design/about-inspiration.md` and the Core line in `mem://index.md` so they say the card uses the hero gradient.
