"use client";

import { FallingPhotos } from "@/components/FallingPhotos";
import { Sparkles } from "@/components/Sparkles";
import { Reveal } from "@/components/Reveal";
import { site, surprise } from "@/lib/content";
import { playSurpriseSound } from "@/lib/surprise-sound";
import { useCallback, useState } from "react";

export function Surprise() {
  const [burst, setBurst] = useState(0);

  const handleOpen = useCallback(() => {
    playSurpriseSound();
    setBurst((n) => n + 1);
  }, []);

  return (
    <>
      {burst > 0 && (
        <>
          <Sparkles key={`sparkles-${burst}`} />
          <FallingPhotos key={`falling-${burst}`} />
        </>
      )}
      <section
        id="surprise"
        className="px-5 py-20 md:px-8 md:py-28"
      >
        <div className="mx-auto max-w-2xl text-center">
          <Reveal>
            <div className="paper-card mx-auto max-w-md rounded-3xl p-10 md:p-14">
              <p className="text-4xl" aria-hidden>
                🎂
              </p>
              <h2 className="font-display mt-6 text-3xl text-espresso md:text-4xl">
                {surprise.title}
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-espresso-muted">
                {surprise.body}
              </p>
              <button
                type="button"
                onClick={handleOpen}
                className="mt-8 w-full rounded-full bg-blush-deep px-8 py-4 text-sm font-medium text-espresso transition-transform hover:scale-[1.02] active:scale-[0.98]"
              >
                {surprise.cta}
              </button>
              {surprise.href !== "#" && (
                <a
                  href={surprise.href}
                  className="mt-4 inline-block text-xs text-sage underline-offset-4 hover:underline"
                >
                  Open the link directly →
                </a>
              )}
            </div>
          </Reveal>
        </div>
      </section>

      <footer className="border-t border-latte/30 px-5 py-10 text-center md:px-8">
        <p className="font-display text-lg text-espresso">{site.cafeName}</p>
        <p className="mt-2 text-xs text-espresso-muted">
          Made with love for {site.name} · {site.date}
        </p>
        <p className="mt-1 text-xs text-espresso-muted/70">
          Copyright © 2026 SoSồ. All rights reserved.
        </p>
      </footer>
    </>
  );
}
