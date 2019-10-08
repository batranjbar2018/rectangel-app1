import React from 'react';
import Rectangle from './components/Rectangle';

function App() { 
 // const radius=[2,3,4] ;
 //let x,y;
  const dimention=[
    {
      x:20,
      y:30,
    },
    {
      x:30,
      y:30,
    },
    
    {
      x:40,
      y:30,
    },
  ];
const calculateArea=xy=>alert("x*y = " + xy.x*xy.y);  
const drawShap=xy=>{
  var c = document.getElementById("myCanvas");
  document.getElementById("myCanvas").style.padding = "50px 20px 20px 30px"; 
  var ctx = c.getContext("2d");
  ctx.beginPath();
  ctx.rect(xy.x, xy.y, 150, 100);
  ctx.stroke();
};  


  return (
          <React.Fragment>
          {
              dimention.map((xy,index)=><Rectangle  xy={xy} area={calculateArea}shap ={drawShap} Key={index} />)
           }  
            
          </React.Fragment>
         );
  }

export default App;
