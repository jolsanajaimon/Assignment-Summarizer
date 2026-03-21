function ErrorBanner({ message }) {
  return (
    <div style={{
      backgroundColor: '#fee2e2',
      border: '1px solid #ef4444',
      color: '#b91c1c',
      padding: '12px 16px',
      borderRadius: '8px',
      marginTop: '16px'
    }}>
      {message}
    </div>
  );
}

export default ErrorBanner;