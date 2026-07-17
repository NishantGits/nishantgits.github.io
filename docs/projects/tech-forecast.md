---
id: tech-forecast
title: Tech Forecast
description: "AI-powered technology forecasting platform"
sidebar_position: 4
---

# Tech Forecast

## 🌟 Overview

Tech Forecast is an innovative AI-powered platform that predicts emerging technology trends and provides insights into the future of tech. Built for NASA space apps challenge (2025), it helps people to one stay one step ahead of the future.

## 🚀 Key Features

### **Accurate Weather Forecast**
- **Accurate Forecast Information**: Precise and reliable information sourced from WeatherAPI.
- **Location-Based Forecasting**: Get weather predictions for any location worldwide
- **User-Friendly Interface**: Clean and intuitive design for easy navigation

## 🔧 Getting Started

### Quick Start

::::note
**Note:** The part of the Tech Forecast project that is open source is only the forecast section (https://tech-forecast.netlify.app/forecast) and not map(https://tech-forecast.netlify.app/map) or landing page(https://techforecast.netlify.app).
::::

Get the project up and running on your local machine:

```bash
# Clone the repository
git clone https://github.com/nishantgits/tech-forecast.git

# Navigate into the directory
cd tech-forecast

# Install dependencies
npm install
```

### 2. Configure Environment Variables

The app requires an API key from WeatherAPI.com.

Create a .env.local file in the root directory:

```bash
cp .env.example .env.local
```

Open .env.local and add your API key:

```env
VITE_WEATHER_API_KEY=your_api_key_here
```
::::info
**Note**: Replace `your_api_key_here` with your actual WeatherAPI key. Get an API key at [WeatherAPI](https://www.weatherapi.com/).
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

**Note**: Ensure you add `VITE_WEATHER_API_KEY` in Project Settings > Environment Variables on the Vercel dashboard.

### Option B: Netlify

```bash
# Install CLI
npm i -g netlify-cli

# Deploy
netlify deploy --prod --dir=dist
```

### Alternative Deployment Methods

- **GitHub Integration**: Connect your repo to Vercel or Netlify for automatic "push-to-deploy."
- **Drag & Drop**: You can manually upload the dist folder to the Netlify dashboard.
- **Custom Domains**: Both platforms offer free SSL and easy custom domain setup in their respective dashboards.

::::note
🌐 **Live Demo**: [https://techforecast.netlify.app](https://techforecast.netlify.app)

📝 **Note**: This is a demonstration project showcasing modern web development capabilities. The repository and deployment instructions are for educational purposes.
::::

---

## 🚀 **Try Tech Forecast Today**

**Ready to predict the future of technology?**

🌐 **Live Site**: [https://techforecast.netlify.app](https://techforecast.netlify.app)

🐙 **GitHub Repository**: [https://github.com/nishantgits/tech-forecast](https://github.com/nishantgits/tech-forecast)

📧 **Contact**: For partnerships or support, reach out through the main contact page

💡 **Tip**: Start with the "Trending Now" section to see what's hot in tech right now!

---

⚡️ Powered by WeatherAPI. A NASA Space Apps Challenge Project, now Open Source.