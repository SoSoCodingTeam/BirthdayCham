import type { CSSProperties } from "react";

type PawPrintProps = {
  className?: string;
  opacity?: number;
  style?: CSSProperties;
};

export function PawPrint({
  className,
  opacity = 0.12,
  style,
}: PawPrintProps) {
  return (
    <svg
      viewBox="0 0 32 32"
      fill="currentColor"
      aria-hidden
      className={className}
      style={{ opacity, ...style }}
    >
      <ellipse cx="16" cy="22" rx="5" ry="6" />
      <ellipse cx="8" cy="12" rx="3.5" ry="4.5" />
      <ellipse cx="16" cy="9" rx="3.5" ry="4.5" />
      <ellipse cx="24" cy="12" rx="3.5" ry="4.5" />
      <ellipse cx="22" cy="18" rx="3" ry="4" />
      <ellipse cx="10" cy="18" rx="3" ry="4" />
    </svg>
  );
}
