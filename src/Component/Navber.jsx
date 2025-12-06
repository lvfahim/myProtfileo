import React from "react";
import { NavLink } from "react-router";

const Navbar = () => {
  const linkItems = (
    <>
      <NavLink to="/" className="nav-link">HOME</NavLink>
      <NavLink to="/about" className="nav-link">ABOUT ME</NavLink>
      <NavLink to="/projects" className="nav-link">PROJECTS</NavLink>
      <NavLink to="/resume" className="nav-link">RESUME</NavLink>
      <NavLink to="/contact" className="nav-link">CONTACT</NavLink>
    </>
  );

  return (
    <div className="navbar pt-5 px-5">
      <div className="navbar-start">
        <div className="dropdown">
          <button tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h10M4 18h16" />
            </svg>
          </button>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-4 shadow bg-[#1B1F27] rounded-box w-52">
            {linkItems}
          </ul>
        </div>

        {/* <h2 className="text-2xl font-bold bg-gradient-to-r from-[#9C27B0] to-[#03A9F4] text-transparent bg-clip-text">
          Fahim.Dev
        </h2> */}
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal gap-3 px-1">
          {linkItems}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
