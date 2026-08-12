# Plush Portal

I have built my toy e-commerce website - www.pokeplush.online -  check and analyse deeply in all details and elements. There is no certain branding right now, you can continue to enchance this pattern desing with sleek + 3D motinal cinematic effects + niche + apple glass..etc   or generate new concept , that the motto will go paralel with toys niche

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/11b8f7b2-aeab-4d93-8e63-c97493ba578f).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```

## Daily Price Checks

The scheduled workflow in `.github/workflows/daily-price-check.yml` runs every 24 hours at 03:00 UTC. It checks AliExpress prices, applies the 3x markup, updates the product pages and Product/Breadcrumb JSON-LD, commits changes, and lets the connected Netlify site deploy the commit.

No Netlify token is required in GitHub Actions. If AliExpress presents a CAPTCHA or no reliable price is found, the workflow fails safely and does not publish an unverified price.
