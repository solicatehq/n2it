import React from 'react';
import SectionHeading from '../ui/SectionHeading';

const resources = [
  {
    title: 'The Future of Cloud Computing in 2025',
    category: 'Trends',
    date: 'Oct 12, 2023',
    image: 'https://picsum.photos/id/1/800/600',
  },
  {
    title: '5 Steps to Secure Your Remote Workforce',
    category: 'Security',
    date: 'Sep 28, 2023',
    image: 'https://picsum.photos/id/20/800/600',
  },
  {
    title: 'Why VoIP is Replacing Traditional Landlines',
    category: 'Telephony',
    date: 'Sep 15, 2023',
    image: 'https://picsum.photos/id/3/800/600',
  },
];

const Resources: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <SectionHeading 
          title="Insights & Resources" 
          subtitle="Stay ahead of the curve with our expert analysis on the latest IT trends."
        />
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {resources.map((item, index) => (
            <article key={index} className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-xl mb-4 h-56">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-blue-900 uppercase">
                  {item.category}
                </div>
              </div>
              <div className="space-y-2">
                <span className="text-slate-400 text-sm font-medium">{item.date}</span>
                <h3 className="text-xl font-bold text-slate-900 group-hover:text-orange-500 transition-colors line-clamp-2">
                  {item.title}
                </h3>
                <a href="#" className="inline-block text-blue-900 font-semibold text-sm mt-2 border-b-2 border-transparent group-hover:border-orange-500 transition-all">
                  Read article
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Resources;