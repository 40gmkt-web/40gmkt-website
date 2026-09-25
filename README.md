# 40g Marketing Agency Website

Modern, blazing-fast web application for **40g Marketing Group** ([40gmkt.com](https://40gmkt.com)).

Built with **React 18**, **Vite**, **TypeScript**, and **Tailwind CSS**, optimized for instant global edge deployment on **Vercel**.

---

## 🚀 Key Highlights & Stack

- **Framework**: React 18 + Vite 5 + TypeScript
- **Styling**: Tailwind CSS with custom 40g color palette
- **Typography**: Official **BT Beau Sans** brand font family
- **Routing**: React Router DOM v6 with SPA rewrites configured for Vercel
- **Assets**: High-definition looping background videos, interactive Bento Grids, and official vector assets
- **Pages**:
  - `Home` (`/`)
  - `Marketplace Business` (`/marketplace`)
  - `Local Business` (`/localbusiness`)
  - `Branding` (`/branding`)
- **Backend / Form**: Vercel Serverless Function (`/api/contact.ts`) + WhatsApp direct routing

---

## 🛠️ Local Development

```bash
# Install dependencies
npm install

# Start local development server
npm run dev

# Build for production
npm run build

# Preview production build locally
npm run preview
```

---

## 🌐 Deploy to Vercel

1. Go to [vercel.com](https://vercel.com) and click **Add New Project**.
2. Select the repository `vprecinoti/40gmkt-website`.
3. Vercel will automatically detect **Vite** as the framework preset.
4. Click **Deploy**.
5. To connect your domain, go to **Project Settings > Domains** and add `40gmkt.com`.
