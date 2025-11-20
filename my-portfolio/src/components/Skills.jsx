import React from 'react';
// Placeholder for icons. We'll add actual icons later.
const IconPlaceholder = ({ name }) => (
  <div className="text-4xl text-blue-400 mb-2">{name[0]}</div> 
);

const skillsData = [
  {
    category: 'Languages',
    skills: [
      { name: 'Python', icon: 'Py' }, { name: 'C/C++', icon: 'C+' }, 
      { name: 'SQL', icon: 'Sq' }, { name: 'HTML/CSS', icon: 'Ht' }, 
      { name: 'JavaScript', icon: 'Js' }
    ],
  },
  {
    category: 'Frameworks',
    skills: [
      { name: 'React', icon: 'Re' }, { name: 'Node.js', icon: 'No' }, 
      { name: 'Figma', icon: 'Fi' }
    ],
  },
  {
    category: 'Libraries',
    skills: [
      { name: 'Pandas', icon: 'Pa' }, { name: 'Scikit-learn', icon: 'Sk' }, 
      { name: 'Matplotlib', icon: 'Ma' }
    ],
  },
  {
    category: 'Developer Tools',
    skills: [
      { name: 'Git', icon: 'Gi' }, { name: 'Kaggle', icon: 'Ka' }, 
      { name: 'VS Code', icon: 'Vs' }
    ],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="container mx-auto px-4 py-16 pt-32 text-center">
      <h2 className="text-4xl font-bold text-white mb-12">Skills</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {skillsData.map((category) => (
          <div 
            key={category.category} 
            className="bg-gradient-to-br from-[#1a1a2e] to-[#16213e] p-6 rounded-lg shadow-lg 
                       hover:shadow-blue-500/50 transition-shadow duration-300 transform hover:scale-105 
                       border border-transparent hover:border-blue-500/50 cursor-pointer 
                       hover:backdrop-blur-sm hover:bg-opacity-70"
          >
            <h3 className="text-2xl font-semibold text-white mb-4">{category.category}</h3>
            <div className="flex flex-wrap justify-center gap-4">
              {category.skills.map((skill) => (
                <div key={skill.name} className="flex flex-col items-center text-gray-300">
                  <IconPlaceholder name={skill.icon} />
                  <span className="text-sm">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
