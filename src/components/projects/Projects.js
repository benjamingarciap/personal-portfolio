import React, { useState, useEffect } from 'react';
import styles from './Projects.module.scss';
import Project from './Project'
import roomsGif from '../../assets/rooms.gif'

const Projects = props => { 
  const [title, setTitle] = useState(props);
  const [paragraph, setParagraph] = useState(props);
  useEffect(() => {
    setTitle(props);
    setParagraph(props)
  }, [props]);

  return (
    <div className={ styles.projects_wrapper } id="projects">
      <div className={ styles.projects_header } >
        <h2 className={ title.title === 'hidden' ? 'invisible' : 'section_title' }>Project Portfolio</h2>
        {/* {console.log(paragraph.paragraph)} */}
        <p className={ paragraph.paragraph === 'hidden' ? 'invisible' : 'paragraph-animation' }>Bacon ipsum dolor amet pig pancetta tongue short ribs buffalo pastrami. Drumstick alcatra salami, short loin shankle pork biltong beef ribs corned beef short ribs. Sausage prosciutto pastrami short ribs, fatback shoulder bacon turducken salami buffalo.</p>
      </div>
      <div className={ styles.projects_container } >
          <Project gif={roomsGif} title="Rooms" description="Bacon ipsum dolor amet pig pancetta tongue short ribs buffalo pastrami. Drumstick alcatra salami, short loin shankle pork biltong beef ribs corned beef short ribs. Sausage prosciutto pastrami short ribs, fatback shoulder bacon turducken salami buffalo."/>
          <Project gif={roomsGif} title="Rooms" description="Bacon ipsum dolor amet pig pancetta tongue short ribs buffalo pastrami. Drumstick alcatra salami, short loin shankle pork biltong beef ribs corned beef short ribs. Sausage prosciutto pastrami short ribs, fatback shoulder bacon turducken salami buffalo."/>
          <Project gif={roomsGif} title="Rooms" description="Bacon ipsum dolor amet pig pancetta tongue short ribs buffalo pastrami. Drumstick alcatra salami, short loin shankle pork biltong beef ribs corned beef short ribs. Sausage prosciutto pastrami short ribs, fatback shoulder bacon turducken salami buffalo."/>
      </div>
    </div>
  );
};

export default Projects;