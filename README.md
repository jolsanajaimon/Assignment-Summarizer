# Text Summarizer

A full-stack app that accepts unstructured text and returns a structured summary using an LLM API.

## Tech Stack
- Frontend: React + Vite
- Backend: Node.js + Express
- LLM: Groq API (llama-3.1-8b-instant)
- Libraries: dotenv, cors, groq-sdk

## Setup

### 1. Install dependencies
```bash
cd client && npm install
cd ../server && npm install
```

### 2. Configure API key
```bash
cp server/.env.example server/.env
# Edit server/.env and add your Groq API key
```

### 3. Run the app
```bash
# Terminal 1 - backend
cd server && node src/index.js

# Terminal 2 - frontend
cd client && npm run dev
```

Open http://localhost:5173 in your browser.

## Why Groq?
Groq provides a free API tier with no credit card required. It is fast, reliable, and compatible with the OpenAI SDK interface, making it easy to integrate.

## Prompt Design
The prompt defines a strict role, shows the exact JSON shape, enumerates allowed sentiment values, and explicitly forbids markdown output. This prevents the three most common failure modes: JSON wrapped in code fences, invented sentiment labels, and missing fields.

## Trade-offs & Shortcuts
- No authentication — not needed for a single-user local tool
- No database — results are not persisted
- Minimal UI — focused effort on LLM integration
- No test suite — would add with more time

## What I'd Add With More Time
- File upload support
- Batch processing of multiple inputs
- Unit tests for validate.js and JSON parsing
- Schema customisation via config flag

## Example Output
![App Output](screenshots/output.png)
