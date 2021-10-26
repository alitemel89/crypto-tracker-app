import React from "react";

import {
  ChartWrapper,
  ChartHeading,
  ChartSubHeading,
} from "./LineChart.styles";

import { Line } from "react-chartjs-2";

const LineChart = ({ coinHistory, currentPrice, coinName }) => {
  const coinPrice = [];
  const coinTimestamp = [];

  for (let i = 0; i < coinHistory?.data?.history?.length; i += 1) {
    coinPrice.push(coinHistory?.data?.history[i].price);
  }

  for (let i = 0; i < coinHistory?.data?.history?.length; i += 1) {
    coinTimestamp.push(
      new Date(coinHistory?.data?.history[i].timestamp).toLocaleDateString()
    );
  }

  const data = {
    labels: coinTimestamp,
    datasets: [
      {
        label: "Price In USD",
        data: coinPrice,
        fill: false,
        backgroundColor: "#38b3d0",
        borderColor: "#38b3d0",
      },
    ],
  };

  const options = {
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
  };



  return (
    <>
      <ChartWrapper>
        <ChartHeading>{coinName} Price Chart </ChartHeading>
        <ChartSubHeading>
          {" "}
          Change: {coinHistory?.data?.change}%{" "}
        </ChartSubHeading>
        <ChartSubHeading>
          {" "}
          Current {coinName} Price: $ {currentPrice}{" "}
        </ChartSubHeading>
        <Line data={data} options={options} height="250" />
      </ChartWrapper>

      
    </>
  );
};

export default LineChart;
