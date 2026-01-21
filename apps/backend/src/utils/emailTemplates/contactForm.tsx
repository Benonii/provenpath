import React from 'react';

interface ContactFormEmailProps {
  firstName: string;
  lastName: string;
  email: string;
  message: string;
}

export const ContactFormEmail: React.FC<ContactFormEmailProps> = ({
  firstName,
  lastName,
  email,
  message,
}) => {
  const containerStyle: React.CSSProperties = {
    fontFamily: '"Euclid Circular B", "Lato", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
    maxWidth: '600px',
    margin: '0 auto',
    backgroundColor: '#ffffff',
    borderRadius: '12px',
    overflow: 'hidden',
    boxShadow: '0 10px 25px rgba(0, 242, 255, 0.1)',
    border: '1px solid #e2e8f0',
  };

  const headerStyle: React.CSSProperties = {
    background: 'linear-gradient(135deg, #00F2FF 0%, #00696F 100%)',
    padding: '30px 40px',
    color: '#ffffff',
    textAlign: 'center',
  };

  const headerTitleStyle: React.CSSProperties = {
    fontSize: '28px',
    fontWeight: '700',
    margin: '0 0 8px 0',
    textShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
  };

  const headerSubtitleStyle: React.CSSProperties = {
    fontSize: '16px',
    opacity: '0.9',
    margin: '0',
    fontWeight: '400',
  };

  const contentStyle: React.CSSProperties = {
    padding: '40px',
    backgroundColor: '#ffffff',
  };

  const sectionStyle: React.CSSProperties = {
    marginBottom: '30px',
  };

  const labelStyle: React.CSSProperties = {
    fontSize: '14px',
    fontWeight: '600',
    color: '#01101B',
    marginBottom: '8px',
    display: 'block',
    textTransform: 'uppercase',
    letterSpacing: '0.5px',
  };

  const valueStyle: React.CSSProperties = {
    fontSize: '16px',
    color: '#374151',
    margin: '0',
    lineHeight: '1.5',
  };

  const emailLinkStyle: React.CSSProperties = {
    textDecoration: 'none',
    fontWeight: '500',
  };

  const messageBoxStyle: React.CSSProperties = {
    backgroundColor: '#f8fafc',
    border: '1px solid #e2e8f0',
    borderRadius: '8px',
    padding: '20px',
    marginTop: '8px',
    fontSize: '15px',
    lineHeight: '1.6',
    color: '#1f2937',
    whiteSpace: 'pre-wrap',
    borderLeft: '4px solid #00F2FF',
  };

  const dividerStyle: React.CSSProperties = {
    height: '1px',
    backgroundColor: '#e5e7eb',
    margin: '30px 0',
    border: 'none',
  };

  const footerStyle: React.CSSProperties = {
    padding: '20px 40px',
    backgroundColor: '#f8fafc',
    textAlign: 'center',
    borderTop: '1px solid #e2e8f0',
  };

  const footerTextStyle: React.CSSProperties = {
    fontSize: '12px',
    color: '#6b7280',
    margin: '0',
    fontWeight: '400',
  };

  const brandAccentStyle: React.CSSProperties = {
    color: '#00696F',
    fontWeight: '600',
  };

  return (
    <div style={containerStyle}>
      {/* Header */}
      <div style={headerStyle}>
        <h1 style={headerTitleStyle}>New Contact Form Submission</h1>
        <p style={headerSubtitleStyle}>Someone reached out to Proven Path</p>
      </div>

      {/* Content */}
      <div style={contentStyle}>
        {/* Name Section */}
        <div style={sectionStyle}>
          <span style={labelStyle}>Name</span>
          <p style={valueStyle}>
            {firstName} {lastName}
          </p>
        </div>

        {/* Email Section */}
        <div style={sectionStyle}>
          <span style={labelStyle}>Email</span>
          <p style={valueStyle}>
            <a href={`mailto:${email}`} style={emailLinkStyle}>
              {email}
            </a>
          </p>
        </div>

        {/* Message Section */}
        <div style={sectionStyle}>
          <span style={labelStyle}>Message</span>
          <div style={messageBoxStyle}>
            {message}
          </div>
        </div>

        <hr style={dividerStyle} />

        {/* Footer */}
        <div style={footerStyle}>
          <p style={footerTextStyle}>
            Sent from <span style={brandAccentStyle}>Proven Path</span> Contact Form
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactFormEmail;