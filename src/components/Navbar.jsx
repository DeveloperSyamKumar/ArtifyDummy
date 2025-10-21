
import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FaHome, FaImages, FaPaintBrush, FaBars, FaTimes } from "react-icons/fa";
import logo from "../assets/images/logo.png";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white/70 backdrop-blur border-b h-14 sm:h-16 md:h-20">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-3 h-full">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <img src={logo} alt="Artify Logo" className="h-8 sm:h-10 md:h-20 w-auto" />
          <span className="text-xl font-bold text-gray-800 hidden sm:inline">
            The Painted Dream
          </span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-4">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `flex items-center gap-1 ${isActive ? "text-indigo-600" : "text-gray-700"}`
            }
          >
            <FaHome /> Home
          </NavLink>

          <NavLink
            to="/customize"
            className={({ isActive }) =>
              `flex items-center gap-1 ${isActive ? "text-indigo-600" : "text-gray-700"}`
            }
          >
            <FaPaintBrush /> Customize
          </NavLink>

        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-2xl text-gray-700"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden flex flex-col items-start gap-3 px-4 pb-4 bg-white border-t">
          <NavLink
            to="/"
            onClick={() => setIsOpen(false)}
            className={({ isActive }) =>
              `flex items-center gap-2 ${isActive ? "text-indigo-600" : "text-gray-700"}`
            }
          >
            <FaHome /> Home
          </NavLink>

          <NavLink
            to="/customize"
            onClick={() => setIsOpen(false)}
            className={({ isActive }) =>
              `flex items-center gap-2 ${isActive ? "text-indigo-600" : "text-gray-700"}`
            }
          >
            <FaPaintBrush /> Customize
          </NavLink>

          <NavLink
            to="/gallery"
            onClick={() => setIsOpen(false)}
            className={({ isActive }) =>
              `flex items-center gap-2 ${isActive ? "text-indigo-600" : "text-gray-700"}`
            }
          >
          </NavLink>
        </div>
      )}
    </nav>
  );
}




