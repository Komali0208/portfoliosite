import React from 'react';

const projectData = [
  {
    title: 'Student Management System',
    techStack: 'HTML, CSS, JS, SQL',
    description: 'Web platform for attendance and assignments. Improved teacher-student communication.',
    githubLink: 'https://github.com/komali02/Student-Management-System', // Placeholder link
  },
  {
    title: 'Credit Card Fraud Detection',
    techStack: 'Python, scikit-learn',
    description: 'Machine learning model to detect fraud with 99.96% accuracy using Random Forest and Genetic Algorithm.',
    githubLink: 'https://github.com/komali02/Credit-Card-Fraud-Detection', // Placeholder link
  },
  {
    title: 'AI-Powered Gamified Coding Platform',
    techStack: 'React, Node.js, Firebase',
    description: 'Gamified learning system with AI-generated comics and reward points.',
    githubLink: 'https://github.com/komali02/AI-Powered-Gamified-Coding-Platform', // Placeholder link
  },
];

const Projects = () => {
  return (
    <section id="projects" className="container mx-auto px-4 py-16 pt-32 text-center">
      <h2 className="text-4xl font-bold text-white mb-12">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projectData.map((project) => (
          <div 
            key={project.title} 
            className="bg-gradient-to-br from-[#1a1a2e] to-[#16213e] p-6 rounded-lg shadow-lg 
                       hover:shadow-blue-500/50 transition-shadow duration-300 transform hover:scale-105 
                       border border-transparent hover:border-blue-500/50 flex flex-col justify-between
                       hover:backdrop-blur-sm hover:bg-opacity-70"
          >
            <div>
              <h3 className="text-2xl font-semibold text-white mb-2">{project.title}</h3>
              <p className="text-blue-400 text-sm mb-3">{project.techStack}</p>
              <p className="text-gray-300 text-base mb-4">{project.description}</p>
            </div>
            <a 
              href={project.githubLink} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="mt-4 inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition-colors duration-300"
            >
              GitHub
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
