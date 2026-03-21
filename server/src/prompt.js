function buildPrompt(userText) {
  return `You are an assistant that converts unstructured text into a structured JSON summary.

Return ONLY valid JSON with this exact shape. No markdown. No explanation. No extra keys:
{
  "summary": "A single sentence capturing the core message.",
  "keyPoints": ["First key point.", "Second key point.", "Third key point."],
  "sentiment": "positive"
}

Rules:
- summary: exactly one sentence, under 30 words
- keyPoints: exactly 3 items, each a short declarative statement
- sentiment: must be exactly one of: positive, neutral, negative
- Return raw JSON only, no backticks, no markdown, no prose

Text to analyze:
${userText}`;
}

module.exports = { buildPrompt };