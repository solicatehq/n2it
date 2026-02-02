import React from 'react';
import Hero from '../components/home/Hero';
import Services from '../components/home/Services';
import Stats from '../components/home/Stats';
import Process from '../components/home/Process';
import Resources from '../components/home/Resources';
import Testimonials from '../components/home/Testimonials';
import Partners from '../components/home/Partners';
import CtaSection from '../components/home/CtaSection';

const HomePage: React.FC = () => {
  return (
    <main>
      <Hero />
      <Services />
      <Stats />
      <Process />
      <Resources />
      <Testimonials />
      <Partners />
      <CtaSection />
    </main>
  );
};

export default HomePage;