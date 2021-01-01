import React, { useState } from 'react'
import { Link, animateScroll as scroll } from "react-scroll";
import Components from'./NavBarComponents';
import logo from '../../assets/logo.svg'
import navBarIds from '../../shared/constants/navBarIds'
import texts from '../../shared/constants/dictionary'
import styled, { ThemeProvider } from 'styled-components'

const MobileNav = styled.div`
  overflow: hidden;
  background-color: #23153c;
  position: fixed;
  width: 100%;
  min-height: 65px;
  z-index: 13959214594395;

  @media( min-width: 415px ){
    display: none;
  }
`;

const MobileNavListWrapper = styled.div`
  display: ${ props => { if( props.theme.hamburger === true ){ return `flex;` } else{ return `none;` }}};
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  transition: 1s;
`;

const MobileNavList = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  height: 400px;
  margin-bottom: 92px;
`;

const MobileNavItem = styled.div`
  display: flex;
  justify-content: center;
  color: #FF3F7F;
  text-decoration: none;
  font-size: 26px;
  text-align: right;
  width: 100%;

  :hover {
    background-color: #FF3F7F;
    color: white;
  }
`;

const HamburgerIcon = styled.div`
  color: white;
  display: block;
  position: absolute;
  width: 30px;
  height: 30px;
  right: 44px;
  top: -18px;

  @media( max-width: 280px ) {
    right: 29px;
  }
`;

const Menu =styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  display: flex;
  padding: 0;
  outline: none;
  width: 58px;
  -webkit-tap-highlight-color: transparent;

  @media( max-width: 280px ) {
    width: 44px;
  }
`;

const MobileLogoWrapper = styled.div`
  margin: 11px 0 0 28px;
  
  @media( max-width: 280px ) {
    margin: 16px 0 0 19px;
  }
`;

const SvgImg =styled.svg`

`;
const Line = styled.path`
  fill: none;
  stroke: white;
  stroke-width: 6;
  transition: stroke-dasharray 600ms cubic-bezier(0.4, 0, 0.2, 1),
  stroke-dashoffset 600ms cubic-bezier(0.4, 0, 0.2, 1);
`;

const Line1 = styled(Line)`
  stroke-dasharray: ${ props => { if( props.theme.hamburger === true ){ return `90 207;` } else{ return `60 207;` }}};
  stroke-dashoffset: ${ props => { if( props.theme.hamburger === true ){ return `-134;` } else{ return `;` }}};
  stroke-width: 6;
`;

const Line2 = styled(Line)`
  stroke-dasharray: ${ props => { if( props.theme.hamburger === true ){ return `1 60;` } else{ return `60 60;` }}};
  stroke-dashoffset: ${ props => { if( props.theme.hamburger === true ){ return `-30;` } else{ return `;` }}};
  stroke-width: 6;
`;

const Line3 = styled(Line)`
  stroke-dasharray: ${ props => { if( props.theme.hamburger === true ){ return `90 207;` } else{ return `60 207;` }}};
  stroke-dashoffset: ${ props => { if( props.theme.hamburger === true ){ return `-134;` } else{ return `;` }}};
  stroke-width: 6;
`;

const Navbar = props => {

  const [hamburger, setHamburger] = useState( { hamburger: false } );

  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  const clickHamburger = (e) => {
    if(hamburger.hamburger === false) {
      setHamburger( { hamburger: true } )
    }
    else {
      setHamburger( { hamburger: false } )
    }
  };

  const clickLogo = (e) => setHamburger( { hamburger: false } )
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
      <MobileNav>
          <MobileLogoWrapper onClick={ clickLogo }>
              <Logo src={logo} alt="Logo" onClick={ scrollToTop }/> 
          </MobileLogoWrapper>
          <ThemeProvider theme={ hamburger }>
            <MobileNavListWrapper>
              <MobileNavList>
                <MobileNavItem>
                  <Link onClick={ clickHamburger } to={ navBarIds.ABOUT } smooth={ true } duration={ 500 }>
                    { texts.NAVBAR_ABOUT }
                  </Link>
                </MobileNavItem>
                <MobileNavItem>
                  <Link onClick={ clickHamburger } to={ navBarIds.SKILLS } smooth={ true } duration={ 500 }>
                    { texts.NAVBAR_SKILLS }
                  </Link>
                </MobileNavItem>
                <MobileNavItem>
                  <Link onClick={ clickHamburger } to={ navBarIds.WORK } smooth={ true } duration={ 500 }>
                    { texts.NAVBAR_WORK }
                  </Link>
                </MobileNavItem>
                <MobileNavItem >
                  <Link onClick={ clickHamburger } to={ navBarIds.CONTACT } smooth={ true } duration={ 500 }>
                    { texts.NAVBAR_CONTACT }
                  </Link>
                </MobileNavItem>
              </MobileNavList>
            </MobileNavListWrapper>
          <HamburgerIcon onClick={ clickHamburger }>{   
            <Menu 
                onClick={ clickHamburger }
                aria-expanded
                // onclick="this.classList.toggle('opened');this.setAttribute('aria-expanded', this.classList.contains('opened'))" 
                aria-label="Main Menu"
                aria-expanded={ hamburger.hamburger === true ? true : false }
            >
              <SvgImg width="100" height="100" viewBox="0 0 100 100">
                <Line1  d="M 20,29.000046 H 80.000231 C 80.000231,29.000046 94.498839,28.817352 94.532987,66.711331 94.543142,77.980673 90.966081,81.670246 85.259173,81.668997 79.552261,81.667751 75.000211,74.999942 75.000211,74.999942 L 25.000021,25.000058" />
                <Line2  d="M 20,50 H 80" />
                <Line3  d="M 20,70.999954 H 80.000231 C 80.000231,70.999954 94.498839,71.182648 94.532987,33.288669 94.543142,22.019327 90.966081,18.329754 85.259173,18.331003 79.552261,18.332249 75.000211,25.000058 75.000211,25.000058 L 25.000021,74.999942" />
              </SvgImg>
            </Menu>
          }</HamburgerIcon>
        </ThemeProvider>
      </MobileNav>
    </NavBarContainer>
  );
};

export default Navbar;
