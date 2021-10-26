import styled from "styled-components";

export const InfoSec = styled.div`
  background-color: snow;
  color: #fff;
  padding: 80px 0;
`;

export const InfoRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  
`;

export const InfoColumn = styled.div`
  background-color: #0d0d36;
  margin-bottom: 15px;
  padding-right: 15px;
  padding-left: 15px;
  flex: 1;
  max-width: 50%;
  flex-basis: 50%;
  border: 5px solid #eee;
  display: flex;
  justify-content: center;
  border-radius: 20px;
  @media screen and (max-width: 768px) {
    max-width: 100%;
    flex-basis: 100%;
    display: flex;
    justify-content: center;
    margin-top: 20px;
  }
`;

export const TableRow = styled.div`
  display: flex;
  justify-content: start;
`;

export const TextWrapper = styled.div`
  max-width: 540px;
  padding-top: 60px;
  padding-bottom: 60px;
  @media screen and (max-width: 768px) {
    padding-bottom: 65px;
  }
`;

export const TopLine = styled.div`
  color: #ccc;
  font-size: 18px;
  line-height: 16px;
  font-weight: 700;
  letter-spacing: 1.4px;
  margin-bottom: 16px;
`;

export const Heading = styled.h1`
  margin-bottom: 24px;
  font-size: 24px;
  line-height: 1.1;
  font-weight: 600;
  color: #fbc73c;
`;

export const Subtitle = styled.p`
  max-width: 440px;
  font-size: 18px;
  line-height: 24px;
  margin: 10px;
`;

export const TableValue = styled.p`
  display: flex;
  font-size: 20px;
  line-height: 24px;
  margin-left: auto;
`;

export const SelectWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin: 20px;
`

export const SelectHistory = styled.select`
  width: 300px;
  font-size: 16px;
  padding: 5px;
  background-color: #fff;
  border-radius: 5px;
`;


export const HistoryOption = styled.option`
  color: #000;
`;
