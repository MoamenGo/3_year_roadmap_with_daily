# 3-Year (1,095-Day) Full-Stack Dev Roadmap

A day-by-day curriculum covering CS foundations, full-stack web, mobile (iOS/Android) and desktop development, and DevOps. Every day has a curated resource pack, and every lesson point (Concept, Build, Verify, Lab, Deliverable) has its own direct links.

## 🌐 Web version

Open **https://moamengo.github.io/3_year_roadmap_with_daily/** in any browser (phone, tablet or desktop). It works offline after the first visit, and Chrome/Edge show an **Install app** button to add it to your home screen or desktop.

Every push to `main` redeploys the site automatically (`.github/workflows/web-pages.yml`).

## 📱 Install on Android

1. Open the [**latest release**](https://github.com/MoamenGo/3_year_roadmap_with_daily/releases/latest) on your phone.
2. Download `3Y-Dev-Roadmap.apk`.
3. Open the file. If Android asks, allow **Install unknown apps** for your browser or file manager, then tap **Install**.

Every push to `main` builds a new APK automatically with GitHub Actions (`.github/workflows/android-apk.yml`).

## 🛠 Develop

```bash
npm install
npm run build      # compile Tailwind CSS + sync into the Android project
```

To build the APK locally you need JDK 21 and the Android SDK:

```bash
cd android && ./gradlew assembleDebug
```

Project layout:

- `www/` — the web app (`index.html`, compiled `tailwind.css`, PWA manifest, service worker, icons)
- `android/` — Capacitor Android project
- `assets/` — icon sources
