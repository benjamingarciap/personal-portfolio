import React from 'react';
// import Components from'./AboutComponents';
import text from '../../shared/constants/dictionary'
import navBarIds from '../../shared/constants/navBarIds'
import styled, { ThemeProvider } from 'styled-components'
import github from './../../assets/contact/github.svg'
import linkedin from './../../assets/contact/linkedin.svg'
import codepen from './../../assets/contact/codepen.svg'
import animations from '../../shared/styles/animations'

const icons = [
  { 
    img: github,
    link: 'https://github.com/benjamingarciap'
  }, 
  { 
    img: linkedin,
    link: 'https://www.linkedin.com/in/ben-garciapriego/'
  }, 
  { 
    img: codepen,
    link: 'https://codepen.io/benjamin-garcia-the-decoder'
  }
];


const CenterLayoutContainer = styled.div`
  width: 100%;
	height: 100vh;
	background-color: #23163b;
  /* display: ${props => { if(props.theme.show === true ){return `flex;`} else{ return `none;`}}}; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
`;

const CenterLayout = styled.div`
  display: ${() => { if( window.scrollY > 2452 ){ 
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
  /* font-family: 'Work Sans', sans-serif; */
  text-transform: uppercase;
  font-weight: 500;
  margin: 30px 0 0;
  padding-left: 0.4em;
  padding-top: 4px;
  background-color: #FF3F7F;
  align-self: center;
  justify-self: center;
  animation-delay: 900ms;
  
  @media( max-width: 414px){
    font-size: 28px;
  }
`;

const AboutWrapper = styled.div`
 width: 100%;
 display: flex;
 flex-direction: row;
 justify-content: center;
`;

const Link = styled.a`
  display: flex;
  align-items:center;
  margin: 0;
`;

const CallToActionContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 30%;
  height: 443px;

  @media( max-width: 1108px){
    width: 40%;
  }
  @media( max-width: 800px) and ( max-height: 1280px){
    width: 54%;
  }
  @media( max-width: 768px) and ( max-height: 1024px){
    width: 56%;
  }
  @media( max-width: 414px) {
    width: 100%;
  }
`;

const ActionCallText = styled.p`
  font-size: 18px;
  color: white;

  @media (max-width: 280px) {
    font-size: 16px;
    text-align: center;
  }
`;

const AboutButtonsContainer = styled.div`
  width: 100%;
  margin: 20px 0 0 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

const ButtonContact = styled.button`
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

const IconWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  height: 100px;
  width: 385px;
  @media( max-width: 414px) {
    justify-content: space-around;
    width: 341px;
  }
  @media( max-width: 280px) {
    justify-content: space-around;
    width: 262px;
  }
`;

const Image = styled.img`
  margin: 0 16px; 
  width: 70px;
  @media( max-width: 414px) {
    width: 59px;
  }
`;

const Contact = (props) => { 
  
  // const { Container, Title, AboutTextWrapper, AboutText, Box3} = Components
  const EmailPrompt = () => window.open('mailto:bengarciadev@gmail.com?subject=subject&body=body');

  return (
    <ThemeProvider theme={ props.show } >
      <CenterLayoutContainer id={ navBarIds.CONTACT }>
        <CenterLayout>
          <Title>{ text.CONTACT_TITLE }</Title>
          <AboutWrapper>
            <CallToActionContainer>
              <ActionCallText>{ text.CONTACT_ACTION_CALL }</ActionCallText>
              <IconWrapper>
                { icons.map((icon)=>{
                  return  <Link href={icon.link} target='blank'><Image src={icon.img} /></Link>
                }) }
              </IconWrapper>
              <AboutButtonsContainer>
                <ButtonContact onClick={ EmailPrompt }>Say Hello</ButtonContact>
              </AboutButtonsContainer>
            </CallToActionContainer>
          </AboutWrapper>
        </CenterLayout>
      </CenterLayoutContainer>
    </ThemeProvider>
  );
};

export default Contact;
