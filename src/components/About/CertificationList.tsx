import React from 'react';
import { Award } from 'lucide-react';
import Card from '../common/Card';
import SectionSubtitle from '../common/SectionSubtitle';

const certifications = [
  'Bachelor of Arts in Erziehungswissenschaft',
  'Bachelor of Arts in Deutsch als Fremd- und Zweitsprache (DaF/DaZ)',
  'Deutschzertifikat C2',
  'Arabisch als Fremdsprache'
];

const CertificationList = () => {
  return (
    <div>
      <SectionSubtitle icon={<Award className="w-6 h-6" />}>
      Zertifikate
      </SectionSubtitle>
      <Card className="mt-3">
        <ul className="space-y-3">
          {certifications.map((cert, index) => (
            <li key={index} className="flex items-center gap-2">
              <div className="h-2 w-2 bg-[#F9F9F3] rounded-full" />
              <span className="text-gray-700">{cert}</span>
            </li>
          ))}
        </ul>
      </Card>
    </div>
  );
};

export default CertificationList;