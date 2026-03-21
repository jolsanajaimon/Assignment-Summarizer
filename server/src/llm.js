const Groq = require('groq-sdk');
const { buildPrompt } = require('./prompt');

const client = new Groq({
  apiKey: process.env.GROQ_API_KEY,
});

async function summarizeText(text) {
  const prompt = buildPrompt(text);

  const response = await client.chat.completions.create({
    model: 'llama-3.1-8b-instant',
    messages: [{ role: 'user', content: prompt }],
    max_tokens: 400,
    temperature: 0.2,
  });

  const rawText = response.choices[0].message.content.trim();

  let parsed;
  try {
    parsed = JSON.parse(rawText);
  } catch {
    throw new Error(`Model returned invalid JSON: ${rawText.slice(0, 200)}`);
  }

  if (!parsed.summary || !Array.isArray(parsed.keyPoints) || !parsed.sentiment) {
    throw new Error('Model response is missing required fields.');
  }

  return {
    summary: parsed.summary,
    keyPoints: parsed.keyPoints.slice(0, 3),
    sentiment: parsed.sentiment.toLowerCase(),
  };
}

module.exports = { summarizeText };