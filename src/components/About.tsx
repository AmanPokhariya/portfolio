
import CreativeButton from './CreativeButton';

const About = () => {
  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden bg-gray-800/50 backdrop-blur-sm border border-white/10 shadow-xl">
                <img 
                  src="/lovable-uploads/8353d403-2863-457c-af9a-344068c9fca4.png"
                  alt="Aman Pokhariya" 
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="absolute -bottom-6 -right-6 w-40 h-40 bg-purple-500/20 backdrop-blur-sm rounded-2xl border border-white/10 p-4 flex items-center justify-center">
                <p className="font-display text-white text-lg">
                  <span className="block font-bold text-3xl">1+</span>
                  Years Experience
                </p>
              </div>
              
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-purple-500/20 backdrop-blur-sm rounded-full border border-white/10"></div>
            </div>
            
            <div>
              <h2 className="text-3xl md:text-4xl font-bold font-display text-white mb-6">
                About <span className="text-purple-400">Me</span>
              </h2>
              
              <div className="space-y-4 text-gray-300 mb-8">
                <p>
                  Hello! I'm Aman, a passionate web developer with an eye for creating beautiful, functional websites and applications.
                </p>
                <p>
                  With 1 year of experience in the industry, I've worked with various clients, helping them achieve their digital goals through thoughtful design and clean code.
                </p>
                <p>
                  My approach to development focuses on user experience while maintaining modern aesthetics and performance. I believe in creating solutions that not only look great but also serve their purpose effectively.
                </p>
              </div>
              
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div>
                  <h3 className="text-white font-display font-bold text-xl mb-2">Name</h3>
                  <p className="text-gray-400">Aman Pokhariya</p>
                </div>
                <div>
                  <h3 className="text-white font-display font-bold text-xl mb-2">Email</h3>
                  <p className="text-gray-400">aman4191729@gmail.com</p>
                </div>
                <div>
                  <h3 className="text-white font-display font-bold text-xl mb-2">Location</h3>
                  <p className="text-gray-400">Dehradun, Uttarakhand</p>
                </div>
                <div>
                  <h3 className="text-white font-display font-bold text-xl mb-2">Availability</h3>
                  <p className="text-gray-400">Remote / Contract</p>
                </div>
              </div>
              
              <CreativeButton>Download Resume</CreativeButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
