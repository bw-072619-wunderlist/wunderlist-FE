import React from 'react';
import * as Yup from 'yup';
import axios from 'axios';
import { Formik } from 'formik';
import { Button, Form, Input } from 'semantic-ui-react';

import './Login.scss';

const Login = (props) => {
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
      render={props => (
        <div className='login-container'>
          <div className='login-header'><h2>TASK</h2></div>
          <Form className='form-container' onSubmit={props.handleSubmit}>
          <h4></h4>
          <Form.Field
            control={Input}
            name='email'
            id='email'
            type='text'
            onChange={props.handleChange}
            value={props.values.email}
            width='4'
            />
            {/* <p>{touched.email && errors.email}</p> */}

            <h4></h4>
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
        </div>
        )
      }
      />
   );
}

export default Login;









// function Login({ touched, errors }) {

//   return (
//     <Form className="form">
//       <div className="form-group">
//         <label className="label">Username</label>
//         <Field
//           className="input"
//           name="username"
//           type="username"
//           autoComplete="off"
//         />
//         <p>{touched.username && errors.username}</p>
//       </div>
//       <div className="form-group">
//         <label className="label">Password</label>
//         <Field
//           className="input"
//           name="password"
//           type="password"
//           autoComplete="off"
//         />
//       </div>
//       <p>{touched.password && errors.password}</p>
//       <button className="btn">Submit &larr;</button>
//     </Form>
//   );
// }

// export default withFormik({
//   mapPropsToValues() {
//     return {
//       username: '',
//       password: ''
//     };
//   },
//   validationSchema: Yup.object().shape({
//     username: Yup.string()
//       .required()
//       .min(3),
//     password: Yup.string()
//       .required()
//       .min(6)
//   }),
//   handleSubmit(values, formikBag) {
//     axios
//       .post('/api/login', values)
//       .then((response) => {
//         formikBag.props.history.push('/');
//       })
//       .catch((e) => {
//         console.log(e.response.data);
//       });
//   }
// })(Login);
