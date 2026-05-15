import { Reveal } from "@/components/Reveal";
import { playlist } from "@/lib/content";

export function Playlist() {
  return (
    <section id="playlist" className="bg-sage px-5 py-16 text-cream md:px-8 md:py-24">
      <div className="mx-auto max-w-5xl">
        <Reveal>
          <p className="text-xs font-medium tracking-widest text-cream/60 uppercase">
            Now playing
          </p>
          <h2 className="font-display mt-2 text-3xl md:text-4xl">{playlist.title}</h2>
          <p className="mt-3 max-w-md text-sm text-cream/80">{playlist.subtitle}</p>
        </Reveal>

        <ol className="mt-12 space-y-0">
          {playlist.tracks.map((track, i) => (
            <Reveal key={track.title} delay={i * 50}>
              <li className="group flex items-center gap-4 border-t border-cream/15 py-5 first:border-t-0">
                <span className="font-mono text-xs text-cream/40">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div className="min-w-0 flex-1">
                  <p className="font-display text-xl transition-transform group-hover:translate-x-1">
                    {track.title}
                  </p>
                  <p className="text-sm text-cream/60 italic">{track.artist}</p>
                </div>
                <span className="text-cream/30 transition-colors group-hover:text-cream/70">
                  ♪
                </span>
              </li>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
