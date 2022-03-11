import "../assets/css/App.css";

import React, { useState, useEffect } from "react";

import BestSellerItem from "./BestSellerItem";

import Slider from "react-slick";

import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

const BestSellerSection = () => {
  const [bestsellerSections, setBestsellerSections] = useState([
    {
      id: 0,
      title: "",
      price: 0,
      bestSeller: false,
      image: null,
    },
  ]);

  // const filterBestSeller = () => {
  //   const filterBestSellers = bestsellerSections.filter((bestsellerSection) => {
  //     return bestsellerSection.bestSeller === true;
  //   });
  //   setBestsellerSections(filterBestSellers);
  // };

  const NextArrow = ({ onClick }) => {
    return (
      <div className="arrow next" onClick={onClick}>
        <FaArrowRight />
      </div>
    );
  };

  const PrevArrow = ({ onClick }) => {
    return (
      <div className="arrow prev" onClick={onClick}>
        <FaArrowLeft />
      </div>
    );
  };

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 5,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1100,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  useEffect(() => {
    fetch("https://rest-inn-fake-server-app.herokuapp.com/listingData")
      .then((response) => response.json())
      .then((json) => {
        setBestsellerSections(json);
      })
      .catch((err) => {
        console.log(`err ${err}`);
      });
  }, []);
  return (
    <>
      <div className="textCollection-bestseller">
        <h3>Best Seller</h3>
      </div>

      <div className="bestSellerSection-container">
        <Slider {...settings}>
          {bestsellerSections.map((bestsellerSection) => {
            if (bestsellerSection.bestSeller === true)
              return (
                <BestSellerItem
                  id={bestsellerSection.id}
                  title={bestsellerSection.title}
                  price={bestsellerSection.price}
                  image={bestsellerSection.image}
                  bestSeller={bestsellerSection.bestSeller}
                />
              );
          })}
        </Slider>
      </div>
    </>
  );
};

export default BestSellerSection;
