import React, { useState, useEffect, useRef }from 'react';
import styled from 'styled-components';
import Anime, {anime} from 'react-anime';
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
  redux,
  mongodb,
  html,
  css,
  figma,
  adobe,
  typescript,
  node,
  git,
  express,
  reactImg
];

const TechnologyImage = styled.img`
 width: 83.5px;
 height: 83.5px;
`

const Vis = styled.div`
display: flex;
flex-wrap: wrap;
justify-content: space-between;
height: 180px;
width: 268px;
`
const Twister = styled.div`
  background-color: #FF3F7F;
  height: 89.3px;
  width: 89.3px;
  opacity: 1;
`

const Blue = styled.div`
  background-color: blue;
  height: 30px;
  width: 30px;
`
const Red = styled.div`
  background-color: #FF3F7F;
  height: 30px;
  width: 30px;
`

const Green = styled.div`
  background-color: green;
  height: 30px;
  width: 30px;
`

const SkillsAnimation = () => {
  // const [value, setValue] = useState('1');
  // const [list, setList] = useState([1,2,3,4,5,6,7,8,9,10,11,12]);

  // const onChange = (event) => {
  //   setValue(event.target.value);
  // };

  const animeProps1 = {
    // scale: [
    //   {value: .1, easing: 'easeOutSine', duration: 500},
    //   {value: 1, easing: 'easeInOutQuad', duration: 1200}
    // ],
    // translateX: [0, 100],
    // direction: 'alternate',
    keyframes: [
      // {rotateY: '225deg'},
      {opacity: 0},
      // {rotateY: '0deg'},
      // {rotateY: '180deg'},
      {opacity: 1}
      // {rotateY: '0deg'},
    ], 
    duration: 2000,
    easing:'linear',
    direction: 'reverse',
    delay: anime.stagger(60),
    // endDelay: 2000
  }

  return(
    <Vis>
      <Anime {...animeProps1}>
        { TechnologyList.map( (techology)=> <TechnologyImage src={techology} key={techology}/>)}
      </Anime>
      </Vis>
  )
}
export default SkillsAnimation