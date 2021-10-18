import React from "react";
import { Button } from "../../globalStyles";
import { GiCrystalBars } from "react-icons/gi";
import {
  GiPerson,
  GiRunningNinja,
  GiPhotoCamera,
  GiMusicSpell,
  GiThink
} from "react-icons/gi";
import { IconContext } from "react-icons/lib";
import {
  ProjectsSection,
  ProjectsWrapper,
  ProjectsHeading,
  ProjectsContainer,
  ProjectsCard,
  ProjectsCardInfo,
  ProjectsCardIcon,
  ProjectsCardPlan,
  ProjectsCardFeatures,
  ProjectsCardFeature,
  ProjectsCardGithub,
} from "./GlobalStats.styles";

function GlobalStats() {
  return (
    <IconContext.Provider value={{ color: "#73ADAD", size: 50 }}>
      <ProjectsSection>
        <ProjectsWrapper>
          <ProjectsHeading>Cryptocurrencies</ProjectsHeading>

          <ProjectsContainer>
        
          </ProjectsContainer>
        </ProjectsWrapper>

        <ProjectsWrapper>
          <ProjectsContainer>
            <ProjectsCard target="_blank" href="https://github.com/alitemel89/exercise-tracker" rel="noopener noreferrer">
              <ProjectsCardInfo>
                <ProjectsCardIcon>
                  <GiRunningNinja />
                </ProjectsCardIcon>
                <ProjectsCardPlan>Exercise Tracker</ProjectsCardPlan>
                <ProjectsCardFeatures>
                  <ProjectsCardFeature>MERN Exercise Tracker</ProjectsCardFeature>
                  <ProjectsCardFeature fontDetail>
                    FreeCodeCamp Tutorial
                  </ProjectsCardFeature>
                </ProjectsCardFeatures>
                <Button style={{position: 'relative', top: 32}} primary>Go to Github Repository</Button>
              </ProjectsCardInfo>
            </ProjectsCard>

            <ProjectsCard target="_blank" href="https://github.com/alitemel89/random-user" rel="noopener noreferrer">
              <ProjectsCardInfo>
                <ProjectsCardIcon>
                  <GiPerson />
                </ProjectsCardIcon>
                <ProjectsCardPlan>Random User</ProjectsCardPlan>
                <ProjectsCardFeatures>
                  <ProjectsCardFeature>Dynamic Search using React Hooks and randomuser.me API</ProjectsCardFeature>
                  <ProjectsCardFeature fontDetail>My Projects</ProjectsCardFeature>
                </ProjectsCardFeatures>
                <Button style={{position: 'relative', top:14}} primary>Go to Github Repository</Button>
              </ProjectsCardInfo>
            </ProjectsCard>

            <ProjectsCard target="_blank" href="https://github.com/alitemel89/pics" rel="noopener noreferrer">
              <ProjectsCardInfo>
                <ProjectsCardIcon>
                  <GiPhotoCamera />
                </ProjectsCardIcon>
                <ProjectsCardPlan>Pics</ProjectsCardPlan>
                <ProjectsCardFeatures>
                  <ProjectsCardFeature>Image Search Application with Unsplash API</ProjectsCardFeature>
                  <ProjectsCardFeature fontDetail>Stephen Grider, Modern React with Redux</ProjectsCardFeature>
                </ProjectsCardFeatures>
                <Button style={{position: 'relative', top: 0}} primary>Go to Github Repository</Button>
              </ProjectsCardInfo>
            </ProjectsCard>
          </ProjectsContainer>
        </ProjectsWrapper>
        <br></br>
        <ProjectsWrapper>
          <ProjectsContainer>
            <ProjectsCard target="_blank" href="https://github.com/alitemel89/jamming" rel="noopener noreferrer">
              <ProjectsCardInfo>
                <ProjectsCardIcon>
                  <GiMusicSpell />
                </ProjectsCardIcon>
                <ProjectsCardPlan>Jamming</ProjectsCardPlan>
                <ProjectsCardFeatures>
                  <ProjectsCardFeature>Create playlist in your Spotify Account</ProjectsCardFeature>
                  <ProjectsCardFeature fontDetail>
                    Codecademy Pro Project
                  </ProjectsCardFeature>
                </ProjectsCardFeatures>
                <Button style={{position: 'relative', top:14}} primary>Go to Github Repository</Button>
              </ProjectsCardInfo>
            </ProjectsCard>

            <ProjectsCard target="_blank" href="https://github.com/alitemel89/github-finder" rel="noopener noreferrer">
              <ProjectsCardInfo>
                <ProjectsCardIcon>
                  <GiCrystalBars />
                </ProjectsCardIcon>
                <ProjectsCardPlan>Github Finder</ProjectsCardPlan>
                <ProjectsCardFeatures>
                  <ProjectsCardFeature>React Front to Back</ProjectsCardFeature>
                  <ProjectsCardFeature fontDetail>Brad Traversy MERN course</ProjectsCardFeature>
                </ProjectsCardFeatures>
                <Button style={{position: 'relative', top:32}} primary>Go to Github Repository</Button>
              </ProjectsCardInfo>
            </ProjectsCard>

            <ProjectsCard target="_blank" href="https://github.com/alitemel89/passing_thoughts" rel="noopener noreferrer">
              <ProjectsCardInfo>
                <ProjectsCardIcon>
                  <GiThink />
                </ProjectsCardIcon>
                <ProjectsCardPlan>Passing Thoughts</ProjectsCardPlan>
                <ProjectsCardFeatures>
                  <ProjectsCardFeature>Automatically deleted input values</ProjectsCardFeature>
                  <ProjectsCardFeature fontDetail>Codecademy - Functional Components</ProjectsCardFeature>
                </ProjectsCardFeatures>
                <Button style={{position: 'relative', top:12}} primary>Go to Github Repository</Button>
              </ProjectsCardInfo>
            </ProjectsCard>
          </ProjectsContainer>
        </ProjectsWrapper>
      </ProjectsSection>
    </IconContext.Provider>
  );
}
export default GlobalStats;