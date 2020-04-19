import React from 'react';
import styles from './Projects.module.scss';

const Project = (props) => {
  return (
    <div className={ styles.projectCard }>
      <h3>{props.title}</h3>
      <p>{props.description}</p>
      <img src={props.gif}/>
    </div>
  );
};

export default Project;