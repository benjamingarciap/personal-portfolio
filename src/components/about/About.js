import React from 'react';
// import Components from'./AboutComponents';
import text from '../../shared/constants/dictionary'
import navBarIds from '../../shared/constants/navBarIds'
import styled from 'styled-components'


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
 color: #23163b;
 font-size: 37px;
 letter-spacing: -2px;
 /* font-family: 'Work Sans', sans-serif; */
 text-transform: uppercase;
 font-weight: 500;
 margin: 30px 0 0;
 padding-left: 0.4em;
 padding-top: 4px;
 background-color: #FF3F7F;
 align-self: center;
 justify-self: center;
`;

const AboutWrapper = styled.div`
 width: 100%;
 display: flex;
 flex-direction: row;
 justify-content: center;
`;

const AboutTextContainer = styled.div`
 height: 443px;
 width: 80%;
 display: flex;
 justify-content: center;
 align-items: center;
 `;

const AboutTextWrapper = styled.div`
  max-width: 80%;
 `;

 const AboutText = styled.p`
  color: white;
  font-size: 1.3em;
 `;

const CallToActionContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 20%;
  height: 443px;
`;

const ActionCallTextWrapper = styled.div`
  max-width: 90%;
  text-align: center;
  font-size: 30px;
`;

const ActionCallText = styled.p`
  text-align: center;
  font-size: 30px;
  color: white;
`;

const AboutButtonsContainer = styled.div`
  width: 100%;
  height: 169px;
  margin: 20px 0 0 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

const ButtonResume = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-size: 27px;
  height: 50px;
  width: 100%;
  padding: 15px 32px;
  color: white;
  border: 1px solid #FF3F7F;
  background-color: #23163b;   
  /* background-color: white;   */
  cursor: pointer;
  text-decoration: none;
  transition: 0.5s;

  :hover{
    border: 1px solid #FF3F7F;
    background-color: #FF3F7F; 
    color: white;
  }
  :focus {
    outline: none;
  }
`;

const About = () => { 
  
  // const { Container, Title, AboutTextWrapper, AboutText, Box3} = Components

  return (
    <CenterLayoutContainer id={ navBarIds.ABOUT }>
      <CenterLayout>
        <Title>{ text.ABOUT_TITLE }</Title>
        <AboutWrapper>
          <AboutTextContainer>
            <AboutTextWrapper>
              <AboutText>{ text.ABOUT_TEXT }</AboutText>
            </AboutTextWrapper>
          </AboutTextContainer>
          <CallToActionContainer>
            <ActionCallTextWrapper>
              <ActionCallText>{ text.ABOUT_ACTION_CALL }</ActionCallText>
            </ActionCallTextWrapper>
            <AboutButtonsContainer>
              <ButtonResume>Resume</ButtonResume>
              <ButtonResume>Resume</ButtonResume>
              <ButtonResume>Resume</ButtonResume>
            </AboutButtonsContainer>
          </CallToActionContainer>
        </AboutWrapper>
      </CenterLayout>
    </CenterLayoutContainer>
  );
};

export default About;
