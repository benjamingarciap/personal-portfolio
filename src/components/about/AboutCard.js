import React from 'react';

const Card = (props) => {
  return (
    <div className="card-container">
      <img src={props.image} />
      <h3>{props.title}</h3>
      <p>{props.description}</p>
    </div>
  );
};

export default Card;