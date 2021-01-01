import artmad1 from './../../../assets/artmad/1.jpg';
import artmad2 from './../../../assets/artmad/2.jpg';
import artmad3 from './../../../assets/artmad/3.jpg';
import artmad4 from './../../../assets/artmad/4.jpg';
import artmad5 from './../../../assets/artmad/5.jpg';

import rooms1 from './../../../assets/rooms/rooms-1.jpg'
import rooms2 from './../../../assets/rooms/rooms-2.jpg'
import rooms3 from './../../../assets/rooms/rooms-3.jpg'
import rooms4 from './../../../assets/rooms/rooms-4.jpg'
import rooms5 from './../../../assets/rooms/rooms-5.jpg'

import javascript from './../../../assets/Technologies/javascript.svg';
import redux from './../../../assets/Technologies/redux.svg';
import mongodb from './../../../assets/Technologies/mongodb.svg';
import html from './../../../assets/Technologies/html.svg';
import css from './../../../assets/Technologies/css.svg';
import figma from './../../../assets/Technologies/figma.svg';
import adobe from './../../../assets/Technologies/adobe.svg';
import typescript from './../../../assets/Technologies/typescript.svg';
import node from './../../../assets/Technologies/node.svg';
import git from './../../../assets/Technologies/git.svg';
import express from './../../../assets/Technologies/express.svg';
import reactImg from './../../../assets/Technologies/react.svg';


const projects = [
  { 
    title: "Rooms",
    images: [
      rooms1,
      rooms2,
      rooms3,
      rooms4,
      rooms5,
    ], 
    description: 'It’s a social media streaming platform that shares your room with the world.',
    technologies: [reactImg, node, mongodb],
    github: "https://rooms-ih.herokuapp.com/"
  },
  { 
    title: "ArtMad",
    images: [
      artmad5,
      artmad4,
      artmad3,
      artmad2,
      artmad1,
    ], 
    description: 'Artmad is an online art gallery project I made in IronHack',
    technologies: [javascript, node, mongodb],
    github: "https://github.com/ben-cris-art-gallery/ArtMad"
  },
];

export default projects;