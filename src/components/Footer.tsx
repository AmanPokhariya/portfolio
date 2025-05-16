
const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-12 border-t border-white/10 bg-black/20 backdrop-blur-md">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h2 className="text-white font-display text-2xl font-bold">
              Portfolio<span className="text-purple-500">.</span>
            </h2>
            <p className="text-gray-400 mt-2 max-w-md">
              Creating beautiful web experiences through design and development.
            </p>
          </div>
          
          <div className="flex gap-6">
            {['GitHub', 'LinkedIn', 'Twitter', 'Instagram'].map((platform) => (
              <a 
                key={platform}
                href="#" 
                className="text-gray-400 hover:text-purple-400 transition-colors"
              >
                {platform}
              </a>
            ))}
          </div>
        </div>
        
        <div className="border-t border-white/5 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">
            &copy; {currentYear} John Doe. All rights reserved.
          </p>
          
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="text-gray-500 text-sm hover:text-purple-400 transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-500 text-sm hover:text-purple-400 transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
