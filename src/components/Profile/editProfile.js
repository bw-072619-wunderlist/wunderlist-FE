import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
import { Button, Header, Image, Modal, Form, Checkbox } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import './editProfile.scss';

import Login from '../Login/Login';


const EditProfile = (props) => {
    console.log(props);

    const person = props.person;
    const setPerson = props.setPerson;

    // JSON.parse(props.data);
    // const data = JSON.parse(localStorage.getItem('data')) || { id: 0, avatar: "", username: "", email: "", notify: true, password: "", token: "" };
    // const [person, setPerson] = useState(data);

    // const { id, avatar, username, email, notify, password } = data;
    
    // useEffect(() => {
    //     localStorage.setItem('data', JSON.stringify(person))
    // }, [person]);
        
//   const mockPerson = {
//       id: 0, avatar: 'https://www.pngkey.com/png/detail/115-1150152_default-profile-picture-avatar-png-green.png', username: 'Kayla_Rae', email: 'kayla.rae@example.com', notification: false, password: 'abc'
// };

  console.log(person);

  const editPerson = event => {
      console.log(event);
      console.log(event.target.name);
      console.log(event.target.value);
      setPerson({ ...person, [event.target.name]: event.target.value });
  };

  const toggleNotification = notification => {
      setPerson({ ...person, 'notify': !notification });
  }

  const onSubmit = event => {
      event.preventDefault();
      editPerson(event);
      props.close();
      console.log(person);
  };

  return (
     <>
          <Modal.Header>Edit Profile</Modal.Header>
          <Modal.Content image>
              <Image wrapped size='small' src={person.avatar} circular />
              <Modal.Description>
                  <Header>Edit Picture</Header>
              </Modal.Description>
          </Modal.Content>
          <Form>
              <Form.Field>
                  <label>Username</label>
                  <input placeholder={person.username} value={person.username} name='username' onChange={editPerson} />
              </Form.Field>
              <Form.Field>
                  <label>Email</label>
                  <input placeholder={person.email} value={person.email} name='email' onChange={editPerson} />
                  {/* <Button onClick={onSubmit}>Change Email</Button> */}
              </Form.Field>
              <Form.Field>
                  <label>Get email notifications</label>
                  <label>Off</label>

                  <Checkbox toggle checked={person.notify} name='notify' onChange={() => toggleNotification(person.notify)} />
                  <label>On</label>
              </Form.Field>
              <Form.Field>
                  <label>Password</label>
                  {/* <Button onClick={onSubmit}>Change Password</Button> */}
                  <input placeholder={person.password} value={person.password} name='password' onChange={editPerson} />
                  
              </Form.Field>
          </Form>
          <div className="buttonDiv">
              <Button onClick={onSubmit}>Done</Button>
          </div>
     </>

  );
};


export default EditProfile;
