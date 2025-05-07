import React, { useState, useEffect, useCallback, useRef } from 'react';
import '../styles/ProjectCarousel.css';

const brands = [
  {
    id: 1,
    name: 'COMPANIA AGRICOLA SAN MIGUEL SA CASM',
    description: 'Co internacional con fuerte presencia local',
    industry: 'Agricultura',
    logo: 'sanmiguel.png' // Nombre actualizado
  },
  {
    id: 2,
    name: 'C.A. ECUATORIANA DE CERAMICA',
    description: 'Líder en la producción de cerámica en Ecuador',
    industry: 'Cerámica',
    logo: 'ecuacermica.png'
  },
  {
    id: 3,
    name: 'COLEGIO FRANCES DE QUITO C LTDA',
    description: 'Institución de educación privada reconocida',
    industry: 'Educación',
    logo: 'frances.png'
  },
  {
    id: 4,
    name: 'Aglomerados Cotopaxi',
    description: 'Líder nacional en producción de tableros de madera',
    industry: 'Industria maderera',
    logo: 'aglomerados.png'
  },
  {
    id: 5,
    name: 'Agroscan',
    description: 'Compañía Ecuatoriana de tecnología agrícola con drones',
    industry: 'Agrotecnología',
    logo: 'agroscan.png'
  },
  {
    id: 6,
    name: 'GreenPack',
    description: 'PYME que fabrica empaques biodegradables en Guayaquil',
    industry: 'Manufactura sustentable',
    logo: 'greenpack.png'
  },
  {
    id: 7,
    name: 'RedLogic',
    description: 'Servicios de infraestructura y redes para empresas emergentes',
    industry: 'Infraestructura IT',
    logo: 'redlogic.png'
  },
  {
    id: 8,
    name: 'Café Flor de Caña',
    description: 'Café premium ecuatoriano con reconocimiento internacional',
    industry: 'Alimentos y bebidas',
    logo: 'cafe.png'
  },
  {
    id: 9,
    name: 'Construcciones Ecuador',
    description: 'Líder en construcción de infraestructura pública y privada',
    industry: 'Construcción',
    logo: 'construcciones.png'
  },
  {
    id: 10,
    name: 'Ecuador Travel',
    description: 'Agencia de turismo con enfoque en sostenibilidad',
    industry: 'Turismo',
    logo: 'travel.png'
  },
  {
    id: 11,
    name: 'PINTURAS CONDOR SA Pilsener',
    description: 'Fabrica de pinturas y recubrimientos con enfoque en sostenibilidad',
    industry: 'Pinturas y recubrimientos',
    logo: 'condor.png'
  },
  {
    id: 12,
    name: 'CONTINENTAL TIRE ANDINA S. A.',
    description: 'Fabricante de neumáticos y productos de caucho', 
    industry: 'Neumáticos y caucho',
    logo: 'continental.png'
  }
];

const ProjectCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const carouselRef = useRef();

  // Usar useCallback para memoizar las funciones
  const handlePrev = useCallback(() => {
    setCurrentIndex(prev => (prev === 0 ? brands.length - 1 : prev - 1));
  }, []);

  const handleNext = useCallback(() => {
    setCurrentIndex(prev => (prev === brands.length - 1 ? 0 : prev + 1));
  }, []);

  // Agrega Intersection Observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.5 }
    );

    const currentRef = carouselRef.current; // Copiar el valor actual del ref

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) observer.unobserve(currentRef); // Usar la copia del ref
    };
  }, []);

  // Modifica el efecto de auto-rotación
  useEffect(() => {
    let interval;
    if (isVisible && !isHovered) {
      interval = setInterval(handleNext, 3000);
    }
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isVisible, isHovered, handleNext]);

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
      ref={carouselRef}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="carousel-header">
        <h2 className="carousel-title">
          <span className="title-gradient">Impulsando + 50 empresas líderes</span>
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
                  <img 
                    src={process.env.PUBLIC_URL + `/${brand.logo}`}
                    alt={`Logo ${brand.name}`}
                    loading="lazy"
                  />
                </div>
                <h3 className="carousel-item-title">{brand.name}</h3>
                <p className="carousel-item-description">{brand.description}</p>
                <span className="industry-tag">{brand.industry}</span>
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