import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../styles/lumenframes.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className={`navbar-lumen ${scrolled ? 'scrolled' : ''}`}>
      <div className="container-lumen" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1.5rem 2rem' }}>
        <Link to="/" style={{ textDecoration: 'none' }}>
          <div style={{ fontFamily: 'var(--font-serif)', fontSize: '1.5rem', fontWeight: '600', color: 'var(--color-black)' }}>
            Lumen Frames
          </div>
        </Link>

        <div style={{ display: 'flex', gap: '2.5rem', alignItems: 'center' }}>
          <button 
            onClick={() => scrollToSection('collections')} 
            className="nav-link"
            style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--color-black)' }}
          >
            Collections
          </button>
          <button 
            onClick={() => scrollToSection('about')} 
            className="nav-link"
            style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--color-black)' }}
          >
            About
          </button>
          <button 
            onClick={() => scrollToSection('contact')} 
            className="nav-link"
            style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--color-black)' }}
          >
            Contact
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
