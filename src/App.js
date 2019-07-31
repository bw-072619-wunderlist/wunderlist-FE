import React from 'react';
import { Route } from 'react-router-dom';

// import { UserContext } from './contexts/UserContext';

import './App.scss';
import Login from './components/Login/Login';
import Register from './components/Login/Register'
import TaskDisplay from './components/TaskDisplay/TaskDisplay';
import MainPage from './components/Main/Main';


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
        {/* </UserContext.Provider> */}
    </div>
  );
}

export default App;