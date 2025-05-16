
const SkillCard = ({ title, level, icon }: { title: string; level: number; icon: string }) => {
  return (
    <div className="bg-gray-900/30 backdrop-blur-sm rounded-xl p-6 border border-white/5 card-hover">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-display font-bold text-white">{title}</h3>
        <span className="text-purple-400">{icon}</span>
      </div>
      <div className="w-full bg-gray-700/50 rounded-full h-2 mb-1">
        <div 
          className="bg-gradient-to-r from-purple-500 to-purple-300 h-2 rounded-full"
          style={{ width: `${level}%` }}
        ></div>
      </div>
      <div className="flex justify-between text-xs text-gray-400">
        <span>Beginner</span>
        <span>Advanced</span>
      </div>
    </div>
  );
};

const Skills = () => {
  const skills = [
    { title: "HTML & CSS", level: 95, icon: "🎨" },
    { title: "JavaScript", level: 90, icon: "🚀" },
    { title: "React", level: 85, icon: "⚛️" },
    { title: "UI/UX Design", level: 80, icon: "🎭" },
    { title: "Node.js", level: 75, icon: "🔧" },
    { title: "TypeScript", level: 80, icon: "📘" },
    { title: "Tailwind CSS", level: 90, icon: "💨" },
    { title: "MongoDB", level: 70, icon: "🍃" },
  ];
  
  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold font-display text-white mb-4">
            My <span className="text-purple-400">Skills</span>
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            I've developed a diverse set of skills throughout my career. Here's a look at my technical expertise and proficiency levels.
          </p>
        </div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {skills.map((skill, index) => (
            <SkillCard
              key={index}
              title={skill.title}
              level={skill.level}
              icon={skill.icon}
            />
          ))}
        </div>
        
        <div className="mt-20">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold font-display text-white mb-4">
              My Creative Process
            </h3>
          </div>
          
          <div className="grid md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {[
              { title: "Research", description: "Understanding project requirements and researching best solutions." },
              { title: "Design", description: "Creating wireframes and visual designs focused on user experience." },
              { title: "Development", description: "Writing clean, efficient code to bring designs to life." },
              { title: "Launch", description: "Testing, optimizing, and deploying the final product." }
            ].map((step, index) => (
              <div 
                key={index} 
                className="bg-gray-900/30 backdrop-blur-sm p-6 rounded-xl border border-white/5 card-hover relative"
              >
                <div className="absolute -top-4 -left-4 w-12 h-12 rounded-full bg-purple-500 flex items-center justify-center font-display font-bold text-lg">
                  {index + 1}
                </div>
                <h4 className="text-xl font-display font-bold text-white mt-4 mb-3">
                  {step.title}
                </h4>
                <p className="text-gray-400">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
