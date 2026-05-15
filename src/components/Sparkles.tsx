"use client";

import { useEffect, useMemo, useState } from "react";

const COLORS = ["#f2d4d0", "#f5e6b8", "#c4a882", "#faf6f0", "#2d4a3e"];
const TOTAL_MS = 5000;

export function Sparkles() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = window.setTimeout(() => setVisible(false), TOTAL_MS);
    return () => window.clearTimeout(timer);
  }, []);

  const pieces = useMemo(
    () =>
      Array.from({ length: 108 }, (_, i) => {
        const delaySec = (i % 30) * 0.05;
        const durationSec = Math.min(4, TOTAL_MS / 1000 - delaySec - 0.1);

        return {
          id: i,
          left: `${(i * 7 + 5) % 100}%`,
          delay: `${delaySec}s`,
          duration: `${durationSec}s`,
          color: COLORS[i % COLORS.length],
          size: 4 + (i % 3) * 2,
        };
      }),
    [],
  );

  if (!visible) return null;

  return (
    <div
      className="pointer-events-none fixed inset-0 z-[100] overflow-hidden"
      aria-hidden
    >
      {pieces.map((p) => (
        <span
          key={p.id}
          className="sparkle-piece"
          style={{
            left: p.left,
            animationDelay: p.delay,
            animationDuration: p.duration,
            backgroundColor: p.color,
            width: p.size,
            height: p.size,
          }}
        />
      ))}
    </div>
  );
}
