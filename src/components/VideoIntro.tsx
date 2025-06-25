
import { useState } from 'react';

const VideoIntro = () => {
  const [playingVideo, setPlayingVideo] = useState<string | null>(null);

  const videoSections = [
    {
      id: 'introduction',
      title: 'Introduction Video',
      description: 'Get to know me and my journey in web development',
      placeholder: 'Upload your introduction video'
    },
    {
      id: 'interview',
      title: 'Interview Video',
      description: 'Watch my professional interview and communication skills',
      placeholder: 'Upload your interview video'
    },
    {
      id: 'feedback',
      title: 'Feedback Video',
      description: 'Client testimonials and feedback on my work',
      placeholder: 'Upload your feedback video'
    }
  ];

  return (
    <section id="video-intro" className="py-20 bg-black/20 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold font-display text-white mb-6">
            Video <span className="text-purple-400">Portfolio</span>
          </h2>
          
          <p className="text-gray-300 text-lg mb-12">
            Watch my videos to learn more about my skills, experience, and professional approach.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8">
            {videoSections.map((section) => (
              <div key={section.id} className="space-y-4">
                <h3 className="text-xl font-semibold text-white mb-2">
                  {section.title}
                </h3>
                <p className="text-gray-400 text-sm mb-4">
                  {section.description}
                </p>
                
                <div className="relative aspect-video rounded-2xl overflow-hidden bg-gray-800/50 backdrop-blur-sm border border-white/10 shadow-xl">
                  {/* Video placeholder - replace with your actual videos */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center p-4">
                      <div className="w-16 h-16 bg-purple-500/20 rounded-full flex items-center justify-center mb-3 mx-auto border border-purple-400/30">
                        <svg 
                          className="w-6 h-6 text-purple-400" 
                          fill="currentColor" 
                          viewBox="0 0 24 24"
                        >
                          <path d="M8 5v14l11-7z"/>
                        </svg>
                      </div>
                      <p className="text-gray-400 text-sm">{section.placeholder}</p>
                    </div>
                  </div>
                  
                  {/* Uncomment and modify these when you have your video files */}
                  {/* 
                  <video 
                    className="w-full h-full object-cover"
                    controls
                    poster={`/path-to-your-${section.id}-thumbnail.jpg`}
                    onPlay={() => setPlayingVideo(section.id)}
                    onPause={() => setPlayingVideo(null)}
                  >
                    <source src={`/path-to-your-${section.id}-video.mp4`} type="video/mp4" />
                    <source src={`/path-to-your-${section.id}-video.webm`} type="video/webm" />
                    Your browser does not support the video tag.
                  </video>
                  */}
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <div className="bg-gray-800/30 rounded-lg p-6 border border-white/10">
              <h4 className="text-white font-semibold mb-2">How to Add Your Videos:</h4>
              <div className="text-gray-400 text-sm space-y-1">
                <p>1. Upload your video files to the <code className="bg-gray-700 px-2 py-1 rounded">public</code> folder</p>
                <p>2. Name them: <code className="bg-gray-700 px-2 py-1 rounded">introduction-video.mp4</code>, <code className="bg-gray-700 px-2 py-1 rounded">interview-video.mp4</code>, <code className="bg-gray-700 px-2 py-1 rounded">feedback-video.mp4</code></p>
                <p>3. Uncomment the video elements in the VideoIntro component and update the file paths</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoIntro;
