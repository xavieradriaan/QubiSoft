import React, { useRef } from 'react';
import { useSpring, animated } from '@react-spring/web';
import '../styles/Service.css';

const Service = ({ name, description, icon }) => {
  const ref = useRef();
  
  const [props, set] = useSpring(() => ({
    xys: [0, 0, 1],
    config: { mass: 5, tension: 350, friction: 40 }
  }));

  return (
    <animated.div
      ref={ref}
      className="service-card"
      onMouseMove={({ clientX, clientY }) => {
        const rect = ref.current.getBoundingClientRect();
        set.start({ 
          xys: [
            (clientX - rect.left - rect.width/2) * 0.3,
            (clientY - rect.top - rect.height/2) * 0.3,
            1.1
          ] 
        });
      }}
      onMouseLeave={() => set.start({ xys: [0, 0, 1] })}
      style={{
        transform: props.xys.to((x, y, s) => 
          `perspective(1000px) rotateX(${y}deg) rotateY(${x}deg) scale(${s})`
        )
      }}
    >
      <div className="service-icon">{icon}</div>
      <h3>{name}</h3>
      <p>{description}</p>
      <div className="quantum-line"></div>
    </animated.div>
  );
};

export default Service;