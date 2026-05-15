type CatDoodleProps = {
  className?: string;
};

export function CatDoodle({ className }: CatDoodleProps) {
  return (
    <svg
      viewBox="0 0 48 40"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
      className={className}
    >
      <path d="M10 14 L6 6 L14 12" />
      <path d="M22 14 L26 6 L18 12" />
      <ellipse cx="16" cy="20" rx="10" ry="8" />
      <path d="M26 20 Q36 18 40 24 Q36 30 28 28" />
      <circle cx="13" cy="19" r="1" fill="currentColor" />
      <circle cx="19" cy="19" r="1" fill="currentColor" />
      <path d="M14 24 Q16 26 18 24" />
      <path d="M30 30 L34 36 M34 30 L30 36" />
    </svg>
  );
}
