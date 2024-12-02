import React from "react";
import { GraduationCap } from "lucide-react";
import Card from "../common/Card";
import SectionSubtitle from "../common/SectionSubtitle";

const education = [
  {
    degree: "Bachelor Erziehungswissenschaft",
    school: "Universität Bielefeld",
    period: "Oct  2018 - Sep 2024",
    description: "Fokussieren auf Bildung und Didaktik",
  },
  {
    degree: "Bachelor Deutsch als Fremd- und Zweitsprache (DaF/DaZ)",
    school: "Universität Bielefeld",
    period: "Oct  2018 - Sep 2024",
    description: "Fokussieren auf Theorie und Praxis des Unterrichts Deutsch als Fremd- und Zweitsprache",
  },
  {
    degree: "Bachelor Rechtswissenschaften",
    school: "Al-Furat-Universität",
    period: "Oct  2012 - Sep 2014",
    description: "Ausgerichtet auf die Förderung der Gesellschaft und die Stärkung der Rechtsstaatlichkeit.",
  },
];

const EducationList = () => {
  return (
    <div>
      <div className="hidden md:block mb-5">
        <img
          src="/img/edu-ellis.svg"
          alt="Profile"
          className="w-36 h-80 object-contain"
        />
      </div>
      <SectionSubtitle icon={<GraduationCap className="w-6 h-6" />}>
        Education
      </SectionSubtitle>
      <div className="space-y-6 mt-6">
        {education.map((edu, index) => (
          <Card key={index}>
            <h3 className="text-xl font-semibold text-gray-900">
              {edu.degree}
            </h3>
            <p className="text-gray-600 mt-1">{edu.school}</p>
            <p className="text-sm text-gray-500 mt-1">{edu.period}</p>
            <p className="text-gray-700 mt-3">{edu.description}</p>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default EducationList;
