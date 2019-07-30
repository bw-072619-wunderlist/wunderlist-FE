import React from 'react';
import { Route, Link, Redirect } from 'react-router-dom';

import './App.scss';
import Home from './components/Home/Home'
import Login from './components/Login/Login'
import Register from './components/Login/Register'
import editProfile from './components/Profile/editProfile';
// import Profile from './components/Profile/profileCard';
import AccordionExampleStandard from './components/Profile/SideNav';
import TaskDisplay from './components/TaskDisplay/TaskDisplay'

function App() {
  return (
    <div className="app-container">
      <Route exact path="/" component={Home} />
      <Route exact path='/login' render={(props) => <Login {...props} />} />
      <Route exact path='/register' render={(props) => <Register {...props} />} />
      {/* <Route exact path="/profile" component={Profile} /> */}
      <Route exact path="/profile" component={AccordionExampleStandard} />
      <Route exact path="/profile/edit" component={editProfile} />
      <Route path='/task/:id' component={TaskDisplay} />
    </div>
  );
}

export default App;