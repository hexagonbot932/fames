import React from 'react';
import { Instagram, Facebook, Twitter, Linkedin } from 'lucide-react';
import '../styles/lumenframes.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer style={{ backgroundColor: 'var(--color-black)', color: 'var(--color-white)', padding: '4rem 0 2rem' }}>
      <div className="container-lumen">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '4rem', marginBottom: '3rem' }}>
          {/* Brand */}
          <div>
            <h3 style={{ 
              fontFamily: 'var(--font-serif)', 
              fontSize: '1.75rem', 
              marginBottom: '1rem',
              color: 'var(--color-yellow)'
            }}>
              Lumen Frames
            </h3>
            <p style={{ fontSize: '0.95rem', lineHeight: '1.6', color: '#999' }}>
              Crafting timeless visual stories through the art of photography. Every frame, a masterpiece.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 style={{ 
              fontFamily: 'var(--font-sans)',
              fontSize: '1rem',
              fontWeight: '600',
              marginBottom: '1rem',
              textTransform: 'uppercase',
              letterSpacing: '0.1em'
            }}>
              Quick Links
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <li>
                <a href="#collections" style={{ color: '#999', textDecoration: 'none', fontSize: '0.95rem' }}>
                  Collections
                </a>
              </li>
              <li>
                <a href="#about" style={{ color: '#999', textDecoration: 'none', fontSize: '0.95rem' }}>
                  About
                </a>
              </li>
              <li>
                <a href="#contact" style={{ color: '#999', textDecoration: 'none', fontSize: '0.95rem' }}>
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h4 style={{ 
              fontFamily: 'var(--font-sans)',
              fontSize: '1rem',
              fontWeight: '600',
              marginBottom: '1rem',
              textTransform: 'uppercase',
              letterSpacing: '0.1em'
            }}>
              Follow Us
            </h4>
            <div style={{ display: 'flex', gap: '1rem' }}>
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '50%',
                  backgroundColor: 'var(--color-yellow)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  transition: 'transform 0.3s ease'
                }}
                onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-3px)'}
                onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
              >
                <Instagram size={20} color="var(--color-black)" />
              </a>
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer"
                style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '50%',
                  backgroundColor: 'var(--color-yellow)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  transition: 'transform 0.3s ease'
                }}
                onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-3px)'}
                onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
              >
                <Facebook size={20} color="var(--color-black)" />
              </a>
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer"
                style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '50%',
                  backgroundColor: 'var(--color-yellow)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  transition: 'transform 0.3s ease'
                }}
                onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-3px)'}
                onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
              >
                <Twitter size={20} color="var(--color-black)" />
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '50%',
                  backgroundColor: 'var(--color-yellow)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  transition: 'transform 0.3s ease'
                }}
                onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-3px)'}
                onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
              >
                <Linkedin size={20} color="var(--color-black)" />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div style={{ 
          borderTop: '1px solid #333',
          paddingTop: '2rem',
          textAlign: 'center'
        }}>
          <p style={{ fontSize: '0.875rem', color: '#666' }}>
            © {currentYear} Lumen Frames. All rights reserved. Crafted with passion for visual storytelling.
          </p>
        </div>
      </div>

      {/* Responsive Styles */}
      <style jsx>{`
        @media (max-width: 768px) {
          div[style*="gridTemplateColumns: repeat(3, 1fr)"] {
            grid-template-columns: 1fr !important;
            gap: 2.5rem !important;
          }
        }
      `}</style>
    </footer>
  );
};

export default Footer;
