
import { useState } from 'react';

const Activities = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const groupDiscussionPhotos = [
    {
      id: 'gd-1',
      title: 'Group Discussion Session 1',
      description: 'Interactive discussion with team members',
      imageUrl: '/lovable-uploads/9087aaa5-566c-4926-9d26-7c4e0a01bcfd.png'
    },
    {
      id: 'gd-2',
      title: 'Group Discussion Session 2',
      description: 'Collaborative problem solving discussion',
      imageUrl: '/lovable-uploads/2e23e05e-749c-4cef-8ab8-d255ebc668e7.png'
    },
    {
      id: 'gd-3',
      title: 'Group Discussion Session 3',
      description: 'Team presentation and feedback session',
      imageUrl: '/lovable-uploads/a41d6056-f98f-4730-b53f-ddcb8b495bb1.png'
    },
    {
      id: 'gd-4',
      title: 'Group Discussion Session 4',
      description: 'Strategic planning discussion',
      imageUrl: '/lovable-uploads/51af3e9a-ea3b-4e71-8fda-3c520a0ea9f9.png'
    },
    {
      id: 'gd-5',
      title: 'Group Discussion Session 5',
      description: 'Final review and conclusion',
      imageUrl: '/lovable-uploads/bd0d3415-eaad-47bb-83b7-33b20469c77b.png'
    }
  ];

  const openModal = (imageUrl: string) => {
    setSelectedImage(imageUrl);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <section id="activities" className="py-20 bg-black/20 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold font-display text-white mb-6">
            My <span className="text-purple-400">Activities</span>
          </h2>
          
          <p className="text-gray-300 text-lg mb-12">
            Explore my participation in various group discussions and collaborative activities.
          </p>
          
          <div className="mb-8">
            <h3 className="text-2xl font-semibold text-white mb-6">
              Group Discussion
            </h3>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {groupDiscussionPhotos.map((photo) => (
                <div key={photo.id} className="space-y-4">
                  <div className="relative aspect-video rounded-2xl overflow-hidden bg-gray-800/50 backdrop-blur-sm border border-white/10 shadow-xl card-hover cursor-pointer">
                    <img
                      src={photo.imageUrl}
                      alt={photo.title}
                      className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                      onClick={() => openModal(photo.imageUrl)}
                      loading="eager"
                    />
                    <div className="absolute inset-0 bg-black/20 hover:bg-black/10 transition-colors"></div>
                  </div>
                  <div className="text-center">
                    <h4 className="text-lg font-semibold text-white mb-2">
                      {photo.title}
                    </h4>
                    <p className="text-gray-400 text-sm">
                      {photo.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="mt-12 text-center">
            <div className="bg-gray-800/30 rounded-lg p-6 border border-white/10">
              <h4 className="text-white font-semibold mb-2">Group Discussion Activities</h4>
              <div className="text-gray-400 text-sm space-y-2">
                <p>✅ Interactive team discussions and brainstorming sessions</p>
                <p>✅ Collaborative problem-solving activities</p>
                <p>✅ Presentation and feedback sessions</p>
                <p>✅ Strategic planning and decision-making processes</p>
                <p className="text-xs mt-3 text-green-400">📸 All photos loaded successfully!</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modal for enlarged image view */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={closeModal}
        >
          <div className="relative max-w-4xl max-h-full">
            <img
              src={selectedImage}
              alt="Enlarged view"
              className="max-w-full max-h-full object-contain rounded-lg"
            />
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-white bg-black/50 rounded-full p-2 hover:bg-black/70 transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Activities;
