import { CatDoodle } from "@/components/icons/CatDoodle";
import { Reveal } from "@/components/Reveal";
import { memoryPhotos } from "@/lib/memory-images";
import Image from "next/image";

const rotations = [
  "-rotate-2",
  "rotate-1",
  "-rotate-1",
  "rotate-2",
  "-rotate-2",
  "rotate-1",
  "-rotate-1",
  "rotate-2",
];

const frameColors = [
  "blush",
  "sage",
  "butter",
  "latte",
  "cream",
  "rose",
] as const;

export function Memories() {
  return (
    <section id="memories" className="bg-cream-dark/50 px-5 py-16 md:px-8 md:py-24">
      <div className="mx-auto max-w-5xl">
        <Reveal>
          <p className="text-xs font-medium tracking-widest text-sage uppercase">
            Wall of memories
          </p>
          <h2 className="font-display mt-2 text-3xl text-espresso md:text-4xl">
            Polaroids from the year
          </h2>
        </Reveal>

        <div className="mt-12 grid grid-cols-2 gap-8 md:grid-cols-3 md:gap-10 lg:grid-cols-4">
          {memoryPhotos.map((photo, i) => {
            const color = frameColors[i % frameColors.length];
            const rotation = rotations[i % rotations.length];

            return (
              <Reveal key={photo.src.src} delay={i * 50}>
                <article
                  className={`polaroid polaroid--${color} ${rotation} transition-transform hover:z-10 hover:rotate-0 hover:scale-[1.04]`}
                >
                  <div className="polaroid-photo">
                    <div className="polaroid-photo-inner">
                      <Image
                        src={photo.src}
                        alt={photo.alt}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                      />
                      <div
                        className="pointer-events-none absolute inset-0 bg-gradient-to-t from-espresso/25 via-transparent to-white/10"
                        aria-hidden
                      />
                      <CatDoodle className="absolute right-1.5 bottom-1.5 h-7 w-9 text-white/80 drop-shadow-md" />
                    </div>
                  </div>

                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
