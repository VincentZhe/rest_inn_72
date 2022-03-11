import React, { useState } from "react";

import { SliderData } from "../SliderData";

import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

import styled from "styled-components";

import { Link } from "react-router-dom";

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  transition: all 1.5s ease;
  transform: translateX(${(props) => 200 - props.current * 100}vw);
`;

const Hero = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  const nextSlide = () => {
    console.log(current);
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    console.log(current);
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  return (
    <div className="slider-container">
      <IoIosArrowBack
        direction="left"
        className="left-arrow"
        onClick={prevSlide}
      />
      <Wrapper current={current}>
        {SliderData.map((slide) => (
          <div className="slider-slide">
            <div className="slider-imgContainer">
              <img src={slide.image} alt="Resort Image" className="image" />
            </div>

            <div className="slider-infoContainer">
              <div className="slider-infoContainer-description">
                {slide.description}
              </div>

              <button className="slider-information-button">
                <Link to="/propertylisting">Explore More</Link>
              </button>
            </div>
          </div>
        ))}
      </Wrapper>
      <IoIosArrowForward
        direction="right"
        className="right-arrow"
        onClick={nextSlide}
      />
    </div>
  );
};

export default Hero;
