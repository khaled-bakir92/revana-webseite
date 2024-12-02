import React from 'react';
import Navbar from '../components/Navigation/Navbar';
import HeroSection from '../components/Hero/HeroSection';
import AboutSection from '../components/About/AboutSection';
import ProjectsSection from '../components/Projects/ProjectsSection';
import ServicesSection from '../components/Services/ServicesSection';
import ContactSection from '../components/Contact/ContactSection';
import FooterSection from '../components/Footer/FooterSection';

const MainLayout = () => {
  return (
    <div className="min-h-screen bg-[#DFF5E1]">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <ServicesSection />
      <ContactSection />
      <FooterSection />
    </div>
  );
};

export default MainLayout;