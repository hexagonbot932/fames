import React from 'react';
import { mockData } from '../mock';
import '../styles/lumenframes.css';

const Hero = () => {
  const { hero } = mockData;

  return (
    <section style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', paddingTop: '6rem' }}>
      <div className="container-lumen">
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center' }}>
          {/* Left: Text */}
          <div className="fade-in-up" style={{ animationDelay: '0.2s' }}>
            <h1 className="hero-title" style={{ marginBottom: '1.5rem' }}>
              {hero.title}
            </h1>
            <p className="body-text" style={{ fontSize: '1.25rem', marginBottom: '2.5rem', maxWidth: '500px' }}>
              {hero.subtitle}
            </p>
            <button 
              className="btn-primary-lumen"
              onClick={() => document.getElementById('collections').scrollIntoView({ behavior: 'smooth' })}
            >
              Explore Work
            </button>
          </div>

          {/* Right: Portrait Card */}
          <div className="fade-in-up" style={{ animationDelay: '0.4s' }}>
            <div className="image-card" style={{ height: '600px', maxWidth: '450px', marginLeft: 'auto' }}>
              <img 
                src={hero.portraitImage} 
                alt="Photography Portrait" 
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Responsive Styles */}
      <style jsx>{`
        @media (max-width: 1024px) {
          div[style*="gridTemplateColumns"] {
            grid-template-columns: 1fr !important;
            gap: 3rem !important;
          }
          
          .image-card {
            margin-left: 0 !important;
            max-width: 100% !important;
            height: 500px !important;
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;
