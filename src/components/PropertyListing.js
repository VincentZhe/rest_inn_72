import React from "react";

import { Link } from "react-router-dom";

const PropertyListing = (props) => {
  return (
    <div className="propertyListing-listContainer">
      <div className="propertyListing-listImage">
        <Link to={`/propertylisting/${props.id}`}>
          <img src={props.image} alt="propertyListing image" />
        </Link>
      </div>
      <div className="propertyListing-listInfo">
        <div className="propertyListing-listTitle">
          <Link to={`/propertylisting/${props.id}`}>
            <h4>{props.title}</h4>
          </Link>
        </div>
        <div className="propertyListing-listDesc">
          <p>Type: {props.type}</p>
          <p>Location: {props.address}</p>
          <p
            className={
              props.bestSeller === true
                ? "propertyListing-bestseller"
                : "propertyListing-bestseller-hide"
            }
          >
            Best Seller !
          </p>
        </div>
      </div>
      <div className="propertyListing-price">
        <p>${props.price} CAD</p>
        <button className="propertyListing-btn">Book Now</button>
      </div>
    </div>
  );
};

export default PropertyListing;
