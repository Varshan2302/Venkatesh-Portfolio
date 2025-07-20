import React from 'react';
import { Award, FileText, Star, Trophy } from 'lucide-react';

const Achievements = () => {
  const achievements = [
    {
      icon: <FileText className="w-6 h-6" />,
      title: "IEEE Research Paper",
      description: "Crop yield prediction using Decision Tree regression",
      type: "Research Publication",
      color: "bg-blue-600"
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "NPTEL Soft Skills Development",
      description: "8-week comprehensive course completion",
      type: "Certification",
      color: "bg-emerald-600"
    },
    {
      icon: <Star className="w-6 h-6" />,
      title: "NPTEL Soft Skills",
      description: "12-week advanced course completion",
      type: "Advanced Certification",
      color: "bg-cyan-600"
    },
    {
      icon: <Trophy className="w-6 h-6" />,
      title: "NPTEL Top Scorer",
      description: "Wildlife ecology, Forests and their Management",
      type: "Academic Excellence",
      color: "bg-amber-600"
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "Blockchain Technology",
      description: "Minor degree specialization",
      type: "Specialized Education",
      color: "bg-indigo-600"
    }
  ];

  return (
    <section id="achievements" className="py-20 bg-slate-800/30">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
              Achievements
            </h2>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto">
              Recognition of academic excellence and professional development milestones
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {achievements.map((achievement, index) => (
              <div 
                key={index}
                className="bg-slate-800/50 backdrop-blur-md rounded-2xl p-6 border border-slate-700/50 hover:border-blue-500/50 transition-all duration-300 transform hover:scale-105 group"
              >
                <div className={`${achievement.color} p-3 rounded-xl w-fit mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <div className="text-white">
                    {achievement.icon}
                  </div>
                </div>
                
                <div className="mb-2">
                  <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                    {achievement.type}
                  </span>
                </div>
                
                <h3 className="text-lg font-bold text-white mb-2">{achievement.title}</h3>
                <p className="text-slate-300 text-sm leading-relaxed">{achievement.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;