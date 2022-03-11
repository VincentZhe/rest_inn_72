import React, { useState, useEffect } from "react";

import Header from "../components/Header";
import PropertyListing from "../components/PropertyListing";
import Footer from "../components/Footer";

const PropertyListingPage = () => {
  const [propertyItems, setPropertyItems] = useState([
    {
      id: 0,
      title: "",
      type: "",
      address: "",
      bestSeller: false,
      price: 0,
    },
  ]);

  useEffect(() => {
    //Get the data from API; automatically set to POST

    fetch("https://rest-inn-fake-server-app.herokuapp.com/listingData")
      .then((response) => response.json())
      .then((json) => {
        setPropertyItems(json);
      })
      .catch((err) => {
        console.log(`err ${err}`);
      });
  }, []);

  return (
    <div className="propertyListing-container">
      <Header />
      <h2 className="propertyListing-title"> Property Listing</h2>
      <div className="propertyListing-filterContainer">
        <div className="propertyListing-filter">
          <span className="propertyListing-filterText">Type:</span>
          <select>
            <option>Houses</option>
            <option>Hotels</option>
            <option>Motels</option>
            <option>Apartments</option>
            <option>Condos</option>
            <option>Resorts</option>
          </select>
        </div>
        <div className="propertyListing-filter">
          <span className="propertyListing-filterText">Location:</span>
          <select>
            <option>Toronto</option>
            <option>Montreal</option>
            <option>Vancouver</option>
            <option>Calgary</option>
            <option>Ottawa</option>
            <option>Quebec City</option>
          </select>
        </div>
        <div className="propertyListing-filter">
          <span className="propertyListing-filterText">Price:$</span>
          <select>
            <option>0-99</option>
            <option>99-199</option>
            <option>200-299</option>
            <option>300-399</option>
            <option>400-499</option>
          </select>
        </div>
        <div className="propertyListing-filter">
          <span className="propertyListing-filterText">Star Ratings:</span>
          <select>
            <option>3 Stars</option>
            <option>4 Stars</option>
            <option>5 Stars</option>
            <option>Unrated</option>
          </select>
        </div>
        <div className="propertyListing-filter">
          <span className="propertyListing-filterText">Sort:</span>
          <select>
            <option>Price Low to High</option>
            <option>Price High to Low</option>
            <option>Distance Close to Far</option>
            <option>Distance Far to Close</option>
            <option>Best Seller</option>
          </select>
        </div>
      </div>
      <hr />
      {propertyItems.map((propertyItem) => (
        <PropertyListing
          id={propertyItem.id}
          image={propertyItem.image}
          title={propertyItem.title}
          type={propertyItem.type}
          address={propertyItem.address}
          bestSeller={propertyItem.bestSeller}
          price={propertyItem.price}
        />
      ))}

      <Footer />
    </div>
  );
};

export default PropertyListingPage;
