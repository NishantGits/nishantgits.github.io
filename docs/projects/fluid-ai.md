---
title: 🤖 Fluid AI
description: Local Chatbot Site - Free!
---

# Fluid AI

**Fluid AI is a local chatbot site** that puts privacy and control first. A free, open-source solution for running AI chatbots entirely on your own infrastructure.

## 🚀 Why Fluid AI?

- **Private by default** — your chats never leave your device unless you want them to
- **Works 100% offline** with local models (Ollama)
- **Stores on Supabase** (easy to migrate)
- **Beautiful, responsive design** with dark and light mode

## ⚡ Quick Start (Local Development)

### Prerequisites

- Node.js 18+ 
- npm or yarn
- Git

### Local Quickstart

#### 1. Download
```bash
git clone https://github.com/NishantGits/fluid-ai.git
cd fluid-ai
```

#### 2. Install Dependencies
```bash
npm install
# or
yarn install
```

#### 3. Install Supabase & Run Locally
```bash
npm install supabase
npx supabase start
```

#### 4. Fill in Secrets
Create a `.env.local` file with your Supabase configuration:
```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
SUPABASE_SERVICE_ROLE_KEY=your_service_role_key
```

#### 5. Install Ollama (optional for local models)
```bash
# macOS
brew install ollama

# Linux
curl -fsSL https://ollama.ai/install.sh | sh

# Start Ollama
ollama serve
```

#### 6. Run app locally
```bash
npm run dev
# or
yarn dev
```

Visit `http://localhost:3000` to see your Fluid AI instance!

## 🔄 Updates

Check the Updates for the Fluid AI Instance (npm) in UPDATES.md. More updates are on the way!

## 🌟 Features

### 🛡️ Privacy First
- All conversations stay on your device
- Optional cloud sync with self-hosted Supabase
- No telemetry or tracking

### 🤖 Local AI Models
- Support for Ollama models
- Run entirely offline
- No API costs

### 💾 Flexible Storage
- Supabase integration for cloud sync
- Easy data migration
- Full data ownership

### 🎨 Modern UI
- Responsive design
- Dark/light mode toggle
- Beautiful chat interface
- Mobile-friendly

## 🔗 Links

- **GitHub Repository**: [github.com/NishantGits/fluid-ai](https://github.com/NishantGits/fluid-ai)
- **Live Demo**: Available when deployed
- **Issues & Feature Requests**: [GitHub Issues](https://github.com/NishantGits/fluid-ai/issues)

## 📄 License

This project is open source and available under the MIT License.

---

*Built with ❤️ by NishantGits*
