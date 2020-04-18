import React from 'react';
import Card from './ProjectCard'
import roomsGif from './rooms.gif'

const Projects = (props) => {
  return (
    <div className="projects-container" id='projects'>
       <h2 className='about-title'>Project Portfolio</h2>
       <section className='projects-section'>
           <p>Bacon ipsum dolor amet pig pancetta tongue short ribs buffalo pastrami. Drumstick alcatra salami, short loin shankle pork biltong beef ribs corned beef short ribs. Sausage prosciutto pastrami short ribs, fatback shoulder bacon turducken salami buffalo.</p>
           <div className='container-of-technologies'>
             <Card gif={roomsGif} title="Rooms" description="Bacon ipsum dolor amet pig pancetta tongue short ribs buffalo pastrami. Drumstick alcatra salami, short loin shankle pork biltong beef ribs corned beef short ribs. Sausage prosciutto pastrami short ribs, fatback shoulder bacon turducken salami buffalo."/>
           </div>
         </section>
    </div>
  );
};

export default Projects;