import React from 'react';
import { X, ExternalLink, Github } from 'lucide-react';
import { Project } from './types';
import TechnologyTag from './TechnologyTag';

interface ProjectModalProps {
  project: Project;
  isOpen: boolean;
  onClose: () => void;
}

const ProjectModal = ({ project, isOpen, onClose }: ProjectModalProps) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto" aria-labelledby="modal-title" role="dialog" aria-modal="true">
      <div className="flex items-center justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:p-0">
        <div className="fixed inset-0 transition-opacity bg-gray-500 bg-opacity-75" aria-hidden="true" onClick={onClose}></div>

        <div className="relative inline-block w-full max-w-2xl p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 hover:bg-gray-100 rounded-full transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="mt-2">
            <div className="aspect-video overflow-hidden rounded-lg mb-6">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-contain"
              />
            </div>

            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              {project.title}
            </h3>

            <div className="space-y-4">
              <p className="text-gray-700">
                {project.longDescription || project.description}
              </p>

              <div className="flex flex-wrap gap-2 my-4">
                {project.technologies.map((tech) => (
                  <TechnologyTag key={tech} technology={tech} />
                ))}
              </div>

              <div className="flex flex-wrap gap-4 mt-6">
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-[#DFF5E1] text-gray-900 rounded-lg hover:bg-opacity-80 transition-colors"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Link
                  </a>
                )}
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 border-2 border-[#DFF5E1] text-gray-900 rounded-lg hover:bg-[#DFF5E1] transition-colors"
                  >
                    <Github className="w-4 h-4" />
                    View Code
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;