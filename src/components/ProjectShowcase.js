import React from 'react';
import { useTrail, animated, config } from '@react-spring/web';
import '../styles/ProjectShowcase.css';

const ProjectShowcase = ({ projects }) => {
  const [trail, api] = useTrail(projects.length, () => ({
    xys: [0, 0, 1],
    config: config.gentle
  }));

  const handle3dEffect = (index) => ({
    transform: trail[index].xys.to((x, y, s) => 
      `perspective(1000px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`
    ),
    onMouseMove: ({ clientX: x, clientY: y, currentTarget }) => {
      const rect = currentTarget.getBoundingClientRect();
      api.start(i => {
        if (i === index) return {
          xys: [
            -(y - rect.top - rect.height / 2) / 10,
            (x - rect.left - rect.width / 2) / 10,
            1.05
          ]
        }
      });
    },
    onMouseLeave: () => api.start(i => {
      if (i === index) return { xys: [0, 0, 1] }
    })
  });

  return (
    <section id="projects" className="project-showcase">
      <h2 className="section-title">
        <span className="holographic-text">Proyectos Destacados</span>
      </h2>
      <div className="project-grid">
        {projects.map((project, index) => (
          <animated.div 
            key={index}
            className="project-card"
            {...handle3dEffect(index)}
          >
            <div className="card-inner">
              <div 
                className="project-image"
                style={{ backgroundImage: `url(${project.image})` }}
              >
                <div className="image-overlay"></div>
                <div className="project-glows">
                  <div className="glow purple"></div>
                  <div className="glow white"></div>
                </div>
              </div>
              
              <div className="project-content">
                <h3 className="project-title">
                  <span className="title-decorator"></span>
                  {project.title}
                </h3>
                <p className="project-description">{project.description}</p>
                
                <div className="tech-stack">
                  {project.tech.split(',').map((tech, i) => (
                    <span key={i} className="tech-pill">
                      <span className="tech-glow"></span>
                      {tech}
                    </span>
                  ))}
                </div>

                <button className="case-study-button">
                  <span className="button-glow"></span>
                  <span className="button-text">Explorar Proyecto</span>
                  <div className="button-arrow">➔</div>
                </button>
              </div>
            </div>
          </animated.div>
        ))}
      </div>
    </section>
  );
};

export default ProjectShowcase;