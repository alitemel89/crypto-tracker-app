import styled from "styled-components";

export const GlobalStatsSection = styled.div`
  background: #fff7ec;
  padding: 100px 0 160px;
`;

export const GlobalStatsWrapper = styled.div`
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

export const GlobalStatsHeading = styled.h1`
  color:#38b3d0;
  font-size: 36px;
  margin-bottom: 24px;
`;

export const GlobalStatsContainer = styled.div`
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

export const GlobalStatsCard = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background: #fff;
  width: 200px;
  height: 200px;
  border-radius: 4px;
  margin: 20px;
  color: #1c2237;
  box-shadow: 0px 10px 5px 0px rgba(0, 0, 0, 0.2);
  -webkit-box-shadow: 0px 10px 5px 0px rgba(0, 0, 0, 0.2);
  -moz-box-shadow: 0px 10px 5px 0px rgba(0, 0, 0, 2);

  &:nth-child(2) {
    margin: 24px;
  }

  @media screen and (max-width: 960px) {
    width: 90%;
    &:hover {
      transform: none;
    }
  }
`;

export const GlobalStatsCardHeading = styled.p`
  color: #000;
  font-size: 16px;
`;

export const GlobalStatsCardNumber = styled.h2`
  color: #000;
  margin-top: 10px;
  margin-bottom: 10px;
  font-size: 48px;
  padding: 20px;
  letter-spacing: 1.6;
`;
