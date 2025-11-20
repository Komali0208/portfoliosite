import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [activeTab, setActiveTab] = useState('Home');

  const tabs = ['Home', 'About', 'Skills', 'Projects', 'Achievements'];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveTab(entry.target.id.charAt(0).toUpperCase() + entry.target.id.slice(1));
          }
        });
      },
      {
        root: null,
        rootMargin: '-50% 0px -50% 0px', // Adjust this to change when a section becomes active
        threshold: 0,
      }
    );

    tabs.forEach((tab) => {
      const element = document.getElementById(tab.toLowerCase());
      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      tabs.forEach((tab) => {
        const element = document.getElementById(tab.toLowerCase());
        if (element) {
          observer.unobserve(element);
        }
      });
    };
  }, []);

  return (
    <nav className="fixed top-0 left-0 w-full bg-[#1a1a2e] z-20 shadow-lg">
      <div className="container mx-auto px-4 py-3 flex justify-center items-center">
        <ul className="flex space-x-0 md:space-x-4">
          {tabs.map((tab) => (
            <li key={tab}>
              <a
                href={`#${tab.toLowerCase()}`}
                onClick={() => setActiveTab(tab)}
                className={`block px-4 py-2 text-white font-medium uppercase tracking-wider transition-all duration-300 
                  ${activeTab === tab ? 'bg-[#2a7ae2] text-white' : 'hover:bg-gray-700'}
                  relative group
                `}
                style={{ clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)' }} // Ensures sharp corners
              >
                {tab}
                {/* Neon hover glow effect */}
                <span className="absolute inset-0 bg-blue-500 opacity-0 group-hover:opacity-30 transition-opacity duration-300 pointer-events-none"></span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
