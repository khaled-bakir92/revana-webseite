import React, { useEffect, useRef, useState } from 'react';
import { Service } from './types';

interface ServiceCardProps {
  service: Service;
}

const ServiceCard = ({ service }: ServiceCardProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target); // Entfernt das aktuelle Element aus der Beobachtung
        }
      },
      {
        threshold: 0.1,
        rootMargin: '50px',
      }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    // Cleanup-Funktion
    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={cardRef}
      className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow"
      style={{
        transform: isVisible ? 'translate(0px, 0px)' : 'translate(25vw, 0px) rotate(45deg)',
        opacity: isVisible ? 1 : 0,
        transition: 'all 0.8s ease-out',
      }}
    >
      <div className="flex flex-col items-center text-center">
        <div className="p-3 bg-[#DFF5E1] rounded-xl mb-4">
          <img
            src={service.icon}
            alt={service.title}
            className="w-55 h-79 text-gray-800" // Angepasst auf w-12 h-12
          />
        </div>
        <h3 className="text-xl font-semibold text-gray-900 mb-3">
          {service.title}
        </h3>
        <p className="text-gray-700">{service.description}</p>
      </div>
    </div>
  );
};

export default ServiceCard;
