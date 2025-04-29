import React, { useState, useEffect } from 'react';
import '../styles/ProjectCarousel.css';

const brands = [
  {
    id: 1,
    name: 'QuantumCore',
    description: 'Plataforma de computación cuántica empresarial',
    industry: 'Tecnología Cuántica',
    logo: 'M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5'
  },
  {
    id: 2,
    name: 'NeuroSynth',
    description: 'Soluciones de inteligencia artificial generativa',
    industry: 'Inteligencia Artificial',
    logo: 'M12 2a10 10 0 100 20 10 10 0 000-20zm3 11h-2v4h-2v-4H9v-2h2V9h2v2h2v2z'
  },
  {
    id: 3,
    name: 'CryoData',
    description: 'Almacenamiento en frío cuántico-seguro',
    industry: 'Seguridad Digital',
    logo: 'M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5'
  },
  {
    id: 4,
    name: 'AetherNova',
    description: 'Redes de comunicación cuántica satelital',
    industry: 'Telecomunicaciones',
    logo: 'M12 2a10 10 0 100 20 10 10 0 000-20zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z'
  },
  {
    id: 5,
    name: 'NanoMesh',
    description: 'Materiales inteligentes a escala nanométrica',
    industry: 'Nanotecnología',
    logo: 'M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-4 8h-4v2h4v2h-4v2h4v2H9V7h6v2h-4v2h4z'
  },
  {
    id: 6,
    name: 'BioSynapse',
    description: 'Interfaces cerebro-computadora avanzadas',
    industry: 'Bioingeniería',
    logo: 'M12 2a10 10 0 100 20 10 10 0 000-20zm-1 16h2v-2h-2v2zm0-4h2V7h-2v7z'
  },
  {
    id: 7,
    name: 'EclipseNova',
    description: 'Sistemas de energía limpia de fusión compacta',
    industry: 'Energía',
    logo: 'M12 2a10 10 0 100 20 10 10 0 000-20zm0 18a8 8 0 110-16 8 8 0 010 16zm1-11h-2v4h2v2h-2v2h2v-4h-2v-2h4V9h-4z'
  },
  {
    id: 8,
    name: 'OmniOptix',
    description: 'Sensores cuánticos de última generación',
    industry: 'Óptica Cuántica',
    logo: 'M12 2a10 10 0 100 20 10 10 0 000-20zm0 18a8 8 0 110-16 8 8 0 010 16zm-1-11h2v2h-2V9zm0 4h2v6h-2v-6z'
  },
  {
    id: 9,
    name: 'StellarForge',
    description: 'Simulaciones astrofísicas cuánticas',
    industry: 'Supercomputación',
    logo: 'M12 2a10 10 0 100 20 10 10 0 000-20zm0 18a8 8 0 110-16 8 8 0 010 16zm-1-11h2v2h-2V9zm0 4h2v6h-2v-6z'
  },
  {
    id: 10,
    name: 'VortexLabs',
    description: 'Investigación aplicada en física cuántica',
    industry: 'I+D',
    logo: 'M12 2a10 10 0 100 20 10 10 0 000-20zm0 18a8 8 0 110-16 8 8 0 010 16zm-1-11h2v2h-2V9zm0 4h2v6h-2v-6z'
  }
];

const ProjectCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  const handleTouchStart = (e) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 50) handleNext();
    if (touchStart - touchEnd < -50) handlePrev();
  };

  useEffect(() => {
    if (!isHovered) {
      const interval = setInterval(handleNext, 5000);
      return () => clearInterval(interval);
    }
  }, [currentIndex, isHovered]);

  const handlePrev = () => {
    setCurrentIndex(prev => (prev === 0 ? brands.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex(prev => (prev === brands.length - 1 ? 0 : prev + 1));
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <section 
      className="project-carousel" 
      aria-label="Marcas destacadas"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="carousel-header">
        <h2 className="carousel-title">
          <span className="title-gradient">Impulsando a más de 200 empresas líderes</span>
        </h2>
        <div className="carousel-controls">
          <button 
            className="control-button prev" 
            onClick={handlePrev}
            aria-label="Marca anterior"
          >
            <svg viewBox="0 0 24 24"><path d="M15.41 16.59L10.83 12l4.58-4.59L14 6l-6 6 6 6 1.41-1.41z"/></svg>
          </button>
          <button 
            className="control-button next" 
            onClick={handleNext}
            aria-label="Siguiente marca"
          >
            <svg viewBox="0 0 24 24"><path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"/></svg>
          </button>
        </div>
      </div>

      <div 
        className="carousel-track"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <div className="slides-container" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
          {brands.map((brand) => (
            <article 
              key={brand.id} 
              className={`carousel-item ${brand.id === currentIndex + 1 ? 'active' : ''}`}
              aria-hidden={brand.id !== currentIndex + 1}
            >
              <div className="brand-card">
                <div className="brand-logo">
                  <svg viewBox="0 0 24 24" aria-hidden="true">
                    <path d={brand.logo}></path>
                  </svg>
                </div>
                <span className="industry-tag">{brand.industry}</span>
                <h3 className="carousel-item-title">{brand.name}</h3>
                <p className="carousel-item-description">{brand.description}</p>
                <button className="demo-button">
                  Ver caso de éxito
                  <span className="hover-effect" aria-hidden="true"></span>
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>

      <div className="pagination">
        {brands.map((brand, index) => (
          <button
            key={brand.id}
            className={`pagination-dot ${index === currentIndex ? 'active' : ''}`}
            onClick={() => goToSlide(index)}
            aria-label={`Ir a la marca ${brand.name}`}
          />
        ))}
      </div>
    </section>
  );
};

export default ProjectCarousel;