# Netflix Clone Media Hub

A cross-platform (Web, Mobile, Android TV) media hub powered by Jellyfin, with AI metadata, Live TV (M3U), YouTube sync, and external drive support.

## Quick Start

1. Copy `.env.example` to `.env` and fill in your Jellyfin API key.
2. Run `docker-compose up -d` to start Jellyfin and the backend.
3. Install dependencies: `yarn install`
4. Start the frontend:
   - Web: `yarn start:frontend:web`
   - Mobile: `yarn start:frontend:mobile` (scan QR with Expo Go)
   - Android TV: `yarn start:frontend:tv` (run on emulator)

## Features
- Netflix-style UI with Hero Carousels
- Live TV with M3U/XMLTV support
- AI-generated descriptions (OpenAI fallback)
- Auto-scan external HDDs/SSDs
- YouTube channel sync via TubeSync (optional)
- Deep links to Netflix/YouTube apps
