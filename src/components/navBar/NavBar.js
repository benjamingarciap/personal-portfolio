import React, { Component } from 'react'
import { Link, animateScroll as scroll } from "react-scroll";
import Logo from '../../assets/logo.png'
import styles from'./NavBar.module.scss'

export default class Navbar extends Component {
  constructor(props) {    
    super(props);     
    this.state = { position: 'hidden', background: 'trasparent'};
  }
   
  scrollToTop = () => {
    scroll.scrollToTop();
  };

  render() {
    const {background, position} = this.props;
    return (
      <nav id={"navbar"} className={ styles.navbar_wrapper }>
          <div 
          className={
          `${styles.navBar} ${background === 'trasparent' ? null : styles.navBar_background} 
          ${position === 'dissapear' ? styles.navBar_dissapear : null}`}
          >
            <Link to="/"><img 
            className={styles.logo} 
            src={Logo}
            alt="Logo"
            onClick={this.scrollToTop}
            /></Link>
            <ul>
              <li>
                <Link 
                to="about"
                activeClass="active"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                >About</Link>
              </li>
              <li>
                <Link 
                to="projects"
                activeClass="active"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                >Projects</Link>
              </li>
              <li>
                <Link 
                to="cv"
                activeClass="active"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                >C.V.</Link>
              </li>
              <li>
                <Link 
                to="contact"
                activeClass="active"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                >Contact</Link>
              </li>
            </ul>
        </div>
          <Link to="#" className={styles.social_link}>github</Link>
      </nav>
    )
  }
}