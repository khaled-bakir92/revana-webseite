import React, { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  className?: string;
}

const Card = ({ children, className = '' }: CardProps) => {
  return (
    <div className={`bg-[#DFF5E1] p-6 rounded-lg shadow-sm ${className}`}>
      {children}
    </div>
  );
};

export default Card;