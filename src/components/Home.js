import React from 'react';
import { motion } from 'framer-motion';
import Service from './Service';
import ProjectShowcase from './ProjectShowcase';
import '../styles/Home.css';

const services = [
  { 
    id: 1, 
    name: 'Aplicación Web - Supermercado', 
    description: 'Se desarrolló sistema web con carrito de compras, login, calidad de productos y control de stock.',
    icon: '🌌',
    gradient: 'linear-gradient(45deg, #6a00ff, #00f7ff)'
  },
  { 
    id: 2, 
    name: 'Bodega IoT', 
    description: 'Se integraron sensores RFID y AI para identificar, contar y rastrear herramientas en bodega industrial.',
    icon: '⚡',
    gradient: 'linear-gradient(45deg, #ff00ff, #00ff9d)'
  },
  {
    id: 3, 
    name: 'Sistema de Monitoreo Cámaras de Seguridad', 
    description: 'Desarrollado sistema con cámaras IP que detectan movimiento y alertan anomalías usando ML.',
    icon: '🛰️',
    gradient: 'linear-gradient(45deg, #ff7e00, #ff00a8)'
  },
  {
    id: 4, 
    name: 'Integración de Sistemas para Sector Salud', 
    description: 'Unificamos app de pacientes con registros de síntomas, calendario de medicamentos y reportes PDF.',
    icon: '🔗',
    gradient: 'linear-gradient(45deg, #ff007f, #7f00ff)'
  },
  { 
    id: 5, 
    name: 'Sistema para Consultorio Odontológico', 
    description: 'Web app para odontólogos con historial clínico, citas programadas y alertas automáticas a pacientes.',
    icon: '🧠',
    gradient: 'linear-gradient(45deg, #ff00ff, #7fff00)'
  },
  { 
    id: 6, 
    name: 'Big Data y Análisis de Datos', 
    description: 'Dashboard con analítica predictiva para compras y comportamiento de clientes en centros comerciales.',
    icon: '📊',
    gradient: 'linear-gradient(45deg, #ff007f, #7f00ff)'
  },
  { 
    id: 7, 
    name: 'Sistema de Realidad Aumentada y Virtual para Centro Comercial', 
    description: 'AR/VR para guiar clientes, mostrar productos y generar interacción personalizada en tiendas.',
    icon: '🕶️',
    gradient: 'linear-gradient(45deg, #ff00ff, #00ffff)'
  },
  { 
    id: 8, 
    name: 'ChatBot IA para E-commerce en Telegram', 
    description: 'Bot inteligente con visión por IA, catálogo interactivo y sistema automatizado de compra y venta.',
    icon: '🤖',
    gradient: 'linear-gradient(45deg, #ff7f00, #00ff7f)'
  },
  { 
    id: 9, 
    name: 'Blockchain y Criptomonedas', 
    description: 'Smart contract en Solidity para automatizar pagos y trazabilidad en venta de tokens personalizados.',
    icon: '🔗',
    gradient: 'linear-gradient(45deg, #00ffff, #ff00ff)'
  },
  { 
    id: 10, 
    name: 'Desarrollo de Software para Veterinaria', 
    description: 'Sistema web para clínica veterinaria con fichas médicas, recetas, facturación y acceso remoto seguro.',
    icon: '🛠️',
    gradient: 'linear-gradient(45deg, #ff0000, #00ff00)'
  },
  { 
    id: 11, 
    name: 'Desarrollo de Software para Empresa Textil - ERP', 
    description: 'Desarrollado ERP para empresa textil: finanzas, inventario, RRHH, ventas y reportes en tiempo real.',
    icon: '🏢',
    gradient: 'linear-gradient(45deg, #00ff7f, #7f00ff)'
  },
  { 
    id: 12, 
    name: 'Aplicaciónpara el Sector Público', 
    description: 'Soluciones personalizadas para el sector público',
    icon: '🏛️',
    gradient: 'linear-gradient(45deg, #ff00ff, #00ffff)'
  },
  { 
    id: 13, 
    name: 'Educación - Control de Vacunas', 
    description: 'App para instituciones que registra vacunas por estudiante, fecha, dosis y genera certificados digitales.',
    icon: '🎓',
    gradient: 'linear-gradient(45deg, #ff7f00, #00ff7f)'
  },
  { 
    id: 14, 
    name: 'Desarrollo de Software para la Salud', 
    description: 'Soluciones personalizadas para el sector salud',
    icon: '🏥',
    gradient: 'linear-gradient(45deg, #00ffff, #ff00ff)'
  },
  { 
    id: 15, 
    name: 'Aplicativo para el Entretenimiento - Comedia', 
    description: 'Se creó plataforma para comediantes que gestiona eventos, venta de entradas y feedback del público.',
    icon: '🎭',
    gradient: 'linear-gradient(45deg, #ff0000, #00ff00)'
  },
  { 
    id: 16, 
    name: 'Sistema Turístico con Geolocalización', 
    description: 'Plataforma para operadores turísticos con rutas, reservas, mapas interactivos y recomendaciones personalizadas.',
    icon: '✈️',
    gradient: 'linear-gradient(45deg, #ff7f00, #007fff)'
  },
  { 
    id: 17, 
    name: 'Software para Constructora de Arquitectura', 
    description: 'ERP modular para firma de arquitectura: cotizaciones, gestión de planos, cronogramas y entregables.',
    icon: '🏭',
    gradient: 'linear-gradient(45deg, #ff007f, #7f00ff)'
  },
  { 
    id: 18, 
    name: 'Desarrollo de Software para Supermercado', 
    description: 'Soluciones personalizadas para el comercio',
    icon: '🛒',
    gradient: 'linear-gradient(45deg, #00ff7f, #7f00ff)'
  },
  { 
    id: 19, 
    name: 'Software para Agricultura', 
    description: 'Sistema de riego automatizado con sensores de humedad y temperatura, control remoto y análisis de datos on cloud.',
    icon: '🌾',
    gradient: 'linear-gradient(45deg, #ff00ff, #00ffff)'
  },
  { 
    id: 20, 
    name: 'Sistema IoT Camaronera', 
    description: 'Sistema de sensores que dosifican alimento automáticamente según temperatura, horario y fase de crecimiento.',
    icon: '🏗️',
    gradient: 'linear-gradient(45deg, #ff7f00, #00ff7f)'
  },
  { 
    id: 21, 
    name: 'Plataforma Logística para Transporte', 
    description: 'Sistema web para gestión de flotas, rastreo GPS, entregas y reportes en tiempo real.',
    icon: '🚚',
    gradient: 'linear-gradient(45deg, #00ffff, #ff00ff)'
  },
  { 
    id: 22, 
    name: 'Software de Monitoreo Energético Inteligente', 
    description: 'Aplicación con sensores y visualización de consumo eléctrico en tiempo real con alertas automatizadas.',
    icon: '⚡',
    gradient: 'linear-gradient(45deg, #ff0000, #00ff00)'
  },
  { 
    id: 23, 
    name: 'Sistema Ambiental con IoT y Reportes', 
    description: 'Monitoreo ambiental con sensores de aire, agua y reportes automáticos para control y alertas.',
    icon: '🌍',
    gradient: 'linear-gradient(45deg, #00ff7f, #7f00ff)'
  },
];

const projects = [
  {
    id: 1,
    title: "Aplicación de Agricultura Inteligente",
    description: "Sistema de agricultura inteligente con drones autónomos y visión por computadora",
    tech: "Drones autónomos, Sensores IoT, Análisis de datos en tiempo real, Optimización de cultivos",
    image: process.env.PUBLIC_URL + "/agricola.png",  // Ruta actualizada
    pattern: "circuit-pattern.svg"
  },
  {
    id: 2,
    title: "Sistema de Monitoreo de Salud",
    description: "Plataforma de monitoreo médico en tiempo real con análisis predictivo",
    tech: "Monitoreo remoto, Alertas en tiempo real, Análisis predictivo, Integración con dispositivos médicos",
    image: process.env.PUBLIC_URL + "/sistemaMed.png",  // Ruta actualizada
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