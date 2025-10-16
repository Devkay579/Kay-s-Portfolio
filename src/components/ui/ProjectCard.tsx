import React from 'react';
import { ExternalLink } from 'lucide-react';
const ProjectCard = ({
  project,
  onClick
}) => {
  return <div className="group bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 cursor-pointer" onClick={onClick}>
      <div className="relative h-56 overflow-hidden">
        <img src={project.thumbnail} alt={project.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
        <div className="absolute inset-0 bg-black bg-opacity-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <div className="bg-white bg-opacity-90 rounded-full p-3">
            <ExternalLink size={24} className="text-indigo-600" />
          </div>
        </div>
      </div>
      <div className="p-6">
        <span className="text-xs font-medium text-indigo-600 uppercase tracking-wider">
          {project.category.charAt(0).toUpperCase() + project.category.slice(1)}
        </span>
        <h3 className="text-xl font-semibold mt-2 group-hover:text-indigo-600 transition-colors">
          {project.title}
        </h3>
        <p className="text-gray-600 mt-2 line-clamp-2">{project.description}</p>
      </div>
    </div>;
};
export default ProjectCard;