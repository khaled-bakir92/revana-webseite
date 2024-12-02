import React, { ReactNode } from 'react';

interface SectionTitleProps {
  children: ReactNode;
}

const SectionTitle = ({ children }: SectionTitleProps) => {
  return (
    <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900">
      {children}
    </h2>
  );
};

export default SectionTitle;