import React, { useState } from "react";
import { useParams } from "react-router-dom";
import millify from "millify";

import { useGetCryptoDetailsQuery } from "../../services/cryptoApi";
import { AiFillDollarCircle, AiOutlineNumber } from "react-icons/ai";

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
  ];

  return <div>CryptoDetails {coinId}</div>;
};

export default CryptoDetails;
