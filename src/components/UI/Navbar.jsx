import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaAtlassian } from "react-icons/fa6";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-gray-700 text-green-400 h-16 shadow shadow-black-700 fixed w-full z-50">
      <div className="container mx-auto px-4 h-full">
        <div className="flex justify-between items-center h-full">
          <Link to="/" className="flex items-center gap-2">
            <FaAtlassian className="text-lg" />
            <span className="font-bold text-xl">WorldAtlas</span>
          </Link>

          <ul className="hidden md:flex gap-6">
            <li className="hover:text-green-300 transition-colors">
              <Link to="/">Home</Link>
            </li>
            <li className="hover:text-green-300 transition-colors">
              <Link to="/about">About</Link>
            </li>
            <li className="hover:text-green-300 transition-colors">
              <Link to="/country">Country</Link>
            </li>
            <li className="hover:text-green-300 transition-colors">
              <Link to="/contacts">Contacts</Link>
            </li>
          </ul>
          <button
            onClick={toggleMenu}
            className="md:hidden text-green-400 focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={
                  isMenuOpen
                    ? "M6 18L18 6M6 6l12 12"
                    : "M4 6h16M4 12h16M4 18h16"
                }
              />
            </svg>
          </button>
        </div>
        {isMenuOpen && (
          <div className="md:hidden absolute top-16 left-0 right-0 bg-gray-700">
            <ul className="flex flex-col items-center py-4">
              <li className="my-2">
                <Link
                  to="/"
                  onClick={toggleMenu}
                  className="text-green-400 hover:text-green-300 text-lg"
                >
                  Home
                </Link>
              </li>
              <li className="my-2">
                <Link
                  to="/about"
                  onClick={toggleMenu}
                  className="text-green-400 hover:text-green-300 text-lg"
                >
                  About
                </Link>
              </li>
              <li className="my-2">
                <Link
                  to="/country"
                  onClick={toggleMenu}
                  className="text-green-400 hover:text-green-300 text-lg"
                >
                  Country
                </Link>
              </li>
              <li className="my-2">
                <Link
                  to="/contacts"
                  onClick={toggleMenu}
                  className="text-green-400 hover:text-green-300 text-lg"
                >
                  Contacts
                </Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
