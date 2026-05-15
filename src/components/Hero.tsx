import { CatDoodle } from "@/components/icons/CatDoodle";
import { hero, site } from "@/lib/content";

export function Hero() {
  return (
    <section className="relative overflow-hidden px-5 pt-12 pb-20 md:px-8 md:pt-20 md:pb-28">
      

      <div className="relative mx-auto max-w-5xl">
        <span className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-1.5 text-xs font-medium tracking-wide text-sage shadow-sm">
          <span className="h-1.5 w-1.5 rounded-full bg-sage" />
          {hero.badge}
        </span>

        <h1
          className="font-display animate-fade-up mt-8 text-[clamp(2.5rem,7vw,4.5rem)] leading-[1.1] text-espresso"
          style={{ animationDelay: "0.15s" }}
        >
          {hero.title}
          <br />
          <span className="text-sage">{site.cafeName}</span>
        </h1>

        <p
          className="animate-fade-up mt-6 max-w-xl text-lg leading-relaxed text-espresso-muted"
          style={{ animationDelay: "0.3s" }}
        >
          {hero.subtitle}
        </p>

        <div
          className="animate-fade-up mt-8 flex flex-wrap items-center gap-4 text-sm text-espresso-muted"
          style={{ animationDelay: "0.45s" }}
        >
          <p>
            <span className="font-medium text-espresso">{site.reservationFor}</span>
          </p>
          <span className="hidden h-4 w-px bg-latte md:block" />
          <p>{site.date}</p>
          <span className="hidden h-4 w-px bg-latte md:block" />
          <p>{site.hours}</p>
        </div>

        <a
          href="#tonight"
          className="animate-fade-up mt-10 inline-flex items-center gap-2 rounded-full bg-sage px-6 py-3 text-sm font-medium text-cream transition-transform hover:scale-[1.02] active:scale-[0.98]"
          style={{ animationDelay: "0.6s" }}
        >
          {hero.cta}
          <span aria-hidden>↓</span>
        </a>

        <CatDoodle className="animate-float absolute right-4 bottom-0 h-14 w-16 text-latte-deep/40 md:right-12 md:h-20 md:w-24" />
      </div>
    </section>
  );
}
