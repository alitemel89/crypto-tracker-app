import React, { useState } from "react";
import "./News.css";
import {
  NewsContainer,
  NewsHeading,
  NewsSection,
  NewsWrapper,
  NewsCard,
  NewsHeader,
  NewsCardHeading,
  NewsCardDescription,
  NewsCardFeatures,
  NewsCardIcon,
  NewsProvider,
  NewsProviderName,
  NewsCardDate,
  NewsSelection,
  NewsOption,
  NewsUrl
} from "./News.styles";

import { Button } from "../../globalStyles";
import Spinner from "../Spinner/Spinner";

import moment from "moment";
import { useGetCryptoNewsQuery } from "../../services/cryptoNewsApi";
import { useGetCryptosQuery } from "../../services/cryptoApi";

const demoImage =
  "https://www.bing.com/th?id=OVFT.mpzuVZnv8dwIMRfQGPbOPC&pid=News";

const News = () => {
  const [newsCategory, setNewsCategory] = useState("Cryptocurrency");
  const { data } = useGetCryptosQuery(100);
  const [count, setCount] = useState(12);
  const { data: cryptoNews } = useGetCryptoNewsQuery({
    newsCategory,
    count: count,
  });

  const loadMoreNews = () => {
    setCount(count + 8);
  };

  if (!cryptoNews?.value) return <Spinner />;

  return (
    <NewsSection>
      <NewsWrapper>
        <NewsHeading>Latest Crypto News</NewsHeading>
      </NewsWrapper>

      <NewsWrapper>
        <NewsSelection
          optionFilterProp="children"
          onChange={(e) => setNewsCategory(e.target.value)}
          filterOption={(input, option) =>
            option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
          }
        >
          <NewsOption value="" disabled selected>
            Select a CryptoCurrency
          </NewsOption>
          {data?.data?.coins?.map((currency) => (
            <NewsOption value={currency.name}>{currency.name}</NewsOption>
          ))}
        </NewsSelection>

        <NewsContainer>
          {cryptoNews.value.map((news, i) => (
            <NewsUrl href={`${news.url}`} target="_blank" key={i}>
              <NewsCard>
                <NewsHeader>
                  <NewsCardIcon>
                    <img
                      src={news?.image?.thumbnail?.contentUrl || demoImage}
                      alt=""
                      className="news-header"
                    />
                  </NewsCardIcon>
                  <NewsCardHeading>
                    {news.name.length > 100
                      ? `${news.name.substring(0, 100)}...`
                      : news.name}
                  </NewsCardHeading>
                </NewsHeader>

                <NewsCardFeatures>
                  <NewsCardDescription>
                    {news.description.length > 100
                      ? `${news.description.substring(0, 150)}...`
                      : news.description}
                  </NewsCardDescription>

                  <NewsProvider>
                    <img
                      src={
                        news.provider[0]?.image?.thumbnail?.contentUrl ||
                        demoImage
                      }
                      alt=""
                      style={{
                        maxWidth: "100px",
                        maxHeight: "50px",
                      }}
                    />
                    <NewsProviderName>
                      {news.provider[0]?.name}
                    </NewsProviderName>
                    <NewsCardDate>
                      {moment(news.datePublished).startOf("ss").fromNow()}
                    </NewsCardDate>
                  </NewsProvider>
                </NewsCardFeatures>
              </NewsCard>
            </NewsUrl>
          ))}
        </NewsContainer>
        <Button style={{ marginTop: "20px" }} onClick={loadMoreNews}>
          Show More
        </Button>
      </NewsWrapper>
    </NewsSection>
  );
};

export default News;
