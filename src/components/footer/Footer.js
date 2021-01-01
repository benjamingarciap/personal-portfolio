import React from 'react';
import styled from 'styled-components'
import text from '../../shared/constants/dictionary'



const FooterWrapper = styled.div`
  background-color: #23163b;
  width: 100%;
  height: 100px;
  min-height: 65px;
  display: flex;
  justify-content: center;
`;

const FooterText = styled.p`
  color: white;
  font-size: 1em;
  margin-top: 3em;
`;

const Footer = (props) => { 

  return (
    <FooterWrapper>
      <FooterText>{ text.FOOTER_TEXT }</FooterText>
    </FooterWrapper>
  );
};

export default Footer;
