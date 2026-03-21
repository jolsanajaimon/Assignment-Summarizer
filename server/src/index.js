require('dotenv').config();
const express = require('express');
const cors = require('cors');
const { summarizeText } = require('./llm');
const { validateInput } = require('./validate');

const app = express();
const PORT = process.env.PORT || 3001;

if (!process.env.GROQ_API_KEY) {
  console.error('ERROR: GROQ_API_KEY is not set. Create server/.env from server/.env.example');
  process.exit(1);
}

app.use(cors());
app.use(express.json());

app.get('/health', (req, res) => {
  res.json({ status: 'ok' });
});

app.post('/api/summarize', async (req, res) => {
  const { text } = req.body;
  const validationError = validateInput(text);
  if (validationError) {
    return res.status(400).json({ error: validationError });
  }

  try {
    const result = await summarizeText(text.trim());
    return res.json(result);
  } catch (err) {
    console.error('LLM call failed:', err.message);
    return res.status(500).json({
      error: 'Summarization failed. Check your API key and try again.'
    });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});