import styled from 'styled-components'
import animations from '../../shared/styles/animations'

const NavBarContainer = styled.nav`
  display: flex;
  justify-content: flex-end;
`;

const NavBarWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 1000;
  top: ${props => props.hide === true ? "-60px" : "0px"};
  transition: top 1s;
  position: fixed;
  width: 100%;
  height: 4em;
  background-color: #23153c;
`;

const Logo = styled.img`
  display: inline-block;
  height: 2.5em;
  cursor: pointer; 
`;

const LogoWrapper = styled(animations.textRevealer)`
  margin: 10px 0px 0px 2.2em;
`;

const NavBarListWrapper = styled.ul`
  font-family: 'Hind', sans-serif;
  font-weight: 500;
  font-size: 1.3em;
  margin-right: 50px;
  width: 400px;
  justify-content: space-between;
  display: flex;
  align-items: center;
  height: 25px;
`;

const NavItem = styled(animations.textRevealer)`
  color: #cbcbcb;
  list-style-type:none;
  display: block;
  cursor: pointer;
  text-decoration: none;
  color: #FF3F7F;
  padding:0px;
  width:80px;
  text-align: center;
  line-height: 35px;
  transition: 0.5s;
  :hover {
    color: #ffffff;
    background-color:  #FF3F7F; 
  }
`;

const NavbarComponents = {
  NavBarContainer: NavBarContainer,
  NavBarWrapper: NavBarWrapper, 
  NavBarListWrapper: NavBarListWrapper,
  NavItem: NavItem,
  LogoWrapper: LogoWrapper, 
  Logo: Logo
};

export default NavbarComponents;
