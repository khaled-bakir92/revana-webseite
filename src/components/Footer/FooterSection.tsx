import React from 'react';
import SocialLinks from './SocialLinks';
import FooterLinks from './FooterLinks';
import ScrollToTop from './ScrollToTop';
import { Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';

const FooterSection = () => {
  const socialLinks = [
    { icon: Facebook, href: 'https://www.facebook.com/share/17nokpW2co/?mibextid=LQQJ4d', label: 'Facebook' },
    { icon: Instagram, href: 'https://www.instagram.com/revana.khibo?igsh=MTF4cDA3Mjdjd3Q1Yg==', label: 'Instagram' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/revana-khibo-5b4150295/?originalSubdomain=at', label: 'LinkedIn' },
    { icon: Twitter, href: 'https://twitter.com', label: 'X (Twitter)' },
  ];

  const quickLinks = [
    { label: 'Home', href: '#home' },
    { label: 'Über Mich', href: '#ich' },
    { label: 'Projekte', href: '#projects' },
    { label: 'Leistungen', href: '#services' },
    { label: 'Kontakt', href: '#contact' },
  ];

  const legalLinks = [
    { label: 'Impressum', href: '/impressum' },
    { label: 'Datenschutz', href: '/datenschutz' },
  ];

  return (
    <footer className="bg-[#F9F9F3] pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand and Description */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="bg-[#F9F9F3] p-2 rounded-lg">
                <span className="font-bold text-xl">REWE</span>
              </div>
            </div>
            <p className="text-gray-600">
              Deutschlehrerin mit Fokus auf Integration.
            </p>
          </div>

          {/* Quick Links - Hidden on mobile */}
          <div className="hidden md:block">
            <FooterLinks title="Quick Links" links={quickLinks} />
          </div>

          {/* Legal Links */}
          <div>
            <FooterLinks title="Legal" links={legalLinks} />
          </div>
        </div>

        {/* Social Links and Copyright */}
        <div className="border-t border-gray-200 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-600 text-sm">
              © 2024 REWE. All rights reserved.
            </p>
            <SocialLinks links={socialLinks} />
          </div>
        </div>
      </div>

      <ScrollToTop />
    </footer>
  );
};

export default FooterSection;