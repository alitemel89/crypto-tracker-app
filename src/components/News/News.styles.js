import styled from "styled-components";

export const NewsSection = styled.div`
  background: #fff;
  padding: 100px 0 160px;
`;

export const NewsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  @media screen and (max-width: 960px) {
    margin: 0 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const NewsSelection = styled.select`
  width: 300px;
  font-size: 16px;
  padding: 5px;
  background-color: #fff;
  border-radius: 5px;
`;

export const NewsOption = styled.option`
  color: #000;
`;

export const NewsHeading = styled.h1`
  color: #38b3d0;
  font-size: 36px;
  margin-bottom: 24px;
`;

export const NewsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;

  @media screen and (max-width: 960px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
  }
`;

export const NewsCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  background: #fff;
  width: 550px;
  height: 280px;
  border-radius: 4px;
  border: 2px solid #0d0d36;
  margin: 20px;
  box-shadow: 0px 10px 5px 0px rgba(0, 0, 0, 0.2);
  -webkit-box-shadow: 0px 10px 5px 0px rgba(0, 0, 0, 0.2);
  -moz-box-shadow: 0px 10px 5px 0px rgba(0, 0, 0, 2);

  &:nth-child(2) {
    margin: 24px;
  }

  @media screen and (max-width: 960px) {
    width: 90%;
    display: flex;
    flex-wrap: wrap;
    height: fit-content;
    width: 300px;
    &:hover {
      transform: none;
    }
  }
`;

export const NewsHeader = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: 10px;

  @media screen and (max-width: 960px) {
    font-size: 16px;
    margin-left: 15px;
  }
`;

export const NewsCardFeatures = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin: 10px;
`;

export const NewsCardHeading = styled.h1`
  color: #000;
  font-size: 24px;
  margin-bottom: 10px;
  margin-top: 10px;

  @media screen and (max-width: 960px) {
    font-size: 16px;
    margin-left: 15px;
  }
`;

export const NewsCardIcon = styled.div`
  width: 30%;
  margin-right: 10px;

  @media screen and (max-width: 960px) {
    width: 10%;
    margin: 0 auto;
    margin-right: 20px;
  }
`;

export const NewsProvider = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-left: 5px;
  margin-bottom: 5px;
  margin-top: 5px;
`;

export const NewsProviderName = styled.div`
  font-size: 16px;
  margin-left: 10px;

  @media screen and (max-width: 960px) {
    font-size: 12px;
  }
`;

export const NewsCardDescription = styled.p`
  font-size: 16px;
  color: #000;
  margin-bottom: 10px;
`;

export const NewsCardDate = styled.p`
  font-size: 16px;
  margin-left: auto;

  @media screen and (max-width: 960px) {
    font-size: 12px;
    margin-right: 5px;
  }
`;

export const NewsUrl = styled.a`
  text-decoration: none;
`;
