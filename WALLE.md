# 🤖 WALL-E — Discord AI Knowledge Assistant

![Node.js](https://img.shields.io/badge/Node.js-22.x-brightgreen)
![License](https://img.shields.io/badge/License-Private-red)
![Powered by](https://img.shields.io/badge/Powered_by-GPT--4o-blueviolet)
![Status](https://img.shields.io/badge/status-live-success)

WALL-E is an AI assistant. It reads documents from a GitHub repo and responds in real-time with contextual knowledge. Each user has their own memory — so conversations stay personal, even in shared channels.

---

<img src="https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExdWtqa3lxbGIyeTJjZTNvMDF0MmszaDdzcWNpNjV1a3B5N2R3ajBtMiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/iGJNOadhvBMuk/giphy.gif" width="500" alt="WALL-E in real life">

---

## 📚 Table of Contents

- [Features](#-features)
- [File Structure](#-file-structure)
- [GitHub Integration](#-github-integration)
- [Getting Started](#-getting-started)
- [How Knowledge Embedding Works](#-how-knowledge-embedding-works)
- [Testing](#-testing)
- [Built With](#-built-with)
- [Author](#-author)

---

## 🚀 Features

- ✅ **Multiformat Knowledge Embedding**  
  Supports `.txt`, `.md`, `.docx`, `.pdf`, `.xlsx`, `.json`, `.html`, `.htm` `.csv`, `.yaml`, and `.yml`.

- ✅ **Contextual GPT Responses**  
  Uses both user message history and vector-matched content chunks to generate high-quality answers.

- ✅ **GitHub Knowledge Source**

  - Automatically fetches & embeds knowledge from a public GitHub repo
  - Supports periodic auto-refresh and manual `!refresh`

- ✅ **Auto-Embedding Optimization**

  - Automatically re-embeds only files that changed (SHA256 hash check)
  - Persistent embedding storage with PostgreSQL + pgvector

- ✅ **Memory**

  - Stores the latest 10 messages per user in **PostgreSQL**
  - Maintains contextual replies even across restarts
  - Memory is separated per user, even in shared channels
  - Users can clear their memory using `!reset`
  - Admins can clear memory for others using `!reset <userId>`

- ✅ **Admin Controls (prefix-based)**

  - `!bot on` / `!bot off` — toggle response mode
  - `!refresh` — manually re-embed knowledge from GitHub
  - `!change channel to <channelId>` — move WALL-E to a new channel
  - `!reset <userId>` — reset any user's memory (admin-only)
  - `!set model <model name>` — switch between GPT models (`gpt-3.5-turbo`, `gpt-4o`)
  - `!sys` — check system resource usage (CPU, memory, load)
  - `!usage` — view total messages sent and token usage per model
  - `!usage reset` — reset all usage and token logs

- ✅ **User Controls (prefix-based)**

  - `!reset` — reset your own memory
  - `!source` — show which embedded chunks were used in the last GPT reply
  - `!files` — list filenames used in the last GPT reply

- ✅ **Custom Personality (System Prompt)**

  - Conversational tone
  - Does not act like a model or support bot
  - Supports edgy humor, sarcasm, and relaxed chat

---

## 📂 File Structure

```
📁 WALL-E/
├── core/
│   ├── initializeBotData.js        # Startup embedding + auto-refresh
│   ├── messageMemory.js            # In-memory chat context tracking
│   ├── fetchOpenAIResponse.js      # Retry-safe OpenAI call
│   ├── buildSystemPrompt.js        # Prompt builder from context chunks
│   ├── permissions.js              # Role checker
│   ├── typing.js                   # Typing animation util
├── commands/
│   ├── adminCommands.js            # !bot off, !refresh, etc.
│   ├── infoCommands.js             # !source, !files
├── events/
│   └── onMessageCreate.js          # Main message handler
├── githubFileLoader.js             # GitHub file fetching + parsing
├── knowledgeEmbedder.js            # Embedding, pgvector storage, matching
├── db.js                           # PostgreSQL connection + vector logic
├── server.js                       # Express + Discord init
├── index.html                      # Web UI for remote send
├── .env                            # Environment variables (do not commit this)
├── package.json
```

---

## 🌐 GitHub Integration

Knowledge is dynamically loaded from a private repo, which link is in the .env:

- Files must be at root
- Only supported file types are processed
- Uses `GITHUB_TOKEN` to increase API limits and access private repos

---

## 🛠️ Getting Started

### A `.env` file is needed

```env
DISCORD_TOKEN=your_discord_token
OPENAI_KEY=your_openai_key
GITHUB_TOKEN=your_github_token
DATABASE_URL=postgres://username:password@host:port/db
RENDER=true
```

> ⚠️ **Important:** Do not commit `.env` to GitHub. Add it to `.gitignore`.

## 🧱 Database Schema

These are the required PostgreSQL tables used by WALL-E for persistent memory, embedding storage, and usage tracking. Run them in order after creating your NeonDB instance.

> 💡 **Make sure `pgvector` is enabled first**  
> Run this before creating any tables:
>
> ```sql
> CREATE EXTENSION IF NOT EXISTS vector;
> ```

---

### 1. `bot_config`

Stores general configuration as key-value pairs.

```sql
CREATE TABLE bot_config (
  key TEXT PRIMARY KEY,
  value TEXT NOT NULL
);
```

---

### 2. `file_hashes`

Tracks the last known hash of each embedded file to avoid redundant processing.

```sql
CREATE TABLE file_hashes (
  file_name TEXT PRIMARY KEY,
  hash TEXT NOT NULL
);
```

---

### 3. `vectors`

Stores chunked content embeddings for vector search.

```sql
CREATE TABLE vectors (
  id SERIAL PRIMARY KEY,
  file_name TEXT NOT NULL,
  chunk TEXT NOT NULL,
  embedding vector(1536),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

---

### 4. `user_memory`

Stores message memory for each user (used in chat context).

```sql
CREATE TABLE user_memory (
  user_id TEXT PRIMARY KEY,
  memory JSONB
);
```

---

### 5. `user_logs`

Tracks token usage per model and user (useful for analytics or billing).

```sql
CREATE TABLE user_logs (
  id SERIAL PRIMARY KEY,
  user_id TEXT,
  model TEXT,
  tokens INTEGER,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

---

### 6. `bot_stats`

```sql
CREATE TABLE bot_stats (
  stat_key TEXT PRIMARY KEY,
  value INTEGER
);
```

---

## 🧠 How Knowledge Embedding Works

- At startup, WALL-E fetches all files from GitHub
- Computes SHA256 hash of each file to detect changes
- Skips unchanged files by checking their SHA256 hash
- Embeds changed chunks using `text-embedding-3-small`
- Stores results in a PostgreSQL table with `pgvector`
- Top matched chunks are retrieved using vector similarity for GPT replies

---

## 🧰 Built With

- [discord.js](https://discord.js.org/)
- [OpenAI SDK](https://www.npmjs.com/package/openai)
- [pg](https://node-postgres.com/)
- [pgvector](https://github.com/pgvector/pgvector-node)
- [mammoth](https://github.com/mwilliamson/mammoth.js)
- [pdfjs-dist](https://github.com/mozilla/pdf.js)
- [xlsx](https://www.npmjs.com/package/xlsx)
- [express](https://expressjs.com/)
- [dotenv](https://www.npmjs.com/package/dotenv)

---

## 🧠 Author

**Reinis Roberts Vāravs**
Latvia 🇱🇻 | Full-stack Developer
🌐 [Portfolio site](https://reinisvaravs.com)
🔗 [GitHub](https://github.com/reinisvaravs)

---
