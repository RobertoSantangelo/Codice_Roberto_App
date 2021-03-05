import './App.css';
import React, { useState } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Elencation from './Elencation';
let usern = "";
let passn = "";
function App() {
  return (
    <Router>
      <div>
        <Route exact={true} path="/" component={Home} />
        <Route path='/Elencation' component={Elencation} />
      </div>
    </Router>
  );
}

function Home() {
  const [data, setData] = useState({
    username: "",
    password: ""
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    setData({
      username: usern,
      password: passn
    });
    axios.post("http://localhost:9000/testAPI", data).then(res => {
      console.log(res);
    });
  }
  return (
    <div>
      <div>

        <h1>CIAO A TUTTI</h1>
        <form onSubmit={handleSubmit}>
          <input type='text' placeholder='username' onChange={(e) => {
            usern = e.target.value;
            console.log(usern);
          }
          } required></input>
          <input type='password' placeholder='password' onChange={(e) => {
            passn = e.target.value;
          }} required></input>
          <button type='submit'>Add</button>
        </form>

        <Link to='/Elencation'>
          <div>Vai All'elenco</div>
        </Link>

      </div>
    </div>
  );
}




export default App;
