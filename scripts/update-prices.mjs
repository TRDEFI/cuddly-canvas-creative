import fs from "node:fs/promises";
import path from "node:path";
import scrapeAliExpress from "aliexpress-product-scraper";

const ROOT = process.cwd();
const CATALOG_PATH = path.join(ROOT, "products", "catalog.json");
const PUBLIC_PATH = path.join(ROOT, "public");
const TODAY = new Date().toISOString().slice(0, 10);

const conversionRates = { EUR: 1, USD: 0.92, GBP: 1.17, TRY: 0.028 };

function round(value) {
  return Number(value.toFixed(2));
}

function formatPrice(value) {
  return value.toFixed(2);
}

function getPagePath(product) {
  return path.join(PUBLIC_PATH, `${product.id}.html`);
}

function normalizePricing(product) {
  if (product.original_price > product.selling_price) return false;
  product.original_price = round(product.selling_price * 1.8);
  product.discount_percent = Math.round((1 - product.selling_price / product.original_price) * 100);
  return true;
}

function breadcrumbJson(product) {
  return JSON.stringify(
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://pokeplush.online/" },
        {
          "@type": "ListItem",
          position: 2,
          name: "Products",
          item: "https://pokeplush.online/products",
        },
        {
          "@type": "ListItem",
          position: 3,
          name: product.name,
          item: `https://pokeplush.online/${product.id}`,
        },
      ],
    },
    null,
    4,
  );
}

async function syncProductPage(product) {
  const pagePath = getPagePath(product);
  let html = await fs.readFile(pagePath, "utf8");
  const current = formatPrice(product.selling_price);
  const original = formatPrice(product.original_price);
  const savings = formatPrice(product.original_price - product.selling_price);

  html = html.replace(/(<span class="price-current">&euro;)\d+\.\d{2}/, `$1${current}`);
  html = html.replace(/(<span class="price-original">&euro;)\d+\.\d{2}/, `$1${original}`);
  html = html.replace(/(<span class="price-save">SAVE &euro;)[^<]+/, `$1${savings}`);
  html = html.replace(/(<td>&euro;)\d+\.\d{2}\+/, `$1${original}+`);
  html = html.replace(/("price"\s*:\s*")\d+\.\d{2}(")/, `$1${current}$2`);
  html = html.replace(/(<meta name="last-updated" content=")[^"]+/, `$1${TODAY}`);

  if (!html.includes('"@type": "BreadcrumbList"')) {
    const schema = `    <script type="application/ld+json">\n    ${breadcrumbJson(product)}\n    </script>\n`;
    html = html.replace(
      /\s*<script type="application\/ld\+json">/,
      `\n${schema}    <script type="application/ld+json">`,
    );
  }

  await fs.writeFile(pagePath, html, "utf8");
}

async function scrapeAliExpressPrice(product) {
  const match = product.aliexpress_url.match(/\/item\/(\d+)\.html/);
  if (!match) throw new Error("AliExpress product ID missing from URL");

  const data = await scrapeAliExpress(match[1], {
    reviewsCount: 0,
    timeout: 90000,
    puppeteerOptions: { headless: "new", args: ["--no-sandbox", "--disable-setuid-sandbox"] },
  });
  const currency = data.currencyInfo?.currencyCode ?? data.salePrice?.min?.currency;
  let sourcePrice = data.salePrice?.min?.value;
  if (typeof sourcePrice !== "number" || !currency)
    throw new Error("No sale price in AliExpress API response");
  if (currency === "TRY" && sourcePrice > 1000) sourcePrice /= 100;
  const normalizedPrice = sourcePrice * (conversionRates[currency] ?? 1);
  if (normalizedPrice < 1 || normalizedPrice > 500)
    throw new Error(`Unreasonable source price: ${normalizedPrice}`);
  return round(normalizedPrice);
}

async function syncOnly(catalog) {
  let catalogChanged = false;
  for (const product of catalog.products) {
    catalogChanged = normalizePricing(product) || catalogChanged;
    await syncProductPage(product);
  }
  if (catalogChanged) await fs.writeFile(CATALOG_PATH, JSON.stringify(catalog, null, 2));
  console.log(`Synchronized ${catalog.products.length} product pages.`);
}

async function updatePrices(catalog) {
  let successfulChecks = 0;
  let changed = false;

  for (const product of catalog.products) {
    try {
      const sourcePrice = await scrapeAliExpressPrice(product);
      const oldSourcePrice = product.aliexpress_price;
      if (
        oldSourcePrice > 0 &&
        (sourcePrice > oldSourcePrice * 10 || sourcePrice < oldSourcePrice / 10)
      ) {
        console.warn(
          `Skipped suspicious price for ${product.id}: ${sourcePrice} vs ${oldSourcePrice}`,
        );
        continue;
      }
      const sellingPrice = round(sourcePrice * (product.price_multiplier || 3));
      product.aliexpress_price = sourcePrice;
      product.selling_price = sellingPrice;
      product.original_price = round(sellingPrice * 1.8);
      product.discount_percent = Math.round((1 - sellingPrice / product.original_price) * 100);
      product.last_price_check = new Date().toISOString();
      product.price_history ??= [];
      if (product.price_history.at(-1)?.date !== TODAY) {
        product.price_history.push({
          date: TODAY,
          aliexpress_price: sourcePrice,
          selling_price: sellingPrice,
        });
        product.price_history = product.price_history.slice(-90);
      }
      successfulChecks += 1;
      changed = changed || oldSourcePrice !== sourcePrice;
      console.log(`${product.id}: €${oldSourcePrice} -> €${sourcePrice}`);
    } catch (error) {
      console.warn(`${product.id}: ${error.message}`);
    }
    await new Promise((resolve) => setTimeout(resolve, 2000));
  }

  if (successfulChecks === 0) {
    throw new Error("No product prices were verified; refusing to publish a price update.");
  }

  for (const product of catalog.products) {
    normalizePricing(product);
    await syncProductPage(product);
  }
  await fs.writeFile(CATALOG_PATH, JSON.stringify(catalog, null, 2));
  console.log(
    `Verified ${successfulChecks}/${catalog.products.length} products. Changes: ${changed}.`,
  );
}

const catalog = JSON.parse(await fs.readFile(CATALOG_PATH, "utf8"));
if (process.argv.includes("--sync-only")) {
  await syncOnly(catalog);
} else {
  await updatePrices(catalog);
}
