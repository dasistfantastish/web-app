import React, {useState, useEffect} from 'react';
import axios from 'axios';
import './App.css';

function App() {
    const [people, setpeople] = useState([])
    useEffect( () => {
      axios({
        method: "GET",
        url: "http://127.0.0.1:8000/api/test-api/",
      }).then(response =>{
        setpeople(response.data)
      })
    },[])
  return (
<<<<<<< HEAD
    <div className="app">
      <p>Hello world!</p>
=======
    <div className="App">
      <p>Huy!</p>
>>>>>>> 22f02d778143d3b3687fac99b0bc3c1d4771dbf1
      <ul>
        {people.map(p =>(
          <li key={p.id}>{p.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
