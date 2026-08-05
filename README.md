# Bardaval Jagadeesh — Portfolio

High-end personal portfolio with live typing, scroll motion, and a Node contact API.

**Stack:** React · TypeScript · Vite · Framer Motion · Lenis · Express · Node

## Quick start

```bash
# Install
npm install --prefix client
npm install --prefix server

# Frontend (http://localhost:5173)
npm run dev

# API in another terminal (http://localhost:5050)
npm run dev:server
```

Contact form posts to `/api/contact` (Vite proxies to the Node server in development).

## Structure

```
client/   React + TypeScript UI
server/   Express contact API
```

## Customize

- Profile, projects, skills → `client/src/data/content.ts`
- Optional email delivery → copy `server/.env.example` to `server/.env` and set `SMTP_*`

## Build

```bash
npm run build
npm run preview
```

## Deploy notes

- Host `client/dist` on Vercel / Netlify / GitHub Pages
- Host `server` on Railway / Render / Fly
- Set `VITE_API_URL` on the client to your API origin when not using the Vite proxy
