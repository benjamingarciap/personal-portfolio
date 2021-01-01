import React, { useState } from 'react'
import styled from 'styled-components'

const CardContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 18px;
  margin-top: 18px;

  @media (max-width: 414px) {
    margin-left: 0;
  }
`;

const CardTitleWrapper = styled.div`
  height: 500px;
  width: 37px;
  background-color: #4A1E47;
  margin-right: 8px;
  display:flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: #FF3F7F; 
  transition: 0.5s;

  :hover{
    
    background-color: #FF3F7F; 
    color: white; 
  }

  @media( max-width: 280px ) {
    width: 22px;
  }
`;

const Link = styled.a`
  text-decoration: none;
`;

const CardTitle = styled.h1`
  transform: rotate(270deg);
  margin: 0;
  padding-top: 5px;
  @media( max-width: 280px ) {
    font-size: 1.3em;
  }

`;

const Square = styled.div`
  width: 288px;
  height: 500px;
  background-color: #4A1E47;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;

  @media( max-width: 1024px ) and ( max-height: 1366px ) {
    width: 216px;
    
  }
  @media( max-width: 768px ) and ( max-height: 1024px ) {
    width: 259px;
  }

  @media( max-width: 280px ) {
    width: 222px;
  }
`;

const ImageWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
`;

const Image = styled.img`
  margin-top: 16px;
  width: 90%;
  cursor: pointer;
`;

const ButtonResume = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-size: 27px;
  height: 23px;
  width: 50px;
  /* padding-top: 22px; */
  padding: 22px 32px 15px 32px;
  color: #FF3F7F;
  border: none;
  background-color: #4A1E47;
  cursor: pointer;
  text-decoration: none;
  transition: 0.5s;

  :hover{
    background-color: #FF3F7F; 
    color: white;
  }

  :focus {
    outline: none;
  }

  :disabled {
      :hover{
      /* border: 1px solid #FF3F7F; */
      background-color: #4A1E47;
      color: #FF3F7F;
    }
  }
`;

const AboutButtonsContainer = styled.div`
  width: 90%;
  height: 23px;
  background-color: #4A1E47;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: 9px;
`;

const AboutButtonsWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Steps = styled.p`
  padding-top: 5px;
  color: #FF3F7F; 
`;

const TextContainer = styled.div`
  height: 100px;
  width: 80%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 9px;
`;

const TextWrapper = styled.div`
  max-width: 80%;
 `;

const Text = styled.p`
  color: white;
  font-size: 0.8em;
  margin: 0;
`;

const StackContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
  margin-bottom: 25px;
`;

const StackWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  width: 162px;
`;

const TechnologyImage = styled.img`
  width: 50px;
  height: 50px;
`;

const TechnologiesWrapper = styled.div`
   display: flex;
   width: 162px;
   justify-content: space-between;
`;

const Title = styled.h1`
  padding-top: 3px;
  display:flex;
  color: #23163b;
  font-size: 19px;
  font-weight: 500;
  margin: 0px 0 7px 0;
  background-color: #FF3F7F;
  width: 100%;
  justify-content: center;
`;

export const Card = (props) => {

  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = props.images.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const setModal = () => {
    props.openModal(props.images[activeStep], props.title)
}

    return (
        <CardContainer>
          <Link href={ props.github } target='blank' >
            <CardTitleWrapper><CardTitle>{props.title}</CardTitle></CardTitleWrapper>
          </Link>
          <Square>
            <div>
              <ImageWrapper>
                <Image src={ props.images[activeStep] } alt={props.title} onClick={ setModal } />
              </ImageWrapper>
              <AboutButtonsWrapper>
                <AboutButtonsContainer>
                  <ButtonResume onClick={handleBack} disabled={ activeStep +1 <= 1 } >&lt;</ButtonResume>
                  <Steps>{`${activeStep + 1}/${maxSteps}`}</Steps>
                  <ButtonResume onClick={handleNext} disabled={ activeStep +1 >= maxSteps } >&gt;</ButtonResume>
                </AboutButtonsContainer>
              </AboutButtonsWrapper>
            </div>
            <TextContainer>
              <TextWrapper>
                <Text>{ props.description }</Text>
              </TextWrapper>
            </TextContainer>
            <StackContainer>
              <StackWrapper>
                <Title>Stack</Title>
                <TechnologiesWrapper>
                    { props.technologies.map( (technology)=> <TechnologyImage src={technology} key={technology}/>)}
                </TechnologiesWrapper>
              </StackWrapper>
            </StackContainer>
          </Square>
        </CardContainer>
    )
};

export default Card;
