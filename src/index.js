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


//////////// state ///////////////////
 //  برای نمایش تغییرات مقادیر در صفحه 

class Timer1 extends React.Component{
  constructor(){
    super();
    this.state={
      time: new Date().toLocaleTimeString()
    }
  }
  render(){
    setInterval(() => {
      this.setState({
        time: new Date().toLocaleTimeString()
      })
    }, 1000);

    return(
      <h3>
          it is {this.state.time}
      </h3>
    )
  }
}

class Word1 extends React.Component{
  render(){
    return(
      <h1>
          timer by state
      </h1>
    )
  }
}

class App1 extends React.Component{

  render(){
    return (

      <div>

        
        <Word1/>
        <Timer1/>
        
  
      </div>
    )
  }
}

// const mytick=()=>{

ReactDOM.render(<App1/>,document.getElementById("mydiv1"));

//}

// setInterval(() => {
//   mytick();
// }, 1000);