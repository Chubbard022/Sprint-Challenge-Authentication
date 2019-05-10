import React from 'react';
import './App.css';
import axios from "axios"
import {Route,NavLink,Link,withRouter} from "react-router-dom"

import Jokes from "./joke/Jokes"
import Login from "./auth/Login"

function App(props) {
  function logout(){
    localStorage.removeItem("jwt")
    props.history.push("/login")
  }
  return (
    <div className="App">
      <header className="App-header">
          <NavLink to="/login" >Login</NavLink>
          <NavLink to="/jokes" >Jokes</NavLink>
          <button onClick={logout}>Logout</button>
          <main>
          <Route path="/login" component={Login}/>
          <Route path="/jokes" component={Jokes}/>
        </main>
      </header>
     
    </div>
  );
}

export default App;
