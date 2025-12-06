import React from "react";
import { NavLink } from "react-router";

const Navbar = () => {
  const linkItems = (
    <>
      <NavLink 
        to="/" 
        className="nav-link px-3 py-2 rounded-md hover:bg-[#7F00FF]/20 transition"
      >
        HOME
      </NavLink>
      <NavLink 
        to="/about" 
        className="nav-link px-3 py-2 rounded-md hover:bg-[#7F00FF]/20 transition"
      >
        ABOUT ME
      </NavLink>
      <NavLink 
        to="/projects" 
        className="nav-link px-3 py-2 rounded-md hover:bg-[#7F00FF]/20 transition"
      >
        PROJECTS
      </NavLink>
      <NavLink 
        to="/resume" 
        className="nav-link px-3 py-2 rounded-md hover:bg-[#7F00FF]/20 transition"
      >
        RESUME
      </NavLink>
      <NavLink 
        to="/contact" 
        className="nav-link px-3 py-2 rounded-md hover:bg-[#7F00FF]/20 transition"
      >
        CONTACT
      </NavLink>
    </>
  );

  return (
    <div className="sticky top-0 z-50 backdrop-blur-md  py-4 px-5">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        
        {/* Logo */}
        <div className="text-2xl font-bold bg-gradient-to-r from-[#9C27B0] to-[#03A9F4] text-transparent bg-clip-text">
          
        </div>

        {/* Mobile dropdown */}
        <div className="lg:hidden">
          <div className="dropdown">
            <button tabIndex={0} className="btn btn-ghost p-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h10M4 18h16" />
              </svg>
            </button>
            <ul 
              tabIndex={0} 
              className="menu menu-sm dropdown-content mt-3 z-[1] p-4 shadow bg-[#1B1F27]/90 rounded-box w-52"
            >
              {linkItems}
            </ul>
          </div>
        </div>

        {/* Desktop Links */}
        <div className="hidden lg:flex">
          <ul className="flex gap-4">
            {linkItems}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

