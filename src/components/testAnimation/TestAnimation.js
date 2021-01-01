import React, { Component, useState } from 'react';
import "styled-components/macro";
import styled, { ThemeProvider } from 'styled-components';
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

const TechnologyImage = styled.img`
 width: 83.5px;
 height: 83.5px;
 margin-bottom: 4px;
 opacity:${ props =>  props.theme.visible.visible ? '1' : '0'};
 transition: opacity 0.5s ${props => stagger * props.theme.index}ms ease-in-out;

  @media( max-width: 280px ) {
    width: 70px;
    height: 70px;
  }
`;
const Wrapper = styled.div`
display: flex;
flex-wrap: wrap;
justify-content: space-between;
height: 180px;
width: 259px;

  @media( max-width: 280px ) {
    width: 226px;
  }
`;

const TestAnimation = () => {
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
      // <div css={`
      //   background-color: #5e5c5c;
      //   display:flex;
      // `}>
      <Wrapper>
        <button
          onClick={toggle}
          css={`
            width: 300px;
            padding: 10px;
            border: none;
            cursor: pointer;
            border-radius: 0;
            font-weight: bold;
            &::-moz-focus-inner {
              border: 0;
            }
            &:hover {
              background-color: #cccccc;
            }
            &:active {
              background-color: #eae9e9;
            }
          `}
        >
          TOGGLE
        </button>

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

      // </div>
    );

}

export default TestAnimation


// export default class TestAnimation extends Component {
//   state = {
//     isVisible: false,
//   }
//   theme(index, isVisible) {
//     return {
//       isVisible: isVisible,
//       index: index
//     }
//   }
  
//   render() {

//     return (
//       <div css={`
//         background-color: #5e5c5c;
//         display:flex;
//       `}>

//         <button
//           onClick={this.toggle}
//           css={`
//             width: 300px;
//             padding: 10px;
//             border: none;
//             cursor: pointer;
//             border-radius: 0;
//             font-weight: bold;
//             &::-moz-focus-inner {
//               border: 0;
//             }
//             &:hover {
//               background-color: #cccccc;
//             }
//             &:active {
//               background-color: #eae9e9;
//             }
//           `}
//         >
//           TOGGLE
//         </button>

//            {TechnologyList.map((technology, index) => {
//              return (
//               <ThemeProvider theme={this.theme(index,this.state.isVisible)}>
//               <TechnologyImage
//                 src={technology}
//                 isVisible={this.state.isVisible}
//                 index={index}
//                 name={technology}
//               />
//               </ThemeProvider>
//             )
//           })} 
//       </div>
//     );
//   }
//   toggle = () => {
//     this.setState({ isVisible: !this.state.isVisible })
//   }
// }