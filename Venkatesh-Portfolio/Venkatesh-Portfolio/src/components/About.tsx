import React from 'react';
import { Code, Brain, Lightbulb, Target } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: <Code className="w-6 h-6" />,
      title: "Full-Stack Development",
      description: "Proficient in Java, Spring Boot, HTML, CSS, and JavaScript"
    },
    {
      icon: <Brain className="w-6 h-6" />,
      title: "Problem Solver",
      description: "Strong analytical skills with experience in machine learning projects"
    },
    {
      icon: <Lightbulb className="w-6 h-6" />,
      title: "Innovation Focus",
      description: "Building real-world projects that deliver impactful solutions"
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "Goal Oriented",
      description: "Eager to contribute to dynamic company projects and grow professionally"
    }
  ];

  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
              About Me
            </h2>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto">
              Passionate developer with a strong foundation in modern technologies
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="bg-slate-800/50 backdrop-blur-md rounded-2xl p-8 border border-slate-700/50">
                <h3 className="text-2xl font-bold text-white mb-4">My Journey</h3>
                <p className="text-slate-300 leading-relaxed mb-4">
                  I'm an aspiring Java developer with a strong foundation in Java, Spring Boot, HTML, CSS, and JavaScript. 
                  Currently pursuing Information Technology at Kalasalingam Academy of Research and Education with a CGPA of 8.64.
                </p>
                <p className="text-slate-300 leading-relaxed">
                  I have hands-on experience in both web and mobile development, and I'm constantly building real-world projects 
                  to strengthen my skills. My goal is to contribute to dynamic company projects and deliver high-quality, 
                  impactful solutions that make a difference.
                </p>
              </div>

              <div className="bg-blue-900/20 rounded-2xl p-6 border border-blue-500/20">
                <h4 className="text-lg font-semibold text-blue-400 mb-2">Current Focus</h4>
                <p className="text-slate-300">
                  Actively working on machine learning projects, web development, and expanding my expertise in 
                  modern development frameworks while building a strong portfolio of practical applications.
                </p>
              </div>
            </div>

            <div className="grid gap-6">
              {highlights.map((highlight, index) => (
                <div 
                  key={index}
                  className="bg-slate-800/50 backdrop-blur-md rounded-xl p-6 border border-slate-700/50 hover:border-blue-500/50 transition-all duration-300 transform hover:scale-105"
                >
                  <div className="flex items-start gap-4">
                    <div className="bg-blue-600 p-3 rounded-lg text-white">
                      {highlight.icon}
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-2">{highlight.title}</h4>
                      <p className="text-slate-400">{highlight.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;