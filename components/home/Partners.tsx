import React from 'react';

// Using placeholders for logos
const partners = [1, 2, 3, 4, 5, 6];

const Partners: React.FC = () => {
  return (
    <section className="py-16 bg-slate-50 border-t border-slate-100">
      <div className="container mx-auto px-4 text-center">
        <h3 className="text-slate-500 font-bold uppercase tracking-widest text-sm mb-10">Trusted by innovative companies</h3>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center opacity-60">
           {/* Using text for demo purposes, would normally be SVGs/Images */}
           <div className="flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300">
              <span className="text-2xl font-bold font-serif text-slate-800">AcmeCorp</span>
           </div>
           <div className="flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300">
              <span className="text-2xl font-extrabold text-slate-800 italic">Globex</span>
           </div>
           <div className="flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300">
              <span className="text-xl font-bold text-slate-800 border-2 border-slate-800 px-2">SOYCH</span>
           </div>
           <div className="flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300">
              <span className="text-2xl font-black text-slate-800 tracking-tighter">UMBRELLA</span>
           </div>
           <div className="flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300">
              <span className="text-xl font-bold text-slate-800">Massive<span className="text-orange-500">Dynamic</span></span>
           </div>
           <div className="flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300">
              <span className="text-2xl font-semibold text-slate-800">Initech</span>
           </div>
        </div>
      </div>
    </section>
  );
};

export default Partners;