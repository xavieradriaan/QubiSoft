import React, { useState } from 'react';
import Header from './components/Header';
import Home from './components/Home';
import Footer from './components/Footer';
import ProjectCarousel from './components/ProjectCarousel';
import Loading from './components/Loading';
import './App.css';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  const handleFinishLoading = () => {
    setIsLoading(false);
  };

  return (
    <>
      {isLoading ? (
        <Loading onFinish={handleFinishLoading} />
      ) : (
        <div className="App">
          <h1>Bienvenido a QubiSoft</h1>
          <p>Tu app está lista 🚀</p>
          <Header />
          <Home />
          <ProjectCarousel />
          <Footer />
        </div>
      )}
    </>
  );
}

export default App;
