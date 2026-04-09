import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

export default function Support() {
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null)

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

  const faqs = [
    {
      q: 'How do I cancel my subscription?',
      a: 'You can cancel anytime through your App Store or Google Play subscription settings. Your access continues until the end of the billing period.'
    },
    {
      q: 'What is Lumi?',
      a: 'Lumi is your personal AI breathing companion inside LUMEA. She learns your patterns, suggests sessions, and guides your nervous system journey.'
    },
    {
      q: 'Does LUMEA work offline?',
      a: 'Yes — all breathing sessions and binaural audio work fully offline. Only account sync requires internet.'
    },
    {
      q: 'How do I delete my account?',
      a: 'Go to Settings → Account → Delete Account. This permanently removes all your data.'
    },
  ]

  return (
    <div style={{
      width: '100%',
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'flex-start',
      padding: '20px',
      paddingTop: '40px',
      background: 'linear-gradient(135deg, #c26afe 0%, #8b7fff 25%, #6a9fff 50%, #52a3ff 75%, #52a3ff 100%)',
      backgroundSize: '200% 200%',
      animation: 'gradientShift 15s ease-in-out infinite',
    }}>
      <div style={{
        background: 'rgba(255,255,255,0.10)',
        backdropFilter: 'blur(12px)',
        border: '1px solid rgba(255,255,255,0.2)',
        borderRadius: '20px',
        padding: '40px',
        maxWidth: '680px',
        width: '100%',
        boxSizing: 'border-box',
      }}>
        <Link
          to="/"
          style={{
            color: 'white',
            fontSize: '0.9rem',
            marginBottom: '24px',
            display: 'block',
            opacity: 0.7,
            transition: 'opacity 0.3s ease',
          }}
          onMouseEnter={(e) => e.currentTarget.style.opacity = '1'}
          onMouseLeave={(e) => e.currentTarget.style.opacity = '0.7'}
        >
          ← Back to Home
        </Link>

        <h1 style={{
          fontSize: '1.8rem',
          fontWeight: 400,
          marginBottom: '32px',
          marginTop: '0',
          color: 'white',
        }}>
          Support & FAQ
        </h1>

        {/* FAQ Section */}
        <div style={{ marginBottom: '40px' }}>
          <h2 style={{
            fontSize: '1.2rem',
            fontWeight: 400,
            marginBottom: '20px',
            color: 'white',
          }}>
            Frequently Asked Questions
          </h2>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                style={{
                  background: 'rgba(255,255,255,0.05)',
                  border: '1px solid rgba(255,255,255,0.1)',
                  borderRadius: '12px',
                  overflow: 'hidden',
                }}
              >
                <button
                  onClick={() => setExpandedFaq(expandedFaq === idx ? null : idx)}
                  style={{
                    width: '100%',
                    padding: '16px',
                    background: 'none',
                    border: 'none',
                    color: 'white',
                    textAlign: 'left',
                    fontSize: '0.95rem',
                    fontWeight: 400,
                    cursor: 'pointer',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    transition: 'all 0.3s ease',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = 'rgba(255,255,255,0.08)'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'none'
                  }}
                >
                  <span>{faq.q}</span>
                  <span style={{
                    fontSize: '1.2rem',
                    marginLeft: '12px',
                    transform: expandedFaq === idx ? 'rotate(180deg)' : 'rotate(0)',
                    transition: 'transform 0.3s ease',
                  }}>
                    ▼
                  </span>
                </button>

                {expandedFaq === idx && (
                  <div style={{
                    padding: '0 16px 16px 16px',
                    color: 'rgba(255,255,255,0.8)',
                    fontSize: '0.9rem',
                    lineHeight: '1.6',
                    borderTop: '1px solid rgba(255,255,255,0.1)',
                  }}>
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Contact Section */}
        <div style={{
          borderTop: '1px solid rgba(255,255,255,0.2)',
          paddingTop: '32px',
        }}>
          <h2 style={{
            fontSize: '1.2rem',
            fontWeight: 400,
            marginBottom: '16px',
            color: 'white',
          }}>
            Need More Help?
          </h2>

          <p style={{
            color: 'rgba(255,255,255,0.8)',
            fontSize: '0.95rem',
            marginBottom: '20px',
            lineHeight: '1.6',
          }}>
            For questions, feedback, or issues not covered above, please reach out to our support team.
          </p>

          <a
            href="mailto:support@lumeaapp.com"
            style={{
              display: 'inline-block',
              background: 'rgba(255,255,255,0.20)',
              backdropFilter: 'blur(12px)',
              border: '1px solid rgba(255,255,255,0.30)',
              borderRadius: '9999px',
              padding: '12px 32px',
              color: 'white',
              fontWeight: 300,
              fontSize: '0.95rem',
              textDecoration: 'none',
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
            Contact Support
          </a>
        </div>
      </div>
    </div>
  )
}
