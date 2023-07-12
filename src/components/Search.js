import React, { useState } from "react";

function Search({ handleSubmit, handleSearchValue, searchValue}) {

  return (
    <form className="searchbar" onSubmit={handleSubmit}>
      <input
        type="text"
        id="search"
        placeholder="search free stuff"
        value={searchValue}
        onChange={handleSearchValue}
      />
      <button type="submit">🔍</button>
    </form>
  );
}

export default Search;
