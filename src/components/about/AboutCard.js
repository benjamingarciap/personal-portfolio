// import React from 'react';
// import { useSpring, animated } from 'react-spring'


// const Card = (props) => {
//   const calc = (x, y) => [-(y - window.innerHeight / 2) / 20, (x - window.innerWidth / 2) / 20, 1.1]
//   const trans = (x, y, s) => `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`
//   const [pops, set] = useSpring(() => ({ xys: [0, 0, 1], config: { mass: 5, tension: 350, friction: 40 } }))
//   return (
//     <animated.div 
//     className="card-container" 
//     style={{ transform: pops.xys.interpolate(trans) }}
//     onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
//     onMouseLeave={() => set({ xys: [0, 0, 1] })}
//     >
//       <div/>
//       <img src={props.image} />
//       <h3>{props.title}</h3>
//       {/* <p>{props.description}</p> */}
//     </animated.div>
//     // <div className="card-container" >
//     //   <animated.img 
//     //   src={props.image} 
//     //   style={{ transform: pops.xys.interpolate(trans) }}
//     //   onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
//     //   onMouseLeave={() => set({ xys: [0, 0, 1] })}
//     //   />
//     //   <h3>{props.title}</h3>
//     //   <p>{props.description}</p>
//     // </div>
//   );
// };

// export default Card;
import React from 'react';
import styles from './About.module.scss';
import { useSpring, animated } from 'react-spring'

const Project = (props) => {
  // const calc = (x, y) => [-(y - window.innerHeight / 2) / 20, (x - window.innerWidth / 2) / 20, 1.1]
  // const trans = (x, y, s) => `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`
  // const [pops, set] = useSpring(() => ({ xys: [0, 0, 1], config: { mass: 5, tension: 350, friction: 40 } }))
  console.log(props.delay)
  return (
    <animated.div 
    className={ styles.project_card }
    style={{ animationDelay : props.delay}}
    // style={{ transform: pops.xys.interpolate(trans) }}
    // onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
    // onMouseLeave={() => set({ xys: [0, 0, 1] })}
    >
      <img src={props.gif}/>
      <h3>{props.title}</h3>
      <p>{props.description}</p>
    </animated.div>
  );
};

export default Project;