//import required libraries
import React from 'react';
import ReactDOM from "react-dom";


//custom inline style
const myStyle = {
    snowNight:{
        backgroundColor:"#262424",
        color:"#fff",
        padding:"10px",
        margin:"10px"
    },
    starryNight:{
        backgroundColor:"blue",
        color:"yellow"
    }
}


//inline style
const AppStyle = () => <div>
    <span style={myStyle.snowNight}>Hello there</span>
    </div>

//create component
const App = () => <div>
    <h1>Hello There !!</h1>
    <AppStyle></AppStyle>
    </div>


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