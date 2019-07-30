import React, { useState } from 'react';
import * as Yup from 'yup';
import axios from 'axios';
import { Button, Form, Input } from 'semantic-ui-react';

import './Login.scss';

const Register = (props) => {
  const [register, setRegister] = useState({
    email: '',
    username: '',
    password: '',
    password2: ''
  })

  const handleSubmit = event => {
    event.preventDefault();
    console.log(register)
    axios
      .post('api/register', register)
      .then(response => {
        localStorage.setItem('token', response.data)
      })
      .then(props.history.push('/'))
      .catch(response => {
        console.log(response.error)
      })
  }

  const handleChange = event => {
    setRegister({ [event.target.name]: event.target.value });
  };

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
        primary
        // loading={isFetching ? true : false}
        // disabled={isFetching ? true : false}
        type="submit"
      >
        Register
      </Button>
    </Form>
    </div>
    </div>
    
  );
}

export default Register