# BooAI Base Marketplace

Minimal Next.js (App Router) mini-app for Base + Farcaster.

Files included:
- marketplace UI (components)
- connect wallet
- OpenSea proxy at /api/opensea
- Drop API at /api/drops (demo in-memory)
- mint and drop pages (demo UI)
- Farcaster manifest served from public/.well-known/farcaster.json
- public/manifest.json for app icon/splash metadata

IMPORTANT:
1. Add your OpenSea API key to Vercel environment variables:
   Name: OPEN_SEA_API_KEY
   Value: (your api key)

2. Deploy on Vercel (Import repo). If Vercel caches old builds, use "Redeploy with Clear Build Cache".

3. Visit: https://your-vercel-url/ to test.
4. Open: https://your-vercel-url/api/opensea?limit=6 to check proxy results.

This repo is JS-only to avoid TypeScript build issues on phone.
