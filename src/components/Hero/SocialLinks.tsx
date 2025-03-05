import React from 'react';
import { Instagram, Linkedin, Mail } from 'lucide-react';

const SocialLinks = () => {
  const socialLinks = [
    { icon: Instagram, href: 'https://www.instagram.com/revana.khibo?igsh=MTF4cDA3Mjdjd3Q1Yg==', label: 'Instagram' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/revana-khibo', label: 'LinkedIn' },
    { icon: Mail, href: 'mailto:revana.khibo94@gmail.com', label: 'Email' },
  ];

  return (
    <div className="flex gap-4">
      {socialLinks.map(({ icon: Icon, href, label }) => (
        <a
          key={label}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 hover:bg-[#F9F9F3] rounded-full transition-colors"
          aria-label={label}
        >
          <Icon className="h-6 w-6" />
        </a>
      ))}
    </div>
  );
};

export default SocialLinks;