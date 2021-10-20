import React, { useState } from "react";
import './News.css';
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
} from "./News.styles";

import moment from "moment";
import { useGetCryptoNewsQuery } from "../../services/cryptoNewsApi";
import { useGetCryptosQuery } from "../../services/cryptoApi";

const demoImage =
  "https://www.bing.com/th?id=OVFT.mpzuVZnv8dwIMRfQGPbOPC&pid=News";

const News = () => {
  const [newsCategory, setNewsCategory] = useState("Cryptocurrency");
  const { data } = useGetCryptosQuery(100);
  const { data: cryptoNews } = useGetCryptoNewsQuery({
    newsCategory,
    count: 12,
  });

  if (!cryptoNews?.value) return "Loading...";

  console.log(cryptoNews);
  return (
    <NewsSection>
      <NewsWrapper>
        <NewsHeading>Latest Crypto News</NewsHeading>
      </NewsWrapper>

      <NewsWrapper>
        <NewsContainer>
          {cryptoNews.value.map((news, i) => (
            <NewsCard>
              <NewsHeader>
                <NewsCardIcon>
                  <img
                    src={news?.image?.thumbnail?.contentUrl || demoImage}
                    alt="news-image"
                    className="news-header"
                  />
                </NewsCardIcon>
                <NewsCardHeading>{news.name}</NewsCardHeading>
              </NewsHeader>

              <NewsCardFeatures>
                <NewsCardDescription>
                  {news.description.length > 100
                    ? `${news.description.substring(0,150)}...`
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
                  <NewsProviderName>{news.provider[0]?.name}</NewsProviderName>
                  <NewsCardDate>
                    {moment(news.datePublished).startOf("ss").fromNow()}
                  </NewsCardDate>
                </NewsProvider>
              </NewsCardFeatures>
            </NewsCard>
          ))}
        </NewsContainer>
      </NewsWrapper>
    </NewsSection>
  );
};

export default News;
