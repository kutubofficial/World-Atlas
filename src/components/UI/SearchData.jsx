import React from "react";

const SearchData = ({ search, setSearch }) => {
  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  return (
    <div>
      <input
        type="text"
        value={search}
        onChange={handleChange}
        placeholder="Search..."
      />
    </div>
  );
};

export default SearchData;
