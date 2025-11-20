import React from 'react';

const Hero = () => {
  return (
    <section id="home" className="flex flex-col items-center justify-center min-h-screen text-center px-4 pt-16">
      <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 animate-fade-in-slow">
        Kusuma Komali Priya
      </h1>
      <p className="text-xl md:text-3xl text-gray-300 mb-6 animate-fade-in-medium">
        AI Enthusiast | Data Science Explorer | Cybersecurity Learner
      </p>
      <p className="text-lg md:text-xl text-gray-400 animate-fade-in-fast">
        “Exploring Life as an Infinite Algorithm”
      </p>
    </section>
  );
};

export default Hero;
