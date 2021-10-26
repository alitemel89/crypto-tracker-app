import React from "react";

// Controllers
import { useGetCryptosQuery } from "../../services/cryptoApi";
import millify from "millify";

// Styles
import {
  GlobalStatsWrapper,
  GlobalStatsHeading,
  GlobalStatsContainer,
  GlobalStatsCard,
  GlobalStatsCardNumber,
  GlobalStatsSection,
  GlobalStatsCardHeading,
} from "./GlobalStats.styles";
import Spinner from "../Spinner/Spinner";

const GlobalStats = () => {
  const { data, isFetching } = useGetCryptosQuery(10);
  const globalStats = data?.data?.stats;

  if (isFetching) return <Spinner />;

  console.log(data);

  return (
    <GlobalStatsSection>
      <GlobalStatsWrapper>
        <GlobalStatsHeading>Global Stats</GlobalStatsHeading>
      </GlobalStatsWrapper>

      <GlobalStatsWrapper>
        <GlobalStatsContainer>
          <GlobalStatsCard>
            <GlobalStatsCardHeading>
              Total Cryptocurrencies
            </GlobalStatsCardHeading>
            <GlobalStatsCardNumber>{globalStats.total}</GlobalStatsCardNumber>
          </GlobalStatsCard>

          <GlobalStatsCard>
            <GlobalStatsCardHeading>Total 24h Volume</GlobalStatsCardHeading>
            <GlobalStatsCardNumber>
              {millify(globalStats.total24hVolume)}
            </GlobalStatsCardNumber>
          </GlobalStatsCard>

          <GlobalStatsCard>
            <GlobalStatsCardHeading>Total Market Cap</GlobalStatsCardHeading>
            <GlobalStatsCardNumber>
              {millify(globalStats.totalMarketCap)}
            </GlobalStatsCardNumber>
          </GlobalStatsCard>

          <GlobalStatsCard>
            <GlobalStatsCardHeading>Total Exchanges</GlobalStatsCardHeading>
            <GlobalStatsCardNumber>
              {millify(globalStats.totalExchanges)}
            </GlobalStatsCardNumber>
          </GlobalStatsCard>

          <GlobalStatsCard>
            <GlobalStatsCardHeading>Total Markets</GlobalStatsCardHeading>
            <GlobalStatsCardNumber>
              {millify(globalStats.totalMarkets)}
            </GlobalStatsCardNumber>
          </GlobalStatsCard>
        </GlobalStatsContainer>
      </GlobalStatsWrapper>
    </GlobalStatsSection>
  );
};

export default GlobalStats;
