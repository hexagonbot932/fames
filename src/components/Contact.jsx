import React, { useState } from 'react';
import { mockData } from '../mock';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { useToast } from '../hooks/use-toast';
import '../styles/lumenframes.css';

const Contact = () => {
  const { contact } = mockData;
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Frontend-only validation and mock submission
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Error",
        description: "Please fill in all fields",
        variant: "destructive"
      });
      return;
    }

    // Mock success
    toast({
      title: "Message Sent!",
      description: "We'll get back to you soon."
    });

    // Reset form
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="section-spacing-large" style={{ backgroundColor: 'var(--color-gray-light)' }}>
      <div className="container-lumen">
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <h2 className="section-title">Let's Create Together</h2>
          <p className="body-text" style={{ maxWidth: '600px', margin: '0 auto' }}>
            Ready to capture your story? Get in touch and let's discuss your vision.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '5rem', maxWidth: '1100px', margin: '0 auto' }}>
          {/* Contact Info */}
          <div>
            <h3 style={{ 
              fontFamily: 'var(--font-serif)',
              fontSize: '1.75rem',
              marginBottom: '2rem',
              color: 'var(--color-black)'
            }}>
              Get in Touch
            </h3>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
              <div style={{ display: 'flex', gap: '1.25rem', alignItems: 'center' }}>
                <div style={{
                  width: '50px',
                  height: '50px',
                  borderRadius: '50%',
                  backgroundColor: 'var(--color-yellow)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0
                }}>
                  <Mail size={20} color="var(--color-black)" />
                </div>
                <div>
                  <p style={{ fontSize: '0.875rem', color: 'var(--color-gray-medium)', marginBottom: '0.25rem' }}>Email</p>
                  <p style={{ fontSize: '1.125rem', fontWeight: '500', color: 'var(--color-black)' }}>{contact.email}</p>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '1.25rem', alignItems: 'center' }}>
                <div style={{
                  width: '50px',
                  height: '50px',
                  borderRadius: '50%',
                  backgroundColor: 'var(--color-yellow)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0
                }}>
                  <Phone size={20} color="var(--color-black)" />
                </div>
                <div>
                  <p style={{ fontSize: '0.875rem', color: 'var(--color-gray-medium)', marginBottom: '0.25rem' }}>Phone</p>
                  <p style={{ fontSize: '1.125rem', fontWeight: '500', color: 'var(--color-black)' }}>{contact.phone}</p>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '1.25rem', alignItems: 'center' }}>
                <div style={{
                  width: '50px',
                  height: '50px',
                  borderRadius: '50%',
                  backgroundColor: 'var(--color-yellow)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0
                }}>
                  <MapPin size={20} color="var(--color-black)" />
                </div>
                <div>
                  <p style={{ fontSize: '0.875rem', color: 'var(--color-gray-medium)', marginBottom: '0.25rem' }}>Location</p>
                  <p style={{ fontSize: '1.125rem', fontWeight: '500', color: 'var(--color-black)' }}>{contact.address}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <div>
                <label style={{ 
                  display: 'block',
                  fontFamily: 'var(--font-sans)',
                  fontSize: '0.875rem',
                  fontWeight: '600',
                  marginBottom: '0.5rem',
                  color: 'var(--color-black)'
                }}>
                  Name
                </label>
                <input 
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  style={{
                    width: '100%',
                    padding: '0.875rem 1.25rem',
                    border: '2px solid #E5E5E5',
                    borderRadius: 'var(--radius-small)',
                    fontSize: '1rem',
                    fontFamily: 'var(--font-sans)',
                    transition: 'border-color 0.3s ease',
                    outline: 'none'
                  }}
                  onFocus={(e) => e.target.style.borderColor = 'var(--color-yellow)'}
                  onBlur={(e) => e.target.style.borderColor = '#E5E5E5'}
                />
              </div>

              <div>
                <label style={{ 
                  display: 'block',
                  fontFamily: 'var(--font-sans)',
                  fontSize: '0.875rem',
                  fontWeight: '600',
                  marginBottom: '0.5rem',
                  color: 'var(--color-black)'
                }}>
                  Email
                </label>
                <input 
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your.email@example.com"
                  style={{
                    width: '100%',
                    padding: '0.875rem 1.25rem',
                    border: '2px solid #E5E5E5',
                    borderRadius: 'var(--radius-small)',
                    fontSize: '1rem',
                    fontFamily: 'var(--font-sans)',
                    transition: 'border-color 0.3s ease',
                    outline: 'none'
                  }}
                  onFocus={(e) => e.target.style.borderColor = 'var(--color-yellow)'}
                  onBlur={(e) => e.target.style.borderColor = '#E5E5E5'}
                />
              </div>

              <div>
                <label style={{ 
                  display: 'block',
                  fontFamily: 'var(--font-sans)',
                  fontSize: '0.875rem',
                  fontWeight: '600',
                  marginBottom: '0.5rem',
                  color: 'var(--color-black)'
                }}>
                  Message
                </label>
                <textarea 
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your project..."
                  rows={5}
                  style={{
                    width: '100%',
                    padding: '0.875rem 1.25rem',
                    border: '2px solid #E5E5E5',
                    borderRadius: 'var(--radius-small)',
                    fontSize: '1rem',
                    fontFamily: 'var(--font-sans)',
                    transition: 'border-color 0.3s ease',
                    outline: 'none',
                    resize: 'vertical'
                  }}
                  onFocus={(e) => e.target.style.borderColor = 'var(--color-yellow)'}
                  onBlur={(e) => e.target.style.borderColor = '#E5E5E5'}
                />
              </div>

              <button 
                type="submit"
                className="btn-primary-lumen"
                style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem' }}
              >
                <Send size={18} />
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Responsive Styles */}
      <style jsx>{`
        @media (max-width: 1024px) {
          div[style*="gridTemplateColumns: 1fr 1fr"] {
            grid-template-columns: 1fr !important;
            gap: 3rem !important;
          }
        }
      `}</style>
    </section>
  );
};

export default Contact;
