import React from 'react';
import SectionTitle from '../common/SectionTitle';
import ContactForm from './ContactForm';
import ContactIllustration from './ContactIllustration';
import WaveBackground from '../Services/WaveBackground';

const ContactSection = () => {
  return (
    <section id="contact" className="relative py-20 bg-[#F9F9F3] overflow-hidden">
      <WaveBackground />
      <div className=" relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle>Kontakt Me</SectionTitle>
        <div className="grid md:grid-cols-2 gap-12 mt-12">
          <div className="order-2 md:order-1">
            <ContactForm />
          </div>
          <div className="order-1 md:order-2">
            <ContactIllustration />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;