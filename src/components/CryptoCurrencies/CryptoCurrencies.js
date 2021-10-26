import React, { useState, useEffect } from "react";
import millify from "millify";
import { AiFillDollarCircle } from "react-icons/ai";
import { GiMoneyStack } from "react-icons/gi";
import { ImStatsDots } from "react-icons/im";
import { Link } from "react-router-dom";

import { IconContext } from "react-icons/lib";
import {
  CoinsSection,
  CoinsWrapper,
  CoinsHeading,
  CoinsContainer,
  CoinsCard,
  CoinsCardIcon,
  CoinsCardHeading,
  CoinsCardText,
  CoinsCardFeatures,
} from "./CryptoCurrencies.styles";

import { useGetCryptosQuery } from "../../services/cryptoApi";
import Spinner from "../Spinner/Spinner";

function Cryptocurrencies() {
  const { data: cryptosList, isFetching } = useGetCryptosQuery(20);
  const [cryptos, setCryptos] = useState();

  useEffect(() => {
    setCryptos(cryptosList?.data?.coins);
  }, [cryptosList]);

  console.log(cryptos);

  if (isFetching) return <Spinner/>;

  return (
    <IconContext.Provider value={{ color: "#73ADAD", size: 50 }}>
      <CoinsSection>
        <CoinsWrapper>
          <CoinsHeading>Top Cryptocurrencies In the World</CoinsHeading>
        </CoinsWrapper>

        <CoinsWrapper>
          <CoinsContainer>
            {cryptos?.map((currency) => (
              <Link key={currency.id} to={`/crypto/${currency.id}`} style={{textDecoration: 'none'}}>
                <CoinsCard>
                  <CoinsCardFeatures>
                    <CoinsCardIcon>
                      <img
                        src={currency.iconUrl}
                        alt="currency icon"
                        style={{ width: "20%" }}
                      />
                    </CoinsCardIcon>
                    <CoinsCardHeading>{currency.name}</CoinsCardHeading>

                    <CoinsCardText>
                      <AiFillDollarCircle
                        style={{ width: "20px", height: "20px" }}
                      />
                      &nbsp; Price: {millify(currency.price)} USD
                    </CoinsCardText>
                    <CoinsCardText>
                      <GiMoneyStack style={{ width: "20px", height: "20px" }} />
                      &nbsp; Market Cap: {millify(currency.marketCap)}
                    </CoinsCardText>
                    <CoinsCardText>
                      <ImStatsDots style={{ width: "20px", height: "20px" }} />
                      &nbsp; Daily Change: {currency.change}%
                    </CoinsCardText>
                  </CoinsCardFeatures>
                </CoinsCard>
              </Link>
            ))}
          </CoinsContainer>
        </CoinsWrapper>
      </CoinsSection>
    </IconContext.Provider>
  );
}
export default Cryptocurrencies;
