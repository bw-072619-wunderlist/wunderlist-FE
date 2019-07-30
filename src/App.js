import React from 'react';
import { Route, Link, Redirect } from 'react-router-dom';

import './App.scss';
import Home from './components/Home/Home'
import Login from './components/Login/Login'
import Register from './components/Login/Register'

// Testing branch change

function App() {
  return (
    <div className="app-container">
      <Route exact path="/" component={Home} />
      <Route exact path='/login' render={(props) => <Login {...props} />} />
      <Route exact path='/register' render={(props) => <Register {...props} />} />
    </div>
  );
}

export default App;