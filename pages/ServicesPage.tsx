import React from 'react';
import SectionHeading from '../components/ui/SectionHeading';
import Button from '../components/ui/Button';
import CtaSection from '../components/home/CtaSection';
import { Wifi, Cloud, ShieldCheck, Server, Phone, Database, CheckCircle2 } from 'lucide-react';

const serviceCategories = [
  {
    title: 'Managed IT Services',
    icon: Server,
    description: 'Focus on your business while we handle your IT infrastructure. Our managed services provide comprehensive support, monitoring, and maintenance.',
    features: ['24/7 System Monitoring', 'Remote & On-site Support', 'Patch Management', 'Asset Tracking']
  },
  {
    title: 'Cloud Solutions',
    icon: Cloud,
    description: 'Scale your business with secure and flexible cloud solutions. We help you migrate, manage, and optimize your cloud environment.',
    features: ['Public, Private & Hybrid Cloud', 'Migration Services', 'Office 365 Integration', 'Cloud Storage']
  },
  {
    title: 'Cyber Security',
    icon: ShieldCheck,
    description: 'Protect your sensitive data and business reputation with our advanced security protocols and threat detection systems.',
    features: ['Firewall Management', 'Endpoint Protection', 'Security Audits', 'Employee Training']
  },
  {
    title: 'Connectivity',
    icon: Wifi,
    description: 'Reliable, high-speed internet is the backbone of modern business. We provide robust connectivity solutions.',
    features: ['Business Fibre', 'Wireless Links', 'SD-WAN', 'Failover Redundancy']
  },
  {
    title: 'VoIP Telephony',
    icon: Phone,
    description: 'Modernize your communication with crystal-clear VoIP systems that offer flexibility and cost savings.',
    features: ['Cloud PBX', 'Video Conferencing', 'Mobile App Integration', 'Call Recording']
  },
  {
    title: 'Data Protection',
    icon: Database,
    description: 'Ensure business continuity with our automated backup and disaster recovery solutions.',
    features: ['Daily Automated Backups', 'Disaster Recovery Planning', 'Data Encryption', 'Ransomware Protection']
  }
];

const ServicesPage: React.FC = () => {
  return (
    <div className="pt-20">
      {/* Page Header */}
      <section className="bg-blue-900 py-20 text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Our Services</h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Comprehensive technology solutions designed to drive efficiency, security, and growth for your business.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {serviceCategories.map((service, index) => (
              <div key={index} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow border border-slate-100">
                <div className="p-8">
                  <div className="w-16 h-16 bg-blue-50 text-blue-900 rounded-lg flex items-center justify-center mb-6">
                    <service.icon size={32} />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-4">{service.title}</h3>
                  <p className="text-slate-600 mb-6">{service.description}</p>
                  
                  <ul className="space-y-3">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm text-slate-700 font-medium">
                        <CheckCircle2 size={16} className="text-orange-500" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <div className="mt-8">
                     <Button variant="outline" size="sm" className="w-full">
                       Learn More
                     </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing/Engagement Model Hint */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 text-center">
           <SectionHeading title="Why Partner With Us?" subtitle="We don't just fix computers; we optimize your business performance." />
           <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto mt-12">
              <div className="p-6">
                <div className="text-4xl font-bold text-orange-500 mb-2">01</div>
                <h4 className="text-lg font-bold text-slate-900 mb-2">Proactive Support</h4>
                <p className="text-slate-600 text-sm">We identify and fix issues before you even know they exist.</p>
              </div>
              <div className="p-6">
                <div className="text-4xl font-bold text-orange-500 mb-2">02</div>
                <h4 className="text-lg font-bold text-slate-900 mb-2">Strategic Planning</h4>
                <p className="text-slate-600 text-sm">We align your IT infrastructure with your long-term business goals.</p>
              </div>
              <div className="p-6">
                <div className="text-4xl font-bold text-orange-500 mb-2">03</div>
                <h4 className="text-lg font-bold text-slate-900 mb-2">Transparent Pricing</h4>
                <p className="text-slate-600 text-sm">No hidden fees. Just predictable monthly costs for your peace of mind.</p>
              </div>
           </div>
        </div>
      </section>

      <CtaSection />
    </div>
  );
};

export default ServicesPage;