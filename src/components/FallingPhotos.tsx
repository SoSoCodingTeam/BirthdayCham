"use client";

import { bcnPhotos } from "@/lib/bcn-images";
import Image from "next/image";
import { useEffect, useMemo, useState, type CSSProperties } from "react";

const TOTAL_MS = 5000;

export function FallingPhotos() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = window.setTimeout(() => setVisible(false), TOTAL_MS);
    return () => window.clearTimeout(timer);
  }, []);

  const items = useMemo(() => {
    if (bcnPhotos.length === 0) return [];

    const count = Math.max(bcnPhotos.length * 3, 9);

    return Array.from({ length: count }, (_, i) => {
      const src = bcnPhotos[i % bcnPhotos.length];
      const w = 52 + (i % 5) * 14;
      const delaySec = (i % 10) * 0.1;
      const durationSec = Math.min(4.2, TOTAL_MS / 1000 - delaySec - 0.15);

      return {
        id: i,
        src,
        left: `${(i * 17 + 3) % 92}%`,
        delay: `${delaySec}s`,
        duration: `${durationSec}s`,
        rot: -18 + ((i * 13) % 36),
        drift: `${((i % 7) - 3) * 18}px`,
        width: w,
        height: Math.round(w * 1.2),
      };
    });
  }, []);

  if (!visible || items.length === 0) return null;

  return (
    <div
      className="pointer-events-none fixed inset-0 z-[101] overflow-hidden"
      aria-hidden
    >
      {items.map((item) => (
        <div
          key={item.id}
          className="falling-photo"
          style={
            {
              left: item.left,
              animationDelay: item.delay,
              "--fall-duration": item.duration,
              "--fall-rot": `${item.rot}deg`,
              "--fall-drift": item.drift,
            } as CSSProperties
          }
        >
          <Image
            src={item.src}
            alt=""
            width={item.width}
            height={item.height}
            className="h-auto w-full"
          />
        </div>
      ))}
    </div>
  );
}
