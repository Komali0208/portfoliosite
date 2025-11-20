import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  const githubLink = "https://github.com/komali02";
  const linkedinLink = "https://linkedin.com/in/kusuma-komali-priya-kodimela";
  const emailAddress = "mailto:your.email@example.com"; // Placeholder email

  return (
    <footer className="bg-[#1a1a2e] text-gray-400 py-8 mt-16">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        <p className="text-center md:text-left mb-4 md:mb-0">&copy; {new Date().getFullYear()} Kusuma Komali Priya. All rights reserved.</p>
        <div className="flex space-x-6">
          <a 
            href={linkedinLink} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-gray-400 hover:text-blue-400 transition-colors duration-300 relative group"
          >
            <Linkedin size={24} />
            <span className="absolute inset-0 bg-blue-500 opacity-0 group-hover:opacity-30 transition-opacity duration-300 pointer-events-none rounded-full"></span>
          </a>
          <a 
            href={githubLink} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-gray-400 hover:text-purple-400 transition-colors duration-300 relative group"
          >
            <Github size={24} />
            <span className="absolute inset-0 bg-purple-500 opacity-0 group-hover:opacity-30 transition-opacity duration-300 pointer-events-none rounded-full"></span>
          </a>
          <a 
            href={emailAddress} 
            className="text-gray-400 hover:text-pink-400 transition-colors duration-300 relative group"
          >
            <Mail size={24} />
            <span className="absolute inset-0 bg-pink-500 opacity-0 group-hover:opacity-30 transition-opacity duration-300 pointer-events-none rounded-full"></span>
          </a>
        </div>
        {/* Placeholder for Vercel Deployment Badge */}
        <div className="mt-4 md:mt-0">
          {/* After your first Vercel deployment, replace the comment below with the actual badge URL. */}
          {/* Example: <img src="https://vercelbadge.vercel.app/api/your-username/your-project-name" alt="Vercel Deployment Status" /> */}
          <p className="text-sm text-gray-500">Deployment status badge goes here after Vercel setup.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
