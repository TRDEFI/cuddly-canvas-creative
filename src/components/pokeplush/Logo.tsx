export function Logo({ className = "" }: { className?: string }) {
  return (
    <span className={`flex items-center gap-2.5 ${className}`}>
      <svg viewBox="0 0 32 32" className="size-7 shrink-0" aria-hidden="true" fill="none">
        <circle cx="16" cy="16" r="15" className="fill-brand-black" />
        <path d="M1 16a15 15 0 0 1 30 0Z" className="fill-brand-red" />
        <path d="M1 16h30" stroke="currentColor" strokeOpacity="0.25" strokeWidth="1.5" />
        <circle cx="16" cy="16" r="5.5" className="fill-brand-offwhite" />
        <circle cx="16" cy="16" r="2.5" className="fill-brand-red" />
      </svg>
      <span className="font-display text-2xl font-bold leading-none tracking-tighter">
        POKE<span className="text-brand-red">PLUSH</span>
      </span>
    </span>
  );
}
