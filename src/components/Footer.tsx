export default function Footer() {
  return (
    <footer style={{
      width: '100%',
      padding: '40px 20px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '24px',
      background: 'linear-gradient(135deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.02) 100%)',
      backdropFilter: 'blur(10px)',
      borderTop: '1px solid rgba(255,255,255,0.1)',
    }}>
      <p style={{
        color: 'rgba(255,255,255,0.5)',
        fontSize: '0.75rem',
        textAlign: 'center',
        margin: 0,
      }}>
        © 2026 DOZO Studio
      </p>

      <div style={{
        display: 'flex',
        gap: '24px',
        justifyContent: 'center',
        flexWrap: 'wrap',
      }}>
        <a
          href="/privacy"
          style={{
            color: 'rgba(255,255,255,0.6)',
            fontSize: '0.85rem',
            textDecoration: 'none',
            transition: 'color 0.3s ease',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.color = 'rgba(255,255,255,0.8)'
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.color = 'rgba(255,255,255,0.6)'
          }}
        >
          Privacy Policy
        </a>
        <a
          href="/terms"
          style={{
            color: 'rgba(255,255,255,0.6)',
            fontSize: '0.85rem',
            textDecoration: 'none',
            transition: 'color 0.3s ease',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.color = 'rgba(255,255,255,0.8)'
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.color = 'rgba(255,255,255,0.6)'
          }}
        >
          Terms
        </a>
        <a
          href="/support"
          style={{
            color: 'rgba(255,255,255,0.6)',
            fontSize: '0.85rem',
            textDecoration: 'none',
            transition: 'color 0.3s ease',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.color = 'rgba(255,255,255,0.8)'
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.color = 'rgba(255,255,255,0.6)'
          }}
        >
          Support
        </a>
      </div>
    </footer>
  )
}
