import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

interface Link {
  label: string;
  href: string;
}

interface FooterLinksProps {
  title: string;
  links: Link[];
}

const FooterLinks = ({ title, links }: FooterLinksProps) => {
  const navigate = useNavigate();

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    
    // If it's a legal page link (starts with '/'), use React Router navigation
    if (href.startsWith('/')) {
      navigate(href);
      return;
    }
    
    // For home link, scroll to top
    if (href === '#home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    
    // For other anchor links, use smooth scroll
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div>
      <h3 className="font-semibold text-gray-900 mb-4">{title}</h3>
      <ul className="space-y-2">
        {links.map((link) => (
          <li key={link.label}>
            {link.href.startsWith('/') ? (
              <Link
                to={link.href}
                className="text-gray-600 hover:text-gray-900 relative inline-block transition-colors
                  after:content-[''] after:absolute after:w-full after:h-0.5 after:bg-gray-900
                  after:left-0 after:bottom-0 after:scale-x-0 hover:after:scale-x-100
                  after:transition-transform after:duration-300 after:origin-left"
              >
                {link.label}
              </Link>
            ) : (
              <a
                href={link.href}
                onClick={(e) => handleClick(e, link.href)}
                className="text-gray-600 hover:text-gray-900 relative inline-block transition-colors
                  after:content-[''] after:absolute after:w-full after:h-0.5 after:bg-gray-900
                  after:left-0 after:bottom-0 after:scale-x-0 hover:after:scale-x-100
                  after:transition-transform after:duration-300 after:origin-left"
              >
                {link.label}
              </a>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FooterLinks;