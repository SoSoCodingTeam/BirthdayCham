import { Reveal } from "@/components/Reveal";
import { aboutTonight } from "@/lib/content";

export function AboutTonight() {
  return (
    <section id="tonight" className="px-5 py-16 md:px-8 md:py-24">
      <div className="mx-auto max-w-5xl">
        <Reveal>
          <div className="paper-card overflow-hidden md:grid md:grid-cols-[1fr_2fr]">
            <div className="bg-sage p-8 text-cream md:p-10">
              <h2 className="font-display mt-3 text-3xl leading-snug md:text-4xl">
                {aboutTonight.title}
              </h2>
              <div className="mt-6 space-y-4 text-sm leading-relaxed text-cream/90">
                {aboutTonight.paragraphs.map((p) => (
                  <p key={p.slice(0, 24)}>{p}</p>
                ))}
              </div>
            </div>
            <div className="bg-white p-8 md:p-12">
              <p className="text-xs font-medium tracking-widest text-espresso-muted uppercase">
                Schedule
              </p>
              <ul className="mt-6 space-y-5">
                {aboutTonight.menuHighlights.map((row) => (
                  <li
                    key={row.item}
                    className="flex flex-col gap-1 border-b border-cream-dark pb-4 last:border-0 sm:flex-row sm:items-baseline sm:justify-between sm:gap-4"
                  >
                    <span className="shrink-0 font-mono text-sm font-medium tracking-wide text-sage">
                      {row.item}
                    </span>
                    <span className="font-display text-base text-espresso sm:text-right sm:text-lg">
                      {row.note}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
