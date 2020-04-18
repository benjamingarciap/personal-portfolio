import React from 'react';

const Project = (props) => {
  return (
    <div className='projectCard'>
      <h3>{props.title}</h3>
      <p>{props.description}</p>
      <img src={props.gif}/>

    </div>
  );
};

export default Project;