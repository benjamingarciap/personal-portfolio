import React from 'react';
import text from '../../shared/constants/dictionary'
import navBarIds from '../../shared/constants/navBarIds'
import styled, { ThemeProvider } from 'styled-components'
import Projects from './projects/Projects'
import animations from '../../shared/styles/animations'


const CenterLayoutContainer = styled.div`
  width: 100%;
	height: 100vh;
	background-color: #23163b;
  display: flex;
  /* display: ${props => { if(props.theme.show === true ){return `flex;`} else{ return `none;`}}}; */
  flex-direction: column;
  justify-content: center;
  align-content: center;

  @media (max-width: 414px) {
    height: 182vh;
  }
`;

const CenterLayout = styled.div`
    display: ${() => { if( window.scrollY > 1594 ){ 
      // console.log( 'se muestra' ) 
      return `block`} 
      else{ 
        // console.log( window.scrollY > 149, 'no se muestra' ) 
        return `none;`
        }}};
`;

const Title = styled(animations.textRevealer)`
  display:flex;
  color: #23163b;
  font-size: 37px;
  letter-spacing: -2px;
  /* font-family: 'Work Sans', sans-serif; */
  text-transform: uppercase;
  font-weight: 500;
  margin: 30px 0 10px 0;
  padding-top: 4px;
  padding-left: 0.4em;
  background-color: #FF3F7F;
  align-self: center;
  justify-self: center;
  animation-delay: 900ms;

  @media( max-width: 414px){
    font-size: 28px;
  }
`;

const SkillsWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
 `;

const Skills = (props) => { 
  
  return (
    <ThemeProvider theme={ props.show } >
      <CenterLayoutContainer id={ navBarIds.WORK }>
        <CenterLayout>
          <Title>{ text.WORK_TITLE }</Title>
          <Projects/>
        </CenterLayout>
      </CenterLayoutContainer>
    </ThemeProvider>
  );
};

export default Skills;
