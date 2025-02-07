import React from "react";
import { Link } from "react-router-dom";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="flex flex-col items-center text-center p-10  bg-gray-700">
      <h2 className="text-2xl text-green-500 font-semibold mb-4">
        🌍 World Atlas
      </h2>

      <div className="flex gap-4 text-gray-400 text-xl mb-4">
        <a
          href="https://www.facebook.com/sahzaadekutub.kutub/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaFacebook className="hover:text-green-500 transition" />
        </a>
        <a
          href="https://twitter.com/itxaibak"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaTwitter className="hover:text-green-400 transition" />
        </a>
        <a
          href="https://instagram.com/in/only.kutub"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram className="hover:text-green-500 transition" />
        </a>
        <a
          href="https://linkedin.com/in/kutubofficial"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin className="hover:text-green-700 transition" />
        </a>
      </div>

      <p className="text-gray-400 text-sm">
        &copy; {new Date().getFullYear()} World Atlas. All rights reserved.
      </p>
    </div>
  );
};

export default Footer;
