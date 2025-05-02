import React from 'react';
import { motion } from 'framer-motion';
import Service from './Service';
import ProjectShowcase from './ProjectShowcase';
import '../styles/Home.css';

const services = [
  { 
    id: 1, 
    name: 'Aplicación Web - Supermercado', 
    description: 'Aplicaciones con React + WebAssembly para rendimiento de nivel militar',
    icon: '🌌',
    gradient: 'linear-gradient(45deg, #6a00ff, #00f7ff)'
  },
  { 
    id: 2, 
    name: 'Bodega IoT', 
    description: 'Redes de sensores con procesamiento Edge AI integrado',
    icon: '⚡',
    gradient: 'linear-gradient(45deg, #ff00ff, #00ff9d)'
  },
  {
    id: 3, 
    name: 'Sistema de Monitoreo', 
    description: 'Monitoreo en tiempo real con análisis predictivo y machine learning',
    icon: '🛰️',
    gradient: 'linear-gradient(45deg, #ff7e00, #ff00a8)'
  },
  {
    id: 5, 
    name: 'Integración de Sistemas para Sector Salud', 
    description: 'Integración de sistemas con APIs y microservicios',
    icon: '🔗',
    gradient: 'linear-gradient(45deg, #ff007f, #7f00ff)'
  },
  { 
    id: 6, 
    name: 'Consultorio Odontológico', 
    description: 'Asesoría en tecnologías emergentes y tendencias del mercado',
    icon: '🧠',
    gradient: 'linear-gradient(45deg, #ff00ff, #7fff00)'
  },
  { 
    id: 7, 
    name: 'Desarrollo de Aplicaciones Móviles', 
    description: 'Aplicaciones móviles nativas y multiplataforma',
    icon: '📱',
    gradient: 'linear-gradient(45deg, #00ffff, #ff00ff)'
  },
  { 
    id: 9, 
    name: 'Desarrollo de APIs', 
    description: 'APIs RESTful y GraphQL para integración de sistemas',
    icon: '🔌',
    gradient: 'linear-gradient(45deg, #ff7f00, #007fff)'
  },
  { 
    id: 10, 
    name: 'Big Data y Análisis de Datos', 
    description: 'Soluciones de análisis de datos a gran escala',
    icon: '📊',
    gradient: 'linear-gradient(45deg, #ff007f, #7f00ff)'
  },
  { 
    id: 12, 
    name: 'Realidad Aumentada y Virtual', 
    description: 'Soluciones de AR/VR para experiencias inmersivas',
    icon: '🕶️',
    gradient: 'linear-gradient(45deg, #ff00ff, #00ffff)'
  },
  { 
    id: 13, 
    name: 'Desarrollo de Chatbots Telegram', 
    description: 'Chatbots inteligentes con procesamiento de lenguaje natural',
    icon: '🤖',
    gradient: 'linear-gradient(45deg, #ff7f00, #00ff7f)'
  },
  { 
    id: 14, 
    name: 'Blockchain y Criptomonedas', 
    description: 'Soluciones de blockchain y contratos inteligentes',
    icon: '🔗',
    gradient: 'linear-gradient(45deg, #00ffff, #ff00ff)'
  },
  { 
    id: 15, 
    name: 'Desarrollo de Software para Veterinaria', 
    description: 'Soluciones personalizadas para necesidades específicas',
    icon: '🛠️',
    gradient: 'linear-gradient(45deg, #ff0000, #00ff00)'
  },
  { 
    id: 18, 
    name: 'Desarrollo de Software para Empresas - ERP', 
    description: 'Soluciones personalizadas para empresas',
    icon: '🏢',
    gradient: 'linear-gradient(45deg, #00ff7f, #7f00ff)'
  },
  { 
    id: 19, 
    name: 'Desarrollo de Software para el Sector Público', 
    description: 'Soluciones personalizadas para el sector público',
    icon: '🏛️',
    gradient: 'linear-gradient(45deg, #ff00ff, #00ffff)'
  },
  { 
    id: 20, 
    name: 'Desarrollo de Software para la Educación', 
    description: 'Soluciones personalizadas para el sector educativo',
    icon: '🎓',
    gradient: 'linear-gradient(45deg, #ff7f00, #00ff7f)'
  },
  { 
    id: 21, 
    name: 'Desarrollo de Software para la Salud', 
    description: 'Soluciones personalizadas para el sector salud',
    icon: '🏥',
    gradient: 'linear-gradient(45deg, #00ffff, #ff00ff)'
  },
  { 
    id: 22, 
    name: 'Desarrollo de Software para el Entretenimiento', 
    description: 'Soluciones personalizadas para el sector del entretenimiento',
    icon: '🎭',
    gradient: 'linear-gradient(45deg, #ff0000, #00ff00)'
  },
  { 
    id: 23, 
    name: 'Desarrollo de Software para el Turismo', 
    description: 'Soluciones personalizadas para el sector turístico',
    icon: '✈️',
    gradient: 'linear-gradient(45deg, #ff7f00, #007fff)'
  },
  { 
    id: 24, 
    name: 'Desarrollo de Software para Empresa Industrial', 
    description: 'Soluciones personalizadas para la industria',
    icon: '🏭',
    gradient: 'linear-gradient(45deg, #ff007f, #7f00ff)'
  },
  { 
    id: 25, 
    name: 'Desarrollo de Software para Supermercado', 
    description: 'Soluciones personalizadas para el comercio',
    icon: '🛒',
    gradient: 'linear-gradient(45deg, #00ff7f, #7f00ff)'
  },
  { 
    id: 26, 
    name: 'Desarrollo de Software para la Agricultura', 
    description: 'Soluciones personalizadas para la agricultura',
    icon: '🌾',
    gradient: 'linear-gradient(45deg, #ff00ff, #00ffff)'
  },
  { 
    id: 27, 
    name: 'Desarrollo de Software para la Construcción', 
    description: 'Soluciones personalizadas para la construcción',
    icon: '🏗️',
    gradient: 'linear-gradient(45deg, #ff7f00, #00ff7f)'
  },
  { 
    id: 28, 
    name: 'Desarrollo de Software para el Transporte', 
    description: 'Soluciones personalizadas para el transporte',
    icon: '🚚',
    gradient: 'linear-gradient(45deg, #00ffff, #ff00ff)'
  },
  { 
    id: 29, 
    name: 'Desarrollo de Software para la Energía', 
    description: 'Soluciones personalizadas para el sector energético',
    icon: '⚡',
    gradient: 'linear-gradient(45deg, #ff0000, #00ff00)'
  },
  { 
    id: 31, 
    name: 'Desarrollo de Software para la Defensa', 
    description: 'Soluciones personalizadas para la defensa',
    icon: '🛡️',
    gradient: 'linear-gradient(45deg, #ff007f, #7f00ff)'
  },
  { 
    id: 32, 
    name: 'Desarrollo de Software para el Medio Ambiente', 
    description: 'Soluciones personalizadas para el medio ambiente',
    icon: '🌍',
    gradient: 'linear-gradient(45deg, #00ff7f, #7f00ff)'
  },
  { 
    id: 34, 
    name: 'Desarrollo de Software para la Ciencia', 
    description: 'Soluciones personalizadas para la ciencia',
    icon: '🔭',
    gradient: 'linear-gradient(45deg, #ff7f00, #00ff7f)'
  }
];

const projects = [
  {
    id: 1,
    title: "Aplicación de Agricultura Inteligente",
    description: "Sistema de agricultura inteligente con drones autónomos y visión por computadora",
    tech: "Drones autónomos, Sensores IoT, Análisis de datos en tiempo real, Optimización de cultivos",
    image: "farm-drone.jpg",
    pattern: "circuit-pattern.svg"
  },
  {
    id: 2,
    title: "Sistema de Monitoreo de Salud",
    description: "Plataforma de monitoreo médico en tiempo real con análisis predictivo",
    tech: "Monitoreo remoto, Alertas en tiempo real, Análisis predictivo, Integración con dispositivos médicos",
    image: "health-monitor.jpg",
    pattern: "neural-pattern.svg"
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { 
    y: 0, 
    opacity: 1,
    transition: { type: 'spring', stiffness: 120 }
  }
};

const Home = () => (
  <div className="home">
    <section id="home" className="hero">
      <div className="cyber-grid"></div>
      <div className="hero-content">
        <motion.div 
          className="hologram-container"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="neon-text glitch" data-text="Transformando Ideas en Realidad Digital">
            Transformando Ideas en Realidad Digital
          </h1>
        </motion.div>
        <motion.p 
          className="typewriter"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <span className="slogan-glitch" data-text="Soluciones tecnológicas que impulsan tu empresa...">
            Soluciones tecnológicas que impulsan tu empresa...
          </span>
        </motion.p>
      </div>
      <div className="scanline"></div>
    </section>

    <ProjectShowcase projects={projects} />

    <section id="services" className="services">
      <div className="cyber-border"></div>
      <motion.h2 
        className="section-title"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "0px 0px -100px 0px" }}
      >
        <span className="title-deco">Nuestros Desarrollos Tecnológicos</span>
      </motion.h2>
      
      <motion.div 
        className="service-grid"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "0px 0px -100px 0px" }}
      >
        {services.map(service => (
          <motion.div key={service.id} variants={itemVariants}>
            <Service {...service} />
          </motion.div>
        ))}
      </motion.div>
    </section>
  </div>
);

export default Home;