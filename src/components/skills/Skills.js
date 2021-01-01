import React from 'react';
import text from '../../shared/constants/dictionary'
import navBarIds from '../../shared/constants/navBarIds'
import styled, { ThemeProvider } from 'styled-components'
import SkillsAnimation from './Techonologies'
import devDesignImg from '../../assets/skills/devdesign.svg'
import softSkillsImg from '../../assets/skills/softskills.svg'
import animations from '../../shared/styles/animations'


const CenterLayoutContainer = styled.div`
  width: 100%;
	height: 100vh;
	background-color: #23163b;
  /* display: ${props => { if(props.theme.show === true ){return `flex;`} else{ return `none;`}}}; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;

  @media (max-width: 1108px) and (max-height: 768px) {
    height: 150vh;
  }

  @media (max-width: 540px) and (max-height: 720px) {
    height: 201vh;
  }
  
  @media (max-width: 414px) {
    height: 210vh;
  }
`;

const SoftSkillImage = styled.img`
  width: 180.5px;
  height: 180.5px;
  margin-top: 32px;

  @media (max-width: 1108px) {
    margin-top: 0;
  }

  @media (max-width: 414px) {
    width: 143.5px;
    margin-top: 66px;
  }
`;

const TechSkillImage = styled.img`
  margin-top: 40px;
  width: 208px;
  height: 167px;

  @media (max-width: 1108px) {
    margin-top: 0;
    margin-left: 5%;
  }

  @media (max-width: 800px) {
    margin-left: 0;
  }

  @media (max-width: 414px) {
    width: 150px;
  }
`;

const CenterLayout = styled.div`

  display: ${() => { if( window.scrollY > 916 ){ 
      // console.log( 'se muestra' ) 
      return `block`} 
      else{ 
        // console.log( window.scrollY > 149, 'no se muestra' ) 
        return `none;`
        }}};

  @media (max-width: 414px) {
    margin-bottom: 454px;
  }

`;

const Title = styled(animations.textRevealer)`
  display:flex;
  color: #23163b;
  font-size: 37px;
  letter-spacing: -2px;
  /* font-family: 'Work Sans', sans-serif; */
  text-transform: uppercase;
  font-weight: 500;
  margin: 30px 0 10px 0;
  padding-top: 4px;
  padding-left: 0.4em;
  background-color: #FF3F7F;
  align-self: center;
  justify-self: center;
  animation-delay: 500ms;

  @media( max-width: 414px){
    font-size: 28px;
  }
`;

const SubTitle = styled(animations.textRevealer)`
  width: ${100 - 2.7}%;
  color: #23163b;
  font-size: 30px;
  text-transform: unset;
  font-weight: 500;
  padding-left: 2.7%;
  padding-top: 4px;
  background-color: #FF3F7F;
  margin:0;
  animation-delay: 900ms;

 `;

const SkillsWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;

  @media (max-width: 1108px) {
    flex-direction: column;
  }
 `;

const SoftSkillsContainer = styled.div`
  height: 443px;
  width: 40%;
  display: flex;
  flex-direction: column;

  @media (max-width: 1108px) {
    width: 100%;
    height: 432px;
  }

  @media (max-width: 414px) {
    width: 100%;
    height: 392px;
  }
 `;

 const SoftSkillsCard = styled.div`
  width: 100%;
  height: 361px;
  margin: 13px 0 0 0;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  background-color: #4A1E47;

  @media (max-width: 1108px) {
    flex-direction: row;
  }
  @media (max-width: 414px) {
    flex-direction: column;
    height: 288px;
  }
`;

 const SoftSkillsTextContainer = styled.div`
  width: 74%;
  height: 113px;
  margin-bottom: 16px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 1108px) {
    width: 50%;
    margin-bottom: 0;
  }
  @media (max-width: 1024px) {
    height: 161px;
  }
  @media (max-width: 414px) {
    width: 56%;
  }
  @media (max-width: 280px) {
    width: 78%;
  }
`;
 const TechSkillsTextContainer = styled.div`
  width: 74%;
  height: 113px;
  margin-bottom: 16px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 1108px) {
    width: 40%;
    margin-bottom: 0;
    margin-right: 5%;
  }

  @media (max-width: 800px) {
    width: 56%;
    margin-right: 0;
  }

  @media (max-width: 280px) {
    width: 78%;
  }
`;

 const SoftSkillsText = styled.p`
  margin-top: 8px;
  color: white;
  font-size: 15px;
  word-spacing: 3px;

  @media (max-width: 1024px) {
    font-size: 24px;
    margin-top: 0;
  }
  @media (max-width: 1108px) {
    font-size: 20px;
  }
  @media (max-width: 414px) {
    font-size: 13px;
  }

`;

 const TechSkillsText = styled.p`
  color: white;
  font-size: 15px;
  margin:0;
  word-spacing: 3px;

  @media (max-width: 949px) {
    font-size: 13px;
  }
`;

 const SoftSkillsSkillsWrapper = styled.ul`
  display: flex;
  justify-content:space-between;
  width: 100%;
  margin-bottom: 4px;

  @media (max-width: 1108px) {
    margin-bottom: 0;
  }
  @media (max-width: 414px) {
    height: 103px
  }
`;

 const TechSkillsSkillsWrapper = styled.ul`
  display: flex;
  justify-content:space-between;
  width: 100%;
  margin-bottom: 4px;

  @media (max-width: 1108px) {
    margin-bottom: 0;
  }

  @media (max-width: 800px) {
    margin-bottom: 19px;
  }
`;

 const SoftSkillsColumnWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

 const TechSkillsColumnWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

 const SoftSkillsSkills = styled.li`
  color: white;
  font-size: 13px;
  margin: 0;

  @media (max-width: 1108px) {
    font-size: 16px;
  }
  @media (max-width: 414px) {
    font-size: 11px;
  }
`;

 const TechSkillsSkills = styled.li`
  color: white;
  font-size: 13px;
  margin: 0;

  @media (max-width: 949px) {
    font-size: 11px;
  }
`;

const DevDesignContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 60%;
  height: 443px;
  margin: 0 0 0 10px;

  @media (max-width: 1108px) {
    width: 100%;
    margin: 0;
  }
  @media (max-width: 414px) {
    margin-top: 2em;
  }
`;

const DevDesignContent = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  /* align-items: center; */
  width: 100%;
  height: 361px;
  margin: 13px 0 0 0;

  @media (max-width: 414px) {
    flex-direction: column;
    align-items: center;
  }
`;

const TechnologiesWrapper = styled.div`
  margin-left: 10px;
  width: 268px;
  text-align: center;
  font-size: 30px;
  /* background-color: #FF3F7F; */
  height: 361px;

  @media (max-width: 414px) {
    margin-top: 3em;
  }
  @media( max-width: 280px ) {
    margin-left: 0;
    display: flex;
    justify-content: center;
  }
`;

const DevDesignCard = styled.div`
  
  height: 361px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background-color: #4A1E47;

  @media (max-width: 1108px) {
    width: 100%;
    flex-direction: row;
    justify-content: space-around;
  }
  @media (max-width: 800px) {
    flex-direction: column;
  }
`;

const Skills = (props) => { 
  
  // const { Container, Title, AboutTextWrapper, AboutText, Box3} = Components

  return (
    <ThemeProvider theme={ props.show } >
    <CenterLayoutContainer id={ navBarIds.SKILLS }>
      <CenterLayout>
        <Title>{ text.SKILLS_TITLE }</Title>
        <SkillsWrapper>
          <SoftSkillsContainer>
            <SubTitle>{ text.SOFT_SKILLS_TITLE }</SubTitle>
            <SoftSkillsCard>
              <SoftSkillImage src={ softSkillsImg }/>
              <SoftSkillsTextContainer>
                <SoftSkillsText>{ text.SOFT_SKILLS_TEXT }</SoftSkillsText>
                <SoftSkillsSkillsWrapper>
                  <SoftSkillsColumnWrapper>
                    <SoftSkillsSkills>{ text.SOFT_SKILLS_SKILLS1 }</SoftSkillsSkills>
                    <SoftSkillsSkills>{ text.SOFT_SKILLS_SKILLS2 }</SoftSkillsSkills>
                  </SoftSkillsColumnWrapper>
                  <SoftSkillsColumnWrapper>
                    <SoftSkillsSkills>{ text.SOFT_SKILLS_SKILLS3 }</SoftSkillsSkills>
                    <SoftSkillsSkills>{ text.SOFT_SKILLS_SKILLS4 }</SoftSkillsSkills>
                  </SoftSkillsColumnWrapper>
                </SoftSkillsSkillsWrapper>
              </SoftSkillsTextContainer>
            </SoftSkillsCard>
          </SoftSkillsContainer>
          <DevDesignContainer>
            <SubTitle>{ text.TECH_SKILLS_TITLE }</SubTitle>
            <DevDesignContent>
              <DevDesignCard>
                <TechSkillImage src={ devDesignImg }/>
                <TechSkillsTextContainer>
                  <TechSkillsText>{ text.TECH_SKILLS_TEXT }</TechSkillsText>
                  <TechSkillsSkillsWrapper>
                  <TechSkillsColumnWrapper>
                    <TechSkillsSkills>{ text.TECH_SKILLS_SKILLS1 }</TechSkillsSkills>
                    <TechSkillsSkills>{ text.TECH_SKILLS_SKILLS2 }</TechSkillsSkills>
                  </TechSkillsColumnWrapper>
                  <TechSkillsColumnWrapper>
                    <TechSkillsSkills>{ text.TECH_SKILLS_SKILLS3 }</TechSkillsSkills>
                    <TechSkillsSkills>{ text.TECH_SKILLS_SKILLS4 }</TechSkillsSkills>
                  </TechSkillsColumnWrapper>
                </TechSkillsSkillsWrapper>
                </TechSkillsTextContainer>
              </DevDesignCard>
              <TechnologiesWrapper>
                <SkillsAnimation></SkillsAnimation>
              </TechnologiesWrapper>
            </DevDesignContent>
          </DevDesignContainer>
        </SkillsWrapper>
      </CenterLayout>
    </CenterLayoutContainer>
    </ThemeProvider>
  );
};

export default Skills;
