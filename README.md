# calabar

Calabar Tastee – Authentic Nigerian Restaurant in Edinburgh.

## Live Website

The website is automatically deployed to GitHub Pages on every push to `main`:

**[https://skyford7.github.io/calabar/](https://skyford7.github.io/calabar/)**

## Development

```bash
cd app
npm install
npm run dev
```

## Build

```bash
cd app
npm run build
```

The production build output is in `app/dist/`.

## Deployment

Pushes to `main` automatically trigger the GitHub Actions workflow (`.github/workflows/deploy.yml`) which builds and deploys the site to GitHub Pages.