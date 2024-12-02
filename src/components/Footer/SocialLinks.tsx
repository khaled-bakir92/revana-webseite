import React from 'react';
import { LucideIcon } from 'lucide-react';

interface SocialLink {
  icon: LucideIcon;
  href: string;
  label: string;
}

interface SocialLinksProps {
  links: SocialLink[];
}

const SocialLinks = ({ links }: SocialLinksProps) => {
  return (
    <div className="flex gap-4">
      {links.map(({ icon: Icon, href, label }) => (
        <a
          key={label}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 hover:bg-[#DFF5E1] rounded-full transition-colors"
          aria-label={label}
        >
          <Icon className="w-5 h-5 text-gray-600 hover:text-gray-900" />
        </a>
      ))}
    </div>
  );
};

export default SocialLinks;