import React from 'react';
import SocialLinks from './SocialLinks';

const HeroSection = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <div className="min-h-screen pt-16 bg-[#DFF5E1]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center min-h-[calc(100vh-4rem)] py-12">
          <div className="space-y-6 text-center md:text-left">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
              Hello,<br />Ich bin Revana Khibo
            </h1>
            <p className="text-lg sm:text-xl text-gray-700">
            Ich bin DaF-Lehrerin und Erzieherin mit einer großen Leidenschaft für Bildung und interkulturelle Zusammenarbeit. Mein Ziel ist es, Menschen auf ihrem Weg zu unterstützen – sei es beim Erlernen der deutschen Sprache, in der Integration oder in der Förderung von Kindern und Jugendlichen.

Entdecken Sie mehr über meine Arbeit, meine Werte und wie ich dabei helfen kann, Brücken zwischen Kulturen zu bauen.

Ich freue mich darauf, Sie kennenzulernen! 🌟
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <button
                onClick={() => scrollToSection('contact')}
                className="w-full sm:w-auto px-6 py-3 bg-[#F9F9F3] text-gray-900 rounded-lg font-medium hover:bg-opacity-80 transition-colors">
                Contact Me
              </button>
              <button 
                onClick={() => scrollToSection('projects')}
                className="w-full sm:w-auto px-6 py-3 border-2 border-[#F9F9F3] text-gray-900 rounded-lg font-medium hover:bg-[#F9F9F3] transition-colors">
                View Projects
              </button>
            </div>
            <div className="flex justify-center md:justify-start">
              <SocialLinks />
            </div>
          </div>
          <div className="relative order-first md:order-last">
            <img
              src="/img/Hero-bild.svg"
              alt="Team collaboration"
              className="rounded-lg w-full h-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;