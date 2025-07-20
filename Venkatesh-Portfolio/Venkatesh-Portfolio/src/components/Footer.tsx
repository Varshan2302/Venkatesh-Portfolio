import React from 'react';
import { Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="py-8 border-t border-slate-700/50 bg-slate-900/50">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="text-slate-400 mb-4 md:mb-0">
            <p className="flex items-center gap-2">
              © 2024 Venkatesh Varshan MS. Made with 
              <Heart className="w-4 h-4 text-red-400" fill="currentColor" />
              and lots of code.
            </p>
          </div>
          
          <div className="text-slate-400 text-sm">
            <p>Aspiring Java Developer | Building the Future</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;