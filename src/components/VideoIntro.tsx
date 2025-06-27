import { useState } from 'react';

const VideoIntro = () => {
  const [playingVideo, setPlayingVideo] = useState<string | null>(null);

  const videoSections = [
    {
      id: 'introduction',
      title: 'Introduction Video',
      description: 'Get to know me and my journey in web development',
      // Option 1: Use YouTube embed
      youtubeId: '', // Add your YouTube video ID here
      // Option 2: Use placeholder or small demo video
      videoPath: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
      thumbnail: '/lovable-uploads/a17bbc11-dc41-4a80-b398-8d68f7bcb2bc.png'
    },
    {
      id: 'interview',
      title: 'Interview Video', 
      description: 'Watch my professional interview and communication skills',
      youtubeId: '', // Add your YouTube video ID here
      videoPath: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4',
      thumbnail: '/lovable-uploads/a17bbc11-dc41-4a80-b398-8d68f7bcb2bc.png'
    },
    {
      id: 'feedback',
      title: 'Feedback Video',
      description: 'Client testimonials and feedback on my work',
      youtubeId: '', // Add your YouTube video ID here
      videoPath: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
      thumbnail: '/lovable-uploads/a17bbc11-dc41-4a80-b398-8d68f7bcb2bc.png'
    }
  ];

  const renderVideo = (section: any) => {
    // If YouTube ID is provided, use YouTube embed
    if (section.youtubeId) {
      return (
        <iframe
          className="w-full h-full rounded-2xl"
          src={`https://www.youtube.com/embed/${section.youtubeId}`}
          title={section.title}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      );
    }

    // Otherwise use regular video player
    return (
      <video 
        className="w-full h-full object-cover rounded-2xl"
        controls
        poster={section.thumbnail}
        onPlay={() => setPlayingVideo(section.id)}
        onPause={() => setPlayingVideo(null)}
        onError={(e) => {
          console.log(`Video ${section.id} failed to load:`, e);
          const placeholder = e.currentTarget.nextElementSibling as HTMLElement;
          if (placeholder) {
            e.currentTarget.style.display = 'none';
            placeholder.style.display = 'flex';
          }
        }}
      >
        <source src={section.videoPath} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
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
                  
                  {/* Fallback placeholder */}
                  <div className="absolute inset-0 flex items-center justify-center" style={{display: 'none'}}>
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
                      <p className="text-gray-400 text-sm">Video coming soon</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <div className="bg-gray-800/30 rounded-lg p-6 border border-white/10">
              <h4 className="text-white font-semibold mb-2">Video Setup Options:</h4>
              <div className="text-gray-400 text-sm space-y-2">
                <p>🎬 <strong>Option 1:</strong> Upload videos to YouTube and add video IDs in code</p>
                <p>🎥 <strong>Option 2:</strong> Use Google Drive/Dropbox public links</p>
                <p>📱 <strong>Option 3:</strong> Record short videos on phone and use cloud storage</p>
                <p className="text-xs mt-3 text-purple-400">💡 Currently showing demo videos - replace with your content!</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoIntro;
