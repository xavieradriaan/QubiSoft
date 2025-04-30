import React, { useState } from 'react';
import { Link } from 'react-scroll';
import '../styles/Header.css';

const Header = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  return (
    <header className="header">
      <div className="logo-container">
        {/* Reemplazar el hologram-effect por el logo */}
        <img 
          src="/Q2.png" 
          alt="Qubi Soft Logo" 
          className="logo-image"
        />
        <h1 className="gradient-text">QubitSoft</h1>
      </div>
      
      <nav 
        className={`nav-links ${isMenuOpen ? 'active' : ''}`} 
        aria-label="Navegación principal"
      >
        <Link 
          to="home" 
          smooth={true} 
          duration={500}
          role="button"
          tabIndex={0}
          onClick={() => setMenuOpen(false)}
        >
          Inicio
        </Link>
        <Link 
          to="projects" 
          smooth={true} 
          duration={700}
          role="button"
          tabIndex={0}
          onClick={() => setMenuOpen(false)}
        >
          Proyectos
        </Link>
        <Link 
          to="services" 
          smooth={true} 
          duration={900}
          role="button"
          tabIndex={0}
          onClick={() => setMenuOpen(false)}
        >
          Servicios
        </Link>
        <Link 
          to="contact" 
          smooth={true} 
          duration={1100} 
          className="cta-button"
          role="button"
          tabIndex={0}
          onClick={() => setMenuOpen(false)}
        >
          Contacto
        </Link>
      </nav>

      <button 
        className="hamburger" 
        onClick={() => setMenuOpen(!isMenuOpen)}
        aria-expanded={isMenuOpen}
      >
        <div className={`bar top ${isMenuOpen ? 'open' : ''}`}></div>
        <div className={`bar middle ${isMenuOpen ? 'open' : ''}`}></div>
        <div className={`bar bottom ${isMenuOpen ? 'open' : ''}`}></div>
      </button>
    </header>
  );
};

export default Header;