import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import axios from 'axios';
import { Button, Form, Input } from 'semantic-ui-react';

import './Login.scss';

const Login = (props) => {
  const [login, setLogin] = useState({
    email: '',
    password: ''
  })

  const [loading, setLoading] = useState(false)

  const handleSubmit = event => {
    event.preventDefault();
    setLoading(true)
    console.log(loading)
    console.log(login)
    axios
      .post('api/login', login)
      .then(response => {
        setLoading(false)
        localStorage.setItem('token', response.data)
      })
      .then(props.history.push('/'))
      .catch(response => {
        console.log(response.error)
      })
  }

  const handleChange = event => {
    setLogin({ [event.target.name]: event.target.value });
  };

  return (
    <div className='login-container'>
      <div className='login-header'><h2>TASK</h2></div>
      <div className='form-container'>
<Form
      size="large"
      onSubmit={handleSubmit}
      loading={loading}
    >
      <h4>Welcome Back!<br />
      Log in here...</h4>
      <Form.Input
        fluid
        placeholder="Email"
        value={login.email}
        name="username"
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
        Sign in
      </Button>
      <div className='login-redirect'>
        <Link className='login-link'>New User? Register Here</Link>
      </div>
    </Form>
    </div>
    </div>
    
  );
}

export default Login