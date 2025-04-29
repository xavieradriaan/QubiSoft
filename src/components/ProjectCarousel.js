import React, { useState, useEffect, useCallback } from 'react';
import '../styles/ProjectCarousel.css';

const brands = [
  {
    id: 1,
    name: 'KFC Ecuador',
    description: 'Franquicia internacional con fuerte presencia local',
    industry: 'Restauración',
    logo: 'M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5'
  },
  {
    id: 2,
    name: 'Netlife',
    description: 'Proveedor ecuatoriano de internet por fibra óptica',
    industry: 'Telecomunicaciones',
    logo: 'M12 2a10 10 0 100 20 10 10 0 000-20zm3 11h-2v4h-2v-4H9v-2h2V9h2v2h2v2z'
  },
  {
    id: 3,
    name: 'Universidad San Francisco de Quito',
    description: 'Institución de educación superior privada reconocida',
    industry: 'Educación',
    logo: 'M12 2a10 10 0 100 20 10 10 0 000-20zm0 18a8 8 0 110-16 8 8 0 010 16zm-1-11h2v2h-2V9zm0 4h2v6h-2v-6z'
  },
  {
    id: 4,
    name: 'Aglomerados Cotopaxi',
    description: 'Líder nacional en producción de tableros de madera',
    industry: 'Industria maderera',
    logo: 'M12 2a10 10 0 100 20 10 10 0 000-20zm0 18a8 8 0 110-16 8 8 0 010 16zm-1-11h2v2h-2V9zm0 4h2v6h-2v-6z'
  },
  {
    id: 5,
    name: 'Agroscan',
    description: 'Startup ecuatoriana de tecnología agrícola con drones',
    industry: 'Agrotecnología',
    logo: 'M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5'
  },
  {
    id: 6,
    name: 'GreenPack',
    description: 'PYME que fabrica empaques biodegradables en Guayaquil',
    industry: 'Manufactura sustentable',
    logo: 'M12 2a10 10 0 100 20 10 10 0 000-20zm0 18a8 8 0 110-16 8 8 0 010 16zm1-11h-2v4h2v2h-2v2h2v-4h-2v-2h4V9h-4z'
  },
  {
    id: 7,
    name: 'RedLogic',
    description: 'Servicios de infraestructura y redes para empresas emergentes',
    industry: 'Infraestructura IT',
    logo: 'M12 2a10 10 0 100 20 10 10 0 000-20zm0 18a8 8 0 110-16 8 8 0 010 16zm-1-11h2v2h-2V9zm0 4h2v6h-2v-6z'
  },
  {
    id: 8,
    name: 'Café Flor de Caña',
    description: 'Café premium ecuatoriano con reconocimiento internacional',
    industry: 'Alimentos y bebidas',
    logo: 'M12 2a10 10 0 100 20 10 10 0 000-20zm0 18a8 8 0 110-16 8 8 0 010 16zm-1-11h2v2h-2V9zm0 4h2v6h-2v-6z'
  },
  {
    id: 9,
    name: 'Construcciones Ecuador',
    description: 'Líder en construcción de infraestructura pública y privada',
    industry: 'Construcción',
    logo: 'M12 2a10 10 0 100 20 10 10 0 000-20zm0 18a8 8 0 110-16 8 8 0 010 16zm-1-11h2v2h-2V9zm0 4h2v6h-2v-6z'
  },
  {
    id: 10,
    name: 'Ecuador Travel',
    description: 'Agencia de turismo con enfoque en sostenibilidad',
    industry: 'Turismo',
    logo: 'M12 2a10 10 0 100 20 10 10 0 000-20zm0 18a8 8 0 110-16 8 8 0 010 16zm-1-11h2v2h-2V9zm0 4h2v6h-2v-6z'
  },
  {
    id: 11,
    name: 'Cerveza Pilsener',
    description: 'Cerveza ecuatoriana con tradición y calidad',
    industry: 'Bebidas',
    logo: 'M12 2a10 10 0 100 20 10 10 0 000-20zm0 18a8 8 0 110-16 8 8 0 010 16zm-1-11h2v2h-2V9zm0 4h2v6h-2v-6z'
  }
];

const ProjectCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  // Usar useCallback para memoizar las funciones
  const handlePrev = useCallback(() => {
    setCurrentIndex(prev => (prev === 0 ? brands.length - 1 : prev - 1));
  }, []);

  const handleNext = useCallback(() => {
    setCurrentIndex(prev => (prev === brands.length - 1 ? 0 : prev + 1));
  }, []);

  // Efecto para el auto-rotación corregido
  useEffect(() => {
    let interval;
    if (!isHovered) {
      interval = setInterval(handleNext, 1000); // Reducir de 5000ms a 3000ms
    }
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isHovered, handleNext]);

  // Manejo táctil mejorado
  const handleTouchStart = (e) => {
    setTouchStart(e.targetTouches[0].clientX);
    setIsHovered(true); // Pausar auto-rotación al interactuar
  };

  const handleTouchEnd = () => {
    setIsHovered(false);
    if (touchStart - touchEnd > 50) handleNext();
    if (touchStart - touchEnd < -50) handlePrev();
  };

  // Renderizado optimizado
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
        onTouchMove={(e) => setTouchEnd(e.targetTouches[0].clientX)}
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
            onClick={() => setCurrentIndex(index)}
            aria-label={`Ir a la marca ${brand.name}`}
          />
        ))}
      </div>
    </section>
  );
};
export default ProjectCarousel;