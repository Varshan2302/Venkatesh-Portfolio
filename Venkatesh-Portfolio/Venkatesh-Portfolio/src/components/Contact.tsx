import React from 'react';
import { Mail, Phone, MapPin, ExternalLink, Github, Linkedin } from 'lucide-react';

const Contact = () => {
  const contactInfo = [
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Phone",
      value: "+91 9043174358",
      href: "tel:+919043174358"
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email",
      value: "venkateshvarshan2@gmail.com",
      href: "mailto:venkateshvarshan2@gmail.com"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Location",
      value: "Madurai, Tamil Nadu",
      href: "#"
    }
  ];

  const socialLinks = [
    {
      icon: <ExternalLink className="w-5 h-5" />,
      title: "LeetCode",
      href: "https://leetcode.com/u/varshan007/",
      color: "hover:text-amber-400"
    },
    {
      icon: <Github className="w-5 h-5" />,
      title: "GitHub",
      href: "#",
      color: "hover:text-slate-300"
    },
    {
      icon: <Linkedin className="w-5 h-5" />,
      title: "LinkedIn",
      href: "#",
      color: "hover:text-blue-400"
    }
  ];

  const languages = [
    { name: "Tamil", level: "Native" },
    { name: "English", level: "Proficient" },
    { name: "Sourashtra", level: "Fluent" },
    { name: "French", level: "Learning" }
  ];

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
              Get In Touch
            </h2>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto">
              Let's connect and discuss opportunities to collaborate on exciting projects
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Contact Information */}
            <div className="lg:col-span-2 space-y-6">
              <div className="bg-slate-800/50 backdrop-blur-md rounded-2xl p-8 border border-slate-700/50">
                <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>
                <div className="space-y-4">
                  {contactInfo.map((info, index) => (
                    <a
                      key={index}
                      href={info.href}
                      className="flex items-center gap-4 p-4 rounded-xl bg-slate-700/30 hover:bg-slate-700/50 transition-all duration-300 group"
                    >
                      <div className="bg-blue-600 p-3 rounded-lg text-white group-hover:scale-110 transition-transform duration-300">
                        {info.icon}
                      </div>
                      <div>
                        <p className="text-slate-400 text-sm">{info.title}</p>
                        <p className="text-white font-medium">{info.value}</p>
                      </div>
                    </a>
                  ))}
                </div>
              </div>

              <div className="bg-slate-800/50 backdrop-blur-md rounded-2xl p-8 border border-slate-700/50">
                <h3 className="text-2xl font-bold text-white mb-6">Connect With Me</h3>
                <div className="flex gap-4">
                  {socialLinks.map((link, index) => (
                    <a
                      key={index}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center gap-3 bg-slate-700/30 hover:bg-slate-700/50 px-4 py-3 rounded-lg transition-all duration-300 text-slate-300 ${link.color}`}
                    >
                      {link.icon}
                      <span className="font-medium">{link.title}</span>
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Languages */}
            <div className="bg-slate-800/50 backdrop-blur-md rounded-2xl p-8 border border-slate-700/50">
              <h3 className="text-2xl font-bold text-white mb-6">Languages</h3>
              <div className="space-y-4">
                {languages.map((language, index) => (
                  <div key={index} className="flex justify-between items-center p-3 rounded-lg bg-slate-700/30">
                    <span className="text-slate-300 font-medium">{language.name}</span>
                    <span className="text-blue-400 text-sm font-semibold">{language.level}</span>
                  </div>
                ))}
              </div>

              <div className="mt-8 p-6 bg-blue-900/20 rounded-xl border border-blue-500/20">
                <h4 className="text-lg font-semibold text-blue-400 mb-2">Ready to Collaborate?</h4>
                <p className="text-slate-300 text-sm mb-4">
                  I'm always open to discussing new opportunities and innovative projects.
                </p>
                <a
                  href="mailto:venkateshvarshan2@gmail.com"
                  className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-semibold transition-all duration-300"
                >
                  <Mail className="w-4 h-4" />
                  Send Message
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;