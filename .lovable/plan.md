# Info icon opens a typing chat bubble

When the info icon by the portrait is clicked, the companies note appears like a chatbot message. It goes in the empty space under the Mission / Vision / Values list on the left, where the arrow points.

## What visitors will see
- A small round copy of Bruce's portrait (the avatar) with a speech bubble beside it.
- First a short "typing…" indicator (three bouncing dots, about 0.8s).
- Then the note types itself out word by word, with a blinking cursor until it finishes.
- Clicking the icon again, or pressing Escape, closes it. Opening it again replays the typing.
- On phones the bubble shows below the Values list, before the portrait.
- The note no longer appears under the LinkedIn / Resume buttons.

## Accessibility
- Visitors who prefer reduced motion see the full text right away, with no typing effect.
- Screen readers hear the full note once, not letter by letter.
- The icon button keeps its label and open/closed state. Focus returns to it when the bubble closes.

## Technical details
- `src/routes/index.tsx`: move the `clientsOpen` panel out of the right column and into the left column after the values `<ul>`. Add a small `ChatTypingNote` component (in the same file or `src/components/ChatTypingNote.tsx`) that takes the text and an avatar src.
- Typing runs on an interval in `useEffect` (about 25ms per character), resets when it opens, and is cleaned up on close. Reduced motion is detected via `matchMedia`.
- Visible text uses `aria-hidden`; an `sr-only` copy holds the full text. The `role="note"`, `id="clients-note"`, and existing Escape and focus handling are kept.
- Style: white bubble (`bg-surface-light`, dark text, square corners, matching the current note), a 40px round avatar, and dots using existing tokens.
- Update mem://design/clients-note.md so the new placement is the rule.
