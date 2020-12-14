import React from 'react';
import Components from'./AboutComponents';
import text from '../../shared/constants/dictionary'
import navBarIds from '../../shared/constants/navBarIds'

const About = () => { 
  return (
    <Components.Container id={ navBarIds.ABOUT }>
      <Components.Title>{ text.ABOUT_TITLE }</Components.Title>
      <Components.AboutTextWrapper>
        <Components.AboutText>{ text.ABOUT_TEXT }</Components.AboutText>
      </Components.AboutTextWrapper>
      <Components.Box3/>
    </Components.Container>
  );
};

export default About;