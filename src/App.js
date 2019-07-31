import React from 'react';
import { Route } from 'react-router-dom';

import PrivateRoute from './utils/PrivateRoute'
import { UserContext } from './contexts/UserContext';

import './App.scss';
import Home from './components/Home/Home'
import Login from './components/Login/Login'
import Register from './components/Login/Register'
import editProfile from './components/Profile/editProfile';
// import Profile from './components/Profile/profileCard';
import AccordionExampleStandard from './components/Navigation/SideNav';
import TaskDisplay from './components/TaskDisplay/TaskDisplay'
import CreateTask from './components/CreateTask/CreateTask'

function App() {
  return (
    <div className="app-container">
      {/* <UserContext.Provider value={{ user }}> */}
        <PrivateRoute exact path="/" component={Home} />
        <Route exact path='/login' render={(props) => <Login {...props} />} />
        <Route exact path='/register' render={(props) => <Register {...props} />} />
        {/* <Route exact path="/profile" component={Profile} /> */}
        <PrivateRoute exact path="/profile" component={AccordionExampleStandard} />
        <PrivateRoute exact path="/profile/edit" component={editProfile} />
        <PrivateRoute exact path='/create' component={CreateTask} />
        <PrivateRoute exact path='/task/:id' component={TaskDisplay} />
      {/* </UserContext.Provider> */}
    </div>
  );
}

export default App;