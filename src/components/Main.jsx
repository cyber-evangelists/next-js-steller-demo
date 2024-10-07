"use client";
import React, { useState } from "react";
import TopHeader from "./header/TopHeader";
import SubHeader from "./header/SubHeader";
import LandingPage from "./LandingPage";
import Marque from "./Marque";
import FeatureOne from "./features/FeatureOne";
import SmaterFeature from "./features/SmaterFeature";
import LoginBox from "./LoginBox";
import CarousalComponent from "./CarousalComponent";
import TrustUs from "./features/TrustUs";

const Main = () => {
  const [headerVisible, setHeaderVisible] = useState(true);
  return (
    <>
      {headerVisible ? <TopHeader setHeaderVisible={setHeaderVisible} /> : null}
      <LandingPage />
      <Marque />
      <FeatureOne />
      <SmaterFeature />
      <LoginBox />
      <CarousalComponent />
      <TrustUs />
    </>
  );
};

export default Main;
