function validateInput(text) {
  if (!text) return 'Text is required.';
  if (typeof text !== 'string') return 'Text must be a string.';
  if (text.trim().length === 0) return 'Text cannot be empty.';
  if (text.trim().length < 20) return 'Text is too short to summarize.';
  if (text.length > 10000) return 'Text exceeds maximum length of 10,000 characters.';
  return null;
}

module.exports = { validateInput };