---
sidebar_position: 1
title: Multi-LLM Support
---

# 🤖 Multi-LLM Support

FlowChat provides universal model connectivity with built-in providers and the ability to add your own custom connections.

## FlowChat Built-in Models

FlowChat comes with pre-configured access to leading AI providers. Simply start using them—no setup required.

### Available Providers

| Provider | Models | Plan |
|----------|--------|------|
| **OpenAI** | GPT-OSS 120B | Free |
| **Google** | Gemma 3 27B| Free |
| **Mistral** | Ministral 3 14B | Free |
| **Google** | Gemini 3 Flash | Paid |
| **DeepSeek** | DeepSeek v3.2 | Paid |
| **Moonshot AI** | Kimi K2.5 | Paid |
| **Alibaba** | Qwen 3.5 | Paid |
| **Z.AI** | GLM 5 | Paid |
| **FlowChat** | Flow Imagen | Paid |
| **FlowChat** | Flow Code | Paid |

:::info
**Paid Plan Benefits:** Access to premium models such as Gemini 3 Flash, DeepSeek v3.2, Kimi K2.5, Qwen 3.5, GLM 5, Flow Imagen, and Flow Code. [Learn more about the Paid Plan](/features/paid-plan) or [contact support](mailto:contact@flowchats.org) to upgrade. Stripe payments are in development.
:::

## Add Your Own Models

Have your own API keys? Connect any OpenAI-compatible endpoint to FlowChat.

### How to Add a Custom Connection

1. Go to **Settings → Connections**
2. Click **+ Add Connection**
3. Enter the following:
   - **Name** - A friendly name for this connection
   - **Base URL** - The API endpoint URL
   - **API Key** - Your authentication token
   - **Model ID** - The specific model identifier (or leave empty for all models)
4. Click **Save**

Your custom model will now appear in the model selector alongside FlowChat's built-in options.

:::tip
**Custom API Connections:** Connecting any OpenAI-compatible API endpoint to FlowChat lets you bypass FlowChat's built-in model limitations and use your own API keys while our chat interface remains the same.
:::

## Key Features

### Per-Chat Model Selection
Choose different models for different conversations. Click the model dropdown in any chat to switch instantly.

### Side-by-Side Comparisons
Click the **+** icon next to the model selector to run the same prompt through multiple models simultaneously and see which performs best.

### Cost Tracking
See input and output tokens for models after the response is generated. Stay informed about your usage.

## Quick Start

### Using Built-in Models
1. Start a new chat
2. Click the model selector (top of chat)
3. Choose from available FlowChat models
4. Start chatting!

### Using Custom Connections
1. Add your API key in **Settings → Connections**
2. Select your custom model from the dropdown
3. Chat using your own provider

## Model Recommendations

| Task | Recommended Model |
|------|-------------------|
| Coding & technical | GLM 5, Flow Code |
| Quick questions | GPT-OSS 120B, Ministral 3 14B |
| Creative writing | Qwen 3.5 |
| Analysis & reasoning | DeepSeek v3.2, Kimi K2.5 |
| Speed critical | Gemini 3 Flash, Gemma 3 27B |
| Image generation | Flow Imagen |


## Tips for Best Results

1. **Premium models** (DeepSeek v3.2, Kimi K2.5, GLM 5) excel at complex reasoning
2. **Fast models** (Gemini 3 Flash, Gemma 3 27B) are great for quick iterations
3. **Custom API connections** keep data completely private with your own keys
4. **Mix providers** - use different models for different tasks
5. **Compare outputs** when unsure which model to use
