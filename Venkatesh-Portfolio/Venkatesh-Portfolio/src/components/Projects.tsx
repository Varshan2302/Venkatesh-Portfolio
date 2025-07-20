import React from 'react';
import { ExternalLink, Github, Cpu, Recycle, Users, BarChart3, Cloud } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "InstituteHub",
      description: "A comprehensive web application for institute activity management, streamlining operations and improving coordination between stakeholders.",
      icon: <Users className="w-6 h-6" />,
      tags: ["React", "Node.js", "MongoDB", "Express"],
      color: "bg-blue-600"
    },
    {
      title: "ReviveHub",
      description: "A sustainable fashion upcycling platform promoting eco-friendly practices and circular economy principles.",
      icon: <Recycle className="w-6 h-6" />,
      tags: ["MERN Stack", "Sustainability", "E-commerce"],
      color: "bg-emerald-600"
    },
    {
      title: "Customer Churn Prediction",
      description: "Machine learning model to predict customer churn patterns, helping businesses retain customers effectively.",
      icon: <BarChart3 className="w-6 h-6" />,
      tags: ["Python", "Machine Learning", "Data Analysis"],
      color: "bg-cyan-600"
    },
    {
      title: "Crop Yield Prediction",
      description: "Decision tree-based machine learning model for predicting crop yields, supporting agricultural planning.",
      icon: <Cpu className="w-6 h-6" />,
      tags: ["Python", "Decision Tree", "Agriculture"],
      color: "bg-indigo-600"
    },
    {
      title: "Rainfall Prediction",
      description: "Random forest classifier for weather prediction, contributing to better agricultural and water management decisions.",
      icon: <Cloud className="w-6 h-6" />,
      tags: ["Python", "Random Forest", "Weather Analysis"],
      color: "bg-teal-600"
    }
  ];

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
              Projects
            </h2>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto">
              A showcase of innovative projects demonstrating technical expertise and problem-solving skills
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div 
                key={index}
                className="bg-slate-800/50 backdrop-blur-md rounded-2xl p-6 border border-slate-700/50 hover:border-blue-500/50 transition-all duration-300 transform hover:scale-105 group"
              >
                <div className={`${project.color} p-3 rounded-xl w-fit mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <div className="text-white">
                    {project.icon}
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-white mb-3">{project.title}</h3>
                <p className="text-slate-300 mb-4 leading-relaxed">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <span 
                      key={tagIndex}
                      className="bg-slate-700/50 text-slate-300 px-3 py-1 rounded-full text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-3">
                  <button className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors">
                    <Github size={16} />
                    <span className="text-sm">Code</span>
                  </button>
                  <button className="flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors">
                    <ExternalLink size={16} />
                    <span className="text-sm">Demo</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;