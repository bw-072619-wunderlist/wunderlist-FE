import React from 'react';
import { Route, Link, Redirect } from 'react-router-dom';
import EditProfile from './components/Profile/EditProfile';
import Profile from './components/Profile/profileCard';
import AccordionExampleStandard from './components/Profile/SideNav';

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
      {/* <Route exact path="/profile" component={Profile} /> */}
      <Route exact path="/profile" component={AccordionExampleStandard} />
      <Route exact path="/profile/edit" component={EditProfile} />
     
    </div>
  );
}

export default App;
