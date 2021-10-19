import React from "react";

// Components
import InfoSection from "../../components/InfoSection/InfoSection";
import Cryptocurrencies from "../../components/CryptoCurrencies/CryptoCurrencies";
import GlobalStats from "../../components/GlobalStats/GlobalStats";

import { homeObjOne } from "./Data";

const Home = () => {
  return (
    <>
      <InfoSection {...homeObjOne} />
      <Cryptocurrencies />
      <GlobalStats />
    </>
  );
};

export default Home;
