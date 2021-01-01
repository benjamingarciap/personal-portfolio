import React, { useState } from 'react';
import "styled-components/macro";
import styled, { ThemeProvider, keyframes } from 'styled-components';
import javascript from './../../assets/Technologies/javascript.svg';
import redux from './../../assets/Technologies/redux.svg';
import mongodb from './../../assets/Technologies/mongodb.svg';
import html from './../../assets/Technologies/html.svg';
import css from './../../assets/Technologies/css.svg';
import figma from './../../assets/Technologies/figma.svg';
import adobe from './../../assets/Technologies/adobe.svg';
import typescript from './../../assets/Technologies/typescript.svg';
import node from './../../assets/Technologies/node.svg';
import git from './../../assets/Technologies/git.svg';
import express from './../../assets/Technologies/express.svg';
import reactImg from './../../assets/Technologies/react.svg';

const TechnologyList = [
  javascript,
  typescript,
  node,
  reactImg,
  redux,
  express,
  html,
  css,
  mongodb,
  git,
  figma,
  adobe,
];
const stagger = 100

const staggerAnimation = () => {
  return keyframes`
 	  0% {
	  	opacity: 0;
	  }
 	  50% {
	  	opacity: 0;
	  }
	  100% {
	  	opacity: 1.0;
	  }
  `;
}

const TechnologyImage = styled.img`
  opacity: 0;
  width: 83.5px;
  height: 83.5px;
  margin-bottom: 4px;
  animation-delay: ${props => stagger * props.theme.index}ms;
	animation-name: ${ staggerAnimation };
	animation-duration: 2s;
	animation-fill-mode: forwards;
  @media( max-width: 280px ) {
    width: 70px;
    height: 70px;
  }
`;

const Wrapper = styled.div`
display: flex;
flex-wrap: wrap;
justify-content: space-between;
height: 371px;
width: 266px;

  @media( max-width: 280px ) {
    width: 226px;
  }
`;

const SkillsAnimation = () => {
  const [visible, setvisible] = useState({ visible: false })
  const theme = (index, visible) => {
    return {
      visible: visible,
      index: index
    }
  };

  const toggle = () => {
    setvisible(prevState => ({ visible: !visible.visible }));
  };

  return (
    <Wrapper>
        {TechnologyList.map((technology, index) => {
          return (
           <ThemeProvider theme={theme(index, visible)}>
           <TechnologyImage
             src={technology}
           />
           </ThemeProvider>
         )
         })} 
    </Wrapper>
  );

}

export default SkillsAnimation