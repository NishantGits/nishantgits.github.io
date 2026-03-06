---
sidebar_position: 2
title: Authentication & Security
---

# 🔐 Authentication & Security

FlowChat prioritizes security and privacy with flexible authentication options and a private-by-design architecture.

## Authentication Methods

FlowChat supports two authentication methods:

### Email & Password
Traditional email and password authentication:
- **Standard login** - Sign up with your email address
- **Password management** - Secure password storage
- **Password reset** - Self-service password recovery
- **Email verification** - Confirm your email address

### Google OAuth
Single sign-on with your Google account:
- **Familiar login experience** - Use your existing Google account
- **Google Workspace support** - Organizational domains for team access
- **Secure token handling** - Industry-standard OAuth 2.0 flow
- **No password to remember** - Google handles credential security

## Sign-In Process

### Using Email & Password
1. Click "Sign up" or "Sign in" on the login page
2. Enter your email address and password
3. Verify your email if creating a new account
4. Access your FlowChat workspace

### Using Google OAuth
1. Click "Sign in with Google" on the login page
2. Select or enter your Google account
3. Grant FlowChat permission to access basic profile information
4. You're immediately taken to your FlowChat workspace

## Security Features

### Private-by-Design
- **No external telemetry** - Usage data never leaves your deployment
- **Data isolation** - User data stays separated and secure
- **No tracking** - No analytics or monitoring sent to third parties

### Secure Session Management
- **Encrypted sessions** - All session data is encrypted
- **Automatic timeout** - Sessions expire after periods of inactivity
- **Secure cookies** - HTTP-only, secure flag enabled

### Audit-Aware Architecture
- **Action logging** - Key activities are logged for review
- **Access tracking** - Monitor who accessed what and when
- **Security monitoring** - Detect unusual access patterns

## Data Protection

### Where Your Data Lives
All data remains within your FlowChat deployment:
- Chat histories stored in your database
- Files and attachments saved locally
- Notes and knowledge base content kept internal

### What Data is Collected
FlowChat collects minimal data:
- Google profile (name, email, profile picture)
- Chat content you create
- Files you upload
- Settings and preferences

### What is NOT Collected
- No usage analytics sent externally
- No conversation content shared
- No telemetry or crash reports
- No tracking cookies

## Best Practices

### For Users
- Use a strong Google account password
- Enable 2FA on your Google account
- Sign out when finished on shared devices
- Don't share sensitive information in chats unless necessary

### For Teams
- Configure Google Workspace domain restrictions
- Regular access reviews
- Clear data retention policies
- Training on secure AI usage

## Troubleshooting

### Login Issues
- **"Access denied"** - Check if your domain is allowed
- **"Account not found"** - Verify you're using the correct Google account
- **Loop back to login** - Clear cookies and try again

### Session Problems
- **Logged out unexpectedly** - Session may have expired, sign in again
- **"Invalid session"** - Clear browser cookies for FlowChat
- **Slow loading** - Check network connection to your deployment

## Privacy Comparison

How FlowChat compares to typical cloud AI services:

| Feature | FlowChat | Typical Cloud AI |
|---------|----------|------------------|
| **Data stays internal** | ✅ Yes - Your data never leaves your deployment | ❌ No - Usually processed on provider servers |
| **No external telemetry** | ✅ Yes - No usage analytics sent externally | ❌ Usually no - Most track usage patterns |
| **Multiple auth options** | ✅ Yes - Email/password + Google OAuth | Varies - Depends on the service |
| **Custom API connections** | ✅ Yes - Bring your own API keys | ❌ No - Locked to their providers |
| **Conversation privacy** | ✅ Yes - Chats stored locally | ❌ No - Often used for model training |

<!-- ### Why FlowChat's Privacy Matters

**Your conversations stay yours**
Unlike many cloud AI services that may review or use conversations for training, FlowChat keeps everything within your deployment.

**No surprise data sharing**
We don't send your chat content, usage patterns, or metadata to external analytics services.

**Transparent handling**
See exactly where your data goes - it's all stored in your own deployment, not scattered across third-party servers.
-->