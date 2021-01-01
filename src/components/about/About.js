import React, { useState } from 'react';
import text from '../../shared/constants/dictionary'
import navBarIds from '../../shared/constants/navBarIds'
import PDF from './../../assets/CV.pdf'
import styled, { ThemeProvider } from 'styled-components'
import animations from '../../shared/styles/animations'

const CenterLayoutContainer = styled.div`
  width: 100%;
	height: 100vh;
	background-color: #23163b;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;

  @media( max-width: 414px ) and ( max-height: 1024px ) {
    height: 150vh;
  } 
  @media (max-width: 360px) {
    height: 150vh;
  }
  @media( max-width: 360px ) and ( max-height: 640px ) {
    height: 170vh;
  } 
  @media( max-width: 280px ) {
    height: 166vh;
  } 
`;

const CenterLayout = styled.div`
    /* display: ${props => { if(props.theme.show === true ){return `block`} else{ return `none;`}}}; */
    display: ${() => { if( window.scrollY > 149 ){ 
      // console.log( 'se muestra' ) 
      return `block`} 
      else{ 
        // console.log( window.scrollY > 149, 'no se muestra' ) 
        return `none;`
        }}};
`;

const Title = styled(animations.textRevealer)`
  color: #23163b;
  font-size: 37px;
  letter-spacing: -2px;
  text-transform: uppercase;
  font-weight: 500;
  margin: 30px 0 0;
  padding-left: 0.4em;
  padding-top: 4px;
  background-color: #FF3F7F;
  align-self: center;
  justify-self: center;
  animation-delay: 500ms;

  @media( max-width: 414px){
    font-size: 28px;
  }
`;

const AboutWrapper = styled.div`
 width: 100%;
 display: flex;
 flex-direction: row;
 justify-content: center;

  @media( max-width: 768px ) and ( max-height: 1024px ){
    justify-content: space-between;
  } 
  @media( max-width: 414px ) and ( max-height: 1024px ){
    flex-direction: column;
    align-items: center;
  } 
`;

const AboutTextContainer = styled.div`
 height: 443px;
 width: 80%;
 display: flex;
 justify-content: center;
 align-items: center;

  @media( max-width: 768px ) and ( max-height: 1024px ){
    width: 59%;
  } 
  @media( max-width: 414px ) and ( max-height: 1024px ){
    width: 100%;
  } 
`;

const AboutTextWrapper = styled.div`
  max-width: 80%;

  @media( max-width: 540px ) and ( max-height: 720px ){
    margin-top: 69px;
  } 
 `;

const AboutText = styled.p`
  color: white;
  font-size: 1.3em;

  @media( max-width: 540px ) and ( max-height: 720px ){
    font-size: 1.2em;
  } 
  @media( max-width: 280px ) {
    font-size: 1.1em;
  } 
`;

const CallToActionContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 20%;
  height: 443px;

  @media( max-width: 1024px ) {
    width: 32%;
  }
  @media( max-width: 768px ) and ( max-height: 1024px ){
    width: 37%;
  }
  @media( max-width: 414px ) {
    width: 89%;
  } 
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

  @media( max-width: 280px ) {
    font-size: 26px;
  } 
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

const ButtonResume = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-size: 27px;
  height: 50px;
  width: 73%;
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

  @media( max-width: 1024px ) {
    width: 71%;
  }
  @media( max-width: 768px ) and ( max-height: 1024px ){
    width: 70%;
  } 
`;

const About = ( props ) => { 
  
  const { show } = props;
  const [state, setstate] = useState(false)
  const trigger = () => setstate(true)

  return (
    <ThemeProvider theme={ show } >
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
                <ButtonResume href={ PDF } target="_blank" >Resume</ButtonResume>
                <ButtonResume href='https://github.com/benjamingarciap' target="_blank">GitHub</ButtonResume>
                <ButtonResume href='https://www.linkedin.com/in/ben-garciapriego/' target="_blank">LinkedIn</ButtonResume>
              </AboutButtonsContainer>
            </CallToActionContainer>
          </AboutWrapper>
        </CenterLayout>
      </CenterLayoutContainer>
    </ThemeProvider>
  );
};

export default About;
