import React from 'react';
import { GraduationCap, Award, Trophy } from 'lucide-react';

const Education = () => {
  return (
    <section id="education" className="py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
              Education
            </h2>
            <p className="text-slate-400 text-lg">
              Academic background and achievements
            </p>
          </div>

          <div className="bg-slate-800/50 backdrop-blur-md rounded-2xl p-8 border border-slate-700/50">
            <div className="flex items-start gap-6">
              <div className="bg-blue-600 p-4 rounded-xl">
                <GraduationCap className="w-8 h-8 text-white" />
              </div>
              
              <div className="flex-1">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <h3 className="text-2xl font-bold text-white">
                    Kalasalingam Academy of Research and Education
                  </h3>
                  <span className="text-blue-400 font-semibold">2022 - 2026</span>
                </div>
                
                <p className="text-xl text-slate-300 mb-4">Bachelor of Technology - Information Technology</p>
                
                <div className="grid md:grid-cols-3 gap-4 mb-6">
                  <div className="bg-slate-700/50 rounded-lg p-4 text-center">
                    <div className="text-2xl font-bold text-blue-400 mb-1">8.64</div>
                    <div className="text-slate-400 text-sm">Current CGPA</div>
                  </div>
                  
                  <div className="bg-slate-700/50 rounded-lg p-4 text-center">
                    <div className="text-2xl font-bold text-cyan-400 mb-1">67%</div>
                    <div className="text-slate-400 text-sm">SSLC Score</div>
                  </div>
                  
                  <div className="bg-slate-700/50 rounded-lg p-4 text-center">
                    <div className="text-2xl font-bold text-indigo-400 mb-1">67%</div>
                    <div className="text-slate-400 text-sm">HSE Score</div>
                  </div>
                </div>

                <div className="bg-amber-900/20 rounded-xl p-4 border border-amber-500/20">
                  <div className="flex items-center gap-3">
                    <Award className="w-6 h-6 text-amber-400" />
                    <div>
                      <h4 className="font-semibold text-amber-400">Academic Excellence</h4>
                      <p className="text-slate-300">Received 10% Scholarship at Kalasalingam University</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;