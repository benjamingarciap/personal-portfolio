import React, { useEffect, useState } from 'react';
import './App.css';
import NavBar from './components/navBar/NavBar'
import Hero from './components/hero/Hero'
import About from './components/about/About'
import AirSpace from './components/AirSpace'
import Projects from './components/projects/Projects'
import 'normalize.css';

export default function App() {

  var previousPosition =  document.documentElement.scrollTop

  const[scrollNav, setScrollNav] = useState({ position: 'show', background: 'trasparent' })
  const[scrollAbout, setScrollAbout] = useState({ 
    title: 'hidden', 
    paragraph:'hidden' 

  })
 
  const handleAnimation = () => {       
    let currentPosition = document.documentElement.scrollTop
     //console.log(currentPosition);
     //navbar 
     if (previousPosition < currentPosition ) { 
       console.log("----------------------------------------------------------") 
       setScrollNav({ position: 'dissapear' });  
     }
     else if (currentPosition < previousPosition ) {  
       setScrollNav({ position: 'show' });  
     }
     //changes value of prevScrollpos
     previousPosition = currentPosition;
     

     //about
     if (currentPosition > 184) {   
       setScrollAbout({ paragraph: 'visible' });  
     }
  }

  useEffect(()=>{
    window.onscroll = () => handleAnimation()
  }, [])

    return (
      <div className="App">
      <NavBar test={'test'} background={scrollNav.background} position={scrollNav.position}/>
      <Hero/>
      <AirSpace/> 
      <About title={scrollAbout.title} paragraph={scrollAbout.paragraph}/>
      <Projects/>
      </div>
    )
  }


