import React, { useState } from 'react';
import { mockData } from '../mock';
import '../styles/lumenframes.css';
import { Eye } from 'lucide-react';

const Collections = () => {
  const { collections } = mockData;
  const [selectedCollection, setSelectedCollection] = useState(null);

  const openGallery = (collection) => {
    setSelectedCollection(collection);
  };

  const closeGallery = () => {
    setSelectedCollection(null);
  };

  return (
    <section id="collections" className="section-spacing-large" style={{ backgroundColor: 'var(--color-gray-light)' }}>
      <div className="container-lumen">
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <h2 className="section-title">Collections</h2>
          <p className="body-text" style={{ maxWidth: '600px', margin: '0 auto' }}>
            Explore our curated photography collections, each telling unique visual stories
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '2.5rem' }}>
          {collections.map((collection, index) => (
            <div 
              key={collection.id}
              className="fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div 
                className="image-card" 
                style={{ 
                  height: '500px', 
                  position: 'relative',
                  cursor: 'pointer'
                }}
                onClick={() => openGallery(collection)}
              >
                <img 
                  src={collection.coverImage} 
                  alt={collection.title}
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
                
                {/* Overlay */}
                <div style={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  right: 0,
                  padding: '2rem',
                  background: 'linear-gradient(to top, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0) 100%)',
                  color: 'white',
                  transition: 'opacity 0.3s ease'
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
                    <Eye size={18} />
                    <span style={{ fontSize: '0.875rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                      View Gallery
                    </span>
                  </div>
                  <h3 className="collection-title" style={{ color: 'white', marginBottom: '0.5rem' }}>
                    {collection.title}
                  </h3>
                  <p style={{ fontSize: '1rem', opacity: 0.9 }}>
                    {collection.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Gallery Modal */}
      {selectedCollection && (
        <div 
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.95)',
            zIndex: 2000,
            padding: '2rem',
            overflowY: 'auto'
          }}
          onClick={closeGallery}
        >
          <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
              <div>
                <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '2.5rem', color: 'white', marginBottom: '0.5rem' }}>
                  {selectedCollection.title}
                </h2>
                <p style={{ color: 'var(--color-yellow)', fontSize: '1.125rem' }}>
                  {selectedCollection.description}
                </p>
              </div>
              <button 
                onClick={closeGallery}
                style={{
                  background: 'none',
                  border: '2px solid white',
                  color: 'white',
                  padding: '0.75rem 1.5rem',
                  borderRadius: 'var(--radius-small)',
                  cursor: 'pointer',
                  fontSize: '0.875rem',
                  textTransform: 'uppercase',
                  letterSpacing: '0.1em'
                }}
              >
                Close
              </button>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1.5rem' }}>
              {selectedCollection.images.map((image, idx) => (
                <div 
                  key={idx}
                  style={{ 
                    borderRadius: 'var(--radius-medium)',
                    overflow: 'hidden',
                    height: '500px'
                  }}
                  onClick={(e) => e.stopPropagation()}
                >
                  <img 
                    src={image} 
                    alt={`${selectedCollection.title} ${idx + 1}`}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Responsive Styles */}
      <style jsx>{`
        @media (max-width: 768px) {
          div[style*="gridTemplateColumns: repeat(2, 1fr)"] {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
};

export default Collections;
