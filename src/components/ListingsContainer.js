import React from "react";
import ListingCard from "./ListingCard";

function ListingsContainer({ listings, handleDelete }) {
  const listingComponent = listings.map((listing) => (
    <ListingCard key={listing.id} listing={listing} handleDelete={handleDelete}/> 
  ))


  return (
    <main>
      <ul className="cards">
        {listingComponent}
      </ul>
    </main>
  );
}

export default ListingsContainer;
