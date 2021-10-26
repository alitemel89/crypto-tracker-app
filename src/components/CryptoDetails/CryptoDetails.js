import React, { useState } from "react";
import { useParams } from "react-router-dom";
import millify from "millify";

import {
  useGetCryptoDetailsQuery,
  useGetCryptoHistoryQuery,
} from "../../services/cryptoApi";
import {
  AiFillDollarCircle,
  AiOutlineNumber,
  AiOutlineThunderbolt,
  AiFillTrophy,
  AiFillStop,
  AiFillCheckCircle,
} from "react-icons/ai";

import { FcCurrencyExchange } from "react-icons/fc";
import { SiMarketo } from "react-icons/si";

import {
  TextWrapper,
  InfoColumn,
  TopLine,
  Heading,
  Subtitle,
  InfoSec,
  InfoRow,
  TableRow,
  TableValue,
  SelectHistory,
  HistoryOption,
  SelectWrapper,
} from "../CryptoDetails/CryptoDetails.styles";
import LineChart from "../LineChart/LineChart";
import Spinner from "../Spinner/Spinner";

const CryptoDetails = () => {
  const [timePeriod, setTimePeriod] = useState("24h");
  const { coinId } = useParams();
  const { data, isFetching } = useGetCryptoDetailsQuery(coinId);
  const { data: coinHistory } = useGetCryptoHistoryQuery({
    coinId,
    timePeriod: timePeriod,
  });

  const cryptoDetails = data?.data?.coin;

  if (isFetching) return <Spinner />;
  console.log(coinHistory);

  const time = ["24h", "7d", "30d", "1y", "5y"];

  const stats = [
    {
      id: 1,
      title: "Price to USD",
      value: `${cryptoDetails.price && millify(cryptoDetails.price)}`,
      icon: <AiFillDollarCircle />,
    },
    {
      id: 2,
      title: "Rank",
      value: cryptoDetails.rank,
      icon: <AiOutlineNumber />,
    },
    {
      id: 3,
      title: "24h Volume",
      value: `${cryptoDetails.volume && millify(cryptoDetails.volume)}`,
      icon: <AiOutlineThunderbolt />,
    },
    {
      id: 4,
      title: "Market Cap",
      value: `$ ${millify(cryptoDetails.marketCap)}`,
      icon: <AiFillDollarCircle />,
    },
    {
      id: 5,
      title: "All-time-high(daily avg.)",
      value: `$ ${millify(cryptoDetails.allTimeHigh.price)}`,
      icon: <AiFillTrophy />,
    },
  ];

  const genericStats = [
    {
      id: 1,
      title: "Number Of Markets",
      value: cryptoDetails.numberOfMarkets,
      icon: <SiMarketo />,
    },
    {
      id: 2,
      title: "Number Of Exchanges",
      value: cryptoDetails.numberOfExchanges,
      icon: <FcCurrencyExchange />,
    },
    {
      id: 3,
      title: "Approved Supply",
      value: cryptoDetails.approvedSupply ? (
        <AiFillCheckCircle />
      ) : (
        <AiFillStop />
      ),
      icon: <AiOutlineThunderbolt />,
    },
    {
      id: 4,
      title: "Total Supply",
      value: `$ ${millify(cryptoDetails.totalSupply)}`,
      icon: <AiOutlineThunderbolt />,
    },
    {
      id: 5,
      title: "Circulating Supply",
      value: `$ ${millify(cryptoDetails.circulatingSupply)}`,
      icon: <AiOutlineThunderbolt />,
    },
  ];

  return (
    <>
      <SelectWrapper>
        <SelectHistory onChange={(e) => setTimePeriod(e.target.value)}>
          {time.map((t) => (
            <HistoryOption key={t}>{t}</HistoryOption>
          ))}
        </SelectHistory>
      </SelectWrapper>
      <LineChart
        coinName={cryptoDetails.name}
        coinHistory={coinHistory}
        currentPrice={millify(cryptoDetails.price)}
      />
      <InfoSec>
        <InfoRow>
          <InfoColumn>
            <TextWrapper>
              <Heading>{cryptoDetails.name} Value Statistics</Heading>
              <TopLine>
                An overview showing the statistics of {cryptoDetails.name}, such
                as the base and quote currency, the rank, and trading volume.
              </TopLine>
              {stats.map((stat) => (
                <TableRow key={stat.id}>
                  <Subtitle style={{ fontSize: "24px" }}>{stat.icon}</Subtitle>
                  <Subtitle>{stat.title}</Subtitle>
                  <TableValue>{stat.value}</TableValue>
                </TableRow>
              ))}
            </TextWrapper>
          </InfoColumn>

          <InfoColumn>
            <TextWrapper>
              <Heading>Other Statistics Information</Heading>
              <TopLine>
                An overview showing the statistics of {cryptoDetails.name}, such
                as the base and quote currency, the rank, and trading volume.
              </TopLine>
              {genericStats.map((stat) => (
                <TableRow key={stat.id}>
                  <Subtitle style={{ fontSize: "24px" }}>{stat.icon}</Subtitle>
                  <Subtitle>{stat.title}</Subtitle>
                  <TableValue>{stat.value}</TableValue>
                </TableRow>
              ))}
            </TextWrapper>
          </InfoColumn>
        </InfoRow>
      </InfoSec>
    </>
  );
};

export default CryptoDetails;
