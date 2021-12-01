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
    <div className="App">
      <p>Hello world!</p>
      <ul>
        {people.map(p =>(
          <li key={p.id}>{p.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
