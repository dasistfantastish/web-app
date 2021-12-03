import React from 'react';
import logo from "./photo/png/logo.png"
import Mainpage from "./Component/Mainpage.js"


function App() {
  return (
   <div className = "body">
     <div className = "registerimtem">
    <img src = {logo} className = "logopng"/>
         <form  className = "registetr">
          <p className = "email">Email  </p>
          <input className = "regiserinput1"  placeholder = "Email"></input>
          <p className = "Name">Name</p>
          <input className = "regiserinput2"  placeholder = "Name"></input>
          <p className = "pasword1">Pasword</p>
          <input className = "regiserinput3"  placeholder = "pasword"></input>
          <p className = "pasword2">Reaet pasword</p>
          <input className = "regiserinput4" placeholder = "Reset"></input>
          <button type = "submit" className = "registorbtn" >
            <p className = "textbtnregist">Next</p>
          </button>
         
     </form>
     </div>
   </div>
  
  )
}

export default App;
