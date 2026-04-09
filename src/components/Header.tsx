export default function Header() {
  return (
    <header style={{
      width: '100%',
      padding: '20px 40px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      background: 'linear-gradient(135deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.02) 100%)',
      backdropFilter: 'blur(10px)',
      borderBottom: '1px solid rgba(255,255,255,0.1)',
    }}>
      {/* Left - Logo */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: '12px',
      }}>
        <img
          src="/LUMEA_logo.png"
          alt="LUMEA"
          style={{
            width: '32px',
            height: '32px',
            filter: 'brightness(1.2)',
          }}
          onError={(e) => { (e.target as HTMLImageElement).style.display = 'none' }}
        />
        <h2 style={{
          color: 'white',
          fontWeight: 300,
          letterSpacing: '0.2em',
          fontSize: '1.2rem',
          margin: 0,
        }}>
          LUMEA
        </h2>
      </div>

      {/* Right - Empty */}
      <div />
    </header>
  )
}
