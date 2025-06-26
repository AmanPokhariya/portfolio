
import { useEffect, useRef } from 'react';

declare global {
  interface Window {
    particlesJS: any;
  }
}

const ParticleBackground = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Add a small delay to ensure DOM is ready
    const timer = setTimeout(() => {
      if (containerRef.current && typeof window !== 'undefined' && window.particlesJS) {
        try {
          window.particlesJS('particles-js', {
            particles: {
              number: {
                value: 50,
                density: {
                  enable: true,
                  value_area: 800
                }
              },
              color: {
                value: '#ffffff'
              },
              shape: {
                type: 'circle'
              },
              opacity: {
                value: 0.5,
                random: false
              },
              size: {
                value: 3,
                random: true
              },
              line_linked: {
                enable: true,
                distance: 150,
                color: '#ffffff',
                opacity: 0.4,
                width: 1
              },
              move: {
                enable: true,
                speed: 6,
                direction: 'none',
                random: false,
                straight: false,
                out_mode: 'out',
                bounce: false
              }
            },
            interactivity: {
              detect_on: 'canvas',
              events: {
                onhover: {
                  enable: true,
                  mode: 'repulse'
                },
                onclick: {
                  enable: true,
                  mode: 'push'
                },
                resize: true
              }
            },
            retina_detect: true
          });
        } catch (error) {
          console.log('Particles.js initialization failed:', error);
        }
      }
    }, 100);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return <div ref={containerRef} id="particles-js" className="absolute inset-0 z-0"></div>;
};

export default ParticleBackground;
