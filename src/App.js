import React from 'react';
import { Route } from 'react-router-dom';

// import { UserContext } from './contexts/UserContext';

import './App.scss';
import Login from './components/Login/Login';
import Register from './components/Login/Register'
<<<<<<< HEAD
import editProfile from './components/Profile/editProfile';
// import Profile from './components/Profile/profileCard';
import AccordionExampleStandard from './components/Navigation/SideNav';
import TaskDisplay from './components/TaskDisplay/TaskDisplay'
import TaskModal from './components/TaskModal/TaskModal'
=======
import TaskDisplay from './components/TaskDisplay/TaskDisplay';
import MainPage from './components/Main/Main';

>>>>>>> 2899011c263f39b923b883a157e61a4f457c3345

function App() {
  console.log({ TaskDisplay });

  const token = localStorage.getItem('token');

  if (!token) {
    return (
      <>
        <Route exact path='/login' render={(props) => <Login {...props} />} />
        <Route exact path='/register' render={(props) => <Register {...props} />} />
      </>
    )
  }

  return (
    
    <div className="app-container">
      <MainPage />
      {/* <UserContext.Provider value={{ user }}> */}
<<<<<<< HEAD
        <PrivateRoute exact path="/" component={Home} />
        <Route exact path='/login' render={(props) => <Login {...props} />} />
        <Route exact path='/register' render={(props) => <Register {...props} />} />
        {/* <Route exact path="/profile" component={Profile} /> */}
        <PrivateRoute exact path="/profile" component={AccordionExampleStandard} />
        <PrivateRoute exact path="/profile/edit" component={editProfile} />
        <PrivateRoute exact path='/create' component={TaskModal} />
        <PrivateRoute exact path='/task/:id' component={TaskDisplay} />
      {/* </UserContext.Provider> */}
=======
        {/* </UserContext.Provider> */}
>>>>>>> 2899011c263f39b923b883a157e61a4f457c3345
    </div>
  );
}

export default App;