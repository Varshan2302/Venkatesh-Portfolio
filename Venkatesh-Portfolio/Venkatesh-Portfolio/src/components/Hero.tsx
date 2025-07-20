import React from 'react';
import { ChevronDown, ExternalLink } from 'lucide-react';

const Hero = () => {
  const scrollToAbout = () => {
    document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="w-full min-h-screen flex items-center justify-center relative overflow-hidden bg-slate-900">
      {/* Background Elements - No Gradients */}
      <div className="absolute inset-0 w-full h-full">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-600/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-600/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-indigo-600/5 rounded-full blur-3xl"></div>
      </div>

      <div className="w-full max-w-none px-4 sm:px-6 text-center relative z-10">
        <div className="w-full max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-6 text-white leading-tight">
            Venkatesh Varshan MS
          </h1>
          
          <p className="text-lg sm:text-xl md:text-2xl text-blue-400 mb-8 font-semibold">
            Aspiring Java Developer
          </p>
          
          <p className="text-base sm:text-lg text-slate-300 mb-12 max-w-2xl mx-auto leading-relaxed px-4">
            Building innovative solutions with Java, Spring Boot, and modern web technologies. 
            Passionate about creating impactful applications that solve real-world problems.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center px-4">
            <button 
              onClick={scrollToAbout}
              className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2 shadow-lg"
            >
              View My Work
              <ChevronDown size={18} />
            </button>
            
            <a 
              href="#contact" 
              onClick={(e) => {
                e.preventDefault();
                document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="w-full sm:w-auto border-2 border-blue-400 text-blue-400 px-8 py-3 rounded-lg font-semibold hover:bg-blue-400 hover:text-white transition-all duration-300 flex items-center justify-center gap-2"
            >
              Get In Touch
              <ExternalLink size={18} />
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown size={24} className="text-slate-400" />
      </div>
    </section>
  );
};

export default Hero;