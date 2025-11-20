import React from 'react';

const About = () => {
  return (
    <section id="about" className="container mx-auto px-4 py-16 pt-32 text-center relative">
      <div className="relative p-8 border-2 border-transparent rounded-lg shadow-lg max-w-3xl mx-auto
                      bg-gradient-to-br from-[#1a1a2e] to-[#16213e] 
                      hover:shadow-blue-500/50 transition-shadow duration-300 
                      before:content-[''] before:absolute before:inset-0 before:rounded-lg 
                      before:p-[3px] before:bg-gradient-to-br before:from-blue-500 before:via-purple-500 before:to-pink-500 before:-z-10 before:mask-gradient">
        <h2 className="text-4xl font-bold text-white mb-6">About Me</h2>
        <p className="text-lg text-gray-300 leading-relaxed">
          Enthusiastic AI learner passionate about scientific innovation and data-driven creativity.
          Exploring the intersections of Artificial Intelligence, Data Science, and Philosophy.
        </p>
      </div>
    </section>
  );
};

export default About;
