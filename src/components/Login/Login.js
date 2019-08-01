import React, { useState, useContext } from 'react';
import { Redirect, Link } from 'react-router-dom'
import axios from 'axios';
import { Button, Form, Input } from 'semantic-ui-react';

import { UserContext } from '../../contexts/UserContext';

import './Login.scss';

const Login = (props) => {
  console.log(props);
  
  // const { user } = useContext(UserContext)

  const [login, setLogin] = useState({
    email: '',
    password: ''
  })

  const [loading, setLoading] = useState(false)

  const token = localStorage.getItem('token')

  const handleSubmit = event => {
    event.preventDefault();
    setLoading(true)
    console.log(loading)
    console.log(login)
    axios
      .post('https://wunderlist-be.herokuapp.com/api/v2/auths/login', login)
      .then(response => {
        console.log(response)
        setLoading(false)
        localStorage.setItem('token', response.data.token)
        const data = response.data;
        console.log(data);
        localStorage.setItem('token', response.data.token);
        localStorage.setItem('data', JSON.stringify(response.data));
      })
      .then(props.history.push('/'))
      .catch(response => {
        console.log(response.error)
      })
  }

  const handleChange = event => {
    setLogin({
      ...login,
      [event.target.name]: event.target.value });
  };

  if (token) {
    return <Redirect to="/" />;
  }

  return (
    <div className='login-container'>
      <div className='login-header'><h2>TASK</h2></div>
      <div className='form-container'>
        <Form
          size="large"
          onSubmit={handleSubmit}
          loading={loading}
          >
        <h4>Welcome to TASK!</h4>
        <Form.Input
          fluid
          placeholder="Email"
          value={login.email}
          name="email"
          onChange={handleChange}
          autoComplete='off'
        />
        <Form.Input
          fluid
          placeholder="Password"
          value={login.password}
          type="password"
          name="password"
          onChange={handleChange}
          autoComplete='off'
        />
        <Button
          size="large"
          loading={loading ? true : false}
          disabled={loading ? true : false}
          type="submit"
        >
        Sign In
      </Button>
    </Form>
    <div className='login-redirect'>
        <Link className='login-link' to='/register'>New User? Register Here</Link>
      </div>
    </div>
    </div>
  );
}

export default Login