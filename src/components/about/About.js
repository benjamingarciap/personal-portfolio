import React from 'react';
// import Components from'./AboutComponents';
import text from '../../shared/constants/dictionary'
import navBarIds from '../../shared/constants/navBarIds'
import styled from 'styled-components'


const Container = styled.div`
  width: 100%;
	height: 100vh;
	background-color: #23163b;
	position: relative;
  display: grid;
	grid-template-rows: repeat(10, 10%);
	grid-template-columns: repeat(10, 10%);
`;

const Title = styled.h1`
 width: 1212px;
 color: #23163b;
 font-size: 37px;
 letter-spacing: -4px;
 font-family: 'Work Sans', sans-serif;
 text-transform: uppercase;
 font-weight: 500;
 margin: 30px 0 0;
 padding-left: 0.4em;

 grid-column: 1 / 11;
 grid-row: 2 / 2;
 background-color: #FF3F7F;
 align-self: center;
 justify-self: center;
`;

const AboutTextWrapper = styled.div`
 width: 46em;
 grid-area: 3 / 1 / 10 / 5;
 align-self: center;
 justify-self: center;
`;

const AboutText = styled.p`
 color: white;
 font-size: 1.3em;
`;


const CallToActionColumn = styled.div`
 height:443px;
 width: 290px;
 grid-area: 1 / 8 / 10 / 11;
 background-color: green;
 align-self: center;
 justify-self: center;
`;

const CallToActionTextWrapper = styled.div`
  display: flex;
  width: 290px;
  height: 151px;
`;

const ActionCallText = styled.div`
  justify-self: center;
  justify-self: center;
  text-align: center;
  font-size: 30px;
  color: white;
`;

const About = () => { 
  
  // const { Container, Title, AboutTextWrapper, AboutText, Box3} = Components

  return (
    <Container id={ navBarIds.ABOUT }>
      <Title>{ text.ABOUT_TITLE }</Title>
      <AboutTextWrapper>
        <AboutText>{ text.ABOUT_TEXT }</AboutText>
      </AboutTextWrapper>
      <CallToActionColumn>
        <CallToActionTextWrapper>
          <ActionCallText>{ text.ABOUT_ACTION_CALL }</ActionCallText>
        </CallToActionTextWrapper>
      </CallToActionColumn>
    </Container>
  );
};

export default About;