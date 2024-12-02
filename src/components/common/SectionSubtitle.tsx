import React, { ReactNode } from 'react';

interface SectionSubtitleProps {
  children: ReactNode;
  icon?: ReactNode;
}

const SectionSubtitle = ({ children, icon }: SectionSubtitleProps) => {
  return (
    <div className="flex items-center gap-2">
      {icon}
      <h3 className="text-2xl font-semibold text-gray-900">{children}</h3>
    </div>
  );
};

export default SectionSubtitle;