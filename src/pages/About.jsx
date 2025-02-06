import React from "react";
import AboutData from "../components/data/aboutData.json";

const About = () => {
  return (
    <div className="max-w-5xl mx-auto p-8 ">
      <h1 className="text-3xl font-semibold text-center mb-8 col-span-full ">
        Here are the interesting facts
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ">
        {AboutData.map((item) => {
          const { id, countryName, capital, population, description } = item;
          return (
            <section
              key={id}
              className="border border-gray-600 rounded-lg p-6 shadow-lg bg-gray-800 text-white  "
            >
              <h2 className="text-xl font-bold text-green-400 ">
                {countryName}
              </h2>
              <p className="mt-2">
                <span className="text-gray-400 font-semibold">Capital: </span>
                {capital}
              </p>
              <p className="mt-1">
                <span className="text-gray-400 font-semibold">
                  Population:{" "}
                </span>
                {population.toLocaleString()}
              </p>
              <p className="mt-2 text-gray-300">
                <span className="text-gray-400 font-semibold">
                  Description:{" "}
                </span>
                {description}
              </p>
            </section>
          );
        })}
      </div>
    </div>
  );
};

export default About;

//hover:scale-105 transition-transform--- for cards transition in section tag.
