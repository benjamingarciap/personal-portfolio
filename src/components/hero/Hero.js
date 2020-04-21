import React, { Component } from 'react';
import styles from './Hero.module.scss';
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
      backgroundColor: 0xffffff,
      scale: 1.00
    })
  }
  componentWillUnmount() {
    if (this.vantaEffect) this.vantaEffect.destroy()
  }

  render() {
    return(
      <div className={ styles.hero_container }>
        <div className={ styles.hero_text_container }> 
        <p className={`${ styles.hero_title} ${ styles.reveal_text }`}>Benjamin Garcia</p>
        <p className={`${ styles.hero_title } ${ styles.reveal_text }`}>Front-end web developer</p>
        <p className={styles.hero_text}>
        Bacon ipsum dolor amet pig pancetta tongue short ribs buffalo pastrami. Drumstick alcatra salami, short loin shankle pork biltong beef ribs corned beef short ribs. Sausage prosciutto pastrami short ribs, fatback shoulder bacon turducken salami buffalo. 
        </p>
        </div> 
        <div id={styles.background_hero} ref={this.vantaRef} className={styles.animated_background}/>
      </div>
    ) 
  }
}
export default Hero