import { useState, useEffect } from 'react'

export default function Home() {
  const [isDesktop, setIsDesktop] = useState(false)

  useEffect(() => {
    const style = document.createElement('style')
    style.textContent = `
      @keyframes gradientShift {
        0%   { background-position: 0% 50%; }
        50%  { background-position: 100% 50%; }
        100% { background-position: 0% 50%; }
      }
    `
    document.head.appendChild(style)
    return () => { document.head.removeChild(style) }
  }, [])

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth > 768)
    }
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  if (isDesktop) {
    return (
      <div style={{
        width: '100%',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '20px',
        background: 'linear-gradient(135deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.02) 100%)',
        backgroundSize: '200% 200%',
        animation: 'gradientShift 15s ease-in-out infinite',
      }}>
        <div style={{
          background: 'rgba(255,255,255,0.10)',
          backdropFilter: 'blur(12px)',
          border: '1px solid rgba(255,255,255,0.2)',
          borderRadius: '20px',
          padding: '40px',
          maxWidth: '480px',
          textAlign: 'center',
        }}>
          <div style={{
            position: 'relative',
            width: '128px',
            height: '128px',
            margin: '0 auto 24px',
          }}>
            <div style={{
              position: 'absolute',
              width: '288px',
              height: '288px',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              background: 'radial-gradient(circle at 50% 50%, rgba(255,255,255,0.22) 0%, rgba(255,255,255,0.10) 40%, transparent 70%)',
              borderRadius: '50%',
            }} />
            <img
              src="/LUMEA_logo.png"
              alt="LUMEA"
              style={{
                width: '128px',
                height: '128px',
                filter: 'brightness(1.2)',
                position: 'relative',
                zIndex: 1,
              }}
              onError={(e) => { (e.target as HTMLImageElement).style.display = 'none' }}
            />
          </div>

          <h1 style={{
            color: 'white',
            fontWeight: 300,
            letterSpacing: '0.3em',
            fontSize: '3.5rem',
            margin: '0 0 12px 0',
            textShadow: '0 0 30px rgba(255,255,255,0.4)',
          }}>
            LUMEA
          </h1>

          <p style={{
            color: 'rgba(255,255,255,0.7)',
            letterSpacing: '0.15em',
            fontWeight: 300,
            marginBottom: '16px',
          }}>
            Light for your Mind
          </p>

          <p style={{
            color: 'rgba(255,255,255,0.65)',
            fontSize: '0.95rem',
            fontWeight: 300,
            lineHeight: '1.6',
            maxWidth: '340px',
            textAlign: 'center',
            marginTop: '16px',
            marginBottom: '32px',
          }}>
            Breathwork sessions, binaural audio and chromotherapy light — guided by Lumi, your personal AI companion. Designed to reset your nervous system in minutes.
          </p>

          <img
            src="https://api.qrserver.com/v1/create-qr-code/?size=180x180&data=https://lumeaapp.com&bgcolor=ffffff"
            alt="QR Code"
            style={{
              width: '180px',
              height: '180px',
              margin: '0 auto 32px',
              borderRadius: '12px',
            }}
          />

          <p style={{
            color: 'rgba(255,255,255,0.5)',
            fontSize: '0.75rem',
            textAlign: 'center',
            marginTop: '24px',
            margin: '24px 0 0 0',
          }}>
            © 2026 DOZO Studio
          </p>
        </div>
      </div>
    )
  }

  return (
    <div style={{
      width: '100%',
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '20px',
      overflow: 'hidden',
      background: 'linear-gradient(135deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.02) 100%)',
      backgroundSize: '200% 200%',
      animation: 'gradientShift 15s ease-in-out infinite',
    }}>
      {/* Hero Section */}
      <div style={{
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginBottom: '48px',
      }}>
        {/* Radial Glow */}
        <div style={{
          position: 'absolute',
          width: '288px',
          height: '288px',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          background: 'radial-gradient(circle at 50% 50%, rgba(255,255,255,0.22) 0%, rgba(255,255,255,0.10) 40%, transparent 70%)',
          borderRadius: '50%',
          zIndex: 0,
        }} />

        {/* Logo */}
        <img
          src="/LUMEA_logo.png"
          alt="LUMEA"
          style={{
            width: '128px',
            height: '128px',
            filter: 'brightness(1.2)',
            marginBottom: '20px',
            position: 'relative',
            zIndex: 1,
          }}
          onError={(e) => { (e.target as HTMLImageElement).style.display = 'none' }}
        />

        {/* App Name */}
        <h1 style={{
          color: 'white',
          fontWeight: 300,
          letterSpacing: '0.3em',
          fontSize: '4rem',
          margin: '0 0 16px 0',
          textShadow: '0 0 30px rgba(255,255,255,0.4)',
          textAlign: 'center',
        }}>
          LUMEA
        </h1>

        {/* Tagline */}
        <p style={{
          color: 'rgba(255,255,255,0.7)',
          letterSpacing: '0.15em',
          fontWeight: 300,
          fontSize: '0.95rem',
          margin: '0 0 16px 0',
          textAlign: 'center',
        }}>
          Light for your Mind
        </p>

        {/* App Description */}
        <p style={{
          color: 'rgba(255,255,255,0.65)',
          fontSize: '0.95rem',
          fontWeight: 300,
          lineHeight: '1.6',
          maxWidth: '340px',
          textAlign: 'center',
          marginTop: '16px',
          marginBottom: '0',
        }}>
          Breathwork sessions, binaural audio and chromotherapy light — guided by Lumi, your personal AI companion. Designed to reset your nervous system in minutes.
        </p>
      </div>

      {/* Feature Cards */}
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '16px',
        maxWidth: '360px',
        marginBottom: '32px',
        width: '100%',
      }}>
        {[
          {
            title: 'Breathwork Sessions',
            description: 'Guided sessions for calm, focus, sleep, energy and more.'
          },
          {
            title: 'Meet Lumi',
            description: 'Your AI companion that learns your patterns and guides your journey.'
          },
          {
            title: 'Aura Mode',
            description: 'Transform your room into a living light atmosphere.'
          },
        ].map((card, idx) => (
          <div
            key={idx}
            style={{
              background: 'rgba(255,255,255,0.10)',
              backdropFilter: 'blur(12px)',
              border: '1px solid rgba(255,255,255,0.2)',
              borderRadius: '20px',
              padding: '24px',
            }}
          >
            <h3 style={{
              color: 'white',
              fontWeight: 400,
              fontSize: '1.1rem',
              margin: '0 0 8px 0',
            }}>
              {card.title}
            </h3>
            <p style={{
              color: 'rgba(255,255,255,0.7)',
              fontSize: '0.9rem',
              margin: '0',
              lineHeight: '1.5',
            }}>
              {card.description}
            </p>
          </div>
        ))}
      </div>

      {/* CTA Buttons */}
      <div style={{
        display: 'flex',
        gap: '12px',
        flexWrap: 'wrap',
        justifyContent: 'center',
        maxWidth: '360px',
      }}>
        <a
          href="https://apps.apple.com/app/lumea/id6743393506"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            background: 'rgba(255,255,255,0.20)',
            backdropFilter: 'blur(12px)',
            border: '1px solid rgba(255,255,255,0.30)',
            borderRadius: '9999px',
            padding: '12px 32px',
            color: 'white',
            fontWeight: 300,
            fontSize: '0.95rem',
            textDecoration: 'none',
            display: 'inline-block',
            transition: 'all 0.3s ease',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = 'rgba(255,255,255,0.25)'
            e.currentTarget.style.transform = 'translateY(-2px)'
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = 'rgba(255,255,255,0.20)'
            e.currentTarget.style.transform = 'translateY(0)'
          }}
        >
          App Store
        </a>
        <a
          href="https://play.google.com/store/apps/details?id=com.lumeaapp.app"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            background: 'rgba(255,255,255,0.20)',
            backdropFilter: 'blur(12px)',
            border: '1px solid rgba(255,255,255,0.30)',
            borderRadius: '9999px',
            padding: '12px 32px',
            color: 'white',
            fontWeight: 300,
            fontSize: '0.95rem',
            textDecoration: 'none',
            display: 'inline-block',
            transition: 'all 0.3s ease',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = 'rgba(255,255,255,0.25)'
            e.currentTarget.style.transform = 'translateY(-2px)'
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = 'rgba(255,255,255,0.20)'
            e.currentTarget.style.transform = 'translateY(0)'
          }}
        >
          Google Play
        </a>
      </div>

      {/* Footer */}
      <div style={{
        position: 'fixed',
        bottom: 0,
        left: 0,
        right: 0,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '16px',
        paddingBottom: '24px',
      }}>
        <p style={{
          color: 'rgba(255,255,255,0.5)',
          fontSize: '0.75rem',
          textAlign: 'center',
          margin: '0',
        }}>
          © 2026 DOZO Studio
        </p>
        <div style={{
          display: 'flex',
          gap: '16px',
          justifyContent: 'center',
        }}>
          <a
            href="/#/privacy"
            style={{
              color: 'rgba(255,255,255,0.4)',
              fontSize: '0.75rem',
              textDecoration: 'none',
            }}
          >
            Privacy Policy
          </a>
          <a
            href="/#/terms"
            style={{
              color: 'rgba(255,255,255,0.4)',
              fontSize: '0.75rem',
              textDecoration: 'none',
            }}
          >
            Terms
          </a>
          <a
            href="/#/support"
            style={{
              color: 'rgba(255,255,255,0.4)',
              fontSize: '0.75rem',
              textDecoration: 'none',
            }}
          >
            Support
          </a>
        </div>
      </div>
    </div>
  )
}
