
import { useState } from 'react';

const VideoIntro = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section id="video-intro" className="py-20 bg-black/20 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold font-display text-white mb-6">
            Get to Know <span className="text-purple-400">Me</span>
          </h2>
          
          <p className="text-gray-300 text-lg mb-8">
            Watch my introduction video to learn more about my journey and passion for web development.
          </p>
          
          <div className="relative aspect-video rounded-2xl overflow-hidden bg-gray-800/50 backdrop-blur-sm border border-white/10 shadow-xl">
            {/* Video placeholder - replace with your actual video */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <div className="w-20 h-20 bg-purple-500/20 rounded-full flex items-center justify-center mb-4 mx-auto border border-purple-400/30">
                  <svg 
                    className="w-8 h-8 text-purple-400" 
                    fill="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path d="M8 5v14l11-7z"/>
                  </svg>
                </div>
                <p className="text-gray-400 text-lg">Upload your introduction video</p>
                <p className="text-gray-500 text-sm mt-2">
                  Replace this placeholder with your video file
                </p>
              </div>
            </div>
            
            {/* Uncomment and modify this when you have your video file */}
            {/* 
            <video 
              className="w-full h-full object-cover"
              controls
              poster="/path-to-your-video-thumbnail.jpg"
              onPlay={() => setIsPlaying(true)}
              onPause={() => setIsPlaying(false)}
            >
              <source src="/path-to-your-video.mp4" type="video/mp4" />
              <source src="/path-to-your-video.webm" type="video/webm" />
              Your browser does not support the video tag.
            </video>
            */}
          </div>
          
          <div className="mt-8 text-center">
            <p className="text-gray-400 text-sm">
              <strong>To add your video:</strong> Upload your video file to the public folder and update the VideoIntro component
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoIntro;
