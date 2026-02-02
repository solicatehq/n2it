import React from 'react';
import SectionHeading from '../ui/SectionHeading';
import { Search, PenTool, Rocket, Headphones } from 'lucide-react';

const steps = [
  {
    icon: Search,
    title: '1. Discovery',
    description: 'We analyze your current infrastructure and identify gaps to understand your business goals.'
  },
  {
    icon: PenTool,
    title: '2. Strategy',
    description: 'Our architects design a tailored roadmap to optimize your systems for efficiency and security.'
  },
  {
    icon: Rocket,
    title: '3. Implementation',
    description: 'We deploy solutions with minimal disruption, ensuring seamless integration into your workflow.'
  },
  {
    icon: Headphones,
    title: '4. Support',
    description: 'Ongoing monitoring and 24/7 helpdesk support keep your operations running smoothly.'
  }
];

const Process: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <SectionHeading 
          title="How We Work" 
          subtitle="Our proven 4-step process ensures we deliver results that matter to your business."
        />
        
        <div className="relative">
          {/* Connector Line (Desktop) */}
          <div className="hidden md:block absolute top-12 left-0 w-full h-0.5 bg-slate-200 -z-10"></div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="flex flex-col items-center text-center group">
                <div className="w-24 h-24 bg-white border-4 border-slate-100 rounded-full flex items-center justify-center mb-6 shadow-sm group-hover:border-orange-500 group-hover:scale-110 transition-all duration-300">
                  <step.icon size={32} className="text-blue-900 group-hover:text-orange-500 transition-colors" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{step.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed px-2">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;