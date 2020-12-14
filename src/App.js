import React, { useEffect, useState } from 'react';
import './App.scss';
import NavBar from './components/navBar/NavBar'
import Hero from './components/hero/Hero'
import About from './components/about/About'
import Projects from './components/projects/Projects'
import { Normalize } from 'styled-normalize';


export default function App() {

  var previousPosition =  document.documentElement.scrollTop

  const[scrollNav, setScrollNav] = useState({ position: 'show'})
  const[scrollAbout, setScrollAbout] = useState({ 
    title: 'hidden', 
    paragraph:'hidden' 
  })
  const[scrollProjects, setScrollProjects] = useState({ 
    title: 'hidden', 
    paragraph: 'hidden' 
  })
 
  const handleAnimation = () => {       
    let currentPosition = document.documentElement.scrollTop
    //  console.log(currentPosition);
     //navbar 
     if (previousPosition < currentPosition ) { 
      //  console.log("----------------------------------------------------------") 
       setScrollNav({ position: 'dissapear' });  
     }
     else if (currentPosition < previousPosition ) {  
       setScrollNav({ position: 'show' });  
     }
     //changes value of prevScrollpos
     previousPosition = currentPosition;
     //about
     if (currentPosition > 211) {   
       setScrollAbout({ paragraph: 'visible', title: 'visible', background: 'visible'});  
     }
     //projects
     if (currentPosition > 963) {   
       setScrollProjects({ paragraph: 'visible', title: 'visible' });  
     }
  }

  useEffect(()=>{
    window.onscroll = () => handleAnimation()
  }, [])

    return (
      <div className="App">
        <Normalize />
        <NavBar position={scrollNav.position}/>
        <Hero/>
        <About title={scrollAbout.title} paragraph={scrollAbout.paragraph} background={scrollAbout.background}/>
        <Projects title={scrollProjects.title} paragraph={scrollProjects.paragraph}/>
      </div>
    )
  }


