import React, { useState } from "react";
import { useParams } from "react-router-dom";
import millify from "millify";

import { useGetCryptoDetailsQuery } from "../../services/cryptoApi";
import {
  AiFillDollarCircle,
  AiOutlineNumber,
  AiOutlineThunderbolt,
  AiFillTrophy,
  AiFillStop,
  AiFillCheckCircle,
} from "react-icons/ai";

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
} from "../CryptoDetails/CryptoDetails.styles";

const CryptoDetails = () => {
  const [timePeriod, setTimePeriod] = useState("7d");
  const { coinId } = useParams();
  const { data, isFetching } = useGetCryptoDetailsQuery(coinId);

  const cryptoDetails = data?.data?.coin;

  console.log(cryptoDetails);

  if (isFetching) return "Loading...";

  const time = ["3h", "24h", "7d", "30d", "1y", "3m", "3y", "5y"];

  const stats = [
    {
      title: "Price to USD",
      value: `${cryptoDetails.price && millify(cryptoDetails.price)}`,
      icon: <AiFillDollarCircle />,
    },
    {
      title: "Rank",
      value: cryptoDetails.rank,
      icon: <AiOutlineNumber />,
    },
    {
      title: "24h Volume",
      value: `${cryptoDetails.volume && millify(cryptoDetails.volume)}`,
      icon: <AiOutlineThunderbolt />,
    },
    {
      title: "Market Cap",
      value: `$ ${millify(cryptoDetails.marketCap)}`,
      icon: <AiFillDollarCircle />,
    },
    {
      title: "All-time-high(daily avg.)",
      value: `$ ${millify(cryptoDetails.allTimeHigh.price)}`,
      icon: <AiFillTrophy />,
    },
  ];

  const genericStats = [
    {
      title: "Number Of Markets",
      value: cryptoDetails.numberOfMarkets,
      icon: <AiOutlineThunderbolt />,
    },
    {
      title: "Number Of Exchanges",
      value: cryptoDetails.numberOfExchanges,
      icon: <AiOutlineThunderbolt />,
    },
    {
      title: "Aprroved Supply",
      value: cryptoDetails.approvedSupply ? (
        <AiFillCheckCircle />
      ) : (
        <AiFillStop />
      ),
      icon: <AiOutlineThunderbolt />,
    },
    {
      title: "Total Supply",
      value: `$ ${millify(cryptoDetails.totalSupply)}`,
      icon: <AiOutlineThunderbolt />,
    },
    {
      title: "Circulating Supply",
      value: `$ ${millify(cryptoDetails.circulatingSupply)}`,
      icon: <AiOutlineThunderbolt />,
    },
  ];

  return (
    <>
      <InfoSec>
        <InfoRow>
          <InfoColumn>
            <TextWrapper>
              <Heading>{cryptoDetails.name} Value Statistics</Heading>
              <TopLine>
                An overview showing the statistics of {cryptoDetails.name}, such
                as the base and quote currency, the rank, and trading volume.
              </TopLine>
              {stats.map(({ title, value, icon }) => (
                <TableRow>
                  <Subtitle>{icon}</Subtitle>
                  <Subtitle>{title}</Subtitle>
                  <TableValue>{value}</TableValue>
                </TableRow>
              ))}
            </TextWrapper>
          </InfoColumn>

          <InfoColumn>
            <TextWrapper>
              <Heading>{cryptoDetails.name} Value Statistics</Heading>
              <TopLine>
                An overview showing the statistics of {cryptoDetails.name}, such
                as the base and quote currency, the rank, and trading volume.
              </TopLine>
              {stats.map(({ title, value, icon }) => (
                <TableRow>
                  <Subtitle>{icon}</Subtitle>
                  <Subtitle>{title}</Subtitle>
                  <TableValue>{value}</TableValue>
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
