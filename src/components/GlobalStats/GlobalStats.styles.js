import { Link } from "react-router-dom";
import styled from "styled-components";

export const ProjectsSection = styled.div`
  padding: 100px 0 160px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: #fff;
`;

export const ProjectsWrapper = styled.div`
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

export const ProjectsHeading = styled.h1`
  color: #38b3d0;
  font-size: 48px;
  margin-bottom: 24px;
`;

export const ProjectsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 960px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
  }
`;

export const ProjectsCard = styled.a`
  background: #242424;
  width: 280px;
  height: 380px;
  text-decoration: none;
  border-radius: 4px;
  &:nth-child(2) {
    margin: 24px;
  }
  &:hover {
    transform: translateY(-10px);
    transition: all 0.2s ease-in-out;
    color: #1c2237;
    box-shadow: 0px 10px 5px 0px rgba(0, 0, 0, 0.2);
    -webkit-box-shadow: 0px 10px 5px 0px rgba(0, 0, 0, 0.2);
    -moz-box-shadow: 0px 10px 5px 0px rgba(0, 0, 0, 2);
    
  }
  @media screen and (max-width: 960px) {
    width: 90%;
    &:hover {
      transform: none;
    }
  }
`;

export const ProjectsCardInfo = styled.div`
  display: flex;
  flex-direction: column;
  height: 500px;
  padding: 24px;
  align-items: center;
  color: #fff;
`;

export const ProjectsCardIcon = styled.div`
  margin: 24px 0;
`;

export const ProjectsCardPlan = styled.h3`
  margin-bottom: 5px;
  font-size: 24px;
  
`;

export const ProjectsCardFeatures = styled.ul`
  margin: 16px 0 32px;
  list-style: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #a9b3c1;
  text-align:center;
`;

export const ProjectsCardFeature = styled.li`
  margin-top: 10px;
  margin-bottom: 10px;
  font-size: ${({ fontDetail }) => (fontDetail ? '12px' : '16px')};
  font-style: ${({ fontDetail }) => (fontDetail ? 'italic' : 'regular')};
`;

export const ProjectsCardGithub = styled.a`
  color: #fff;
  text-decoration: none;
`;