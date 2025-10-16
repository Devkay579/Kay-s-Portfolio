import React, { useState } from 'react';
import { Send, Phone, Mail, Instagram, Linkedin, ExternalLink } from 'lucide-react';
import ContactForm from '../ui/ContactForm';
const Contact = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const handleFormSuccess = () => {
    setFormSubmitted(true);
  };
  return <section id="contact" className="py-20 bg-white w-full">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In Touch</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? I'd love to hear from
            you!
          </p>
          <div className="w-20 h-1 bg-indigo-600 mx-auto mt-4"></div>
        </div>
        <div className="flex flex-col md:flex-row gap-12">
          {/* Contact Info */}
          <div className="md:w-1/3">
            <div className="bg-gray-50 p-8 rounded-lg h-full">
              <h3 className="text-2xl font-semibold mb-6">
                Contact Information
              </h3>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-indigo-100 p-3 rounded-full mr-4">
                    <Phone size={20} className="text-indigo-600" />
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Phone</h4>
                    <a href="tel:+2341304600" className="text-gray-600 hover:text-indigo-600 transition-colors">
                      +234 814 130 4600
                    </a>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-indigo-100 p-3 rounded-full mr-4">
                    <Mail size={20} className="text-indigo-600" />
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Email</h4>
                    <a href="mailto:kayodeogbetah76@gmail.com" className="text-gray-600 hover:text-indigo-600 transition-colors">
                      kayodeogbetah76@gmail.com
                    </a>
                  </div>
                </div>
              </div>
              <h3 className="text-xl font-semibold mt-10 mb-4">Follow Me</h3>
              <div className="flex space-x-4">
                <a href="#" className="bg-gray-200 hover:bg-indigo-100 p-3 rounded-full transition-colors">
                  <Instagram size={20} className="text-gray-700" />
                </a>
                <a href="#" className="bg-gray-200 hover:bg-indigo-100 p-3 rounded-full transition-colors">
                  <Linkedin size={20} className="text-gray-700" />
                </a>
                <a href="#" className="bg-gray-200 hover:bg-indigo-100 p-3 rounded-full transition-colors">
                  <ExternalLink size={20} className="text-gray-700" />
                </a>
              </div>
            </div>
          </div>
          {/* Contact Form */}
          <div className="md:w-2/3">
            {formSubmitted ? <div className="bg-green-50 border border-green-200 rounded-lg p-8 text-center h-full flex flex-col items-center justify-center">
                <div className="bg-green-100 p-3 rounded-full mb-4">
                  <Send size={24} className="text-green-600" />
                </div>
                <h3 className="text-2xl font-semibold text-green-800 mb-2">
                  Message Sent!
                </h3>
                <p className="text-green-700 mb-6">
                  Thank you for reaching out. I'll get back to you as soon as
                  possible.
                </p>
                <button onClick={() => setFormSubmitted(false)} className="bg-green-600 hover:bg-green-700 text-white py-2 px-6 rounded-md transition-colors">
                  Send Another Message
                </button>
              </div> : <ContactForm onSuccess={handleFormSuccess} />}
          </div>
        </div>
      </div>
    </section>;
};
export default Contact;