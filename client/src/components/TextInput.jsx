import { useState } from 'react';

function TextInput({ onSubmit, loading }) {
  const [text, setText] = useState('');

  function handleSubmit() {
    if (!text.trim()) return;
    onSubmit(text);
  }

  return (
    <div style={{
      background: 'rgba(255,255,255,0.05)',
      border: '1px solid rgba(255,255,255,0.1)',
      borderRadius: '16px',
      padding: '24px',
      backdropFilter: 'blur(10px)',
    }}>
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Paste your text here..."
        rows={10}
        disabled={loading}
        style={{
          width: '100%',
          padding: '12px',
          fontSize: '14px',
          borderRadius: '10px',
          border: '1px solid rgba(255,255,255,0.15)',
          background: 'rgba(0,0,0,0.3)',
          color: '#e2e8f0',
          resize: 'vertical',
          outline: 'none',
          boxSizing: 'border-box',
          fontFamily: 'monospace',
          height: '160px',
          lineHeight: '1.6'
        }}
      />
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '16px' }}>
        <span style={{ color: '#64748b', fontSize: '13px' }}>
          {text.length} / 10000 characters
        </span>
        <button
          onClick={handleSubmit}
          disabled={loading || !text.trim()}
          style={{
            padding: '12px 32px',
            fontSize: '15px',
            fontWeight: '600',
            borderRadius: '10px',
            border: 'none',
            background: loading || !text.trim()
              ? '#334155'
              : 'linear-gradient(90deg, #7c3aed, #2563eb)',
            color: loading || !text.trim() ? '#64748b' : 'white',
            cursor: loading || !text.trim() ? 'not-allowed' : 'pointer',
            transition: 'all 0.2s',
          }}
        >
          {loading ? '⏳ Analysing...' : '✦ Summarize'}
        </button>
      </div>
    </div>
  );
}

export default TextInput;