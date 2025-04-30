import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Home from './components/Home';
import Footer from './components/Footer';
import ProjectCarousel from './components/ProjectCarousel';
import Loading from './components/Loading';
import './App.css';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulamos una carga de 2 segundos, por ejemplo para imágenes o data
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer); // Limpieza si se desmonta el componente
  }, []);

  return (
    <div className="App">
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <Header />
          <main>
            <h1>Bienvenido a QubiSoft</h1>
            <p>Tu app está lista 🚀</p>
            <Home />
            <ProjectCarousel />
          </main>
          <Footer />
        </>
      )}
    </div>
  );
}

export default App;
