import React from 'react';
const Footer = () => {
  const currentYear = new Date().getFullYear();
  return <footer className="bg-gray-900 text-white py-12 w-full">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h3 className="text-xl font-bold mb-2">
              <span className="text-indigo-400">Kay's</span><span className='pl-2'>Portfolio</span>
            </h3>
            <p className="text-gray-400">
              Creating meaningful visual experiences
            </p>
          </div>
          <div className="text-center md:text-right">
            <p className="text-gray-400">
              &copy; {currentYear} Kay Ogbetah. All rights reserved.
            </p>
            <p className="text-gray-500 text-sm mt-1">
              Made with passion
            </p>
          </div>
        </div>
      </div>
    </footer>;
};
export default Footer;