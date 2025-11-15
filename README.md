# BooAI MiniApp Marketplace

Minimal Next.js mini-app for Base + Farcaster.

Includes:
- NFT marketplace
- Connect wallet
- OpenSea API proxy at /api/opensea
- Drop creation demo at /api/drops
- Mint page demo
- Farcaster mini-app manifest in public/.well-known/farcaster.json

Setup:
- Add OPEN_SEA_API_KEY in Vercel environment variables
- Deploy & test: /api/opensea?limit=6
- Update farcaster.json URLs after deploy
