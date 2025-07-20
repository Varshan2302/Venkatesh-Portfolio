import React from 'react';
import { Briefcase, Calendar, CheckCircle } from 'lucide-react';

const Experience = () => {
  const responsibilities = [
    "Collaborated with cross-functional teams to develop a dynamic web application for streamlining institute operations",
    "Developed centralized features for event scheduling, attendance tracking, and academic resource sharing to enhance operational efficiency",
    "Implemented real-time updates and role-based access to improve communication, transparency, and user engagement",
    "Delivered the project on time and within budget, ensuring a smooth transition to the new system"
  ];

  return (
    <section id="experience" className="py-20 bg-slate-800/30">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
              Experience
            </h2>
            <p className="text-slate-400 text-lg">
              Professional internship and project experience
            </p>
          </div>

          <div className="bg-slate-800/50 backdrop-blur-md rounded-2xl p-8 border border-slate-700/50">
            <div className="flex items-start gap-6">
              <div className="bg-blue-600 p-4 rounded-xl">
                <Briefcase className="w-8 h-8 text-white" />
              </div>
              
              <div className="flex-1">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <h3 className="text-2xl font-bold text-white">MERN Stack Intern</h3>
                  <div className="flex items-center gap-2 text-blue-400 font-semibold">
                    <Calendar className="w-4 h-4" />
                    Jul - Sep 2024
                  </div>
                </div>
                
                <p className="text-xl text-slate-300 mb-6">Hexaind Technologies</p>
                
                <div className="space-y-4">
                  {responsibilities.map((responsibility, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-emerald-400 mt-0.5 flex-shrink-0" />
                      <p className="text-slate-300 leading-relaxed">{responsibility}</p>
                    </div>
                  ))}
                </div>

                <div className="mt-6 bg-blue-900/20 rounded-xl p-4 border border-blue-500/20">
                  <h4 className="text-lg font-semibold text-blue-400 mb-2">Key Achievement</h4>
                  <p className="text-slate-300">
                    Successfully developed and delivered a comprehensive web application that significantly improved 
                    institute operations, enhancing coordination between students, faculty, and administrators.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;