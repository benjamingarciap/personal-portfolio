import styled from 'styled-components';
import animations from '../../shared/styles/animations';

const HeroContainer = styled.div`
  z-index: 1;
  display: flex;
	justify-content: flex-start;
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
`;

const HeroTextContainer = styled.div`
  margin: 0px 0px 0px 10em;
  z-index: 15;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
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
  padding:0px 20px 0px 20px;
  animation-delay: 1.3s;
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
`;

const BackgroundAnimation = styled.div`
  height: 100vh;
	z-index: 10;
	position: absolute;
	width: 100%;
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