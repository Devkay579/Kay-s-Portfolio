import React from 'react';
import { Download, CheckCircle } from 'lucide-react';
const About = () => {
  const skills = ['Adobe Photoshop', 'Adobe Illustrator', 'Adobe InDesign', 'Figma', 'Sketch', 'Typography', 'Brand Identity', 'UI/UX Design'];
  return <section id="about" className="py-20 bg-white w-full">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <div className="w-20 h-1 bg-indigo-600 mx-auto"></div>
        </div>
        <div className="flex flex-col md:flex-row items-center md:items-start gap-12">
          {/* Bio Section */}
          <div className="md:w-1/2">
            <h3 className="text-2xl font-semibold mb-4">My Story</h3>
            <p className="text-gray-700 mb-6">
              Hello! I’m Kayode Ogbetah, a passionate graphic designer 
              and creative storyteller who has always believed that design 
              is more than visuals, it’s a way of creating experiences that 
              connect with people. My journey started with a simple curiosity 
              for art and digital tools, and over the years, it grew into a 
              deep passion for building designs that inspire and communicate.
            </p>
            <p className="text-gray-700 mb-6">
              I’ve worked on projects ranging from brand identity design, 
              posters, digital illustrations, and UI concepts, each one 
              challenging me to adapt my creativity to different audiences 
              and industries. Along the way, I’ve sharpened my skills with 
              tools like Adobe Photoshop, Illustrator, and Figma, but more 
              importantly, I’ve learned how to listen, collaborate, and 
              transform ideas into visuals that truly make an impact.
            </p>
            <h3 className="text-2xl font-semibold mb-4">Design Philosophy</h3>
            <p className="text-gray-700 mb-8">
              For me, design is storytelling with purpose. 
              I believe that every visual should not only 
              look appealing but also communicate clearly, 
              spark emotion, and leave a lasting impression. 
              My style blends bold simplicity with detail-oriented 
              craftsmanship, creating designs that are both clean 
              and expressive.
            </p>
            <a href="#" className="inline-flex items-center bg-gray-100 hover:bg-gray-200 text-gray-800 py-2 px-4 rounded-md transition-colors duration-300">
              <Download size={18} className="mr-2" />
              Download CV
            </a>
          </div>
          {/* Skills Section */}
          <div className="md:w-1/2 bg-gray-50 p-8 rounded-lg">
            <h3 className="text-2xl font-semibold mb-6">Skills & Tools</h3>
            <div className="grid grid-cols-2 gap-4">
              {skills.map((skill, index) => <div key={index} className="flex items-center">
                  <CheckCircle size={18} className="text-indigo-600 mr-2" />
                  <span>{skill}</span>
                </div>)}
            </div>
            <div className="mt-10">
              <h4 className="text-xl font-medium mb-4">
                Professional Experience
              </h4>
              <div className="space-y-4">
                <div>
                  <h5 className="font-medium">Senior Graphic Designer</h5>
                  <p className="text-gray-600 text-sm">
                    Creative Agency • 2020 - Present
                  </p>
                </div>
                <div>
                  <h5 className="font-medium">Graphic Designer</h5>
                  <p className="text-gray-600 text-sm">
                    Design Studio • 2018 - 2020
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default About;