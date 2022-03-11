import React from "react";

import Header from "../components/Header";
import Hero from "../components/Hero";
import PropertyTypes from "../components/PropertyTypes";
import BestSellerSection from "../components/BestSellerSection";
import Footer from "../components/Footer";

import { SliderData } from "../SliderData";

const Home = () => {
  return (
    <div>
      <Header />
      <Hero slides={SliderData} />
      <PropertyTypes />
      <BestSellerSection />
      <Footer />
    </div>
  );
};

export default Home;
