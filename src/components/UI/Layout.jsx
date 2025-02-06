import React from "react";
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import HomeSection from "../../pages/HomeSection";

const Layout = () => {
  return (
    <>
      <div className="bg-gray-800 text-white  ">
      <Navbar />
      <Outlet />
      {/* <HomeSection /> */}
      <Footer />
      </div>
    </>
  );
};

export default Layout;


// db.createCollection("students")