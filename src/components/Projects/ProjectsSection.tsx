import React from 'react';
import SectionTitle from '../common/SectionTitle';
import ProjectCard from './ProjectCard';
import { projects } from './projectsData';
import WaveBackground1 from './WaveBackground1';

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-20 bg-[#DFF5E1]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle>Meine Projekte</SectionTitle>
        <div className="grid sm:grid-cols-2 gap-8 mt-12">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;