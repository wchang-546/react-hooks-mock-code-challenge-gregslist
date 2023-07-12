import React, { useEffect, useState } from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

const API = "http://localhost:6001/listings"

function App() {
  const [listings, setListings] = useState([])
  const [searchValue, setSearchValue] = useState("")

  useEffect(() => {
    fetch(API)
      .then((res) => res.json())
      .then((data) => {
        const allListings = data.map((listing) => (listing))
      setListings(allListings)
  })
}, []) 

  const handleDelete = (selectedListing) => {
    fetch(`http://localhost:6001/listings/${selectedListing.id}`, {
      method: "DELETE"
    })
    const listingAfterDelete = listings.filter((listing) => (listing.id != selectedListing.id))
    setListings(listingAfterDelete)
  }

//Search function can be improved to turn searchValue lowercase and to return all listings if search is ""
  function handleSubmit(e) {
    e.preventDefault();
    const searchedListings = listings.filter((listing) => (listing.description.includes(searchValue)))
    setListings(searchedListings)
  }

  const handleSearchValue = (e) => {
    setSearchValue(e.target.value)
  }

  return (
    <div className="app">
      <Header searchValue={searchValue} handleSubmit={handleSubmit} handleSearchValue={handleSearchValue}/>
      <ListingsContainer listings={listings} handleDelete={handleDelete}/>
    </div>
  );
}

export default App;
