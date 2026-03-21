import { useState } from 'react';
import TextInput from './components/TextInput';
import ResultCard from './components/ResultCard';
import ErrorBanner from './components/ErrorBanner';

function App() {
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  async function handleSubmit(text) {
    setLoading(true);
    setError(null);
    setResult(null);

    try {
      const res = await fetch('https://assignment-summarizer-iac9.onrender.com/api/summarize', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ text }),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.error || 'Something went wrong.');
      } else {
        setResult(data);
      }
    } catch (err) {
      setError('Could not reach the server. Make sure the backend is running.');
    } finally {
      setLoading(false);
    }
  }

  return (
    <div style={{
      minHeight: '100vh',
      width: '100vw',
      background: 'linear-gradient(135deg, #0f0c29, #302b63, #24243e)',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      padding: '8px 20px',
      fontFamily: "'Segoe UI', sans-serif",
      boxSizing: 'border-box',
      overflowX: 'hidden',
    }}>
      <div style={{
        width: '100%',
        maxWidth: '1999px',
      }}>
        <div style={{ textAlign: 'center', marginBottom: '24px', paddingTop: '8px' }}>
          <h1 style={{
            fontSize: '2.2rem',
            fontWeight: '800',
            background: 'linear-gradient(90deg, #a78bfa, #60a5fa)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            marginBottom: '8px',
            lineHeight: '1.2',
          }}>
            ✦ Text Summarizer
          </h1>
          <p style={{ color: '#94a3b8', fontSize: '1rem', margin: 0 }}>
            Paste any text and get an instant AI-powered summary
          </p>
        </div>

        <TextInput onSubmit={handleSubmit} loading={loading} />
        {error && <ErrorBanner message={error} />}
        {result && <ResultCard result={result} />}
      </div>
    </div>
  );
}

export default App;
