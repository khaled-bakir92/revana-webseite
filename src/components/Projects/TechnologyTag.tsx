import React from 'react';

interface TechnologyTagProps {
  technology: string;
}

const TechnologyTag = ({ technology }: TechnologyTagProps) => {
  return (
    <span className="inline-block px-3 py-1 text-sm text-gray-700 bg-white border border-gray-200 rounded-full">
      {technology}
    </span>
  );
};

export default TechnologyTag;