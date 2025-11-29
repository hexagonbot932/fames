import React from 'react';
import { mockData } from '../mock';
import '../styles/lumenframes.css';

const Filmstrip = () => {
  const { filmstripImages } = mockData;
  
  // Duplicate images for seamless loop
  const duplicatedImages = [...filmstripImages, ...filmstripImages];

  return (
    <section style={{ padding: '4rem 0', backgroundColor: 'var(--color-black)', overflow: 'hidden' }}>
      <div style={{ marginBottom: '2rem', textAlign: 'center' }}>
        <h3 style={{ 
          fontFamily: 'var(--font-sans)', 
          fontSize: '0.875rem', 
          color: 'var(--color-yellow)',
          textTransform: 'uppercase',
          letterSpacing: '0.2em',
          fontWeight: '600'
        }}>
          Cinematic Showcase
        </h3>
      </div>

      <div style={{ position: 'relative' }}>
        {/* Top Film Border */}
        <div style={{
          position: 'absolute',
          top: '-10px',
          left: 0,
          right: 0,
          height: '10px',
          background: 'repeating-linear-gradient(90deg, var(--color-yellow) 0px, var(--color-yellow) 10px, transparent 10px, transparent 20px)'
        }} />
        
        {/* Bottom Film Border */}
        <div style={{
          position: 'absolute',
          bottom: '-10px',
          left: 0,
          right: 0,
          height: '10px',
          background: 'repeating-linear-gradient(90deg, var(--color-yellow) 0px, var(--color-yellow) 10px, transparent 10px, transparent 20px)'
        }} />

        <div style={{ display: 'flex', overflow: 'hidden' }}>
          <div className="filmstrip-track" style={{ display: 'flex', gap: '1.5rem' }}>
            {duplicatedImages.map((image, index) => (
              <div 
                key={index}
                style={{
                  minWidth: '300px',
                  height: '200px',
                  borderRadius: 'var(--radius-small)',
                  overflow: 'hidden',
                  border: '3px solid var(--color-yellow)',
                  flexShrink: 0
                }}
              >
                <img 
                  src={image} 
                  alt={`Filmstrip ${index + 1}`}
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Filmstrip;
