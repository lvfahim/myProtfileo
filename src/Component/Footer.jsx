import React from 'react';
import { FaFacebookF, FaLinkedinIn, FaGithub } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-indigo-900 via-purple-900 to-pink-900 text-white py-12 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        
        {/* Logo / About */}
        <div>
          <h1 className="text-2xl font-bold mb-4">MD FAHIM</h1>
          <p className="text-gray-300">
            Building modern web experiences with creativity and passion.
          </p>
          <div className="flex mt-4 space-x-4">
            <a href="https://www.facebook.com/lv.fahim.78750" target="_blank" rel="noopener noreferrer">
              <FaFacebookF className="hover:text-blue-500 transition-colors duration-300"/>
            </a>
            <a href="https://www.linkedin.com/in/md-fahim-numan/" target="_blank" rel="noopener noreferrer">
              <FaLinkedinIn className="hover:text-blue-400 transition-colors duration-300"/>
            </a>
            <a href="https://github.com/lvfahim" target="_blank" rel="noopener noreferrer">
              <FaGithub className="hover:text-gray-400 transition-colors duration-300"/>
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Quick Links</h2>
          <ul className="space-y-2 text-gray-300">
            <li><a href="/" className="hover:text-white transition">Home</a></li>
            <li><a href="/about" className="hover:text-white transition">About</a></li>
            <li><a href="/" className="hover:text-white transition">Services</a></li>
            <li><a href="/contact" className="hover:text-white transition">Contact</a></li>
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Resources</h2>
          <ul className="space-y-2 text-gray-300">
            <li><a href="/" className="hover:text-white transition">Blog</a></li>
            <li><a href="/" className="hover:text-white transition">FAQ</a></li>
            <li><a href="/" className="hover:text-white transition">Support</a></li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Subscribe</h2>
          <p className="text-gray-300 mb-4">Get the latest updates and offers.</p>
          <div className="flex">
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="p-2 rounded-l-md text-black w-full bg-sky-300 focus:outline-none"
            />
            <button className="bg-pink-500 px-4 rounded-r-md hover:bg-pink-600 transition">
              Send
            </button>
          </div>
        </div>
      </div>

      <div className="mt-12 border-t border-gray-700 pt-6 text-center text-gray-400">
        &copy; {new Date().getFullYear()} YourBrand. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
