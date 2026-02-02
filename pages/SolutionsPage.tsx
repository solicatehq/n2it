import React from 'react';
import SectionHeading from '../components/ui/SectionHeading';
import Button from '../components/ui/Button';
import CtaSection from '../components/home/CtaSection';
import { Building2, Briefcase, GraduationCap, ShoppingCart, Truck } from 'lucide-react';

const industries = [
  {
    name: 'Corporate & Finance',
    icon: Building2,
    description: 'Secure data handling and high-availability infrastructure for demanding financial environments.',
  },
  {
    name: 'Small Business',
    icon: Briefcase,
    description: 'Cost-effective, scalable IT packages designed to help startups and SMEs grow without technical hurdles.',
  },
  {
    name: 'Education',
    icon: GraduationCap,
    description: 'Reliable connectivity and filtering solutions to support digital learning environments.',
  },
  {
    name: 'Retail',
    icon: ShoppingCart,
    description: 'Point-of-sale support, inventory management systems integration, and guest Wi-Fi solutions.',
  },
  {
    name: 'Logistics',
    icon: Truck,
    description: 'Real-time tracking system support and mobile workforce connectivity solutions.',
  }
];

const solutions = [
  {
    title: 'Remote Workforce Enablement',
    description: 'Everything you need to manage a distributed team securely and efficiently.',
    features: ['VPN Setup', 'Virtual Desktops', 'Collaboration Tools (Teams/Zoom)', 'Mobile Device Management'],
    image: 'https://picsum.photos/id/48/800/600'
  },
  {
    title: 'Enterprise Infrastructure',
    description: 'Robust server and networking architecture for large-scale operations.',
    features: ['Server Virtualization', 'Network Segmentation', 'Storage Area Networks', 'Load Balancing'],
    image: 'https://picsum.photos/id/60/800/600'
  }
];

const SolutionsPage: React.FC = () => {
  return (
    <div className="pt-20">
      <section className="bg-slate-900 py-20 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-blue-900/50 mix-blend-multiply"></div>
        <div className="container mx-auto px-4 relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Industry Solutions</h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Tailored IT strategies that understand the unique challenges of your specific industry.
          </p>
        </div>
      </section>

      {/* Industry Verticals */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <SectionHeading title="Industries We Serve" subtitle="Specialized knowledge for specialized sectors." />
          
          <div className="flex flex-wrap justify-center gap-6">
            {industries.map((ind, idx) => (
              <div key={idx} className="bg-slate-50 p-6 rounded-xl border border-slate-100 hover:border-orange-500 hover:shadow-lg transition-all w-full md:w-[calc(33%-1rem)]">
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-white p-3 rounded-full shadow-sm text-orange-500">
                    <ind.icon size={24} />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900">{ind.name}</h3>
                </div>
                <p className="text-slate-600 text-sm">{ind.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Specialized Solution Blocks */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="space-y-24">
            {solutions.map((sol, index) => (
              <div key={index} className={`flex flex-col ${index % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-12`}>
                <div className="w-full md:w-1/2">
                  <img src={sol.image} alt={sol.title} className="rounded-xl shadow-xl w-full object-cover h-[400px]" />
                </div>
                <div className="w-full md:w-1/2 space-y-6">
                  <h3 className="text-3xl font-bold text-slate-900">{sol.title}</h3>
                  <p className="text-lg text-slate-600">{sol.description}</p>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {sol.features.map((f, i) => (
                      <li key={i} className="flex items-center gap-2 text-slate-700 font-medium">
                        <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                        {f}
                      </li>
                    ))}
                  </ul>
                  <Button variant="secondary">Request Consultation</Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaSection />
    </div>
  );
};

export default SolutionsPage;