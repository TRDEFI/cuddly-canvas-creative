const Pulse = () => (
  <svg
    width="44"
    height="12"
    viewBox="0 0 44 12"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    aria-hidden="true"
    className="shrink-0 opacity-70"
  >
    <path d="M0 6H10L13 2L17 10L20 6H44" />
  </svg>
);

const Item = () => (
  <span className="mx-4 flex shrink-0 items-center font-display text-[13px] font-bold uppercase tracking-[0.14em]">
    Free Worldwide Shipping
    <Pulse />
    Official Licensed Collectibles
    <Pulse />
    30-Day Money Back Guarantee
    <Pulse />
    CE Certified
    <Pulse />
  </span>
);

export function Ticker() {
  return (
    <div className="overflow-hidden border-b border-black/10 bg-brand-red py-2 text-brand-offwhite">
      <div className="flex w-max animate-marquee whitespace-nowrap">
        <Item />
        <Item />
      </div>
    </div>
  );
}
