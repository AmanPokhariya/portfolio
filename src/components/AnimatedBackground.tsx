
import { useEffect } from 'react';
import ParticleBackground from './ParticleBackground';

const AnimatedBackground = () => {
  useEffect(() => {
    // Create gradient blobs that move around
    const createGlowingBlob = (color: string) => {
      const blob = document.createElement('div');
      blob.className = 'glow';
      blob.style.width = Math.random() * 300 + 200 + 'px';
      blob.style.height = blob.style.width;
      blob.style.backgroundColor = color;
      blob.style.left = Math.random() * 100 + '%';
      blob.style.top = Math.random() * 100 + '%';
      
      document.getElementById('animated-bg')?.appendChild(blob);
      
      // Animate the blob
      const animateBlob = () => {
        const newX = Math.random() * 90 + 5;
        const newY = Math.random() * 90 + 5;
        
        blob.style.transition = 'left 15s ease, top 15s ease';
        blob.style.left = `${newX}%`;
        blob.style.top = `${newY}%`;
        
        setTimeout(animateBlob, 15000);
      };
      
      animateBlob();
    };
    
    // Create multiple blobs with different colors
    createGlowingBlob('rgba(103, 58, 183, 0.5)');
    createGlowingBlob('rgba(156, 39, 176, 0.5)');
    createGlowingBlob('rgba(63, 81, 181, 0.5)');
    
    // Cleanup function
    return () => {
      const animatedBg = document.getElementById('animated-bg');
      while (animatedBg?.firstChild) {
        animatedBg.removeChild(animatedBg.firstChild);
      }
    };
  }, []);
  
  return (
    <div id="animated-bg" className="fixed inset-0 z-[-2] overflow-hidden">
      <ParticleBackground />
      <div className="absolute inset-0 bg-gradient-to-br from-[#1a103d]/80 to-[#0f0629] z-[-1]"></div>
    </div>
  );
};

export default AnimatedBackground;
