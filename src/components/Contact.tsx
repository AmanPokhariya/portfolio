
import { useState } from 'react';
import CreativeButton from './CreativeButton';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, you would handle form submission here
    console.log('Form submitted:', formData);
    alert('Thank you for your message! I will get back to you soon.');
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };
  
  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold font-display text-white mb-4">
            Get In <span className="text-purple-400">Touch</span>
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? I'm just a message away. Let's create something amazing together!
          </p>
        </div>
        
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-5 gap-8">
            <div className="md:col-span-2 space-y-8">
              <div className="bg-gray-900/30 backdrop-blur-sm rounded-xl p-6 border border-white/5">
                <h3 className="text-xl font-display font-bold text-white mb-4">Contact Information</h3>
                
                <div className="space-y-4">
                  <div>
                    <div className="text-purple-400 font-medium mb-1">Email</div>
                    <a href="mailto:alex@creativecoder.dev" className="text-gray-300 hover:text-white transition-colors">
                      alex@creativecoder.dev
                    </a>
                  </div>
                  
                  <div>
                    <div className="text-purple-400 font-medium mb-1">Phone</div>
                    <a href="tel:+14155557890" className="text-gray-300 hover:text-white transition-colors">
                      +1 (415) 555-7890
                    </a>
                  </div>
                  
                  <div>
                    <div className="text-purple-400 font-medium mb-1">Location</div>
                    <p className="text-gray-300">
                      San Francisco, CA, United States
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="bg-gray-900/30 backdrop-blur-sm rounded-xl p-6 border border-white/5">
                <h3 className="text-xl font-display font-bold text-white mb-4">Social Links</h3>
                
                <div className="flex gap-4">
                  {['GitHub', 'LinkedIn', 'Twitter', 'Instagram'].map((platform) => (
                    <a 
                      key={platform}
                      href="#" 
                      className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-300 hover:bg-purple-500 hover:text-white transition-all"
                    >
                      {platform.charAt(0)}
                    </a>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="md:col-span-3">
              <form onSubmit={handleSubmit} className="bg-gray-900/30 backdrop-blur-sm rounded-xl p-6 border border-white/5">
                <h3 className="text-xl font-display font-bold text-white mb-6">Send Me a Message</h3>
                
                <div className="grid sm:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label htmlFor="name" className="block text-gray-300 mb-1 text-sm">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full bg-gray-800/50 border border-gray-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-gray-300 mb-1 text-sm">
                      Your Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full bg-gray-800/50 border border-gray-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                      required
                    />
                  </div>
                </div>
                
                <div className="mb-4">
                  <label htmlFor="subject" className="block text-gray-300 mb-1 text-sm">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full bg-gray-800/50 border border-gray-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                    required
                  />
                </div>
                
                <div className="mb-6">
                  <label htmlFor="message" className="block text-gray-300 mb-1 text-sm">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className="w-full bg-gray-800/50 border border-gray-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                    required
                  ></textarea>
                </div>
                
                <CreativeButton 
                  type="submit" 
                  className="bg-gradient-purple w-full justify-center text-center"
                >
                  Send Message
                </CreativeButton>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
