import React from 'react';
import SectionHeading from '../components/ui/SectionHeading';
import CtaSection from '../components/home/CtaSection';
import { Award, Users, Globe, Target } from 'lucide-react';

const team = [
  {
    name: 'David Chen',
    role: 'Chief Executive Officer',
    image: 'https://picsum.photos/id/1005/400/400'
  },
  {
    name: 'Sarah Johnson',
    role: 'Head of Operations',
    image: 'https://picsum.photos/id/1011/400/400'
  },
  {
    name: 'Marcus Williams',
    role: 'Lead Solutions Architect',
    image: 'https://picsum.photos/id/1012/400/400'
  },
  {
    name: 'Emily Davis',
    role: 'Client Success Manager',
    image: 'https://picsum.photos/id/1027/400/400'
  }
];

const values = [
  { icon: Target, title: 'Innovation', desc: 'We constantly explore new technologies to keep our clients ahead.' },
  { icon: Users, title: 'Partnership', desc: 'We view ourselves as an extension of your team, not just a vendor.' },
  { icon: Globe, title: 'Integrity', desc: 'We believe in transparent communication and honest advice.' },
  { icon: Award, title: 'Excellence', desc: 'We strive for perfection in every ticket we resolve and system we build.' }
];

const AboutPage: React.FC = () => {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-12">
          <div className="w-full md:w-1/2 space-y-6">
            <h1 className="text-4xl md:text-6xl font-extrabold text-blue-900 leading-tight">
              About <span className="text-orange-500">N2IT</span>
            </h1>
            <p className="text-xl text-slate-600 leading-relaxed">
              We are a team of passionate technologists dedicated to making enterprise-grade IT solutions accessible to businesses of all sizes.
            </p>
            <div className="h-1 w-24 bg-orange-500 rounded-full"></div>
          </div>
          <div className="w-full md:w-1/2">
             <img src="https://picsum.photos/id/3/800/600" alt="Team meeting" className="rounded-2xl shadow-2xl" />
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <SectionHeading title="Our Mission & Values" subtitle="Driven by a commitment to service and technological excellence." />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            {values.map((val, idx) => (
              <div key={idx} className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow text-center">
                <div className="w-14 h-14 bg-blue-100 text-blue-900 rounded-full flex items-center justify-center mx-auto mb-6">
                  <val.icon size={28} />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{val.title}</h3>
                <p className="text-slate-600 text-sm">{val.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <SectionHeading title="Meet The Experts" subtitle="The people behind the technology." />
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div key={index} className="group text-center">
                <div className="relative mb-4 overflow-hidden rounded-xl aspect-square mx-auto max-w-xs">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 grayscale group-hover:grayscale-0"
                  />
                  <div className="absolute inset-0 bg-blue-900/0 group-hover:bg-blue-900/20 transition-colors"></div>
                </div>
                <h3 className="text-xl font-bold text-slate-900">{member.name}</h3>
                <p className="text-orange-500 font-medium text-sm">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      <CtaSection />
    </div>
  );
};

export default AboutPage;