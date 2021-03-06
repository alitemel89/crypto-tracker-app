import styled from "styled-components";

export const ChartWrapper = styled.div`
  margin: 10px 150px;
  padding: 20px;

  @media screen and (max-width: 768px) {
    margin: 5px;
  }
`;

export const ChartHeading = styled.h1`
  margin: 24px 0;
  font-size: 36px;
  line-height: 1.1;
  font-weight: 600;
  color: #38b3d0;
  text-align: center;

  @media screen and (max-width: 960px) {
    font-size: 24px;
  }
`;

export const ChartSubHeading = styled.p`
  color: #000;
  font-size: 12px;
  margin-bottom: 10px;
`;
