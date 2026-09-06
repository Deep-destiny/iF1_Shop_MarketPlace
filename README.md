# 1Fi Shop Marketplace

A responsive Expo React Native marketplace experience for shopping products with no-cost EMI plans backed by mutual funds.

## Features

- Expo React Native app with web support
- Bottom navigation for Home, Shop, EMI Dues, Limit, and Profile
- Marketplace search and category filters
- Responsive product grid for mobile, laptop, and desktop layouts
- Featured product carousel with automatic and manual scrolling
- Product cards with images, ratings, pricing, badges, and EMI details
- Product detail screen with image gallery, variants, stock status, specifications, similar products, and EMI selection
- Loading, error, retry, skeleton, and empty states
- Mock marketplace catalog covering electronics, travel, auto, home, and fashion

## Tech Stack

- Expo SDK 51
- React Native 0.74
- React 18
- TypeScript
- React Navigation
- Expo Linear Gradient
- Expo Vector Icons
- React Native Web

## Getting Started

### Requirements

- Node.js
- npm
- Expo CLI through the local project dependencies

### Install dependencies

```bash
npm install
```

### Start the Expo development server

```bash
npm start
```

### Run on web

```bash
npm run web
```

The web app is normally available at the local URL printed by Expo, for example `http://127.0.0.1:8082/` when port `8081` is already in use.

### Run on Android or iOS

```bash
npm run android
npm run ios
```

## Deploy to Vercel

This project can be deployed to Vercel as a static Expo web build.

1. Import `https://github.com/Deep-destiny/iF1_Shop_MarketPlace` into Vercel.
2. Keep the framework preset as `Other`.
3. Use `npm run build:web` as the build command.
4. Use `dist` as the output directory.
5. Deploy.

The repository includes `vercel.json` with these settings, so Vercel can also detect them automatically.

## Validation

Run the TypeScript check with:

```bash
npm run typecheck
```

## Project Structure

```text
App.tsx                         Application entry point
src/navigation/                 Bottom tabs and Shop stack navigation
src/screens/                    App screens and marketplace views
src/components/                 Reusable marketplace UI components
src/data/                       Mock data, API functions, and data hooks
src/types/                      Marketplace domain types
src/theme/                      Shared design tokens
src/utils/                      Formatting helpers
```

## Notes

The current marketplace uses local mock data and image URLs for demonstration. The data layer is separated behind API-style functions and hooks so it can be connected to a real backend later.
