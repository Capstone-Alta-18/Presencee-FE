// eslint-disable-next-line no-unused-vars
import React from "react";
import Home from "./home/Home";
import AboutUs from "./aboutUs/AboutUs";
import Features from "./features/Features";
import Navbar from "./header/Navbar";
import ContactUs from "./contactUs/ContactUs";
import Footer from "./footer/Footer";

const LandingMain = () => {
  return (
    <div>
      <Navbar />
      <Home />
      <AboutUs />
      <Features />
      <ContactUs />
      <Footer />
    </div>
  );
};

export default LandingMain;
