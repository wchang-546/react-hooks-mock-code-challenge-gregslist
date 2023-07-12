import React, { useState } from "react";
import Search from "./Search";

function Header({ searchValue, handleSubmit, handleSearchValue}) {


  return (
    <header>
      <h1>
        <span className="logo" role="img">
          ☮
        </span>
        gregslist
      </h1>
      <Search handleSearchValue={handleSearchValue} handleSubmit={handleSubmit} searchValue={searchValue}/>
    </header>
  );
}

export default Header;
