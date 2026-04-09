import { useEffect } from 'react'
import { Link } from 'react-router-dom'

export default function Terms() {
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
            Terms of Use
          </h1>

          <h2 style={{
            fontSize: '1.2rem',
            fontWeight: 400,
            marginTop: '24px',
            marginBottom: '12px',
          }}>
            1. Subscription & Billing
          </h2>
          <p style={{ marginBottom: '16px' }}>
            LUMEA offers subscription plans:
          </p>
          <ul style={{ marginBottom: '16px', paddingLeft: '20px' }}>
            <li>Monthly: €4.99/month (auto-renewable)</li>
            <li>Yearly: €29.99/year (auto-renewable)</li>
          </ul>
          <p style={{ marginBottom: '16px' }}>
            All subscriptions are auto-renewable. You will be charged at the end of each billing period unless you cancel beforehand.
          </p>

          <h2 style={{
            fontSize: '1.2rem',
            fontWeight: 400,
            marginTop: '24px',
            marginBottom: '12px',
          }}>
            2. Free Trial
          </h2>
          <p style={{ marginBottom: '16px' }}>
            New users receive a 3-day free trial. After the trial period, your subscription begins and you will be charged according to your selected plan.
          </p>

          <h2 style={{
            fontSize: '1.2rem',
            fontWeight: 400,
            marginTop: '24px',
            marginBottom: '12px',
          }}>
            3. Cancellation Policy
          </h2>
          <p style={{ marginBottom: '16px' }}>
            You can cancel your subscription anytime through your App Store or Google Play subscription settings. Your access continues until the end of the current billing period. No refunds are provided for partial months.
          </p>

          <h2 style={{
            fontSize: '1.2rem',
            fontWeight: 400,
            marginTop: '24px',
            marginBottom: '12px',
          }}>
            4. Medical Disclaimer
          </h2>
          <p style={{ marginBottom: '16px' }}>
            LUMEA is a wellness and breathing app designed for relaxation and nervous system regulation. It is not a medical device and does not diagnose, treat, cure, or prevent any medical condition. Always consult a healthcare professional for medical concerns.
          </p>

          <h2 style={{
            fontSize: '1.2rem',
            fontWeight: 400,
            marginTop: '24px',
            marginBottom: '12px',
          }}>
            5. Intellectual Property
          </h2>
          <p style={{ marginBottom: '16px' }}>
            All content, design, and functionality within LUMEA are owned by DOZO Studio. Unauthorized reproduction, distribution, or use is prohibited. Users may not reverse-engineer, decompile, or modify the app.
          </p>

          <h2 style={{
            fontSize: '1.2rem',
            fontWeight: 400,
            marginTop: '24px',
            marginBottom: '12px',
          }}>
            6. User Data & Account
          </h2>
          <p style={{ marginBottom: '16px' }}>
            You are responsible for maintaining the confidentiality of your account. LUMEA is not liable for unauthorized access due to user negligence. You agree not to use LUMEA for illegal purposes or in violation of any applicable laws.
          </p>

          <h2 style={{
            fontSize: '1.2rem',
            fontWeight: 400,
            marginTop: '24px',
            marginBottom: '12px',
          }}>
            7. Limitation of Liability
          </h2>
          <p style={{ marginBottom: '16px' }}>
            LUMEA is provided "as is" without warranties. DOZO Studio is not liable for indirect, incidental, or consequential damages arising from app use, data loss, or service interruptions.
          </p>

          <h2 style={{
            fontSize: '1.2rem',
            fontWeight: 400,
            marginTop: '24px',
            marginBottom: '12px',
          }}>
            8. Changes to Terms
          </h2>
          <p style={{ marginBottom: '16px' }}>
            We reserve the right to modify these terms at any time. Continued use of LUMEA after changes indicates acceptance of the updated terms.
          </p>

          <div style={{
            marginTop: '32px',
            paddingTop: '24px',
            borderTop: '1px solid rgba(255,255,255,0.2)',
          }}>
            <p style={{ marginBottom: '8px' }}>
              <strong>App:</strong> LUMEA by DOZO Studio
            </p>
            <p style={{ marginBottom: '8px' }}>
              <strong>Support:</strong> <a href="mailto:support@lumeaapp.com" style={{ color: 'rgba(255,255,255,0.9)' }}>support@lumeaapp.com</a>
            </p>
            <p style={{
              marginTop: '16px',
              color: 'rgba(255,255,255,0.6)',
              fontSize: '0.85rem',
            }}>
              Last updated: April 2026
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
