import React from 'react';

import { Container, Button } from '../../globalStyles';
import {
  InfoSec,
  InfoRow,
  InfoColumn,
  TextWrapper,
  TopLine,
  Heading,
  Subtitle,
  ImgWrapper,
  Img,
  ProjectLink
} from './InfoSection.styles';

function InfoSection({
  primary,
  lightBg,
  topLine,
  lightTopLine,
  lightText,
  lightTextDesc,
  headline,
  description,
  buttonLabel,
  img,
  alt,
  imgStart,
  start,
  blackAndWhite,
  projectUrl,
}) {

  return (
    <>
      <InfoSec lightBg={lightBg}>
        <Container>
          <InfoRow imgStart={imgStart}>

          <InfoColumn>
              <ImgWrapper start={start}>
                <Img src={img} alt={alt} blackAndWhite={blackAndWhite} />
              </ImgWrapper>
            </InfoColumn>

            <InfoColumn >
              <TextWrapper>
                <TopLine lightTopLine={lightTopLine}>{topLine}</TopLine>
                <Heading lightText={lightText}>{headline}</Heading>
                <Subtitle lightTextDesc={lightTextDesc}>{description}</Subtitle>

                <ProjectLink target="_blank" href={projectUrl} rel="noopener noreferrer">
                  <Button big fontBig primary={primary}>
                    {buttonLabel}
                  </Button>
                </ProjectLink>
              </TextWrapper>
            </InfoColumn>

          </InfoRow>
        </Container>
      </InfoSec>
    </>
  );
}

export default InfoSection;