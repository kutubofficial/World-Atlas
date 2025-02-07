import axios from "axios";
import React, { useEffect, useState, useTransition } from "react";
import SearchData from "../components/UI/SearchData";

const Country = () => {
  // Fetch country data using an API call
  const [countries, setCountries] = useState([]);
  const [isLoading, startTransition] = useTransition(false);
  const [search, setSearch] = useState("");
  useEffect(() => {
    startTransition(async () => {
      const { data } = await axios.get(
        "https://restcountries.com/v3.1/all?fields=name,capital,region,flags,population"
      );
      // console.log(data); //data is coming successfully
      setCountries(data);
    });
  }, []);
  // let uniqID = new Date().getTime();
  if (isLoading)
    return (
      <h1 className="text-green-400 my-60 mx-96 font-bold text-5xl">
        Loading....
      </h1>
    );
  // console.log(search);

  const filteredCountries = countries.filter((country) => {
    if (search) {
      return country.name.common.toLowerCase().includes(search.toLowerCase());
    } else {
      return true;
    }
  });
  // console.log(filteredCountries); //here the filteredCountries

  return (
    <div className="max-w-5xl mx-auto">
      <h1 className="text-3xl text-green-600 font-bold text-center mt-5 ">
        Our Countries...
      </h1>
      <SearchData search={search} setSearch={setSearch} />
      <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 ">
        {filteredCountries.map((elementData, index) => {
          const { name, capital, region, population, flags } = elementData;
          return (
            <section
              key={index}
              className="border border-gray-600 rounded-4xl p-5 m-5 shadow-lg capitalize bg-gray-800 text-white"
            >
              <img
                src={flags.svg}
                alt={flags.alt}
                className="w-full max-w-lg h-auto object-contain"
              />
              <h2>
                name:{" "}
                {name.common.length > 10
                  ? `${name.common.slice(0, 10)}...`
                  : name.common}
              </h2>
              <p>Capital: {capital[0]}</p>
              <p>Region: {region}</p>
              <p>Population: {population.toLocaleString()}</p>
            </section>
          );
        })}
      </div>
    </div>
  );
};

export default Country;
