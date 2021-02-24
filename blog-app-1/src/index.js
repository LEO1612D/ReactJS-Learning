//import required libraries
import React from 'react';
import ReactDOM from "react-dom";
import App from './App';
import WeatherApp from './WeatherApp';



// render blog app
// ReactDOM.render(
//     <App></App>,
//     document.querySelector('#root')
//     )

//render weather app

ReactDOM.render(<WeatherApp></WeatherApp>,document.querySelector('#root'))


