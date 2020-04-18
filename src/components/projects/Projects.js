import React from 'react';
import styles from './Projects.module.css';
import Project from './Project'
import roomsGif from '../../assets/rooms.gif'

const Projects = (props) => { 
  return (
    <div className={ styles.projects_container } id='projects'>
       <h2 className={ styles.about_title }>Project Portfolio</h2>
       <section className='projects-section'>
           <p>Bacon ipsum dolor amet pig pancetta tongue short ribs buffalo pastrami. Drumstick alcatra salami, short loin shankle pork biltong beef ribs corned beef short ribs. Sausage prosciutto pastrami short ribs, fatback shoulder bacon turducken salami buffalo.</p>
           <div className='container-of-technologies'>
             <Project gif={roomsGif} title="Rooms" description="Bacon ipsum dolor amet pig pancetta tongue short ribs buffalo pastrami. Drumstick alcatra salami, short loin shankle pork biltong beef ribs corned beef short ribs. Sausage prosciutto pastrami short ribs, fatback shoulder bacon turducken salami buffalo."/>
           </div>
         </section>
    </div>
  );
};

export default Projects;