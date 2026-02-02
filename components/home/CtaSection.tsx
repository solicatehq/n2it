import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../ui/Button';

const CtaSection: React.FC = () => {
  return (
    <section className="py-20 bg-blue-900 relative overflow-hidden">
        {/* Abstract shapes */}
        <div className="absolute right-0 top-0 w-1/3 h-full bg-white/5 skew-x-12 translate-x-1/2"></div>
        <div className="absolute left-0 bottom-0 w-64 h-64 bg-orange-500/20 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 relative z-10 text-center">
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
          Ready to streamline your IT?
        </h2>
        <p className="text-blue-100 text-lg md:text-xl max-w-2xl mx-auto mb-10">
          Join hundreds of satisfied clients who have transformed their business infrastructure with N2IT Solutions.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/contact">
            <Button variant="primary" size="lg" className="w-full sm:w-auto">
              Schedule a Consultation
            </Button>
          </Link>
          <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-blue-900 w-full sm:w-auto">
            View Case Studies
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;