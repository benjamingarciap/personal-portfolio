import React, { Component } from 'react';
//images technologies
import logoNode from '../../assets/node-logo.png'
import logoJS from '../../assets/js-logo.png'
import logoReact from '../../assets/react-logo.png'
import logoHtml from '../../assets/html-logo.png'
import logoCss from '../../assets/css.png'
import logoMongo from '../../assets/mongo-logo.png'
//images skills 
import logoDynamic from '../../assets/dynamic-logo.png'
import logoFix from '../../assets/fix-logo.png'
import logoResponsive from '../../assets/responsive-logo.png'
import logoUser from '../../assets/user-logo.png'


import Card from './AboutCard'

class About extends Component {
  constructor(props) {    
    super(props);     
   }


   render() {
     return (
       <div id="about">
         <h2 className={ this.props.title === 'hidden' ? 'invisible': 'about_title'}>About me</h2>
         <section className='technologies-section'>
           <p className={
             this.props.paragraph === 'hidden' ? 'invisible' : 'about-paragraph'}>Bacon ipsum dolor amet pig pancetta tongue short ribs buffalo pastrami. Drumstick alcatra salami, short loin shankle pork biltong beef ribs corned beef short ribs. Sausage prosciutto pastrami short ribs, fatback shoulder bacon turducken salami buffalo.</p>
           <div className='container-of-technologies'>
             <Card image={logoNode} title="Node"/>
             <Card image={logoJS} title="Javascript"/>
             <Card image={logoReact} title="React"/>
             <Card image={logoHtml} title="HTML 5"/>
             <Card image={logoCss} title="CSS 3"/>
             <Card image={logoMongo} title="Mongo DB"/>
           </div>
         </section>
         <section className='skills-section'>
           <p className={
             this.props.paragraph === 'hidden' ? 'invisible' : 'about-paragraph'}>Bacon ipsum dolor amet pig pancetta tongue short ribs buffalo pastrami. Drumstick alcatra salami, short loin shankle pork biltong beef ribs corned beef short ribs. Sausage prosciutto pastrami short ribs, fatback shoulder bacon turducken salami buffalo.</p>
           <div className='container-of-skills'>
             <Card image={logoDynamic} title="Dynamic websites"/>
             <Card image={logoFix} title="Evolving with technologies"/>
             <Card image={logoUser} title="UX-UI focus"/>
             <Card image={logoResponsive} title="Responsive design"/>
           </div>
         </section>
       </div>
     );
   }
};


export default About;