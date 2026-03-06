---
sidebar_position: 5
title: Conversation Tools
---

# 🛠️ Conversation Tools

FlowChat provides powerful tools for organizing, searching, and managing your AI conversations.

## Chat Organization

### Folders (BETA, Yet to come)
Organize your chats with a folder system:
- **Create folders** for projects, topics, or time periods
- **Drag and drop** chats into folders
- **Nested folders** for complex organization

### Tags
Add flexible categorization:
- **Custom tags** - Create any label you need
- **Multiple tags** - One chat can have several tags
- **Tag filtering** - View all chats with a specific tag
- **Tag colors** - Visual organization aid

## Advanced Search

### Search Capabilities
Find any conversation instantly:
- **Full-text search** - Search within message content
- **Model filtering** - Find chats using specific models
- **Date ranges** - Locate conversations from specific periods
- **Channel filtering** - Search within specific channels
- **Participant search** - Find conversations with specific users

### Search Operators
Refine your searches:
- `model:gpt-4` - Chats using GPT-4
- `channel:project-alpha` - Chats in Project Alpha channel
- `date:last-week` - Recent conversations
- `tag:important` - Tagged chats
- Combine: `model:claude tag:research date:this-month`

### Search Results
- **Highlighted matches** - See why results were found
- **Quick preview** - Scan message context
- **Jump to location** - Open chat at exact message
- **Export results** - Save search findings

## Export Options

### Export Formats
Save your conversations in multiple formats:

| Format | Use Case |
|--------|----------|
| **JSON** | Complete data preservation, programmatic access |
| **Markdown** | Human-readable, documentation-friendly |
| **PDF** | Formal documentation, sharing externally |
| **Plain Text** | Simple, universal compatibility |

### Export Options
- **Full conversation** - Export entire chat history
- **Selected messages** - Export only highlighted messages
- **With metadata** - Include timestamps, models used, etc.
- **Clean export** - Text only, no metadata

### Batch Export
- Export entire folders
- Export by tag
- Export search results
- Scheduled exports (if configured)

## Custom System Prompts

### What are System Prompts?
System prompts set the behavior and context for AI models:
- Define the AI's role (e.g., "You are a helpful coding assistant")
- Set constraints (e.g., "Always provide code examples")
- Establish tone (e.g., "Be concise and professional")
- Add context (e.g., "We're working on a React project")

### Creating Prompts
1. Find the **System Prompt** section
2. Write your system prompt
3. Scroll down and click **Save**
4. Now every AI in a new chat will use this prompt by default!

### Using Prompts
- **Per-chat** - Select when starting a conversation
- **Global default** - Set for all new chats
- **Quick select** - Access from chat interface
- **Prompt library** - Browse saved prompts

## Temperature & Parameters

### Temperature Control
Adjust AI creativity:
- **Low (0.0-0.3)** - Focused, deterministic, repetitive
- **Medium (0.4-0.7)** - Balanced creativity and coherence
- **High (0.8-1.0)** - Creative, diverse, sometimes random

### Other Parameters
Fine-tune model behavior:
- **Max tokens** - Limit response length
- **Top-p** - Alternative to temperature
- **Frequency penalty** - Reduce repetition
- **Presence penalty** - Encourage new topics

### Parameter Presets
Save preferred settings:
- **"Precise"** - Low temperature, high accuracy tasks
- **"Creative"** - High temperature, brainstorming
- **"Balanced"** - Medium settings, general use
- Custom presets for specific workflows

## Productivity Features

### Message Actions
- **Copy** - Copy any message to clipboard
- **Quote** - Reference previous messages
- **Edit** - Refine your prompts
- **Delete** - Remove messages (with confirmation)
- **Regenerate** - Get a new response

### Keyboard Shortcuts
Speed up your workflow:
- `Ctrl/Cmd + Enter` - Send message
- `Ctrl/Cmd + /` - Focus search
- `Ctrl/Cmd + K` - Quick command palette
- `Esc` - Close modals/panels

### Auto-Save
- **Never lose work** - Drafts saved automatically
- **Restore sessions** - Pick up where you left off
- **Multiple drafts** - Work on several conversations
- **Clear drafts** - Remove when published

## Conversation Management

### Chat Lifecycle
1. **Start** - New conversation with chosen model
2. **Develop** - Build context through multiple messages
3. **Organize** - Tag, folder, or star for reference
4. **Export** - Save important findings
5. **Archive** - Store old conversations
6. **Delete** - Remove when no longer needed

### Best Practices
1. **Name conversations** - Use descriptive titles
2. **Tag consistently** - Apply relevant tags immediately
3. **Star important** - Mark valuable conversations
4. **Export regularly** - Backup critical work
5. **Clean periodically** - Archive or delete old chats

## Integration with Other Features

### + Channels
- Channel-specific organization
- Shared team conversations
- Persistent team knowledge

### + Notes
- Save excerpts to notes
- Link chats to documentation
- Build knowledge base

### + Models
- Per-chat model selection
- Model comparison tracking
- Cost monitoring
