import React, { useEffect, useState } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
const ProjectModal = ({
  project,
  onClose
}) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  useEffect(() => {
    // Disable body scroll when modal is open
    document.body.style.overflow = 'hidden';
    // Handle escape key press
    const handleEscape = e => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleEscape);
    return () => {
      // Re-enable scroll when modal is closed
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleEscape);
    };
  }, [onClose]);
  const handleBackdropClick = e => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };
  const nextImage = () => {
    setCurrentImageIndex(prev => prev === project.images.length - 1 ? 0 : prev + 1);
  };
  const prevImage = () => {
    setCurrentImageIndex(prev => prev === 0 ? project.images.length - 1 : prev - 1);
  };
  return <div className="fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center p-4 md:p-8" onClick={handleBackdropClick}>
      <div className="bg-white rounded-lg max-w-5xl w-full max-h-[90vh] overflow-y-auto">
        <div className="flex justify-between items-center p-4 md:p-6 border-b">
          <h2 className="text-2xl font-semibold">{project.title}</h2>
          <button onClick={onClose} className="p-2 rounded-full hover:bg-gray-100 transition-colors">
            <X size={24} />
          </button>
        </div>
        <div className="p-4 md:p-6">
          {/* Image Gallery */}
          <div className="relative bg-gray-100 rounded-lg mb-6 overflow-hidden">
            <div className="aspect-w-16 aspect-h-9 relative">
              <img src={project.images[currentImageIndex]} alt={`${project.title} - Image ${currentImageIndex + 1}`} className="w-full h-full object-contain" />
            </div>
            {project.images.length > 1 && <>
                <button onClick={prevImage} className="absolute left-4 top-1/2 -translate-y-1/2 bg-white bg-opacity-70 rounded-full p-2 hover:bg-opacity-100 transition-all">
                  <ChevronLeft size={24} />
                </button>
                <button onClick={nextImage} className="absolute right-4 top-1/2 -translate-y-1/2 bg-white bg-opacity-70 rounded-full p-2 hover:bg-opacity-100 transition-all">
                  <ChevronRight size={24} />
                </button>
                <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
                  {project.images.map((_, idx) => <button key={idx} onClick={() => setCurrentImageIndex(idx)} className={`w-3 h-3 rounded-full ${idx === currentImageIndex ? 'bg-indigo-600' : 'bg-white bg-opacity-60'}`} />)}
                </div>
              </>}
          </div>
          {/* Project Details */}
          <div className="grid md:grid-cols-3 gap-8">
            <div className="md:col-span-2">
              <h3 className="text-xl font-semibold mb-4">
                Project Description
              </h3>
              <p className="text-gray-700 mb-6">{project.description}</p>
              <h3 className="text-xl font-semibold mb-4">Process & Approach</h3>
              <p className="text-gray-700">
                For this project, I focused on creating a design that would
                effectively communicate the brand's values while ensuring a
                seamless user experience. The process involved extensive
                research, conceptualization, and multiple iterations to achieve
                the final result.
              </p>
            </div>
            <div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">Project Details</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium text-gray-900">Category</h4>
                    <p className="text-gray-600">
                      {project.category.charAt(0).toUpperCase() + project.category.slice(1)}
                    </p>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900">Tools Used</h4>
                    <p className="text-gray-600">{project.tools.join(', ')}</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900">My Role</h4>
                    <p className="text-gray-600">{project.role}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>;
};
export default ProjectModal;