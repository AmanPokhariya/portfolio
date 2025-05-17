
import { useEffect, useRef } from 'react';
import CreativeButton from './CreativeButton';

const Hero = () => {
  const titleRef = useRef<HTMLHeadingElement>(null);
  
  useEffect(() => {
    // Simple typing effect
    if (titleRef.current) {
      const text = "Hi, I'm Alex Parker";
      titleRef.current.innerText = "";
      
      let i = 0;
      const typingEffect = setInterval(() => {
        if (i < text.length) {
          if (titleRef.current) {
            titleRef.current.innerText += text.charAt(i);
          }
          i++;
        } else {
          clearInterval(typingEffect);
        }
      }, 100);
      
      return () => clearInterval(typingEffect);
    }
  }, []);
  
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
  return (
    <section id="home" className="min-h-screen flex items-center relative pt-16">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-purple-400 font-display mb-4 text-xl md:text-2xl tracking-wider">
            Full Stack Developer & UI/UX Designer
          </h2>
          
          <h1 ref={titleRef} className="text-white font-display text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
            Hi, I'm Alex Parker
          </h1>
          
          <p className="text-gray-300 text-lg md:text-xl mb-8 leading-relaxed">
            I craft engaging digital experiences with modern code and innovative design.
            Expert in building responsive web applications with exceptional user interfaces.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <CreativeButton
              onClick={() => scrollToSection('projects')}
              className="bg-gradient-purple animate-pulse-slow"
            >
              View My Work
            </CreativeButton>
            
            <CreativeButton
              onClick={() => scrollToSection('contact')}
            >
              Let's Connect
            </CreativeButton>
          </div>
          
          <div className="mt-16 animate-bounce-slow">
            <button 
              onClick={() => scrollToSection('about')}
              className="text-white flex flex-col items-center gap-2 mx-auto opacity-70 hover:opacity-100 transition-opacity"
            >
              <span>Scroll Down</span>
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                width="24" 
                height="24" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              >
                <path d="M12 5v14"></path>
                <path d="m19 12-7 7-7-7"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
