import React from 'react';
import text from '../../shared/constants/dictionary'
import navBarIds from '../../shared/constants/navBarIds'
import styled from 'styled-components'
import SkillsAnimation from './Techonologies'


const CenterLayoutContainer = styled.div`
  width: 100%;
	height: 100vh;
	background-color: #23163b;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
`;

const CenterLayout = styled.div`
`;

const Title = styled.h1`
 display:flex;
 color: #23163b;
 font-size: 37px;
 letter-spacing: -2px;
 /* font-family: 'Work Sans', sans-serif; */
 text-transform: uppercase;
 font-weight: 500;
 // margin: 30px 0 0;
 padding-top: 4px;
 padding-left: 0.4em;
 background-color: #FF3F7F;
 align-self: center;
 justify-self: center;
`;

const SkillsWrapper = styled.div`
 width: 100%;
 display: flex;
 flex-direction: row;
 justify-content: center;
 `;

const SoftSkillsContainer = styled.div`
 height: 443px;
 width: 40%;
 display: flex;
 flex-direction: column;
 /* justify-content: center; */
 `;

 const SubTitle = styled.h2`
  width: ${100 - 2.7}%;
  color: #23163b;
  font-size: 30px;
  /* letter-spacing: -4px; */
  /* font-family: 'Work Sans', sans-serif; */
  text-transform: unset;
  font-weight: 500;
  padding-left: 2.7%;
  padding-top: 4px;
  background-color: #FF3F7F;
  margin:0;
 `;

 const SoftSkillsCard = styled.div`
 width: 100%;
 height: 361px;
 margin: 20px 0 0 0;
 display: flex;
 flex-direction: column;
 justify-content: space-between;
 align-items: center;
 background-color: #4A1E47;
`;

const DevDesignContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 60%;
  height: 443px;
`;

const DevDesignContent = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  /* align-items: center; */
  width: 100%;
  height: 361px;
`;

const TechnologiesWrapper = styled.div`
  width: 268px;
  text-align: center;
  font-size: 30px;
  /* background-color: #FF3F7F; */
  margin: 20px 0 0 0;
  height: 361px;
`;

const DevDesignCard = styled.div`
  width: 434px;
  height: 361px;
  margin: 20px 0 0 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background-color: #4A1E47;
`;

const Skills = () => { 
  
  // const { Container, Title, AboutTextWrapper, AboutText, Box3} = Components

  return (
    <CenterLayoutContainer id={ navBarIds.SKILLS }>
      <CenterLayout>
        <Title>{ text.SKILLS_TITLE }</Title>
        <SkillsWrapper>
          <SoftSkillsContainer>
            <SubTitle>{ text.SOFT_SKILLS_TITLE }</SubTitle>
            <SoftSkillsCard>

            </SoftSkillsCard>
          </SoftSkillsContainer>
          <DevDesignContainer>
            <SubTitle>{ text.DEV_DESIGN_SKILLS_TITLE }</SubTitle>
            <DevDesignContent>
              <DevDesignCard>
      
              </DevDesignCard>
              <TechnologiesWrapper>
                <SkillsAnimation></SkillsAnimation>
              </TechnologiesWrapper>
            </DevDesignContent>
          </DevDesignContainer>
        </SkillsWrapper>
      </CenterLayout>
    </CenterLayoutContainer>
  );
};

export default Skills;
