import React from 'react';
import * as Yup from 'yup';
import axios from 'axios';
import { Formik } from 'formik';
import { Button, Form, Input } from 'semantic-ui-react';

import './Login.scss';

const Register = (props) => {
  return ( 
      <Formik 
      initialValues={{
          email: '',
          password: '',
      }}
      validationSchema={Yup.object().shape({
        email: Yup.string()
          .required()
          .email(),
        password: Yup.string()
          .required()
          .min(6)
      })}
      onSubmit={(values, actions) => {
          console.log(values);
          actions.setSubmitting(true);
            axios
              .post('/api/login', values)
              .then((response) => {
                props.history.push('/');
              })
              .catch((e) => {
                console.log(e.response.data);
              });
          }
      }
      render={props => 
          (
              <Form style={{display:'flex', flexDirection:'column', alignItems:'center'}} onSubmit={props.handleSubmit}>
              <Form.Field
              control={Input}
              label='email'
              name='email'
              id='email'
              type='text'
              onChange={props.handleChange}
              value={props.values.email}
              width='4'
              />

              <Form.Field
              control={Input}
              label='password'
              name='password'
              id='password'
              type='text'
              onChange={props.handleChange}
              value={props.values.password}
              width='4'
              />

              <Button type='submit'>Submit</Button>
          </Form>
          )
      }
      />
   );
}

export default Register;