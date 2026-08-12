import { createFileRoute } from "@tanstack/react-router";
import { BadgeCheck, Plane, RotateCcw, Star } from "lucide-react";

import { Logo } from "@/components/pokeplush/Logo";
import { Ticker } from "@/components/pokeplush/Ticker";
import heroCharizard from "@/assets/hero-charizard.jpg";
import dragonite from "@/assets/dragonite.jpg";
import giratina from "@/assets/giratina.jpg";
import mechaBarbatos from "@/assets/mecha-barbatos.jpg";
import mechaEfreet from "@/assets/mecha-efreet.jpg";
import animeFigure from "@/assets/anime-figure.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "PokePlush — Premium Collectible Plush, Figures & Mecha Kits" },
      {
        name: "description",
        content:
          "Official licensed plush toys, anime figures and 1/144 mecha model kits. CE certified, free worldwide shipping and a 30-day money back guarantee.",
      },
      {
        property: "og:title",
        content: "PokePlush — Premium Collectible Plush, Figures & Mecha Kits",
      },
      {
        property: "og:description",
        content:
          "Official licensed plush toys, anime figures and mecha kits. Free worldwide shipping, 30-day money back guarantee.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const NAV = ["Plush", "Figures", "Mecha Kits", "Rare Finds"];

const TRUST = [
  {
    icon: BadgeCheck,
    title: "Official Licensed",
    body: "Sourced directly from authorised Japanese manufacturers.",
  },
  {
    icon: Star,
    title: "5.0 Store Rating",
    body: "Rated by collectors across 40+ countries.",
  },
  {
    icon: Plane,
    title: "Global Shipping",
    body: "Free standard delivery on every single order.",
  },
  {
    icon: RotateCcw,
    title: "30-Day Returns",
    body: "Not right for your shelf? Full money back, no questions.",
  },
];

function Price({ now, was }: { now: string; was?: string | undefined }) {
  return (
    <div className="flex items-baseline gap-2.5">
      <span className="font-display text-base font-bold tracking-tight">{now}</span>
      {was ? <span className="text-xs text-brand-black/35 line-through">{was}</span> : null}
    </div>
  );
}

function SmallTile({
  eyebrow,
  image,
  alt,
  name,
  now,
  was,
  delay,
}: {
  eyebrow: string;
  image: string;
  alt: string;
  name: string;
  now: string;
  was?: string | undefined;
  delay: string;
}) {
  return (
    <article
      className="tile-3d group flex animate-rise-in flex-col rounded-2xl border border-black/5 bg-white p-6"
      style={{ animationDelay: delay }}
    >
      <p className="mb-4 text-[10px] font-bold uppercase tracking-[0.2em] text-brand-black/40">
        {eyebrow}
      </p>
      <div className="sheen mb-4 grid aspect-square w-full place-items-center overflow-hidden rounded-xl bg-stone-50">
        <img
          src={image}
          alt={alt}
          loading="lazy"
          width={816}
          height={816}
          className="tile-media size-full object-contain mix-blend-multiply"
        />
      </div>
      <h3 className="mt-auto text-sm font-semibold leading-snug">{name}</h3>
      <div className="mt-1.5">
        <Price now={now} was={was} />
      </div>
    </article>
  );
}

function Index() {
  return (
    <div className="min-h-screen bg-brand-offwhite font-sans text-brand-black antialiased">
      <Ticker />

      <nav className="sticky top-0 z-50 border-b border-black/5 bg-white/70 backdrop-blur-xl">
        <div className="mx-auto grid max-w-7xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-6 py-4 sm:flex sm:justify-between">
          <div className="flex min-w-0 items-center gap-8">
            <Logo />
            <div className="hidden gap-6 text-[11px] font-bold uppercase tracking-[0.18em] text-brand-black/60 md:flex">
              {NAV.map((item) => (
                <a key={item} href="#vault" className="transition-colors hover:text-brand-red">
                  {item}
                </a>
              ))}
            </div>
          </div>
          <div className="shrink-0 rounded-full border border-black/10 px-4 py-1.5 text-[11px] font-bold tracking-wide">
            CART (0)
          </div>
        </div>
      </nav>

      <header className="relative mx-auto max-w-7xl px-6 py-14 md:py-20">
        <div className="grid items-center gap-14 md:grid-cols-2 md:gap-12">
          <div className="animate-rise-in">
            <span className="mb-6 inline-flex items-center bg-brand-red px-3 py-1 text-[10px] font-bold uppercase tracking-[0.22em] text-brand-offwhite">
              New Arrival
            </span>
            <h1 className="mb-6 font-display text-5xl font-bold leading-[0.9] tracking-tighter md:text-7xl lg:text-8xl">
              THE RAREST <br />
              <span className="text-brand-red">COLLECTIBLES.</span>
            </h1>
            <p className="mb-8 max-w-md text-lg leading-relaxed text-brand-black/70">
              Officially licensed plush, scale figures and mecha kits, imported from the heart of
              Akihabara. Premium quality for the dedicated collector.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href="#vault"
                className="bg-brand-black px-8 py-4 text-[11px] font-bold uppercase tracking-[0.18em] text-brand-offwhite transition-colors hover:bg-brand-red"
              >
                Shop The Drop
              </a>
              <a
                href="#vault"
                className="border border-black/10 px-8 py-4 text-[11px] font-bold uppercase tracking-[0.18em] transition-colors hover:bg-white"
              >
                View Catalog
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="studio-bloom pointer-events-none absolute -inset-10 rounded-full" />
            <div className="sheen relative grid aspect-square w-full place-items-center overflow-hidden rounded-3xl border border-black/5 bg-white">
              <img
                src={heroCharizard}
                alt="Premium orange dragon plush toy displayed on a studio pedestal"
                width={1200}
                height={1200}
                className="animate-float-soft size-full object-contain mix-blend-multiply"
              />
            </div>
            <div className="glass absolute -bottom-6 right-2 max-w-[210px] rounded-2xl p-5 md:-right-6">
              <p className="mb-1 text-[10px] font-bold uppercase tracking-[0.2em] text-brand-red">
                Featured Item
              </p>
              <p className="text-sm font-semibold leading-snug">Charizard G-Max (38cm)</p>
              <div className="mt-2">
                <Price now="€68.67" was="€123.61" />
              </div>
            </div>
          </div>
        </div>
      </header>

      <section id="vault" className="mx-auto max-w-7xl px-6 py-20">
        <div className="mb-12 flex flex-wrap items-end justify-between gap-6">
          <div className="min-w-0">
            <h2 className="font-display text-4xl font-bold tracking-tighter">CURATED VAULT</h2>
            <p className="mt-2 text-[10px] font-bold uppercase tracking-[0.2em] text-brand-black/50">
              3 Sub-Niches — 1 Unmatched Standard
            </p>
          </div>
          <a
            href="#vault"
            className="border-b-2 border-brand-red pb-1 text-[11px] font-bold uppercase tracking-[0.14em]"
          >
            View All Products
          </a>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-4 md:grid-rows-2">
          <article className="tile-3d group flex animate-rise-in flex-col rounded-3xl border border-black/5 bg-white p-8 sm:col-span-2 md:row-span-2">
            <div className="flex items-start justify-between gap-4">
              <span className="bg-brand-black px-3 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-brand-offwhite">
                Rare Import
              </span>
              <span className="font-display text-sm font-bold tracking-tight text-brand-red">
                −44% OFF
              </span>
            </div>
            <div className="sheen my-8 grid aspect-square w-full flex-1 place-items-center overflow-hidden rounded-2xl bg-stone-50">
              <img
                src={dragonite}
                alt="Dragonite Mega Evolution plush toy on a reflective studio surface"
                loading="lazy"
                width={1024}
                height={1024}
                className="tile-media size-full object-contain mix-blend-multiply"
              />
            </div>
            <div>
              <h3 className="font-display text-2xl font-bold tracking-tight">
                Dragonite Mega Evolution Plush
              </h3>
              <p className="mt-1 text-xs font-medium uppercase tracking-[0.16em] text-brand-black/40">
                Original Tomy · Pocket Monsters
              </p>
              <div className="mt-3 flex items-baseline gap-3">
                <span className="font-display text-3xl font-bold tracking-tight">€129.27</span>
                <span className="text-sm text-brand-black/35 line-through">€232.69</span>
              </div>
              <button
                type="button"
                className="mt-6 w-full bg-brand-red py-4 text-[11px] font-bold uppercase tracking-[0.2em] text-brand-offwhite transition-transform active:scale-95"
              >
                Add to Collection
              </button>
            </div>
          </article>

          <SmallTile
            eyebrow="Gunpla & Mecha"
            image={mechaBarbatos}
            alt="Dark grey and red 1/144 scale mecha model kit"
            name="MAX HG 1/144 Barbatos 4th Form"
            now="€27.09"
            was="€48.76"
            delay="80ms"
          />
          <SmallTile
            eyebrow="Anime Figures"
            image={animeFigure}
            alt="Silver-haired anime ninja collectible figure on a black display base"
            name="Hatake Kakashi Naruto Figure"
            now="€25.17"
            delay="160ms"
          />
          <SmallTile
            eyebrow="Pocket Plush"
            image={giratina}
            alt="Black and gold dragon plush curled around a red and white ball toy"
            name="Pokeball Giratina Plush"
            now="€29.22"
            was="€52.60"
            delay="240ms"
          />
          <SmallTile
            eyebrow="Import Kits"
            image={mechaEfreet}
            alt="Dark navy 1/144 scale mecha model kit holding a blade"
            name="HG HGUC 1/144 Efreet Nacht"
            now="€36.57"
            was="€65.83"
            delay="320ms"
          />
        </div>
      </section>

      <section className="bg-brand-black py-16 text-brand-offwhite">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 sm:grid-cols-2 md:grid-cols-4">
          {TRUST.map(({ icon: Icon, title, body }) => (
            <div key={title} className="flex flex-col items-center text-center">
              <div className="mb-4 rounded-full border border-white/10 p-4">
                <Icon className="size-6 text-brand-red" strokeWidth={1.75} aria-hidden="true" />
              </div>
              <h3 className="mb-2 font-display text-xs font-bold uppercase tracking-[0.18em]">
                {title}
              </h3>
              <p className="max-w-[26ch] text-xs leading-relaxed text-brand-offwhite/50">{body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-brand-red px-6 py-20 text-brand-offwhite">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="mb-6 font-display text-5xl font-bold tracking-tighter md:text-6xl">
            GET THE DROP.
          </h2>
          <p className="mb-10 text-lg font-medium text-brand-offwhite/80">
            Join 15,000+ collectors. Early access to limited edition plush and rare mecha imports.
          </p>
          <form
            className="flex flex-col gap-2 md:flex-row"
            onSubmit={(event) => event.preventDefault()}
          >
            <label htmlFor="newsletter-email" className="sr-only">
              Email address
            </label>
            <input
              id="newsletter-email"
              type="email"
              required
              placeholder="your@email.com"
              className="flex-1 bg-white px-6 py-4 font-medium text-brand-black placeholder:text-brand-black/40 focus:outline-none"
            />
            <button
              type="submit"
              className="bg-brand-black px-10 py-4 text-[11px] font-bold uppercase tracking-[0.2em] transition-colors hover:bg-white hover:text-brand-black"
            >
              Subscribe
            </button>
          </form>
          <p className="mt-6 text-[10px] font-bold uppercase tracking-[0.2em] opacity-60">
            CE Certified Quality Since 2021
          </p>
        </div>
      </section>

      <footer className="border-t border-black/5 bg-white px-6 py-12">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-8 md:flex-row">
          <Logo className="[&_span]:text-xl" />
          <div className="flex flex-wrap justify-center gap-8 text-[10px] font-bold uppercase tracking-[0.18em] text-brand-black/40">
            <a href="#vault">Privacy</a>
            <a href="#vault">Terms</a>
            <a href="#vault">Shipping Policy</a>
            <a href="#vault">Contact</a>
          </div>
          <p className="text-[10px] font-bold uppercase tracking-[0.12em] text-brand-black/40">
            © 2026 pokeplush.online — Premium Collectibles
          </p>
        </div>
      </footer>
    </div>
  );
}
