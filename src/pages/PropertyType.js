import React, { useState, useEffect } from "react";

import Header from "../components/Header";
import PropertyListing from "../components/PropertyListing";
import Footer from "../components/Footer";

import { useParams } from "react-router-dom";

const PropertyType = () => {
  const [selectedPropertyTypes, setSelectedPropertyTypes] = useState([
    {
      id: 0,
      title: "",
      type: "",
      price: 0,
      address: "",
      image: null,
      bestSeller: false,
    },
  ]);

  const { type } = useParams();

  useEffect(() => {
    //Get the data from API; automatically set to POST

    fetch("https://rest-inn-fake-server-app.herokuapp.com/listingData/")
      .then((response) => response.json())
      .then((json) => {
        setSelectedPropertyTypes(json);
      })
      .catch((err) => {
        console.log(`err ${err}`);
      });
  }, []);
  return (
    <div className="propertyListing-container">
      <Header />
      <h2 className="propertyListing-title"> Property Type</h2>
      <div className="propertyListing-filterContainer">
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

      {selectedPropertyTypes.map((selectedPropertyType) => {
        if (selectedPropertyType.type === type)
          return (
            <PropertyListing
              id={selectedPropertyType.id}
              image={selectedPropertyType.image}
              title={selectedPropertyType.title}
              type={selectedPropertyType.type}
              address={selectedPropertyType.address}
              bestSeller={selectedPropertyType.bestSeller}
              price={selectedPropertyType.price}
            />
          );
      })}

      <Footer />
    </div>
  );
};

export default PropertyType;
