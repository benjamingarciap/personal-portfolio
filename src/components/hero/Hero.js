import React, { Component } from 'react';
import './heroTextAnimation.css';
// import 'normalize.css';
import NET from 'vanta/dist/vanta.net.min';
import * as THREE from 'three';

class Hero extends React.Component {
  constructor(props){
  //   super(props)
  //   this.yourElement = React.createRef()
  //   }
 

  // componentDidMount() {
  //   const yourElement = this.yourElement.current;
  
  //   window.VANTA.NET({
  //     el: "#background-hero",
  //     backgroundColor: 0x16082f,
  //     color: 0x3f82ff,
  //     points: 6.00,
  //     maxDistance: 24.00,
  //     spacing: 16.00
  //   })
  // }

  // componentWillUnmount() {
  //   if (this.effect) this.effect.destroy()
  // }
  super()
    this.vantaRef = React.createRef()
  }
  componentDidMount() {
    this.vantaEffect = NET({
      el: this.vantaRef.current,
      THREE: THREE
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

        {/* <div id="background-hero" ref={this.yourElement} className="animated-background"/> */}
        <div id="background-hero" ref={this.vantaRef} className="animated-background"/>
      </div>

    ) 
  }
}
export default Hero