import React, { useState, useEffect } from 'react';
import styles from './About.module.scss';
import Project from './AboutCard'
import roomsGif from '../../assets/rooms.gif'
import data from './data.js'
//images technologies
import logoNode from '../../assets/node-logo.png'
import logoJS from '../../assets/js-logo.svg'
import logoReact from '../../assets/react-logo.png'
import logoHtml from '../../assets/html-logo.png'
import logoCss from '../../assets/css.png'
import logoMongo from '../../assets/mongo-logo.png'
//images skills 
import logoDynamic from '../../assets/dynamic-logo.png'
import logoFix from '../../assets/fix-logo.png'
import logoResponsive from '../../assets/responsive-logo.png'
import logoUser from '../../assets/user-logo.png'

const Projects = props => { 
  const [title, setTitle] = useState(props);
  const [paragraph, setParagraph] = useState(props);
  const [background, setBackground] = useState(props);
  const [projects, setProjects] = useState(data);
  useEffect(() => {
    setTitle(props);
    setParagraph(props)
    setBackground(props)
  }, [props]);
  // console.log(projects)
  return (
    <div className={ `${ background.background === 'visible' && styles.background_animation } ${ styles.projects_container}` } id='about'>
      {/* <div id="about"/>  */}
      <div className={ styles.projects_wrapper }>
          { projects.map( project => <Project gif={project.img} title={project.title} delay={project.delay}/> ) }
      </div>
      <div className={ styles.projects_header } >
        <h2 className={ title.title === 'hidden' ? 'invisible' : 'section_title' }>Project Portfolio</h2>
        <p className={ paragraph.paragraph === 'hidden' ? 'invisible' : 'paragraph-animation' }>Bacon ipsum dolor amet pig pancetta tongue short ribs buffalo pastrami. Drumstick alcatra salami, short loin shankle pork biltong beef ribs corned beef short ribs. Sausage prosciutto pastrami short ribs, fatback shoulder bacon turducken salami buffalo.</p>
      </div>
    </div>
  );
};

export default Projects;


// import React, { Component } from 'react';
// import '../common/common.module.scss';
// import styles from './About.module.scss';
// //images technologies
// import logoNode from '../../assets/node-logo.png'
// import logoJS from '../../assets/js-logo.svg'
// import logoReact from '../../assets/react-logo.png'
// import logoHtml from '../../assets/html-logo.png'
// import logoCss from '../../assets/css.png'
// import logoMongo from '../../assets/mongo-logo.png'
// //images skills 
// import logoDynamic from '../../assets/dynamic-logo.png'
// import logoFix from '../../assets/fix-logo.png'
// import logoResponsive from '../../assets/responsive-logo.png'
// import logoUser from '../../assets/user-logo.png'


// import Card from './AboutCard'

// class About extends Component {
//   constructor(props) {    
//     super(props);     
//    }
   
//   //  render() {
//   //    return (
//   //      <div id="about">
//   //        <h2 className={ this.props.title === 'hidden' ? 'invisible': 'hero-title reveal-text'}>About me</h2>
//   //        <section className='technologies-section'>
//   //          <p className={ this.props.paragraph === 'hidden' ? 'invisible' : 'paragraph-animation'}>Bacon ipsum dolor amet pig pancetta tongue short ribs buffalo pastrami. Drumstick alcatra salami, short loin shankle pork biltong beef ribs corned beef short ribs. Sausage prosciutto pastrami short ribs, fatback shoulder bacon turducken salami buffalo.</p>
//   //          <div className='container_of_technologies'>
//   //            <Card image={logoNode} title="Node"/>
//   //            <Card image={logoJS} title="Javascript"/>
//   //            <Card image={logoReact} title="React"/>
//   //            <Card image={logoHtml} title="HTML 5"/>
//   //            <Card image={logoCss} title="CSS 3"/>
//   //            <Card image={logoMongo} title="Mongo DB"/>
//   //          </div>
//   //        </section>
//   //        <section className='skills-section'>
//   //          <p className={
//   //            this.props.paragraph === 'hidden' ? 'invisible' : 'paragraph-animation'}>Bacon ipsum dolor amet pig pancetta tongue short ribs buffalo pastrami. Drumstick alcatra salami, short loin shankle pork biltong beef ribs corned beef short ribs. Sausage prosciutto pastrami short ribs, fatback shoulder bacon turducken salami buffalo.</p>
//   //          <div className='container-of-skills'>
//   //            <Card image={logoDynamic} title="Dynamic websites"/>
//   //            <Card image={logoFix} title="Constant evolution"/>
//   //            <Card image={logoUser} title="UX-UI focus"/>
//   //            <Card image={logoResponsive} title="Responsive design"/>
//   //          </div>
//   //        </section>
//   //      </div>
//   //    );
//   //  }
//    render() {
//      return (
//        <div className={ styles.about_wrapper }>
//          <div className={ this.props.background === 'hidden' ? styles.invisible : styles.reveal_background }>
//            <div id="about" className={ styles.about_tag }/>
//            <div className={ styles.technologies_wrapper } >
//               <div className={ styles.technologies_container }>
//                 <Card image={logoNode} title="Node"/>
//                 <Card image={logoJS} title="Javascript"/>
//                 <Card image={logoReact} title="React"/>
//                 <Card image={logoHtml} title="HTML 5"/>
//                 <Card image={logoCss} title="CSS 3"/>
//                 <Card image={logoMongo} title="Mongo DB"/>
//               </div>
//               <div className={ styles.projectCard }>
//                 <h3 className={ this.props.title === 'hidden' ? 'invisible': 'hero-title reveal-text'}>About me</h3>
//                 <p>Bacon ipsum dolor amet pig pancetta tongue short ribs buffalo pastrami. Drumstick alcatra salami, short loin shankle pork biltong beef ribs corned beef short ribs. Sausage prosciutto pastrami short ribs, fatback shoulder bacon turducken salami buffalo.</p>
//               </div>
//               {/* <div className={ styles.about_title }>
//                 <h2 className={ this.props.title === 'hidden' ? 'invisible': 'hero-title reveal-text'}>About me</h2>
//                 <p></p>
//               </div> */}
//            </div>
//          </div>
//        </div>
//      );
//    }
// };


// export default About;
