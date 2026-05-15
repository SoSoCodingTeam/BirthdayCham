import { nav, site } from "@/lib/content";

export function SiteNav() {
  return (
    <header className="sticky top-0 z-50 border-b border-latte/30 bg-cream/90 backdrop-blur-md">
      <nav className="mx-auto flex max-w-5xl items-center justify-between gap-4 px-5 py-4 md:px-8">
        <a href="#" className="font-display text-lg text-espresso">
          {site.cafeName}
          <span className="ml-1.5 text-sage">☕</span>
        </a>
        <ul className="hidden items-center gap-1 md:flex">
          {nav.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="rounded-full px-3 py-1.5 text-sm text-espresso-muted transition-colors hover:bg-blush/60 hover:text-espresso"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <a
          href="#surprise"
          className="rounded-full bg-sage px-4 py-2 text-xs font-medium tracking-wide text-cream uppercase md:hidden"
        >
          Surprise
        </a>
      </nav>
      <ul className="flex gap-2 overflow-x-auto px-5 pb-3 md:hidden">
        {nav.map((link) => (
          <li key={link.href} className="shrink-0">
            <a
              href={link.href}
              className="rounded-full border border-latte/40 bg-white/60 px-3 py-1 text-xs text-espresso-muted"
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </header>
  );
}
