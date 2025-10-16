import React, { useState } from 'react';
import ProjectCard from '../ui/ProjectCard';
const Portfolio = ({
  setSelectedProject
}) => {
  const [activeFilter, setActiveFilter] = useState('all');
  const projects = [{
    id: 1,
    title: 'School Presidential Campaign',
    category: 'Campaign',
    thumbnail: '/public/images/4.jpg',
    description: 'Complete campaign designs for school',
    tools: ['Adobe Illustrator', 'Photoshop'],
    role: 'Official Designer',
    images: ['/public/images/4.jpg', '/public/images/7.jpg', '/public/images/8.jpg']
  }, {
    id: 2,
    title: 'School Chapel',
    category: 'Church',
    thumbnail: '/public/images/6.jpg',
    description: 'Detailed designs for church or chapel programs',
    tools: ['Photoshop'],
    role: 'Lead Designer',
    images: ['/public/images/6.jpg', '/public/images/10.jpg', '/public/images/11.jpg', '/public/images/13.jpg']
  }, {
    id: 3,
    title: 'Poster Series',
    category: 'posters',
    thumbnail: '/public/images/3.jpg',
    description: 'A series of posters designed featuring vibrant colors and typography.',
    tools: ['Adobe Photoshop', 'Adobe InDesign'],
    role: 'Graphic Designer',
    images: ['/public/images/2.jpg', '/public/images/3.jpg', '/public/images/5.jpg', '/public/images/9.jpg', '/public/images/12.jpg', '/public/images/16.jpg', '/public/images/17.jpg', '/public/images/18.jpg', '/public/images/19.jpg', '/public/images/20.png', '/public/images/21.png']
  }, {
    id: 4,
    title: 'Logo Collection',
    category: 'logo',
    thumbnail: '/public/images/1.jpg',
    description: "Professional logo Collection",
    tools: [ 'Adobe Photoshop'],
    role: 'Designer',
    images: ['/public/images/1.jpg']
  }, 
  // {
  //   id: 5,
  //   title: 'E-commerce Website Redesign',
  //   category: 'ui/ux',
  //   thumbnail: 'https://images.unsplash.com/photo-1531403009284-440f080d1e12?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80',
  //   description: 'Complete redesign of an e-commerce platform focusing on improved user experience and conversion optimization.',
  //   tools: ['Figma', 'Adobe XD'],
  //   role: 'UX Designer',
  //   images: ['https://images.unsplash.com/photo-1531403009284-440f080d1e12?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80', 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80']
  // }, {
  //   id: 6,
  //   title: 'Corporate Brochure Design',
  //   category: 'branding',
  //   thumbnail: 'https://images.unsplash.com/photo-1586281380349-632531db7ed4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80',
  //   description: 'Elegant brochure design for a corporate client with clean layout and professional typography.',
  //   tools: ['Adobe InDesign', 'Adobe Illustrator'],
  //   role: 'Graphic Designer',
  //   images: ['https://images.unsplash.com/photo-1586281380349-632531db7ed4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80', 'https://images.unsplash.com/photo-1598618443855-232ee0f819f6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80']
  // }
  ];
  const filters = [{
    id: 'all',
    name: 'All Works'
  }, 
  {
    id: 'Campaign',
    name: 'Campaign'
  }, {
    id: 'Church',
    name: 'Church'
  }, {
    id: 'posters',
    name: 'Posters'
  }, {
    id: 'logo',
    name: 'Logo'
  }
];
  const filteredProjects = activeFilter === 'all' ? projects : projects.filter(project => project.category === activeFilter);
  return <section id="portfolio" className="py-20 bg-gray-50 w-full">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My Portfolio</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore my recent design projects and creative works
          </p>
          <div className="w-20 h-1 bg-indigo-600 mx-auto mt-4"></div>
        </div>
        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {filters.map(filter => <button key={filter.id} onClick={() => setActiveFilter(filter.id)} className={`px-4 py-2 rounded-md transition-colors ${activeFilter === filter.id ? 'bg-indigo-600 text-white' : 'bg-white text-gray-700 hover:bg-gray-100'}`}>
              {filter.name}
            </button>)}
        </div>
        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {filteredProjects.map(project => <ProjectCard key={project.id} project={project} onClick={() => setSelectedProject(project)} />)}
        </div>
      </div>
    </section>;
};
export default Portfolio;