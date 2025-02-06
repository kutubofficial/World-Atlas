import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";

const HomeSection = () => {
  return (
    <main className="flex items-center justify-center">
      <div className=" py-12  w-250 ">
        <div className="grid md:grid-cols-2 gap-12 items-center p-8">
          <div className="space-y-4">
            <h1 className="text-2xl font-medium text-green-500 leading-tight">
              Welcome to World Atlas! <br />
              <span className="text-white">Discover the world with us.</span>
            </h1>
            <p className=" text-gray-400 ">
              Explore facts, figures, and statistics about countries around the
              globe, from the smallest continent to the largest. Find out more
              about each country's history, geography, climate, and more.
            </p>
            <button className="px-7 p-1 flex items-center gap-2 text-white rounded-lg border">
              Start Exploring <FaArrowRightLong className="text-lg" />
            </button>
          </div>
          <div className="flex justify-center  ">
            <img
              src="./image/world.png"
              className="w-full max-w-lg h-auto object-contain "
              alt="World map illustration"
            />
          </div>
        </div>
      </div>
    </main>
  );
};

export default HomeSection;

//max-w-screen-xl w-full--green
