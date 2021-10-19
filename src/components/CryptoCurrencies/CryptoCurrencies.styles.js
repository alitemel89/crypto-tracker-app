import styled from "styled-components";

export const CoinsSection = styled.div`
  background: #fff;
  padding: 100px 0 160px;
`;

export const CoinsWrapper = styled.div`
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

export const CoinsHeading = styled.h1`
  color: #38b3d0;
  font-size: 48px;
  margin-bottom: 24px;
`;

export const CoinsContainer = styled.div`
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

export const CoinsCard = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background: #0d0d36;
  width:280px;
  height: 280px;
  border-radius: 4px;
  margin: 20px;
  color: #fff;;
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

export const CoinsCardFeatures = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
`


export const CoinsCardHeading = styled.h1`
  color: #fff;
  font-size: 24px;
  margin-bottom: 20px;
`;

export const CoinsCardIcon = styled.div`
  width: 100%;
  margin: 24px 0;
`


export const CoinsCardText = styled.p`
  font-size: 16px;
  margin: 8px 0;
  display: flex;
  align-items: center;
  color: #ddd;
`


