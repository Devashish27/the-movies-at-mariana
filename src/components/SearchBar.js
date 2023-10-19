import React from "react";

function SearchBar({ searchTerm, onSearchTermChange }) {
  return (
    <div className="search-bar">
      <label htmlFor="titleSearch">Search by Title:</label>
      <input
        type="text"
        id="titleSearch"
        placeholder="Search..."
        value={searchTerm}
        onChange={onSearchTermChange}
      />
    </div>
  );
}

export default SearchBar;
