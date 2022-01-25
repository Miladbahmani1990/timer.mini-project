import React from 'react';
import ReactDOM from 'react-dom';

const tick=()=>{

const eleme = 
 <div>

     <h1>
       timer
     </h1>

    <h3>
      it is {new Date().toLocaleTimeString()}
    </h3>
  
 </div>

ReactDOM.render(eleme,document.getElementById('root'));
}




setInterval(() => {
  tick();
}, 1000);
