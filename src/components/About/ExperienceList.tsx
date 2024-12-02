import React from 'react';
import { Briefcase } from 'lucide-react';
import Card from '../common/Card';
import SectionSubtitle from '../common/SectionSubtitle';

const experiences = [
  {
    title: 'SACHBEARBEITER IN FÖRDERBERATUNG',
    company: 'Diakonie Deutscland',
    period: 'Apr  2024 - Bis heute',
    description: 'Prüfung der Richtigkeit und Vollständigkeit von Verwendungnachweise und Bearbeitung und Erstellung von Checklisten zur Optimierung der Arbeitsabläufe.'
  },
  {
    title: 'ERZIEHERIN',
    company: 'Big Kid Kindergarten in Amman, Jordanien',
    period: 'Sep  2023 - Jan  2024',
    description: 'Betreuung und Förderung von Kindern im Alter von 3-6 Jahren, Pädagogische Begleitung der Kinder, Begleitung der Kinder beim spielen und Sport und Entwicklung neuer Ideen für die Alltagsgestaltung  '
  },{
    title: 'DEUTSCHLEHRERIN',
    company: 'Hoffmann Sprachschule in Amman, Jordanien',
    period: 'Mär  2023 - Aug  2023',
    description: 'Unterrichtserfahrung mit Schülerinnen verschiedener Altersgruppen und Bildungsstufen, Entwicklung und Durchführung von Lehrplänen und Unterrichtsmaterialen in verschiedenen Fächern und Betreuung und Unterstützung von Schülerinnen bei der Erreichung ihrer Lernziele '
  },{
    title: 'DEUTSCHLEHRERIN',
    company: 'German-Jordanian University',
    period: 'Nov   2022 - Jan   2023',
    description: 'Deutschlehrerin für Austauschstudenten (Vorbereitung auf Auslandssemester in Deutschland) '
  },{
    title: 'SPRACHDOZENTIN',
    company: 'Katholische Erwachsenen und Familienbildung OWL',
    period: 'Mär   2022 - Jun    2022',
    description: 'Deutschlehrerin für geflüchtete, ukrainische Bewohnerinnen '
  },{
    title: 'DOZENTIN',
    company: 'Vhs Recken-berg-Ems. in Rheda-Wiedenbrück',
    period: 'Oct    2021 - Jan    2022',
    description: 'Handlungs- und alltagsorientierte Deutschförderung an Primarschulen im Rahmen des Projekts und Förderung/Unterstützung/Chancen für Schüler*innen aus Südosteuropa“ (FUCHS) '
  },{
    title: 'NACHHILFELEHRERIN',
    company: 'Grundschule Im kleinen Feld',
    period: 'Nov    2016 - Sep    2018',
    description: 'Nachilfe für Kindern mit Migrationshintergrund  '
  }
];

const ExperienceList = () => {
  return (
    <div>
      <SectionSubtitle icon={<Briefcase className="w-6 h-6" />}>
        Experience
      </SectionSubtitle>
      <div className="space-y-6 mt-6">
        {experiences.map((exp, index) => (
          <Card key={index}>
            <h3 className="text-xl font-semibold text-gray-900">{exp.title}</h3>
            <p className="text-gray-600 mt-1">{exp.company}</p>
            <p className="text-sm text-gray-500 mt-1">{exp.period}</p>
            <p className="text-gray-700 mt-3">{exp.description}</p>
          </Card>
        ))}
      </div>
      <div className="mt-12">
          <img
            src="/img/Experience.svg"
            alt="Profile"
            className="h-80 object-contain"

          />
        </div>
    </div>
  );
};

export default ExperienceList;