import React, { useState, useEffect } from "react";

import PropertyTypeItem from "./PropertyTypeItem";

import { Link } from "react-router-dom";

const PropertyTypes = () => {
  const [propertyTypes, setPropertyTypes] = useState([
    {
      id: 0,
      type: "",
      image: null,
    },
  ]);
  useEffect(() => {
    fetch("https://rest-inn-fake-server-app.herokuapp.com/propertyTypes")
      .then((response) => response.json())
      .then((json) => {
        setPropertyTypes(json);
      })
      .catch((err) => {
        console.log(`err ${err}`);
      });
  }, []);
  return (
    <>
      <div className="textCollection">
        <Link to="propertylisting">
          <h3>Property Type</h3>
        </Link>
      </div>
      <div className="propertyTypes-container">
        {propertyTypes.map((propertyType) => (
          <PropertyTypeItem
            type={propertyType.type}
            image={propertyType.image}
          />
        ))}
      </div>
    </>
  );
};

export default PropertyTypes;
