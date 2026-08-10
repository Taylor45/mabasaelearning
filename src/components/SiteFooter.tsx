export function SiteFooter() {
  return (
    <footer className="bg-ink">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-2 px-5 py-10 text-center">
        <p className="font-display text-lg">Mabasa.</p>
        <p className="text-sm text-muted-foreground">
          Instructional Design &middot; eLearning Development &middot; AI in Learning
        </p>
        <p className="text-xs text-muted-foreground">
          &copy; {new Date().getFullYear()} Melvon Mabasa. All rights reserved.
        </p>
      </div>
    </footer>
  );
}