import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import TechnologyTag from './TechnologyTag';
import ProjectModal from './ProjectModal';
import { Project } from './types';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <>  
    <div className="bg-[#F9F9F3] rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow max-w-lg mx-auto">
      <img
        src={project.image}
        alt={project.title}
        className="w-full h-48  object-contain"
      />
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-2">
          {project.title}
        </h3>
        <p className="text-gray-700 mb-4">{project.description}</p>
        <div className="flex flex-wrap gap-2 mb-6">
          {project.technologies.map((tech) => (
            <TechnologyTag key={tech} technology={tech} />
          ))}
        </div>
        <button
            onClick={() => setIsModalOpen(true)}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 text-sm bg-[#F0F0F0] text-gray-900 rounded-lg hover:bg-[#DFF5E1] transition-colors"
          >
            Mehr
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
      </div>
    </div>
    <ProjectModal
        project={project}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
};

export default ProjectCard;