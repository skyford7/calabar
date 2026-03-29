# calabar

Calabar Tastee – Authentic Nigerian Restaurant in Edinburgh.

## 🌐 Live Website

[![Live Site](https://img.shields.io/badge/Live%20Site-Visit%20Now-brightgreen?style=for-the-badge)](https://skyford7.github.io/calabar/)

**👉 [https://skyford7.github.io/calabar/](https://skyford7.github.io/calabar/)**

> ⚠️ **One-time setup required** – after merging this PR to `main`, enable GitHub Pages using **one** of the two methods below.

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

### ✅ Quickest way – serve the `docs/` folder (no workflow needed)

1. Merge this PR into `main`
2. Go to **Settings → Pages → Build and deployment → Source**
3. Select **Deploy from a branch**
4. Choose branch **`main`** and folder **`/docs`**
5. Click **Save** — the site will be live at **https://skyford7.github.io/calabar/** within ~1 minute

The `docs/` folder at the repo root already contains the latest production build.

### 🔄 Automatic deploys – GitHub Actions workflow

Every push to `main` triggers `.github/workflows/deploy.yml` which rebuilds the site and deploys it automatically.

To use this method instead:

1. Merge this PR into `main`
2. Go to **Settings → Pages → Build and deployment → Source**
3. Select **GitHub Actions**
4. The next push to `main` (or triggering the workflow manually via **Actions → Deploy to GitHub Pages → Run workflow**) will deploy the site