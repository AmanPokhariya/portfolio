
import { useState } from 'react';

const VideoIntro = () => {
  const [playingVideo, setPlayingVideo] = useState<string | null>(null);

  const videoSections = [
    {
      id: 'introduction',
      title: 'Introduction Video',
      description: 'Get to know me and my journey in web development',
      // Google Drive embed URL
      embedUrl: 'https://drive.google.com/file/d/1xFFUlx1724y_EQkeBF4JFz5KD3C55nNb/preview',
      thumbnail: '/lovable-uploads/a17bbc11-dc41-4a80-b398-8d68f7bcb2bc.png'
    },
    {
      id: 'interview',
      title: 'Interview Video', 
      description: 'Watch my professional interview and communication skills',
      // Google Drive embed URL
      embedUrl: 'https://drive.google.com/file/d/1x9ClaJg4oBDoNXyW3E6y9luifZwFyHJa/preview',
      thumbnail: '/lovable-uploads/a17bbc11-dc41-4a80-b398-8d68f7bcb2bc.png'
    },
    {
      id: 'feedback',
      title: 'Feedback Video',
      description: 'Client testimonials and feedback on my work',
      // Google Drive embed URL
      embedUrl: 'https://drive.google.com/file/d/1xDzn8WsvrIaUvJWpL_0rVIYC-7IzyEuR/preview',
      thumbnail: '/lovable-uploads/a17bbc11-dc41-4a80-b398-8d68f7bcb2bc.png'
    }
  ];

  const renderVideo = (section: any) => {
    return (
      <div className="relative w-full h-full">
        <iframe
          className="w-full h-full rounded-2xl"
          src={section.embedUrl}
          title={section.title}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          onLoad={() => console.log(`${section.title} loaded successfully`)}
          onError={(e) => {
            console.log(`${section.title} failed to load:`, e);
          }}
        />
      </div>
    );
  };

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
                  {renderVideo(section)}
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <div className="bg-gray-800/30 rounded-lg p-6 border border-white/10">
              <h4 className="text-white font-semibold mb-2">Your Personal Videos</h4>
              <div className="text-gray-400 text-sm space-y-2">
                <p>✅ Introduction Video - Successfully embedded from Google Drive</p>
                <p>✅ Interview Video - Successfully embedded from Google Drive</p>
                <p>✅ Feedback Video - Successfully embedded from Google Drive</p>
                <p className="text-xs mt-3 text-green-400">🎥 All videos are now properly embedded and should load!</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoIntro;
