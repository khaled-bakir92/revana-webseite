import React, { useState } from 'react';
import { Menu, Globe } from 'lucide-react';
import MobileMenu from './MobileMenu';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navItems = ['Home', 'Ich','Projects', 'Services', 'Contact'];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, item: string) => {
    e.preventDefault();
    const targetId = item.toLowerCase();
    let targetElement;
    
    if (targetId === 'home') {
      targetElement = document.body;
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    } else {
      targetElement = document.getElementById(targetId);
      targetElement?.scrollIntoView({ behavior: 'smooth' });
    }
    
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 bg-[#DFF5E1] z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <div className="flex items-center gap-2">
                  <div className="bg-[#F9F9F3] p-2 rounded-lg">
                    <span className="font-bold text-xl">RK</span>
                  </div>
                  <button className="p-2 hover:bg-[#F9F9F3] rounded-full transition-colors">
                    <Globe className="h-5 w-5" />
                  </button>
                </div>
              </div>
            </div>
            
            <div className="hidden md:block">
              <div className="ml-10 flex items-center space-x-8">
                {navItems.map((item) => (
                  <a
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    onClick={(e) => handleNavClick(e, item)}
                    className="text-gray-800 hover:text-gray-900 relative inline-block transition-colors
                      after:content-[''] after:absolute after:w-full after:h-0.5 after:bg-gray-900
                      after:left-0 after:bottom-0 after:scale-x-0 hover:after:scale-x-100
                      after:transition-transform after:duration-300 after:origin-left"
                  >
                    {item}
                  </a>
                ))}
              </div>
            </div>
            
            <div className="md:hidden">
              <button 
                onClick={() => setIsMobileMenuOpen(true)}
                className="p-2 rounded-md hover:bg-[#D2D7FF] transition-colors"
              >
                <Menu className="h-6 w-6" />
              </button>
            </div>
          </div>
        </div>
      </nav>
      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        navItems={navItems}
        onNavClick={handleNavClick}
      />
    </>
  );
};

export default Navbar;