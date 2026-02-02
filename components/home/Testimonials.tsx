import React from 'react';
import SectionHeading from '../ui/SectionHeading';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    quote: "Since switching to N2IT, our downtime has virtually vanished. Their proactive monitoring catches issues before they affect our operations.",
    author: "Sarah Jenkins",
    role: "CTO, FinTech Corp",
    image: "https://picsum.photos/id/64/100/100"
  },
  {
    quote: "The team at N2IT handled our cloud migration seamlessly. They are not just vendors; they are true partners in our growth.",
    author: "Michael Ross",
    role: "Operations Director, Logistics Plus",
    image: "https://picsum.photos/id/91/100/100"
  },
  {
    quote: "Their cybersecurity audit revealed vulnerabilities we didn't know existed. We feel much safer knowing N2IT is watching our back.",
    author: "Elena Rodriguez",
    role: "CEO, Creative Solutions",
    image: "https://picsum.photos/id/65/100/100"
  }
];

const Testimonials: React.FC = () => {
  return (
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <SectionHeading 
          title="What Our Clients Say" 
          subtitle="Don't just take our word for it. Hear from businesses we've helped transform."
        />
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((item, index) => (
            <div key={index} className="bg-white p-8 rounded-xl shadow-sm border border-slate-100 relative">
              <Quote className="absolute top-6 left-6 text-orange-200" size={40} />
              <p className="text-slate-600 italic mb-6 relative z-10 pt-4">"{item.quote}"</p>
              
              <div className="flex items-center gap-4 border-t border-slate-100 pt-6">
                <img 
                  src={item.image} 
                  alt={item.author} 
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <h4 className="font-bold text-slate-900 text-sm">{item.author}</h4>
                  <p className="text-orange-500 text-xs font-semibold uppercase">{item.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;