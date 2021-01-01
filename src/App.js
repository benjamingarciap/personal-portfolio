import React, { useEffect, useState } from 'react';
import { Normalize } from 'styled-normalize';
import './App.scss';
import styled from 'styled-components';
import NavBar from './components/navBar/NavBar'
import Hero from './components/hero/Hero'
import About from './components/about/About'
import Skills from './components/skills/Skills'
import Work from './components/work/Work'
import Contact from './components/contact/Contact'

const AppLayoutContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100vw;
  background: #23163b;
`;

const AppLayout = styled.div`
  display: flex;
  flex-direction: column;
  align-content: center;
  max-width: 84%;
  /* min-width: 1210px; */
`;

export default function App() {

  var previousPosition =  document.documentElement.scrollTop

  const[scrollNav, setScrollNav] = useState({ position: 'show'})
  const[scrollAbout, setScrollAbout] = useState({ show:false })
  const[scrollSkills, setScrollSkills] = useState({ show:false })
  const[scrollWork, setScrollWork] = useState({ show:false })
  const[scrollContact, setScrollContact] = useState({ show:false })
 
  const handleAnimation = () => {       
    let currentPosition = document.documentElement.scrollTop
     console.log(currentPosition);
     //navbar 
     if (previousPosition < currentPosition ) { 
      //  console.log("----------------------------------------------------------") 
       console.log( window.scrollY) 
       setScrollNav({ position: 'dissapear' });  
     }
     else if (currentPosition < previousPosition ) {  
       setScrollNav({ position: 'show' });  
     }
     //changes value of prevScrollpos
     previousPosition = currentPosition;
     //about
     if (currentPosition > 149) {   
       setScrollAbout({ show: true });
      //  console.log('about')
     }
     //skills
     if (currentPosition > 963) {   
      setScrollSkills({ show: true });  
     }
     //skills
     if (currentPosition > 963) {   
      setScrollSkills({ show: true });  
     }
     //skills
     if (currentPosition > 963) {   
      setScrollSkills({ show: true });  
     }
    //  console.log(window.scrollY)
  }

  useEffect(()=>{
    // window.scrollTo(0, document.documentElement.scrollTop - 1)
    window.scrollTo(0, 0)
    window.onscroll = () => handleAnimation()
  }, [])

    return (
      <div className="App">
        <Normalize/>
        <NavBar position={scrollNav.position}/>
        <AppLayoutContainer>
          <AppLayout>
            <Hero/>
            <About show={scrollAbout}/>
            <Skills show={scrollSkills}/>
            <Work show={scrollWork}/>
            <Contact show={scrollAbout}/>
          </AppLayout>
        </AppLayoutContainer>
      </div>
    )
}
