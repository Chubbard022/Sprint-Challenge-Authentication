import React from 'react';
import './App.css';

import User from "./users/User"
import Login from "./auth/Login"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Login />
        <User />
      </header>
    </div>
  );
}

export default App;
