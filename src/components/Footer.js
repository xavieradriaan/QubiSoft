import React, { useState } from 'react';
import { Link } from 'react-scroll';
import '../styles/Footer.css';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('idle');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');
    
    try {
      await fetch('/api/newsletter', {
        method: 'POST',
        body: JSON.stringify({ email }),
        headers: { 'Content-Type': 'application/json' }
      });
      setStatus('success');
    } catch (error) {
      setStatus('error');
    }
  };

  return (
    <footer className="footer">
      <div className="footer-grid">
        <div className="footer-section">
          <h4>Navegación</h4>
          <nav className="footer-nav">
            <Link to="home" smooth={true} duration={500}>Inicio</Link>
            <Link to="projects" smooth={true} duration={700}>Proyectos</Link>
            <Link to="services" smooth={true} duration={900}>Servicios</Link>
            <Link to="contact" smooth={true} duration={1100}>Contacto</Link>
          </nav>
        </div>
        
        <div className="footer-section">
          <h4 className="section-title">Contacto</h4>
          <div className="contact-container">
            <a href="mailto:contact@qubitsoft.net" className="email-link">
              <svg className="icon" viewBox="0 0 24 24">
                <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 14H4V8l8 5 8-5v10zm-8-7L4 6h16l-8 5z"/>
              </svg>
              info@qubitsoft.net
            </a>
            
            <div className="social-links">
              <a href="https://linkedin.com" className="social-link">
                <svg className="icon" viewBox="0 0 24 24">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14zm-.5 15.5v-5.3a3.3 3.3 0 0 0-3.3-3.3 3.2 3.2 0 0 0-2.8 1.6h-.1v-1.4H9.8v8.4h2.9v-4.7a2 2 0 0 1 2-2 2 2 0 0 1 2 2v4.7H18.5zM7.2 6.7a1.6 1.6 0 1 0 0-3.2 1.6 1.6 0 0 0 0 3.2zM6.5 18.5v-8.4h1.4v8.4H6.5z"/>
                </svg>
              </a>
              
              <a href="https://github.com" className="social-link">
                <svg className="icon" viewBox="0 0 24 24">
                  <path d="M12 2A10 10 0 0 0 2 12c0 4.4 2.9 8.1 6.8 9.5.5.1.7-.2.7-.5v-1.7c-2.8.6-3.4-1.3-3.4-1.3-.4-1.1-1-1.4-1-1.4-.8-.6.1-.6.1-.6 1 .1 1.5 1 1.5 1 .9 1.5 2.3 1.1 2.9.8.1-.6.3-1.1.6-1.4-2.2-.2-4.6-1.1-4.6-4.9 0-1.1.4-2 1-2.7-.1-.2-.4-1.3.1-2.7 0 0 .8-.3 2.7 1 .8-.2 1.6-.3 2.4-.3s1.6.1 2.4.3c1.9-1.3 2.7-1 2.7-1 .5 1.4.2 2.5.1 2.7.6.7 1 1.6 1 2.7 0 3.8-2.3 4.7-4.6 4.9.4.3.7.9.7 1.9V21c0 .3.2.6.7.5 4-1.4 6.8-5.1 6.8-9.5A10 10 0 0 0 12 2z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
        
        <div className="newsletter">
          <h4 id="newsletter-label">Cuéntanos cómo podemos ayudarte</h4>
          <form onSubmit={handleSubmit} className="newsletter-form">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              aria-labelledby="newsletter-label"
              placeholder="Ingresa tu email y nos contactaremos"
              className="newsletter-input"
              required
              disabled={status === 'loading'}
            />
            <button 
              type="submit"
              className="subscribe-button"
              aria-label="Suscribirse al newsletter"
              disabled={!email || status === 'loading'}
            >
              {status === 'loading' ? 'Enviando...' : 'Enviar Correo'}
            </button>
          </form>
          {status === 'success' && <p>¡Gracias por suscribirte!</p>}
          {status === 'error' && <p>Hubo un error. Intenta nuevamente.</p>}
        </div>
      </div>
      
      <div className="quantum-divider"></div>
      
      <p className="copyright">
        © 2025 Qubitsoft - Haciendo posible tu futuro digital
      </p>
    </footer>
  );
};

export default Footer;