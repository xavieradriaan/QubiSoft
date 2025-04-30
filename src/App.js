import React, { useState } from 'react';
import Header from './components/Header';
import Home from './components/Home';
import Footer from './components/Footer';
import ProjectCarousel from './components/ProjectCarousel';
import Loading from './components/Loading';
import './App.css';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className="App">
      {isLoading ? (
        <Loading onFinish={() => setIsLoading(false)} />
      ) : (
        <>
          <Header />
          <Home />
          <ProjectCarousel />
          <Footer />
        </>
      )}
    </div>
  );
}

export default App;
