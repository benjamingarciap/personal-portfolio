import styled from 'styled-components'

const Container = styled.div`
  width: 100%;
	height: 100vh;
	background-color: #23163b;
	position: relative;
  display: grid;
	align-content: center;
	grid-template-rows: 30% 70%;
	grid-template-columns: 20% 20% 20% 20% 20%;
`;

const Title = styled.h1`
 width: 76%;
 color: #23163b;
 font-size: 37px;
 letter-spacing: -4px;
 font-family: 'Work Sans', sans-serif;
 text-transform: uppercase;
 font-weight: 500;
 margin: 30px 0 0;
 padding-left: 0.4em;

 grid-column: 1/6;
 background-color: #FF3F7F;
 align-self: center;
 justify-self: center;
`;

const AboutText = styled.p`
 color: white;
 font-size: 1.3em;
`;

const AboutTextWrapper = styled.div`
 width: 46em;
 grid-area: 2 / 1 / 2 / 5;
 align-self: center;
 justify-self: center;
`;

const Box3 = styled.div`
 height:28em;
 width: 15em;
 grid-area: 2 / 4 / 2 / 6;
 background-color: green;
 align-self: center;
 justify-self: center;
`;

const AboutComponents = {
  Container: Container,
  Title: Title, 
  AboutText: AboutText,
  AboutTextWrapper: AboutTextWrapper, 
  Box3: Box3
};

export default AboutComponents;
