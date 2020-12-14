import React, { Component } from 'react';
import NET from 'vanta/dist/vanta.net.min';
import text from '../../shared/constants/dictionary'
import styled from 'styled-components'
import animations from '../../shared/styles/animations'
import * as THREE from 'three';

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

const AutoComplete = animations.AutoComplete;
const Glitch = animations.Glitch;

class Hero extends Component {
  constructor(){
    super()
    this.vantaRef = React.createRef()
  }
  componentDidMount() {
    this.vantaEffect = NET({
      el: this.vantaRef.current,
      // THREE: THREE,
      mouseControls: true,
      touchControls: true,
      gyroControls: false,
      minHeight: 200.00,
      minWidth: 200.00,
      scale: 1.00,
      scaleMobile: 1.00
    })
  }
  componentWillUnmount() {
    if (this.vantaEffect) this.vantaEffect.destroy()
  }

  render() {
    return(
      <HeroContainer>
        <HeroTextContainer> 
          <HeroGreeting>{ text.HERO_GREETING }</HeroGreeting>
          <HeroTitle>{ text.HERO_TITLE }</HeroTitle>
          <HeroSubtitle >{ text.HERO_SUBTITLE }</HeroSubtitle>
          <HeroSlogan>{ text.HERO_TEXT }<Glitch data-text={ text.HERO_TEXT_GLITCH }>{ text.HERO_TEXT_GLITCH }</Glitch><AutoComplete/></HeroSlogan>
        </HeroTextContainer>
        <BackgroundAnimation id={"#background_hero"} ref={this.vantaRef}/>
      </HeroContainer>
    ) 
  }
}
export default Hero
