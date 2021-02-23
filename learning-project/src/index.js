//import required libraries
import React from 'react';
import ReactDOM from "react-dom";


//create component
const App = () => <div><h1>Hello There !!</h1></div>

//render component
ReactDOM.render(
    <App></App>,
    document.querySelector('#root')
    )


    
//RENDER 2nd COMPONENT    
// const Dpp = () => <div><h1>Hello There 2</h1></div>
// ReactDOM.render(
//     <Dpp></Dpp>,
//     document.querySelector('#rootB')
// )