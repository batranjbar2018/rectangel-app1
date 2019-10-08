import React from 'react';
import'./Rectangle.css';

function Rectangle(props) {

 /* const {
    xy: { x,
          y,
          },}=props*/
 
  console.log("props "+props);
 const style = {
 // width: `${props.x}rem`,
 // height: `${props.y}rem`,
  border: `1px solid black`,
  } 

  
  return (
         <div >
         <p>{props.x}</p>
         <p>{props.y}</p>
         <div >
         <canvas   text-align ="center" id="myCanvas" width="300" height="150" style={style} ></canvas>
         </div>
         <div >
         <button onClick={()=>props.area(props.xy)}>Area</button>
         </div>
         </div>
         );
}

export default Rectangle;
