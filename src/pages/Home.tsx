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
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '80px',
        padding: '60px',
        background: 'linear-gradient(135deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.02) 100%)',
        backgroundSize: '200% 200%',
        animation: 'gradientShift 15s ease-in-out infinite',
      }}>
        {/* Left Column */}
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center',
        }}>
          <div style={{
            position: 'relative',
            width: '160px',
            height: '160px',
            marginBottom: '24px',
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
                width: '160px',
                height: '160px',
                filter: 'brightness(1.2) drop-shadow(0 2px 8px rgba(0,0,0,0.10))',
                position: 'relative',
                zIndex: 1,
              }}
              onError={(e) => { (e.target as HTMLImageElement).style.display = 'none' }}
            />
          </div>

          <h1 style={{
            color: 'white',
            fontWeight: 300,
            letterSpacing: '0.25em',
            fontSize: '5rem',
            margin: '0 0 4px 0',
            textShadow: '0 0 30px rgba(255,255,255,0.4)',
          }}>
            LUMEA
          </h1>

          <p style={{
            color: 'rgba(255,255,255,0.7)',
            letterSpacing: '0.15em',
            fontWeight: 300,
            fontSize: '1.2rem',
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
            marginBottom: '32px',
            marginTop: '24px',
          }}>
            Breathwork sessions, binaural audio and chromotherapy light. Designed to reset your nervous system in minutes.
          </p>

        </div>

        {/* Right Column */}
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}>
          <img
            src="https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=https://lumeaapp.com&bgcolor=ffffff"
            alt="QR Code"
            style={{
              width: '200px',
              height: '200px',
              marginBottom: '16px',
              borderRadius: '12px',
            }}
          />
          <p style={{
            color: 'rgba(255,255,255,0.6)',
            fontSize: '0.9rem',
            textAlign: 'center',
            margin: '0',
          }}>
            Scan with your mobile
          </p>
        </div>

        {/* Footer */}
        <div style={{
          position: 'fixed',
          bottom: 0,
          left: 0,
          right: 0,
          padding: '16px',
          textAlign: 'center',
          fontSize: '0.75rem',
          fontFamily: 'Sora',
          fontWeight: 300,
          display: 'flex',
          gap: '16px',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
          <span style={{ color: 'rgba(255, 255, 255, 0.45)' }}>© 2026 DOZO Studio</span>
          <a
            href="/#/privacy"
            style={{ color: 'rgba(255, 255, 255, 0.45)', textDecoration: 'none' }}
            onMouseEnter={(e) => e.currentTarget.style.opacity = '0.7'}
            onMouseLeave={(e) => e.currentTarget.style.opacity = '1'}
          >
            Privacy
          </a>
          <a
            href="/#/terms"
            style={{ color: 'rgba(255, 255, 255, 0.45)', textDecoration: 'none' }}
            onMouseEnter={(e) => e.currentTarget.style.opacity = '0.7'}
            onMouseLeave={(e) => e.currentTarget.style.opacity = '1'}
          >
            Terms
          </a>
          <a
            href="/#/support"
            style={{ color: 'rgba(255, 255, 255, 0.45)', textDecoration: 'none' }}
            onMouseEnter={(e) => e.currentTarget.style.opacity = '0.7'}
            onMouseLeave={(e) => e.currentTarget.style.opacity = '1'}
          >
            Support
          </a>
        </div>
      </div>
    )
  }

  return (
    <div style={{
      width: '100%',
      height: '100dvh',
      minHeight: '100dvh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '0 20px',
      paddingTop: 'env(safe-area-inset-top, 48px)',
      overflow: 'hidden',
      boxSizing: 'border-box',
      background: 'linear-gradient(135deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.02) 100%)',
      backgroundSize: '200% 200%',
      animation: 'gradientShift 15s ease-in-out infinite',
    }}>
      {/* Hero Section */}
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
        flex: 1,
        justifyContent: 'center',
      }}>
      <div style={{
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
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
            width: 'clamp(96px, 20vw, 128px)',
            height: 'clamp(96px, 20vw, 128px)',
            filter: 'brightness(1.2) drop-shadow(0 2px 8px rgba(0,0,0,0.10))',
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
          fontSize: 'clamp(2rem, 8vw, 3rem)',
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
          fontSize: 'clamp(0.8rem, 3vw, 1rem)',
          margin: '0 0 16px 0',
          textAlign: 'center',
        }}>
          Light for your Mind
        </p>

        {/* App Description */}
        <p style={{
          color: 'rgba(255,255,255,0.65)',
          fontSize: 'clamp(0.75rem, 2.5vw, 0.9rem)',
          fontWeight: 300,
          lineHeight: '1.6',
          maxWidth: '300px',
          textAlign: 'center',
          marginTop: '16px',
          marginBottom: '0',
        }}>
          Breathwork sessions, binaural audio and chromotherapy light. Designed to reset your nervous system in minutes.
        </p>
      </div>
      </div>

      {/* Download Buttons & Footer */}
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        paddingBottom: '32px',
        gap: '12px',
      }}>
      {/* Download Buttons */}
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '12px',
        width: '100%',
        maxWidth: '260px',
        margin: 'auto',
      }}>
        <a
          href='https://apps.apple.com/app/lumea/id6743393506'
          target="_blank"
          rel="noopener noreferrer"
          style={{
            width: '100%',
            maxWidth: '260px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 10,
            background: 'rgba(255,255,255,0.15)',
            backdropFilter: 'blur(12px)',
            border: '1px solid rgba(255,255,255,0.3)',
            borderRadius: 14,
            padding: '12px 24px',
            color: 'white',
            textDecoration: 'none',
            fontFamily: 'Sora',
            fontWeight: 300,
          }}
        >
          <svg viewBox='0 0 24 24' width='24' height='24' fill='white'><path d='M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z'/></svg>
          <div style={{ textAlign: 'left' }}><div style={{ fontSize: 10, opacity: 0.7 }}>Download on the</div><div style={{ fontSize: 16 }}>App Store</div></div>
        </a>
        <a
          href='https://play.google.com/store/apps/details?id=com.lumeaapp.app'
          target="_blank"
          rel="noopener noreferrer"
          style={{
            width: '100%',
            maxWidth: '260px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 10,
            background: 'rgba(255,255,255,0.15)',
            backdropFilter: 'blur(12px)',
            border: '1px solid rgba(255,255,255,0.3)',
            borderRadius: 14,
            padding: '12px 24px',
            color: 'white',
            textDecoration: 'none',
            fontFamily: 'Sora',
            fontWeight: 300,
          }}
        >
          <svg viewBox='0 0 24 24' width='24' height='24' fill='white'><path d='M3.18 23.76c.3.17.63.24.97.21l.1-.06 11.44-6.61-2.49-2.49-10.02 8.95zm-1.9-20.1C1.1 3.94 1 4.25 1 4.6v14.8c0 .35.1.66.28.92l.07.08 8.29-8.29v-.19L1.28 3.58l-.07.08zm17.47 7.77l-2.52-1.45-2.79 2.79 2.79 2.79 2.54-1.47c.72-.42.72-1.24-.02-1.66zm-15.57 9.48l10.13-5.85-2.49-2.49-7.64 8.34z'/></svg>
          <div style={{ textAlign: 'left' }}><div style={{ fontSize: 10, opacity: 0.7 }}>Get it on</div><div style={{ fontSize: 16 }}>Google Play</div></div>
        </a>
      </div>

      {/* Footer */}
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '12px',
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
    </div>
  )
}
