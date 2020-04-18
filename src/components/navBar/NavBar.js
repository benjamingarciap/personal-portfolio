import React, { Component } from 'react'
import { Link, animateScroll as scroll } from "react-scroll";
import Logo from '../../assets/logo.png'

export default class Navbar extends Component {
  constructor(props) {    
    super(props);     
    this.state = { position: 'hidden', background: 'trasparent'};
    // this.handleAnimationNav2 = this.handleAnimationNav2.bind(this)
   }
   
   scrollToTop = () => {
     scroll.scrollToTop();
   };


  // handleAnimationNav2 = () => {       
  //   let scroll = document.documentElement.scrollTop
  //  console.log(scroll);
  //    if (document.documentElement.scrollTop > 200) {   
  //      this.setState({ background: 'visible' });  
  //    }
  // }
  
  // componentDidMount() {    
  //   this.handleAnimationNav2()
  //   console.log(this.state.background);
  //  window.onscroll = () => this.handleAnimationNav2()
  //  window.addEventListener('scroll', this.handleAnimationNav2);

  // }


  render() {
    return (
      <nav id="navbar">

          <div className={`navBar ${this.props.background === 'trasparent' ? null : 'navBar-background'} ${this.props.position === 'dissapear' ? 'navBar-dissapear' : null}`}>

          <Link to="/"><img 
          className="logo" 
          src={Logo}
          alt="Logo"
          onClick={this.scrollToTop}
          /></Link>
          <ul>

            <li><Link 
            to="about"
            activeClass="active"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            >About</Link>
            </li>

            {/* <li className="point">·</li> */}

            <li><Link 
            to="projects"
            activeClass="active"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            >Projects</Link>
            </li>

            {/* <li className="point">·</li> */}

            <li><Link 
            to="cv"
            activeClass="active"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            >C.V.</Link>
            </li>

            {/* <li className="point">·</li> */}

            <li><Link 
            to="contact"
            activeClass="active"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            >Contact</Link></li>

          </ul>
        </div>
          <Link to="#" className='social-link'>github</Link>
      </nav>

    )
  }
}