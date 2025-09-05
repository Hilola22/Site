import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../../assets/logo.png";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const links = [
    { name: "Home", path: "/" },
    { name: "Users", path: "/users" },
    { name: "Posts", path: "/posts" },
    { name: "About", path: "/about" },
    { name: "Login", path: "/login" },
  ];

  return (
    <header className={`w-full bg-white shadow-md fixed top-0 left-0 z-50`}>
      <div className="container mx-auto px-4 flex justify-between items-center h-20">
        <div className="flex items-center gap-4">
          <img src={logo} alt="Logo" className="h-10 w-auto" />
        </div>

        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="focus:outline-none"
          >
            <span className="block w-6 h-0.5 bg-black mb-1"></span>
            <span className="block w-6 h-0.5 bg-black mb-1"></span>
            <span className="block w-6 h-0.5 bg-black"></span>
          </button>
        </div>

        <nav
          className={`flex-col md:flex-row md:flex gap-6 absolute md:static top-20 left-0 w-full md:w-auto bg-white md:bg-transparent p-6 md:p-0 ${
            isOpen ? "flex" : "hidden"
          }`}
        >
          {links.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                `uppercase font-medium ${
                  isActive ? "text-[#3f3fd6] underline" : "text-black"
                }`
              }
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;
