import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button, Header, Image, Modal, Form, Checkbox } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import './editProfile.scss';


const EditProfile = (props) => {
    console.log(props);
    const mockPerson = {
        id: 1, avatar: 'https://react.semantic-ui.com/images/avatar/large/rachel.png', username: 'Kayla_Rae', email: 'kayla.rae@example.com', notification: false, password: 'abc' };
    const [person, setPerson] = useState(mockPerson);

    console.log(person);

    const editPerson = event => {
        console.log(event);
        console.log(event.target.name);
        console.log(event.target.value);
        setPerson({ ...person, [event.target.name]: event.target.value });
    };

    const toggleNotification = notification => {
        setPerson({ ...person, 'notification': !notification });
    }

    const onSubmit = event => {
        event.preventDefault();
        editPerson(event);
        console.log(person);
    };

    return (
        <Modal trigger={<Button>Show Modal</Button>}>
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
                </Form.Field>
                <Form.Field>
                    <label>Get email notifications</label>
                    <label>Off</label>

                    <Checkbox toggle checked={person.notification} name='notification' onChange={() => toggleNotification(person.notification)} />
                    <label>On</label>
                </Form.Field>
                <Form.Field>
                    <label>Password</label>
                    <input placeholder={person.password} value={person.password} name='password' onChange={editPerson} />
                </Form.Field>
            </Form>
            <div className="buttonDiv">
                <Button onClick={onSubmit}>Done</Button>
            </div>
        </Modal>


        /* // <form onSubmit={onSubmit} style={{ display: "flex", flexDirection: "column", maxWidth: "500px", margin: "0 auto" }}>
        //     <Modal.Header>Edit Profile</Modal.Header>
        //     <img src={person.avatar} alt={person.username} />
        //     <Link to='#'>Edit Picture</Link>
        //     <h3>Username</h3>
        //     <input type='text' placeholder={person.username} value={person.username} name='username' onChange={editPerson} />
        //     <h3>Username</h3>
        //     <input type='text' placeholder={person.email} value={person.email} name='email' onChange={editPerson} />
        //     <h3>Username</h3>
        //     <h3>On</h3>
        //     <div>toggle</div>
        //     <h3>Off</h3>
        //     <h3>Password</h3>
        //     <input type='text' placeholder={person.password} value={person.password} name='email' onChange={editPerson} />
        //     <button class="ui button">Done</button>
        // </form> */
    );
};


export default EditProfile;


/* // useEffect(() => {
//     axios.get(`https://url/${userid}`)
//         .then(res => setPerson({ ...res }[e.target.name] : e.target.value))

//         .catch(error => console.log(error));

// }, [person]);



// function handleOnChange(event) {
//     setPerson({ [e.target.name]: e.target.value })
// } */