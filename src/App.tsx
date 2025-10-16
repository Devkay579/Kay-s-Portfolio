import React, { useState } from 'react';
import Navbar from './components/layout/Navbar';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Portfolio from './components/sections/Portfolio';
import Contact from './components/sections/Contact';
import Footer from './components/layout/Footer';
import ProjectModal from './components/ui/ProjectModal';
export function App() {
  const [selectedProject, setSelectedProject] = useState(null);
  return <div className="bg-white text-gray-800 min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Portfolio setSelectedProject={setSelectedProject} />
        <Contact />
      </main>
      <Footer />
      {selectedProject && <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />}
    </div>;
}