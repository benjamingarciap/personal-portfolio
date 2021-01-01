// import React, { useState, useEffect, useRef }from 'react';
// import styled, { ThemeProvider } from 'styled-components';
// import Anime, {anime} from 'react-anime';
// import javascript from './../../assets/Technologies/javascript.svg';
// import redux from './../../assets/Technologies/redux.svg';
// import mongodb from './../../assets/Technologies/mongodb.svg';
// import html from './../../assets/Technologies/html.svg';
// import css from './../../assets/Technologies/css.svg';
// import figma from './../../assets/Technologies/figma.svg';
// import adobe from './../../assets/Technologies/adobe.svg';
// import typescript from './../../assets/Technologies/typescript.svg';
// import node from './../../assets/Technologies/node.svg';
// import git from './../../assets/Technologies/git.svg';
// import express from './../../assets/Technologies/express.svg';
// import reactImg from './../../assets/Technologies/react.svg';

// const TechnologyList = [
//   javascript,
//   typescript,
//   node,
//   reactImg,
//   redux,
//   express,
//   html,
//   css,
//   mongodb,
//   git,
//   figma,
//   adobe,
// ];
// const stagger = 100
// const TechnologyImage = styled.img`
//  width: 83.5px;
//  height: 83.5px;

//  transform: ${() => { if( window.scrollY > 916 ){ 
//       // console.log( 'se muestra' ) 
//       return `opacity(100%)`} 
//       else{ 
//         // console.log( window.scrollY > 149, 'no se muestra' ) 
//         return `opacity0);`
//         }}};

//  transition: transform 0.5s ${ props => stagger * props.theme.index}ms ease-in-out;

//  @media( max-width: 280px ) {
//     width: 70px;
//     height: 70px;
//   }

// `

// const Wrapper = styled.div`
// display: flex;
// flex-wrap: wrap;
// justify-content: space-between;
// height: 180px;
// width: 268px;

//   @media( max-width: 280px ) {
//     width: 226px;
//   }
// `
// const SkillsAnimation = () => {

//   // const [state, setstate] = useState(false)
//   // const [count, setcount] = useState(0)
//   // useEffect(() => {
//   //   if(window.scrollY > 916){
//   //     console.log(state)
//   //     setstate(true)
//   //     setTimeout(() => setcount(count+1), 2000);
//   //   }
//   // },[])

//   const startAnimation = () =>  null
//   // console.log('anime', anime)

//   const animeProps = {
//     keyframes: [
//       {opacity: 0},
//       {opacity: 1}
//     ], 
//     duration: 2000,
//     easing:'linear',
//     direction: 'forward',
//     delay: anime.stagger(60),
//     // delay: (el, index) => index * 240,
//     // autoplay: state === true && count === 0 ? true : false,
//     // autoplay: false,
//   }

//   return(
//     <Wrapper>
//       {/* <Anime {...animeProps}> */}
//         { TechnologyList.map( (technology, index)=>{ return <ThemeProvider theme={{index: index}}><TechnologyImage src={technology} key={index}/></ThemeProvider>})}
//       {/* </Anime> */}
//     </Wrapper>
//   )
// }
// export default SkillsAnimation

import React, { Component, useState, useEffect } from 'react';
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
  /* opacity:${ props =>   props.theme.visible.visible ? '1' : '0'};  */
  /* transition: opacity 0.5s ${props => stagger * props.theme.index}ms ease-in-out; */
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