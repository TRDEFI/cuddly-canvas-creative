import { createFileRoute } from "@tanstack/react-router";
import { BadgeCheck, Plane, RotateCcw, Star } from "lucide-react";

import { Logo } from "@/components/pokeplush/Logo";
import { Ticker } from "@/components/pokeplush/Ticker";

type Product = {
  href: string;
  image: string;
  alt: string;
  eyebrow: string;
  name: string;
  subtitle: string;
  now: string;
  was?: string;
  discount?: string;
};

const PRODUCTS: Product[] = [
  {
    href: "/dragonite-mega",
    image: "/scraped_data/images/dragonite/product_1.jpg",
    alt: "Dragonite Mega Evolution Plush - Original Tomy Pocket Monsters",
    eyebrow: "Rare Import",
    name: "Dragonite Mega Evolution Plush",
    subtitle: "Original Tomy · Pocket Monsters",
    now: "€129.27",
    was: "€232.69",
    discount: "−44% OFF",
  },
  {
    href: "/barbatos-gundam",
    image: "/scraped_data/images/barbatos-gundam/product_1.jpg",
    alt: "MAX HG 1/144 Barbatos 4th Form Model Kit - Iron-Blooded Orphans Assembly Kit",
    eyebrow: "Gunpla & Mecha",
    name: "MAX HG 1/144 Barbatos 4th Form",
    subtitle: "Iron-Blooded Orphans Assembly Kit",
    now: "€27.09",
    was: "€48.76",
  },
  {
    href: "/onikuma-k20-pro",
    image: "/scraped_data/images/onikuma-k20-pro/product_1.jpg",
    alt: "Hatake Kakashi Anime Naruto Figure - NARUTO Action Figure Collectible",
    eyebrow: "Anime Figures",
    name: "Hatake Kakashi Naruto Figure",
    subtitle: "NARUTO Action Figure Collectible",
    now: "€25.17",
  },
  {
    href: "/giratina-plush",
    image: "/scraped_data/images/giratina/product_1.jpg",
    alt: "Pokeball Giratina Plush - Official Bandai Collectible",
    eyebrow: "Pocket Plush",
    name: "Pokeball Giratina Plush",
    subtitle: "Official Bandai Collectible",
    now: "€29.22",
    was: "€52.60",
  },
  {
    href: "/efreet-gundam",
    image: "/scraped_data/images/efreet-gundam/product_1.jpg",
    alt: "HG HGUC 1/144 Efreet Nacht Model Kit - Mech Assembly Action Figure",
    eyebrow: "Import Kits",
    name: "HG HGUC 1/144 Efreet Nacht",
    subtitle: "Mech Assembly Action Figure",
    now: "€36.57",
    was: "€65.83",
  },
  {
    href: "/charizard-gmax",
    image: "/scraped_data/images/charizard/product_1.jpg",
    alt: "Charizard G-Max Wildfire Plush - 38cm Premium Anime Collectible",
    eyebrow: "Featured Plush",
    name: "Charizard G-Max Wildfire Plush",
    subtitle: "38cm Premium Anime Collectible",
    now: "€68.67",
    was: "€123.61",
  },
];

const NAV = [
  { label: "Plush", href: "/products" },
  { label: "Figures", href: "/products" },
  { label: "Mecha Kits", href: "/products" },
  { label: "Rare Finds", href: "/products" },
];

const TRUST = [
  {
    icon: BadgeCheck,
    title: "Curated Quality",
    body: "Selected collectibles with detailed product information and real photos.",
  },
  {
    icon: Star,
    title: "Collector Focused",
    body: "A focused selection of plush, figures and mecha kits for your shelf.",
  },
  {
    icon: Plane,
    title: "Global Shipping",
    body: "Free standard delivery on every order through our current store flow.",
  },
  {
    icon: RotateCcw,
    title: "30-Day Returns",
    body: "Our existing product pages include the current money-back policy.",
  },
];

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "PokePlush — Premium Collectible Plush, Figures & Mecha Kits" },
      {
        name: "description",
        content:
          "Discover curated plush toys, anime figures and 1/144 mecha model kits. Shop real collectible products with free worldwide shipping and a 30-day money back guarantee.",
      },
      { name: "google-site-verification", content: "99OZLhtJ05cezY4CEd0Ukh_s2_SNM3fCkv7bUKAuWlQ" },
      { name: "last-updated", content: "2026-08-12" },
      {
        property: "og:title",
        content: "PokePlush — Premium Collectible Plush, Figures & Mecha Kits",
      },
      {
        property: "og:description",
        content: "Curated plush, figures and mecha kits for dedicated collectors.",
      },
      {
        property: "og:image",
        content: "https://pokeplush.online/scraped_data/images/charizard/product_1.jpg",
      },
      { property: "og:image:alt", content: "Charizard G-Max Wildfire Plush collectible" },
      { property: "og:url", content: "https://pokeplush.online/" },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "PokePlush" },
      { name: "twitter:card", content: "summary_large_image" },
      {
        name: "twitter:title",
        content: "PokePlush — Premium Collectible Plush, Figures & Mecha Kits",
      },
      {
        name: "twitter:description",
        content: "Curated plush, anime figures and mecha kits for dedicated collectors.",
      },
      {
        name: "twitter:image",
        content: "https://pokeplush.online/scraped_data/images/charizard/product_1.jpg",
      },
    ],
    links: [{ rel: "canonical", href: "https://pokeplush.online/" }],
  }),
  component: Index,
});

function Price({ now, was }: { now: string; was?: string | undefined }) {
  return (
    <div className="flex items-baseline gap-2.5">
      <span className="font-display text-base font-bold tracking-tight">{now}</span>
      {was ? <span className="text-xs text-brand-black/35 line-through">{was}</span> : null}
    </div>
  );
}

function SmallTile({ product, delay }: { product: Product; delay: string }) {
  return (
    <a
      href={product.href}
      className="tile-3d group flex animate-rise-in flex-col rounded-2xl border border-black/5 bg-white p-6"
      style={{ animationDelay: delay }}
    >
      <p className="mb-4 text-[10px] font-bold uppercase tracking-[0.2em] text-brand-black/40">
        {product.eyebrow}
      </p>
      <div className="sheen mb-4 grid aspect-square w-full place-items-center overflow-hidden rounded-xl bg-stone-50">
        <img
          src={product.image}
          alt={product.alt}
          loading="lazy"
          width={960}
          height={960}
          className="tile-media size-full object-contain mix-blend-multiply"
        />
      </div>
      <h3 className="mt-auto text-sm font-semibold leading-snug">{product.name}</h3>
      <p className="mt-1 text-[10px] font-medium uppercase tracking-[0.12em] text-brand-black/40">
        {product.subtitle}
      </p>
      <div className="mt-1.5">
        <Price now={product.now} was={product.was} />
      </div>
    </a>
  );
}

function Index() {
  const hero = PRODUCTS[5]!;
  const vaultLead = PRODUCTS[0]!;
  const vaultTiles = PRODUCTS.slice(1, 5);
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "PokePlush Featured Collectibles",
    itemListElement: PRODUCTS.map((product, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: product.name,
      url: `https://pokeplush.online${product.href}`,
      image: `https://pokeplush.online${product.image}`,
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <div className="min-h-screen bg-brand-offwhite font-sans text-brand-black antialiased">
        <Ticker />

        <nav
          aria-label="Main navigation"
          className="sticky top-0 z-50 border-b border-black/5 bg-white/70 backdrop-blur-xl"
        >
          <div className="mx-auto grid max-w-7xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-6 py-4 sm:flex sm:justify-between">
            <div className="flex min-w-0 items-center gap-8">
              <a href="/" aria-label="PokePlush home">
                <Logo />
              </a>
              <div className="hidden gap-6 text-[11px] font-bold uppercase tracking-[0.18em] text-brand-black/60 md:flex">
                {NAV.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    className="transition-colors hover:text-brand-red"
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            </div>
            <a
              href="/products"
              className="shrink-0 rounded-full border border-black/10 px-4 py-1.5 text-[11px] font-bold tracking-wide transition-colors hover:border-brand-red hover:text-brand-red"
            >
              ALL PRODUCTS (14)
            </a>
          </div>
        </nav>

        <header className="relative mx-auto max-w-7xl px-6 py-14 md:py-20">
          <div className="grid items-center gap-14 md:grid-cols-2 md:gap-12">
            <div className="animate-rise-in">
              <span className="mb-6 inline-flex items-center bg-brand-red px-3 py-1 text-[10px] font-bold uppercase tracking-[0.22em] text-brand-offwhite">
                Curated Drop
              </span>
              <h1 className="mb-6 font-display text-5xl font-bold leading-[0.9] tracking-tighter md:text-7xl lg:text-8xl">
                THE RAREST <br />
                <span className="text-brand-red">COLLECTIBLES.</span>
              </h1>
              <p className="mb-8 max-w-md text-lg leading-relaxed text-brand-black/70">
                A focused selection of plush, anime figures and mecha kits for collectors who care
                about the details.
              </p>
              <div className="flex flex-wrap gap-3">
                <a
                  href="#vault"
                  className="bg-brand-black px-8 py-4 text-[11px] font-bold uppercase tracking-[0.18em] text-brand-offwhite transition-colors hover:bg-brand-red"
                >
                  Shop The Drop
                </a>
                <a
                  href={hero.href}
                  className="border border-black/10 px-8 py-4 text-[11px] font-bold uppercase tracking-[0.18em] transition-colors hover:bg-white"
                >
                  View Featured
                </a>
              </div>
            </div>

            <div className="relative">
              <div className="studio-bloom pointer-events-none absolute -inset-10 rounded-full" />
              <a
                href={hero.href}
                className="sheen relative grid aspect-square w-full place-items-center overflow-hidden rounded-3xl border border-black/5 bg-white"
              >
                <img
                  src={hero.image}
                  alt={hero.alt}
                  width={960}
                  height={960}
                  className="animate-float-soft size-full object-contain mix-blend-multiply"
                />
              </a>
              <a
                href={hero.href}
                className="glass absolute -bottom-6 right-2 max-w-[230px] rounded-2xl p-5 md:-right-6"
              >
                <p className="mb-1 text-[10px] font-bold uppercase tracking-[0.2em] text-brand-red">
                  Featured Item
                </p>
                <p className="text-sm font-semibold leading-snug">{hero.name}</p>
                <div className="mt-2">
                  <Price now={hero.now} was={hero.was} />
                </div>
              </a>
            </div>
          </div>
        </header>

        <section id="vault" className="mx-auto max-w-7xl px-6 py-20">
          <div className="mb-12 flex flex-wrap items-end justify-between gap-6">
            <div className="min-w-0">
              <h2 className="font-display text-4xl font-bold tracking-tighter">CURATED VAULT</h2>
              <p className="mt-2 text-[10px] font-bold uppercase tracking-[0.2em] text-brand-black/50">
                6 Real Products · Direct Links to the Existing Store Pages
              </p>
            </div>
            <a
              href="/products"
              className="border-b-2 border-brand-red pb-1 text-[11px] font-bold uppercase tracking-[0.14em]"
            >
              View All Products (14)
            </a>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-4 md:grid-rows-2">
            <a
              href={vaultLead.href}
              className="tile-3d group flex animate-rise-in flex-col rounded-3xl border border-black/5 bg-white p-8 sm:col-span-2 md:row-span-2"
            >
              <div className="flex items-start justify-between gap-4">
                <span className="bg-brand-black px-3 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-brand-offwhite">
                  {vaultLead.eyebrow}
                </span>
                <span className="font-display text-sm font-bold tracking-tight text-brand-red">
                  {vaultLead.discount}
                </span>
              </div>
              <div className="sheen my-8 grid aspect-square w-full flex-1 place-items-center overflow-hidden rounded-2xl bg-stone-50">
                <img
                  src={vaultLead.image}
                  alt={vaultLead.alt}
                  loading="lazy"
                  width={960}
                  height={960}
                  className="tile-media size-full object-contain mix-blend-multiply"
                />
              </div>
              <div>
                <h3 className="font-display text-2xl font-bold tracking-tight">{vaultLead.name}</h3>
                <p className="mt-1 text-xs font-medium uppercase tracking-[0.16em] text-brand-black/40">
                  {vaultLead.subtitle}
                </p>
                <div className="mt-3">
                  <Price now={vaultLead.now} was={vaultLead.was} />
                </div>
                <span className="mt-6 block w-full bg-brand-red py-4 text-center text-[11px] font-bold uppercase tracking-[0.2em] text-brand-offwhite transition-colors group-hover:bg-brand-black">
                  View Product
                </span>
              </div>
            </a>

            {vaultTiles.map((product, index) => (
              <SmallTile key={product.href} product={product} delay={`${(index + 1) * 80}ms`} />
            ))}
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
                <p className="max-w-[26ch] text-xs leading-relaxed text-brand-offwhite/50">
                  {body}
                </p>
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
              Get new arrivals and stock alerts from PokePlush.
            </p>
            <form
              name="subscribe-home"
              method="POST"
              action="/?subscribed=true"
              data-netlify="true"
              netlify-honeypot="bot-field"
              className="flex flex-col gap-2 md:flex-row"
            >
              <input type="hidden" name="form-name" value="subscribe-home" />
              <p className="hidden">
                <label>
                  Don’t fill this out if you’re human: <input name="bot-field" />
                </label>
              </p>
              <label htmlFor="newsletter-email" className="sr-only">
                Email address
              </label>
              <input
                id="newsletter-email"
                name="email"
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
              Free worldwide shipping · 30-day money back guarantee
            </p>
          </div>
        </section>

        <footer className="border-t border-black/5 bg-white px-6 py-12">
          <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-8 md:flex-row">
            <a href="/" aria-label="PokePlush home">
              <Logo className="[&_span]:text-xl" />
            </a>
            <div className="flex flex-wrap justify-center gap-8 text-[10px] font-bold uppercase tracking-[0.18em] text-brand-black/40">
              <a href="/products">All Products (14)</a>
              <a href="mailto:hello@pokeplush.online">Contact</a>
              <a href="/sitemap.xml">Sitemap</a>
            </div>
            <p className="text-[10px] font-bold uppercase tracking-[0.12em] text-brand-black/40">
              © 2026 pokeplush.online — Premium Collectibles
            </p>
          </div>
        </footer>
      </div>
    </>
  );
}
