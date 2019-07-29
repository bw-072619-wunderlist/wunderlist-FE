import React from 'react';
import { withFormik, Form, Field } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';

import './Login.scss';

function Login({ touched, errors }) {

  return (
    <Form className="form">
      <div className="form-group">
        <label className="label">Username</label>
        <Field
          className="input"
          name="username"
          type="username"
          autoComplete="off"
        />
        <p>{touched.username && errors.username}</p>
      </div>
      <div className="form-group">
        <label className="label">Password</label>
        <Field
          className="input"
          name="password"
          type="password"
          autoComplete="off"
        />
      </div>
      <p>{touched.password && errors.password}</p>
      <button className="btn">Submit &larr;</button>
    </Form>
  );
}

export default withFormik({
  mapPropsToValues() {
    return {
      username: '',
      password: ''
    };
  },
  validationSchema: Yup.object().shape({
    username: Yup.string()
      .required()
      .min(3),
    password: Yup.string()
      .required()
      .min(6)
  }),
  handleSubmit(values, formikBag) {
    axios
      .post('/api/login', values)
      .then((response) => {
        formikBag.props.history.push('/');
      })
      .catch((e) => {
        console.log(e.response.data);
      });
  }
})(Login);
