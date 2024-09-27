import React from "react";
import Banner from "./Landing/Banner";
import RegisterOpen from "./Landing/RegisterOpen";
import Meet from "./Landing/Meet";
import WhoeWeHelp from "./Landing/WhoeWeHelp";
import JoinCommunity from "./Landing/JoinCommunity";
import OurAward from "./Landing/OurAward";
import Crafting from "./Landing/Crafting";
import Ready from "./Landing/Ready";
import Footer from "./Landing/Footer";
import Header from "./Landing/Header";

const HomePage = () => {
  return (
    <div>
      <Header className="lg:block hidden" />
      <Banner />
      <RegisterOpen />
      <Meet />
      <WhoeWeHelp />
      <JoinCommunity />
      <OurAward />
      <Crafting />
      <Ready />
      <Footer />
    </div>
  );
};

export default HomePage;
