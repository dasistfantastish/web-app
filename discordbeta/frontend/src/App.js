import React from 'react';



function App() {
  return (
   <div className = "body">
    
         <form  className = "registetr">
          <p className = "email">Email and number Telephon</p>
          <input className = "regiserinput1"  placeholder = "Email"></input>
          <p className = "Name">Name</p>
          <input className = "regiserinput2"  placeholder = "Name"></input>
          <p className = "pasword1">Pasword</p>
          <input className = "regiserinput3"  placeholder = "pasword"></input>
          <p className = "pasword2">Reaet pasword</p>
          <input className = "regiserinput4" placeholder = "Reset"></input>
          <button type = "submit">Next</button>
         
     </form>
   </div>
  
  )
}

export default App;
