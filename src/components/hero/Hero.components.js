import styled, { keyframes } from 'styled-components';
import animations from '../../shared/styles/animations';

const HeroContainer = styled.div`
  z-index: 1;
  display: flex;
	justify-content: center;
  align-items: center;
  height: 100vh;
  width:100%;
`;

const HeroGreeting = styled(animations.Flicker)`
  height: 21px;
	margin:0;
  max-width: 516px;
  display: block;
  color:#FF3F7F;
  padding: 0 10px;
  font-weight: 300;
  font-size: 1.5em;
  opacity: 0;
  animation-delay: 0.8s;

  @media (max-width: 979px) {
    font-size: 1.2em;
  }
  @media (max-width: 414px) {
    /* background-color: rgba(252, 64, 123, 0.36); */
    background-color: rgba(35, 22, 59, 0.72);
  }
  @media (max-width: 280px) {
    font-size: 0.9em;
    height: 12px;
  }
`;

const HeroTextContainer = styled.div`
  /* margin: 2% 20% 0 0; */
  z-index: 15;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;

  @media (max-width: 540px) and (max-height: 720px) {
    margin: 0;
  }
  @media (max-width: 414px) {
    margin: 0;
  }
`;

const HeroTitle = styled(animations.Flicker)`
  color: white;
  font-size: 4em;
	letter-spacing: -4px;
	font-family: 'Work Sans', sans-serif;
	text-transform: uppercase;
  font-weight: 500;
	margin: 0;
	padding-left: 5px;
  opacity: 0;
  animation-delay: 0.8s;

  @media (max-width: 979px) {
    font-size: 3em;
  }
  @media (max-width: 540px) and (max-height: 720px) {
    font-size: 2.6em;
  }
  @media (max-width: 414px) {
    font-size: 2em;
  }
  @media (max-width: 360px) {
    font-size: 1.9em;
  }
  @media (max-width: 280px) {
    font-size: 1.5em;
  }
`;

const HeroSubtitle = styled(animations.textRevealer)`
  color: #23153c;
  font-size: 4em;
	letter-spacing: -4px;
	font-family: 'Work Sans', sans-serif;
	text-transform: uppercase;
  font-weight: 500;
	margin: 0;
	padding-left: 5px;
  opacity: 1;
  background-color: #FF3F7F;
  padding: 0px 20px 0px 20px;
  animation-delay: 1.3s;

  @media (max-width: 979px) {
    font-size: 3em;
  }
  @media (max-width: 540px) and (max-height: 720px) {
    font-size: 2.6em;
  }
  @media (max-width: 414px) {
    font-size: 2em;
  }
  @media (max-width: 360px) {
    font-size: 1.9em;
  }
  @media (max-width: 280px) {
    font-size: 1.5em;
  }
`;

const HeroSlogan = styled(animations.Flicker)`
  margin:0;
  max-width: 516px;
  display: block;
  color:#FF3F7F;
  padding: 10px;
  font-weight: 300;
  font-size: 2.3em;
  opacity: 0;
  @media (max-width: 979px) {
    font-size: 1.8em;
  }
  @media (max-width: 414px) {
    font-size: 1.3em;
  }
  @media (max-width: 280px) {
    font-size: 0.9em;
  }
`;

const FadeIn = () => {
	return keyframes`
		from { opacity: 0; }
    to   { opacity: 1; }
  `
};

const BackgroundAnimation = styled.div`
  height: 100vh;
	z-index: 10;
	position: absolute;
	width: 100%;
  opacity: 0;
  -webkit-animation: ${ FadeIn } 2s; /* Safari, Chrome and Opera > 12.1 */
  -moz-animation: ${ FadeIn } 2s; /* Firefox < 16 */
  -ms-animation: ${ FadeIn } 2s; /* Internet Explorer */
  -o-animation: ${ FadeIn } 2s; /* Opera < 12.1 */
  animation: ${ FadeIn } 2s;  
  animation-fill-mode: forwards;
`;

const Glitch = animations.Glitch;

const AutoComplete = animations.AutoComplete;

const HeroComponents = {
  HeroContainer: HeroContainer,
  HeroGreeting: HeroGreeting, 
  HeroTextContainer: HeroTextContainer,
  HeroTitle: HeroTitle,
  HeroSubtitle: HeroSubtitle, 
  HeroSlogan: HeroSlogan,
  BackgroundAnimation: BackgroundAnimation,
  AutoComplete: AutoComplete,
  Glitch: Glitch
};

export default HeroComponents;