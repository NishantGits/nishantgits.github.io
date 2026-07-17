---
title: 🌱 Terrai
description: "Smart agricultural advisor and irrigation planner with real-time weather and ET0 calculation"
sidebar_position: 5
---

# 🌱 Terrai

## 🌾 Overview

Terrai is an expert intelligent agricultural assistant and dynamic irrigation planner. Built for farmers, agriculturalists, and gardeners, it calculates crop water demand using real-time meteorology and Penman-Monteith potential evapotranspiration (ET₀) principles. Powered by a custom OpenAI-compatible FlowChat AI backend, Terrai delivers tailored, actionable agronomic advice to optimize yields while preserving precious water resources.

## 🚀 Key Features

### **Dynamic Irrigation Planning**
- **Penman-Monteith ET₀ Calculations**: Leverages temperature, humidity, wind velocity, and solar radiation to compute exact soil evapotranspiration coefficients.
- **Crop Coefficient (Kc) Tuning**: Features growth-stage specific Kc tuning for a wide array of crops including vegetables, fruits, legumes, grains, and cash crops.
- **Net Moisture Deficit Math**: Offsets crop water requirements against ambient local precipitation, preventing overwatering or crop strain.

### **Climatological Sensor Matrix**
- **Real-Time Weather Station**: Fetches instantaneous relative humidity, solar UV indexes, wind velocities, and temperatures via Open-Meteo integration.
- **7-Day Agricultural Forecast**: Visualizes next-week weather trends alongside projected solar ET₀ levels so you can plan operations ahead of time.

### **Generative AI Advisor**
- **Agronomic Advisor Bot**: Chat-based agricultural consultant powered by the standard `flow-turbo` model at flowchats.org.
- **Soil Strain Assessment**: Automatically warns users of critical soil strain risks under persistent heatwaves or water deficits.
- **Instant Report Exporter**: Download a complete, beautifully compiled summary report of crop parameters, weather metrics, water demand math, and chat advice logs.

## 🔧 Getting Started

### Quick Start

Get the project up and running on your local machine:

```bash
# Clone the repository
git clone https://github.com/nishantgits/terrai.git

# Navigate into the directory
cd terrai

# Install dependencies
npm install
```

### 2. Configure Environment Variables

The application is fully client-side and interacts with the FlowChat API. You can pre-configure a default API key or let users provide it in-app.

Create a `.env` file in the root directory:

```bash
cp .env.example .env
```

Open `.env` and add your FlowChat API key:

```env
VITE_FLOWCHAT_API_KEY=your_flowchat_api_key_here
```

::::info
**Note**: Replace `your_flowchat_api_key_here` with your actual FlowChat key. Get yours at [flowchats.org](https://flowchats.org).
::::

### 3. Development

Start the local development server:

```bash
npm run dev
```

## 🚀 Deployment

### Build for Production

Before deploying, generate the optimized production build:

```bash
npm run build
```

### Option A: Vercel (Recommended)

The easiest way to deploy is using the Vercel CLI:

```bash
# Install CLI
npm i -g vercel

# Deploy
vercel --prod
```

**Note**: Ensure you add `VITE_FLOWCHAT_API_KEY` in Project Settings > Environment Variables on your Vercel dashboard.

### Option B: Netlify

```bash
# Install CLI
npm i -g netlify-cli

# Deploy
netlify deploy --prod --dir=dist
```

### Alternative Deployment Methods

- **GitHub Integration**: Connect your repository to Vercel or Netlify for automatic "push-to-deploy" on commits to `main`.
- **Drag & Drop**: You can manually upload the compiled `dist` folder to the Netlify or Vercel web dashboards.
- **Local Persistence**: State is stored in standard `localStorage` under `terrai_state` and `terrai_api_key` for reliable offline-first persistence.

::::note
🌐 **Live Demo**: [https://terrai-flax.vercel.app](https://terrai-flax.vercel.app)

📝 **Note**: This is a high-performance demonstration project showcasing advanced agricultural math and custom AI integrations.
::::

---

## 🚀 **Optimize Your Irrigation with Terrai**

**Ready to bring expert agricultural intelligence to your fields?**

🌐 **Live Site**: [https://terrai-flax.vercel.app](https://terrai-flax.vercel.app)

🐙 **GitHub Repository**: [https://github.com/nishantgits/terrai](https://github.com/nishantgits/terrai)

📧 **Contact**: For farm integrations, partnerships, or support, reach out via Github.

💡 **Tip**: Enter your farm GPS coordinates inside the Setup Screen to automatically load highly localized meteorology values!

---

⚡️ Powered by Open-Meteo and FlowChat AI. Made by NishantGits.
