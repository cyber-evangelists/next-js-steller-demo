"use client";
import React, { useState } from "react";
import TopHeader from "./header/TopHeader";
import SubHeader from "./header/SubHeader";
import LandingPage from "./LandingPage";
import Marque from "./Marque";
import FeatureOne from "./features/FeatureOne";

const Main = () => {
  const [headerVisible, setHeaderVisible] = useState(true);
  return (
    <>
      {headerVisible ? <TopHeader setHeaderVisible={setHeaderVisible} /> : null}
      <LandingPage />
      <Marque />
      <FeatureOne />
    </>
  );
};

export default Main;
