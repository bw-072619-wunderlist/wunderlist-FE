import React, { useState } from 'react';
import { Redirect, Link } from 'react-router-dom'
import * as Yup from 'yup';
import axios from 'axios';
import { Button, Form, Input } from 'semantic-ui-react';

import './Login.scss';

const Register = (props) => {
  const [register, setRegister] = useState({
    email: '',
    username: '',
    password: '',})

  const [passwordVerif, setPassword] = useState({
    password2: ''
  })

  const token = localStorage.getItem('token')

  const handleSubmit = event => {
    event.preventDefault();
    console.log(register)
    axios
      .post('https://wunderlist-be.herokuapp.com/api/v2/auths/register', register)
      .then(response => {
        localStorage.setItem('token', response.data.token)
      })
      .then(props.history.push('/'))
      .catch(response => {
        console.log(response.error)
      })
  }

  const handleChange = event => {
    setRegister({ ...register,
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
              // loading={this.props.isFetching}
            >
        <h4>Welcome Back!<br />
        Log in here...</h4>
        <Form.Input
          fluid
          placeholder="Email"
          value={register.email}
          name="email"
          onChange={handleChange}
          autoComplete='off'
        />
        <Form.Input
          fluid
          placeholder="Username"
          value={register.username}
          name="username"
          onChange={handleChange}
          autoComplete='off'
        />
        <Form.Input
          fluid
          placeholder="Password"
          value={register.password}
          type="password"
          name="password"
          onChange={handleChange}
          autoComplete='off'
        />

        <Button
          fluid
          size="large"
          // primary
          // loading={isFetching ? true : false}
          // disabled={isFetching ? true : false}
          type="submit"
        >
          Register
        </Button>
      </Form>
      <div className='login-redirect'>
          <h4>By registering, you automatically accept the Terms and Policies of Task app.</h4>
          <Link className='login-link' to='/login'>Have an account? Sign In</Link>
      </div>
      </div>
    </div>
    
  );
}

export default Register