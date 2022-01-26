import react from 'react';
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



//////////////////// component class ////////////////

class Timer extends React.Component{

  render(){

    return(
      <h3>
          it is {new Date().toLocaleTimeString()}
      </h3>
    )
  }
}

class Word extends React.Component{
  render(){
    return(
      <h1>
          timer by class component
      </h1>
    )
  }
}

class App extends React.Component{

  render(){
    return (

      <div>

        
        <Word/>
        <Timer/>
        
  
      </div>
    )
  }
}

const mytick=()=>{
ReactDOM.render(<App/>,document.getElementById("mydiv"));
}

setInterval(() => {
  mytick();
}, 1000);
