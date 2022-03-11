import React from "react";

import { Link } from "react-router-dom";

const BestSellerItem = (props) => {
  // props.onFilter();
  return (
    <div
      className={
        props.bestSeller === true
          ? "bestSellerItem-container"
          : "bestSellerItem-display"
      }
    >
      <Link to={`/propertylisting/${props.id}`}>
        <img className="bestSellerItem-image" src={props.image} />
      </Link>

      <div className="bestSellerItem-info">
        <div className="bestSellerItem-title">
          <p>{props.title}</p>
        </div>
        <div className="bestSellerItem-price">${props.price}/night</div>
      </div>
    </div>
  );
};

export default BestSellerItem;
