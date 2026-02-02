import React from 'react';

const stats = [
  { value: '99.9%', label: 'Uptime Guaranteed' },
  { value: '500+', label: 'Clients Supported' },
  { value: '24/7', label: 'Support Available' },
  { value: '15+', label: 'Years Experience' },
];

const Stats: React.FC = () => {
  return (
    <section className="py-16 bg-blue-900 relative overflow-hidden">
      {/* Decorative background pattern */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
        <div className="w-96 h-96 rounded-full bg-white blur-3xl absolute -top-20 -left-20"></div>
        <div className="w-96 h-96 rounded-full bg-orange-500 blur-3xl absolute bottom-0 right-0"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-blue-800/50">
          {stats.map((stat, index) => (
            <div key={index} className="p-4">
              <div className="text-4xl md:text-5xl font-extrabold text-white mb-2 tracking-tight">
                {stat.value}
              </div>
              <div className="text-blue-200 font-medium uppercase tracking-wider text-sm">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;