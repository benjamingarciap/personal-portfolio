import React, { useState } from 'react'
import styled, { ThemeProvider } from 'styled-components'
import Modal from './Modal'
import Card from './Card'
import projects from './data'

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  flex-wrap: wrap;
  -webkit-flex-wrap: wrap;
  background-color: #23163B;
  margin-bottom: 100px;
`;

const ProjectsContainer = styled.div`
  display: flex;
  justify-content: center; 
  align-items: center;
  flex-wrap: wrap;
  -webkit-flex-wrap: wrap;
  background-color: #23163B;
`;

const EmptyProject = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  justify-self: flex-start;
  width: 333px;
  height: 500px;
  background-color: #FF3F7F;
  margin-left: 18px;
  margin-top: 18px;
  font-size:1.7em;
  font-weight: bold;
  color: #23163B;

  @media (max-width: 1253px) {
    display: none;
  }

  @media( max-width: 1024px ) and ( max-height: 1366px ) {
    display: flex;
    width: 261px;
    font-size: 1.3em;
  }

  @media( max-width: 800px ) and ( max-height: 1280px ) {
    display: none;
  }
  
  @media( max-width: 768px ) and ( max-height: 1024px ) {
    display: none;
  }


`;

export const Projects = () => {
  const [modal, setModal] = useState({ modal:false });
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedTitle, setSelectedTitle] = useState(null);

  const openModal = (image, title) => {
      setModal({ modal:true })
      setSelectedImage(image)
      setSelectedTitle(title)
  }

  const closeModal = () => {
      setModal({ modal:false })
  }

  return (
    <Wrapper>
      <ProjectsContainer>
        { projects.map(( project, index )=>{
          return  <Card     
                    key={ index }    
                    title={ project.title }    
                    images={ project.images }    
                    description={ project.description }    
                    technologies={ project.technologies }    
                    github={ project.github }    
                    openModal={ openModal }
                  />
        })}
        <EmptyProject><p>More comming soon</p></EmptyProject>
        <ThemeProvider theme={modal}>
          <Modal close={ closeModal } imageSrc={ selectedImage } caption={selectedTitle} />
        </ThemeProvider>
      </ProjectsContainer>
    </Wrapper>
  )
};

export default Projects;
