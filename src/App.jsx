import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Ticker from './components/Ticker';
import Features from './components/Features';
import About from './components/About';
import Classes from './components/Classes';
import Pricing from './components/Pricing';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="app-main">
      <Header />
      
      <main className="hero-section">
        <div className="hero-text-bg">
          <Hero />
        </div>
        <div className="hero-image-bg"></div>
      </main>

      <Ticker />
      <Features />
      <About />
      <Classes />
      <Pricing />
      <Footer />
    </div>
  );
}

export default App;
