import React, { Component } from 'react';
import NET from 'vanta/dist/vanta.net.min';
import text from '../../shared/constants/dictionary'
import Components from './Hero.components'
import * as THREE from 'three';


class Hero extends Component {
  constructor(){
    super()
    this.vantaRef = React.createRef()
  }
  componentDidMount() {
    this.vantaEffect = NET({
      el: this.vantaRef.current,
      THREE: THREE,
      // mouseControls: true,
      // touchControls: true,
      // gyroControls: false,
      // minHeight: 200.00,
      // minWidth: 200.00,
      // scale: 1.00,
      // scaleMobile: 1.00
      mouseControls: true,
      touchControls: true,
      gyroControls: false,
      minHeight: 200.00,
      minWidth: 200.00,
      scale: 1.00,
      scaleMobile: 1.00,
      points: 5.00,
      maxDistance: 24.00,
      spacing: 13.00
    })
  }
  componentWillUnmount() {
    if (this.vantaEffect) this.vantaEffect.destroy()
  }
  
  render() {
    
    const { Glitch, HeroContainer, HeroTextContainer, HeroGreeting, HeroTitle, HeroSubtitle, HeroSlogan, BackgroundAnimation, AutoComplete} = Components;
    
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
