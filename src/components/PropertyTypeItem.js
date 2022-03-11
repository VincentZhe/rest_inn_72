import React from "react";

import { Link } from "react-router-dom";

const PropertyTypeItem = (props) => {
  return (
    <div className="propertyTypeItem-container">
      <a href="propertyDescription.html">
        <img className="propertyTypeItem-image" src={props.image} />
        <div className="propertyTypeItem-info">
          <div className="propertyItem-type">
            <Link to={`/propertytype/${props.type}`}>{props.type}</Link>
          </div>
        </div>
      </a>
    </div>
  );
};

export default PropertyTypeItem;
