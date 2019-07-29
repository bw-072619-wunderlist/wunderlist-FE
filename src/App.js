import React from 'react';
import { Route, Link, Redirect } from 'react-router-dom';

import './App.scss';
import Home from './components/Home/Home'
import Login from './components/Login/Login'

function App() {
  return (
    <div className="app-container">
      <header className="app-header">
        TASK App
      </header>
      <Route exact path="/" component={Home} />
      <Route exact path="/login" component={Login} />
    </div>
  );
}

export default App;
