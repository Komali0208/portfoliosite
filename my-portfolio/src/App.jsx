import React from 'react';
import RainBackground from './components/RainBackground';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Achievements from './components/Achievements';
import Footer from './components/Footer';

function App() {
  return (
    <div className="relative min-h-screen bg-[#1a1a2e] text-white overflow-hidden">
      <RainBackground />
      <Navbar />
      <div className="relative z-10 pt-16">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Achievements />
        <Footer />
      </div>
    </div>
  );
}

export default App;
