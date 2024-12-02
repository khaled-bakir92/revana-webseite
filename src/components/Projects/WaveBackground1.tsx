import React from 'react';

const WaveBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden">
      <svg
        className="absolute w-full h-full"
        viewBox="0 0 1440 800"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid slice"
      >
        <path
          d="M-200 400C100 300 400 600 700 500C1000 400 1300 600 1600 500"
          stroke="#F9F9F3"
          strokeWidth="200"
          fill="none"
        />
        
      </svg>
    </div>
  );
};

export default WaveBackground;