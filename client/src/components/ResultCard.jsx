const SENTIMENT_STYLES = {
  positive: { bg: '#14532d', color: '#4ade80', label: '😊 Positive' },
  neutral: { bg: '#1e3a5f', color: '#60a5fa', label: '😐 Neutral' },
  negative: { bg: '#7f1d1d', color: '#f87171', label: '😞 Negative' },
};

function ResultCard({ result }) {
  const { summary, keyPoints, sentiment } = result;
  const style = SENTIMENT_STYLES[sentiment] || SENTIMENT_STYLES.neutral;

  return (
    <div style={{
      marginTop: '24px',
      borderRadius: '16px',
      overflow: 'hidden',
      border: '1px solid rgba(255,255,255,0.1)',
      background: 'rgba(255,255,255,0.05)',
      backdropFilter: 'blur(10px)',
    }}>
      {/* Summary */}
      <div style={{ padding: '24px', borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
        <p style={{ color: '#a78bfa', fontWeight: '700', fontSize: '11px', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '10px' }}>
          📝 Summary
        </p>
        <p style={{ color: '#e2e8f0', fontSize: '16px', lineHeight: '1.7', margin: 0 }}>
          {summary}
        </p>
      </div>

      {/* Key Points */}
      <div style={{ padding: '24px', borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
        <p style={{ color: '#60a5fa', fontWeight: '700', fontSize: '11px', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '16px' }}>
          🔑 Key Points
        </p>
        <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
          {keyPoints.map((point, i) => (
            <li key={i} style={{
              display: 'flex',
              alignItems: 'flex-start',
              gap: '12px',
              marginBottom: '12px',
              color: '#cbd5e1',
              fontSize: '15px',
              lineHeight: '1.6'
            }}>
              <span style={{
                minWidth: '24px',
                height: '24px',
                borderRadius: '50%',
                background: 'linear-gradient(90deg, #7c3aed, #2563eb)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '11px',
                fontWeight: '700',
                color: 'white'
              }}>
                {i + 1}
              </span>
              {point}
            </li>
          ))}
        </ul>
      </div>

      {/* Sentiment */}
      <div style={{ padding: '24px', display: 'flex', alignItems: 'center', gap: '16px' }}>
        <p style={{ color: '#94a3b8', fontWeight: '700', fontSize: '11px', letterSpacing: '2px', textTransform: 'uppercase', margin: 0 }}>
          💬 Sentiment
        </p>
        <span style={{
          padding: '6px 18px',
          borderRadius: '20px',
          background: style.bg,
          color: style.color,
          fontWeight: '700',
          fontSize: '14px',
          border: `1px solid ${style.color}40`
        }}>
          {style.label}
        </span>
      </div>
    </div>
  );
}

export default ResultCard;