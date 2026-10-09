<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

- Keep wireframe gallery interactions in a dedicated browser-side viewer using Radix Dialog for modal focus management and keyboard dismissal.
- Keep document fullscreen previews in a shared Radix Dialog viewer so mobile reading fills the viewport and closing restores focus.
- Keep multimedia video previews in a shared Radix Dialog viewer with only one player mounted per video so fullscreen dismissal restores focus and prevents duplicate audio.
- Use the shared header's Radix menu on desktop and focus-managed sheet on mobile so all portfolio navigation remains keyboard and touch accessible.
- Keep audio comparisons in a shared browser-side player with dynamically imported WaveSurfer and native audio controls; coordinate playback so recordings never overlap.
