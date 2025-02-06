import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-gray-700 text-green-400 h-17 shadow shadow-black-700">
      <div className="flex m-auto text-center w-250  ">
        <div className="m-auto ">
          <Link to="/">
            <h2 className=" mr-90 font-bold" title="World-Atlas">
              WorldAtlas
            </h2>
          </Link>
        </div>
        <ul className="flex gap-6 justify-self-end ml-auto list-none  ">
          <div className="m-5 font-bold">
            <li>
              <Link to="/">Home</Link>
            </li>
          </div>
          <div className="m-5 font-bold">
            <li>
              <Link to="/about">About</Link>
            </li>
          </div>
          <div className="m-5 font-bold">
            <li>
              <Link to="/contacts">Contacts</Link>
            </li>
          </div>
          <div className="m-5 font-bold">
            <li>
              <Link to="/country">Country</Link>
            </li>
          </div>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
