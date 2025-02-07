import React from "react";

const SearchData = ({ search, setSearch }) => {
  const handleChange = (e) => {
    e.preventDefault();
    setSearch(e.target.value);
  };
  // console.log(search);
  
  return (
    <div className="m-10">
      <input
        type="text"
        value={search}
        onChange={handleChange}
        placeholder="Search..."
        className="p-1.5 rounded-4xl border"
      />
    </div>
  );
};

export default SearchData;
