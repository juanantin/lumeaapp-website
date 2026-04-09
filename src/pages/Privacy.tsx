import { useEffect } from 'react'
import { Link } from 'react-router-dom'

export default function Privacy() {
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

        <div style={{
          color: 'white',
          fontSize: '0.95rem',
          lineHeight: '1.8',
          maxHeight: '80vh',
          overflowY: 'auto',
          paddingRight: '16px',
        }}>
          <h1 style={{
            fontSize: '1.8rem',
            fontWeight: 400,
            marginBottom: '24px',
            marginTop: '0',
          }}>
            Privacy Policy
          </h1>

          <h2 style={{
            fontSize: '1.2rem',
            fontWeight: 400,
            marginTop: '24px',
            marginBottom: '12px',
          }}>
            1. Data Collection
          </h2>
          <p style={{ marginBottom: '16px' }}>
            LUMEA collects minimal personal data to provide and improve our services. This includes:
          </p>
          <ul style={{ marginBottom: '16px', paddingLeft: '20px' }}>
            <li>Account information (email, username)</li>
            <li>Breathing session history and preferences</li>
            <li>Usage analytics and app performance data</li>
            <li>Device information for app optimization</li>
          </ul>

          <h2 style={{
            fontSize: '1.2rem',
            fontWeight: 400,
            marginTop: '24px',
            marginBottom: '12px',
          }}>
            2. Data Storage
          </h2>
          <p style={{ marginBottom: '16px' }}>
            All user data is securely stored in Supabase, our database provider. Your data is encrypted in transit and at rest. We maintain industry-standard security practices to protect your personal information.
          </p>

          <h2 style={{
            fontSize: '1.2rem',
            fontWeight: 400,
            marginTop: '24px',
            marginBottom: '12px',
          }}>
            3. Data Sharing & Selling
          </h2>
          <p style={{ marginBottom: '16px' }}>
            We absolutely do not sell, rent, or share your personal data with third parties. Your data is used exclusively to provide LUMEA services and improve your experience.
          </p>

          <h2 style={{
            fontSize: '1.2rem',
            fontWeight: 400,
            marginTop: '24px',
            marginBottom: '12px',
          }}>
            4. Your Rights (GDPR)
          </h2>
          <p style={{ marginBottom: '16px' }}>
            Under GDPR and similar privacy regulations, you have the right to:
          </p>
          <ul style={{ marginBottom: '16px', paddingLeft: '20px' }}>
            <li>Access all data we hold about you</li>
            <li>Request correction of inaccurate data</li>
            <li>Request deletion of your data (right to be forgotten)</li>
            <li>Withdraw consent at any time</li>
            <li>Port your data in a portable format</li>
          </ul>

          <h2 style={{
            fontSize: '1.2rem',
            fontWeight: 400,
            marginTop: '24px',
            marginBottom: '12px',
          }}>
            5. Contact Us
          </h2>
          <p style={{ marginBottom: '16px' }}>
            If you have questions about our privacy practices, data handling, or to exercise your rights, please contact us at <a href="mailto:support@lumeaapp.com" style={{ color: 'rgba(255,255,255,0.9)' }}>support@lumeaapp.com</a>.
          </p>

          <h2 style={{
            fontSize: '1.2rem',
            fontWeight: 400,
            marginTop: '24px',
            marginBottom: '12px',
          }}>
            6. Changes to This Policy
          </h2>
          <p style={{ marginBottom: '16px' }}>
            We may update this privacy policy occasionally. Continued use of LUMEA after changes constitutes acceptance of the updated policy.
          </p>

          <p style={{
            marginTop: '32px',
            color: 'rgba(255,255,255,0.6)',
            fontSize: '0.85rem',
          }}>
            Last updated: April 2026
          </p>
        </div>
      </div>
    </div>
  )
}
