import React, { Component } from 'react';
import './heroTextAnimation.scss';
// import 'normalize.css';
import NET from 'vanta/dist/vanta.net.min';
import * as THREE from 'three';

class Hero extends React.Component {
  constructor(){
    super()
    this.vantaRef = React.createRef()
  }
  componentDidMount() {
    this.vantaEffect = NET({
      el: this.vantaRef.current,
      THREE: THREE,
      color: 0x0,
      backgroundColor: 0xffffff
    })
  }
  componentWillUnmount() {
    if (this.vantaEffect) this.vantaEffect.destroy()
  }

  render() {
    return(
      <div className="hero-container">
        <div className='hero-text-container'> 
        <p className="hero-title reveal-text">Benjamin Garcia</p>
        <p className="hero-title reveal-text">Front-end web developer</p>
        <p className="hero-text">
        Bacon ipsum dolor amet pig pancetta tongue short ribs buffalo pastrami. Drumstick alcatra salami, short loin shankle pork biltong beef ribs corned beef short ribs. Sausage prosciutto pastrami short ribs, fatback shoulder bacon turducken salami buffalo. 
        </p>
        </div> 
        <div id="background-hero" ref={this.vantaRef} className="animated-background"/>
      </div>

    ) 
  }
}
export default Hero