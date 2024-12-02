import React from 'react';
import SectionTitle from '../common/SectionTitle';
import ServiceCard from './ServiceCard';
import { services } from './servicesData';
import WaveBackground from './WaveBackground';

const ServicesSection = () => {
  return (
    <section id="services" className="relative py-20 bg-[#F9F9F3] overflow-hidden">
      <WaveBackground />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle>Meine Leistungen</SectionTitle>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;