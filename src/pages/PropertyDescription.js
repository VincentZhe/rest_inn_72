import React, { useState, useEffect } from "react";

import Header from "../components/Header";
import Footer from "../components/Footer";

import { useParams } from "react-router-dom";

const PropertyDescription = () => {
  const [propertyDesc, setPropertyDesc] = useState([
    {
      id: 0,
      title: "",
      type: "",
      description: "",
      houseRules: "",
      amenities: "",
      price: 0,
      address: "",
      mapAddress: null,
      image: null,
      bestSeller: false,
    },
  ]);

  const { id } = useParams();

  useEffect(() => {
    //Get the data from API; automatically set to POST

    fetch(`https://rest-inn-fake-server-app.herokuapp.com/listingData/${id}`)
      .then((response) => response.json())
      .then((json) => {
        setPropertyDesc(json);
      })
      .catch((err) => {
        console.log(`err ${err}`);
      });
  }, []);

  return (
    <div className="propertyDesc-container">
      <Header />
      <h2 className="propertyDesc-Page"> Property Description</h2>
      <div className="propertyDesc-Info">
        <div className="propertyDesc-desc">
          <h4>{propertyDesc.title}</h4>
          <p>Description: {propertyDesc.description}</p>
          <p>Property Type: {propertyDesc.type}</p>
          <p
            className={
              propertyDesc.bestSeller === true
                ? "propertyDesc-bestSeller"
                : "propertyDesc-bestSeller-hide"
            }
          >
            Best Seller !
          </p>
        </div>
        <div className="propertyDesc-price">
          <p>${propertyDesc.price} CAD / night</p>
          <button className="propertyDesc-btn">Book Now</button>
        </div>
      </div>
      <div className="propertyDesc-wrapper">
        <div className="propertyDesc-ImgContainer">
          <img
            className="propertyDesc-Image"
            src={propertyDesc.image}
            alt="image"
          />
        </div>
        <div className="propertyDesc-AdditionalInfo">
          <iframe
            src={propertyDesc.mapAddress}
            width="400"
            height="100"
            style={{ border: 0 }}
            allowfullscreen=""
            loading="lazy"
          ></iframe>
          <p>Adress: {propertyDesc.address}</p>
          <p>Amenities: {propertyDesc.amenities}</p>
          <p>House Rules: {propertyDesc.houseRules}</p>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default PropertyDescription;
