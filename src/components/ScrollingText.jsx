import React from 'react';
import { mockData } from '../mock';
import '../styles/lumenframes.css';

const ScrollingText = () => {
  const { scrollingPhrases } = mockData;
  
  // Duplicate the phrases to create seamless loop
  const duplicatedPhrases = [...scrollingPhrases, ...scrollingPhrases];

  return (
    <section style={{ 
      backgroundColor: 'var(--color-black)', 
      padding: '3rem 0',
      overflow: 'hidden',
      borderTop: '2px solid var(--color-yellow)',
      borderBottom: '2px solid var(--color-yellow)'
    }}>
      <div style={{ display: 'flex', whiteSpace: 'nowrap' }}>
        <div className="scrolling-text" style={{ display: 'flex', gap: '4rem' }}>
          {duplicatedPhrases.map((phrase, index) => (
            <span 
              key={index}
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: 'clamp(2rem, 4vw, 3.5rem)',
                color: 'var(--color-white)',
                fontStyle: 'italic',
                fontWeight: '300'
              }}
            >
              {phrase}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ScrollingText;
