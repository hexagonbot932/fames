import React from 'react';
import { mockData } from '../mock';
import { Camera, Award, Heart } from 'lucide-react';
import '../styles/lumenframes.css';

const About = () => {
  const { about } = mockData;

  const features = [
    {
      icon: Camera,
      title: 'Artistic Vision',
      description: 'Every frame is composed with intention and artistic precision'
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'Committed to the highest standards of photographic quality'
    },
    {
      icon: Heart,
      title: 'Passion',
      description: 'Driven by love for the craft and authentic storytelling'
    }
  ];

  return (
    <section id="about" className="section-spacing-large">
      <div className="container-lumen">
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '5rem', alignItems: 'center' }}>
          {/* Left: Text Content */}
          <div>
            <h2 className="section-title" style={{ marginBottom: '2rem' }}>
              {about.title}
            </h2>
            <p className="body-text" style={{ marginBottom: '2rem', fontSize: '1.125rem' }}>
              {about.description}
            </p>
            <p className="body-text" style={{ marginBottom: '3rem' }}>
              {about.philosophy}
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
              {features.map((feature, index) => (
                <div key={index} style={{ display: 'flex', gap: '1.5rem', alignItems: 'start' }}>
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
                    <feature.icon size={24} color="var(--color-black)" />
                  </div>
                  <div>
                    <h4 style={{ 
                      fontFamily: 'var(--font-sans)',
                      fontSize: '1.125rem',
                      fontWeight: '600',
                      marginBottom: '0.5rem',
                      color: 'var(--color-black)'
                    }}>
                      {feature.title}
                    </h4>
                    <p className="body-text">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Image Grid */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
            <div className="image-card" style={{ height: '250px' }}>
              <img 
                src="https://images.unsplash.com/photo-1452587925148-ce544e77e70d?w=400&h=400&fit=crop" 
                alt="Photography Equipment"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>
            <div className="image-card" style={{ height: '250px', marginTop: '2rem' }}>
              <img 
                src="https://images.unsplash.com/photo-1606857521015-7f9fcf423740?w=400&h=400&fit=crop" 
                alt="Camera Work"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>
            <div className="image-card" style={{ height: '250px', marginTop: '-2rem' }}>
              <img 
                src="https://images.unsplash.com/photo-1471341971476-ae15ff5dd4ea?w=400&h=400&fit=crop" 
                alt="Photography Studio"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>
            <div className="image-card" style={{ height: '250px' }}>
              <img 
                src="https://images.unsplash.com/photo-1542038784456-1ea8e935640e?w=400&h=400&fit=crop" 
                alt="Photography Art"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>
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

export default About;
