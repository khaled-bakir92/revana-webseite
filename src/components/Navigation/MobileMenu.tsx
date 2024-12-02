import React from 'react';
import { X } from 'lucide-react';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  navItems: string[];
  onNavClick: (e: React.MouseEvent<HTMLAnchorElement>, item: string) => void;
}

const MobileMenu = ({ isOpen, onClose, navItems, onNavClick }: MobileMenuProps) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-[#DFF5E1] md:hidden">
      <div className="p-4 flex justify-end">
        <button
          onClick={onClose}
          className="p-2 hover:bg-[#D2D7FF] rounded-full transition-colors"
        >
          <X className="h-6 w-6" />
        </button>
      </div>
      <div className="flex flex-col items-center space-y-8 mt-16">
        {navItems.map((item) => (
          <a
            key={item}
            href={`#${item.toLowerCase()}`}
            onClick={(e) => onNavClick(e, item)}
            className="text-2xl text-gray-800 hover:text-[#D2D7FF] transition-colors duration-200 font-medium"
          >
            {item}
          </a>
        ))}
      </div>
    </div>
  );
};

export default MobileMenu;