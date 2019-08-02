import React, {useState} from 'react';
import { Route, Redirect } from 'react-router-dom';

// import { UserContext } from './contexts/UserContext';

import './App.scss';
import Login from './components/Login/Login';
import Register from './components/Login/Register';
import MainPage from './components/Main/Main';


function App() {
  const token = localStorage.getItem('token');

  return (
      <div>
        {!token ? <Route exact path='/' render={() => <Redirect to='/login' />}/> : null}
        <Route exact path='/login' render={(props) => <Login {...props} />} />
        <Route exact path='/register' render={(props) => <Register {...props} />} />
        <div className="app-container">
          {token && <MainPage />}
        </div>
      </div>
  );
}

export default App;