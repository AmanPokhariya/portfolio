
import { useState } from 'react';
import CreativeButton from './CreativeButton';

type Project = {
  id: number;
  title: string;
  category: string;
  image: string;
  description: string;
  link: string;
};

const projectsData: Project[] = [
  {
    id: 1,
    title: "Modern E-Commerce Platform",
    category: "Web Development",
    image: "https://images.unsplash.com/photo-1661956602139-ec64991b8b16?q=80&w=2665&auto=format&fit=crop",
    description: "A full-featured e-commerce platform with user authentication, product management, and payment processing.",
    link: "#"
  },
  {
    id: 2,
    title: "Mobile Banking App",
    category: "UI/UX Design",
    image: "https://images.unsplash.com/photo-1573867639040-6dd25fa5f597?q=80&w=2670&auto=format&fit=crop",
    description: "Clean and intuitive mobile banking interface design with focus on security and ease of use.",
    link: "#"
  },
  {
    id: 3,
    title: "Creative Agency Website",
    category: "Web Design",
    image: "https://images.unsplash.com/photo-1559028012-481c04fa702d?q=80&w=2691&auto=format&fit=crop",
    description: "A vibrant and engaging website for a creative agency showcasing their portfolio and services.",
    link: "#"
  },
  {
    id: 4,
    title: "Fitness Tracking Dashboard",
    category: "App Development",
    image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?q=80&w=2672&auto=format&fit=crop",
    description: "Interactive dashboard for tracking fitness goals, progress, and health metrics with data visualization.",
    link: "#"
  }
];

const Projects = () => {
  const [filter, setFilter] = useState('All');
  
  const categories = ['All', 'Web Development', 'UI/UX Design', 'Web Design', 'App Development'];
  
  const filteredProjects = filter === 'All' 
    ? projectsData 
    : projectsData.filter(project => project.category === filter);
    
  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold font-display text-white mb-4">
            My <span className="text-purple-400">Projects</span>
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Explore my recent work and the creative solutions I've developed for various clients and personal projects.
          </p>
        </div>
        
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`px-4 py-2 rounded-full text-sm transition-all ${
                filter === category 
                  ? 'bg-purple-500 text-white' 
                  : 'bg-gray-800/50 text-gray-300 hover:bg-gray-700/50'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-8">
          {filteredProjects.map(project => (
            <div 
              key={project.id} 
              className="card-hover bg-gray-900/30 backdrop-blur-sm rounded-xl overflow-hidden border border-white/5"
            >
              <div className="aspect-video overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              <div className="p-6">
                <span className="inline-block px-3 py-1 rounded-full text-xs bg-purple-500/20 text-purple-300 mb-3">
                  {project.category}
                </span>
                <h3 className="text-xl font-bold font-display text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-400 mb-4">
                  {project.description}
                </p>
                <CreativeButton className="w-full justify-center">
                  View Project
                </CreativeButton>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
