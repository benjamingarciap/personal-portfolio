import React from 'react'
import { Link, animateScroll as scroll } from "react-scroll";
import Components from'./NavBarComponents';
import logo from '../../assets/logo.svg'
import navBarIds from '../../shared/constants/navBarIds'
import texts from '../../shared/constants/dictionary'

const Navbar = props => {

  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  const { NavBarContainer, NavBarWrapper, LogoWrapper, Logo, NavBarListWrapper, NavItem } = Components;
  
  return (
    <NavBarContainer id={ navBarIds.NAVBAR } >
        <NavBarWrapper hide={ props.position === 'dissapear' ? true : null } >
          <LogoWrapper>
              <Logo src={logo} alt="Logo" onClick={ scrollToTop }/> 
          </LogoWrapper>
          <NavBarListWrapper>
            <NavItem>
              <Link to={ navBarIds.ABOUT } smooth={ true } duration={ 500 }>{ texts.NAVBAR_ABOUT }</Link>
            </NavItem>
            <NavItem>
              <Link to={ navBarIds.SKILLS } smooth={ true } duration={ 500 }>{ texts.NAVBAR_SKILLS }</Link>
            </NavItem>
            <NavItem>
              <Link to={ navBarIds.WORK } smooth={ true } duration={ 500 }>{ texts.NAVBAR_WORK }</Link>
            </NavItem>
            <NavItem>
              <Link to={ navBarIds.CONTACT } smooth={true} duration={500}>{ texts.NAVBAR_CONTACT }</Link>
            </NavItem>
          </NavBarListWrapper>
      </NavBarWrapper>
    </NavBarContainer>
  );
};

export default Navbar;
