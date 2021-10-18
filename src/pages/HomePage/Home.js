import React from "react";
import InfoSection from "../../components/InfoSection/InfoSection";
import GlobalStats from '../../components/GlobalStats/GlobalStats';

import { homeObjOne } from "./Data";

import { useGetCryptosQuery } from "../../services/cryptoApi";

const Home = () => {
  const { data, isFetching } = useGetCryptosQuery(10);
  const globalStats = data?.data?.stats;

  if (isFetching) return 'Loading...';

  console.log(data);
  return (
    <>
      <InfoSection {...homeObjOne} />
      <GlobalStats />
    </>
  );
};

export default Home;
