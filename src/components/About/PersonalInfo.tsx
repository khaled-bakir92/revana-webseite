import React from 'react';
import { MapPin, Code, Palette, Book,Languages, BookOpen , Baby } from 'lucide-react';
import Card from '../common/Card';

const PersonalInfo = () => {
  const interests = [
    'Sprachen und Kulturen',
    'Pädagogik und Bildung',
    'Soziale Integration',
    'Kommunikation und Zusammenarbeit',
    'Kinder- und Jugendförderung'
  ];

  return (
    <div className="grid md:grid-cols-2 gap-8 items-center">
      <div className="space-y-6">
        <div className="space-y-4">
          <div className="flex items-center gap-2 text-gray-700">
            <MapPin className="w-5 h-5" />
            <span>Based in Berlin, Germany</span>
          </div>
          <div className="flex items-center gap-2 text-gray-700">
            <Languages className="w-5 h-5" />
            <span>DaF Lehrerin</span>
          </div>
          <div className="flex items-center gap-2 text-gray-700">
            <BookOpen className="w-5 h-5" />
            <span>Pädagogik</span>
          </div>
          <div className="flex items-center gap-2 text-gray-700">
            <Baby className="w-5 h-5" />
            <span>Sozial Arbeiterin</span>
          </div>
        </div>
        
        <div>
          <p className="text-gray-700 leading-relaxed">
          Ich bin DaF-Lehrerin und Erzieherin mit einer Leidenschaft für die Arbeit mit Menschen aus unterschiedlichen kulturellen Hintergründen. Besonders gerne unterstütze ich Migrant*innen und begleite sie auf ihrem Bildungs- und Integrationsweg. Meine Arbeit zeichnet sich durch Empathie, Professionalität und einen interkulturellen Ansatz aus, um eine positive Lernumgebung zu schaffen.
          </p>
        </div>

        <div>
          <h4 className="font-medium text-gray-900 mb-3">Interessen</h4>
          <div className="flex flex-wrap gap-2">
            {interests.map((interest) => (
              <span
                key={interest}
                className="px-3 py-1 bg-[#DFF5E1] text-gray-700 rounded-full text-sm"
              >
                {interest}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="relative max-w-[300px] mx-auto">
        <div className="aspect-square overflow-hidden rounded-full border-4 border-[#DFF5E1]">
          <img
            src="/img/rewe.png"
            alt="Profile"
            className="w-full h-full object-contain"
          />
        </div>
        <div className="absolute inset-0 rounded-full border-t-4 border-[#A3D9AC] animate-spin-slow" />
      </div>
    </div>
  );
};

export default PersonalInfo;