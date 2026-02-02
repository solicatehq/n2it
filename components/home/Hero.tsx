import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../ui/Button';
import { ArrowRight, ChevronDown } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://picsum.photos/id/4/1920/1080" 
          alt="Technology Background" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-blue-900/80 mix-blend-multiply"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-blue-950 via-transparent to-transparent opacity-90"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto space-y-8 animate-in fade-in zoom-in duration-700">
          
          <div className="inline-block bg-orange-500 text-white text-xs font-bold px-3 py-1 rounded-full tracking-widest uppercase mb-2">
            Managed IT Services & Consultancy
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight tracking-tight drop-shadow-sm">
            INFORMATION TECHNOLOGY <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-white">MADE SIMPLE</span>
          </h1>
          
          <p className="text-lg md:text-xl text-blue-100 max-w-2xl mx-auto leading-relaxed">
            We provide comprehensive connectivity, telephony, and security solutions tailored for modern business growth. Trust the experts to handle your infrastructure.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Link to="/contact">
              <Button variant="primary" size="lg" className="w-full sm:w-auto group">
                Get Started
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <a href="#services">
               <Button variant="outline" size="lg" className="w-full sm:w-auto border-white text-white hover:bg-white/10 hover:text-white focus:ring-white">
                Explore Services
              </Button>
            </a>
          </div>

        </div>
      </div>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/50 animate-bounce">
        <ChevronDown size={32} />
      </div>
    </section>
  );
};

export default Hero;