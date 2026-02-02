import React from 'react';
import SectionHeading from '../ui/SectionHeading';
import { Cloud, ShieldCheck, Wifi, Server, Phone, Database } from 'lucide-react';

const services = [
  {
    title: 'Connectivity',
    description: 'High-speed business fibre and wireless solutions ensuring you stay online 24/7 with redundant failovers.',
    icon: Wifi,
  },
  {
    title: 'Cloud Solutions',
    description: 'Scalable cloud infrastructure hosting, data storage, and migration services tailored to your enterprise needs.',
    icon: Cloud,
  },
  {
    title: 'Cyber Security',
    description: 'Advanced firewall protection, endpoint security, and threat monitoring to safeguard your digital assets.',
    icon: ShieldCheck,
  },
  {
    title: 'Managed IT',
    description: 'Proactive maintenance, helpdesk support, and system administration for a fixed monthly fee.',
    icon: Server,
  },
  {
    title: 'VoIP Telephony',
    description: 'Crystal clear voice-over-IP systems that reduce costs and improve communication flexibility.',
    icon: Phone,
  },
  {
    title: 'Data Backup',
    description: 'Automated daily backups and disaster recovery planning to ensure business continuity.',
    icon: Database,
  },
];

const Services: React.FC = () => {
  return (
    <section id="services" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <SectionHeading 
          title="Our Key Offerings" 
          subtitle="Comprehensive IT solutions designed to optimize your workflow and secure your business."
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="group bg-white rounded-xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 hover:border-orange-200 hover:-translate-y-1"
            >
              <div className="w-14 h-14 bg-blue-50 text-blue-900 rounded-lg flex items-center justify-center mb-6 group-hover:bg-orange-500 group-hover:text-white transition-colors duration-300">
                <service.icon size={28} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h3>
              <p className="text-slate-600 leading-relaxed mb-6">
                {service.description}
              </p>
              <a href="#" className="inline-flex items-center text-sm font-semibold text-blue-900 hover:text-orange-500 transition-colors">
                Learn more 
                <span className="ml-1 group-hover:translate-x-1 transition-transform">→</span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;