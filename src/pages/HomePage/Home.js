import React from "react";

// Components
import InfoSection from "../../components/InfoSection/InfoSection";
import Cryptocurrencies from "../../components/CryptoCurrencies/CryptoCurrencies";
import GlobalStats from "../../components/GlobalStats/GlobalStats";

import { homeObjOne } from "./Data";
import News from "../../components/News/News";

const Home = () => {
  return (
    <>
      <InfoSection {...homeObjOne} />
      <Cryptocurrencies />
      <News />
      <GlobalStats />
    </>
  );
};

export default Home;
