import React from 'react';
import styled from 'styled-components';

const ModalWrapper = styled.div`
  /* display: none; */
  display: ${props => { if(props.theme.modal === true){return `block;`} else{ return `none;`}}};
  position: fixed;
  z-index: 100000000;
  padding-top: 100px;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgb(0,0,0);
  background-color: rgba(0,0,0,0.9); 

  @media (max-width: 414px) {
    display: none;
  }
`;

const Close = styled.span`
  position: absolute;
  top: 15px;
  right: 35px;
  color: #f1f1f1;
  font-size: 40px;
  font-weight: bold;
  transition: 0.3s;
  :hover,
  :focus {
    color: #bbb;
    text-decoration: none;
    cursor: pointer;
  }
`;

const ModalImg = styled.img`
  margin: auto;
  display: block;
  width: 40%;
  max-width: 700px;
`;

const Caption = styled.div`
  margin: auto;
  display: block;
  width: 80%;
  max-width: 700px;
  text-align: center;
  color: #ccc;
  padding: 10px 0;
  height: 150px;
`;

export const Modal = (props) => {
  return (
    <ModalWrapper>
      <Close onClick={ props.close }>&times;</Close>
      <ModalImg src={ props.imageSrc } />
      <Caption>{ props.caption }</Caption>
    </ModalWrapper>
  )
};

export default Modal;
