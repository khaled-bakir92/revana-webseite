import React from 'react';
import SectionTitle from '../common/SectionTitle';
import PersonalInfo from './PersonalInfo';
import ExperienceList from './ExperienceList';
import EducationList from './EducationList';
import CertificationList from './CertificationList';

const AboutSection = () => {
  return (
    <section id="ich" className="py-20 bg-[#F9F9F3] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle>Über Mich</SectionTitle>
        <div className="mt-12">
          <PersonalInfo />
        </div>
        <div className="grid md:grid-cols-2 gap-12 mt-16">
          <div className="space-y-8">
            <ExperienceList />
          </div>
          <div className="space-y-8">
            <EducationList />
            <CertificationList />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;