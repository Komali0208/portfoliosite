import React from 'react';

// Placeholder for icons. We'll add actual icons later.
const IconPlaceholder = ({ name }) => (
  <div className="text-3xl text-green-400 mb-2">{name}</div> 
);

const achievementsData = [
  {
    title: 'International Research Bootcamp',
    description: '1st place for AI-based waste segregation project.',
    icon: '🏆', // Trophy icon placeholder
  },
  {
    title: 'Smart India Hackathon',
    description: 'Proposed solar-electric prototype for SDG-7.',
    icon: '💡', // Lightbulb icon placeholder
  },
];

const Achievements = () => {
  return (
    <section id="achievements" className="container mx-auto px-4 py-16 pt-32 text-center">
      <h2 className="text-4xl font-bold text-white mb-12">Achievements</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {achievementsData.map((achievement, index) => (
          <div 
            key={index} 
            className="bg-gradient-to-br from-[#1a1a2e] to-[#16213e] p-6 rounded-lg shadow-lg 
                       hover:shadow-green-500/50 transition-shadow duration-300 transform hover:scale-105 
                       border border-transparent hover:border-green-500/50 flex flex-col items-center animate-fade-in-slow
                       hover:backdrop-blur-sm hover:bg-opacity-70"
            style={{ animationDelay: `${index * 0.2}s` }} // Staggered fade-in
          >
            <IconPlaceholder name={achievement.icon} />
            <h3 className="text-2xl font-semibold text-white mb-2">{achievement.title}</h3>
            <p className="text-gray-300 text-base">{achievement.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Achievements;
