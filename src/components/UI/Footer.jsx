import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className=" flex mx-auto min-h-30  w-5xl text-center justify-center gap-4 p-10 bg-transparent">
      
      <p className="text-gray-300 text-lg mt-20 ">
        &copy; 2022 World Atlas. All rights reserved.
      </p>
      <ul className="flex gap-2 text-gray-400 mt-20 ">
        <li>
          <Link to="https://atlaspolicy.com/">Privacy Policy</Link>
        </li>
        <li>
          <Link to="https://www.atlashxm.com/terms-and-conditions">Terms & Condition</Link>
        </li>
        <li>
          <Link to="/contacts">Contact Us</Link>
        </li>
      </ul>
    </div>
  );
};

export default Footer;
