import React, { useEffect } from 'react';
import '../styles/Loading.css';

const Loading = ({ onFinish }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onFinish();
    }, 5000);
    return () => clearTimeout(timer);
  }, [onFinish]);

  return (
    <div className="loading-container">
      <div className="loading-content">
        <img 
          src={process.env.PUBLIC_URL + '/Q.png'} 
          alt="Cargando..." 
          className="loading-logo"
        />
        <div className="loading-progress"></div>
      </div>
    </div>
  );
};

export default Loading;
