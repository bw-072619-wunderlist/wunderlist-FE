import React, { useState, useEffect } from 'react';
import { Form, Button, Card, Icon, Image } from "semantic-ui-react";
import axios from 'axios';

const showProfile = (props) => {
    console.log(props);
    const [person, setPerson] = useState({ id: 1, avatar: 'https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/78/78d8944a8c9867974e9d4b5be308dc1634e89a3d_full.jpg', username: 'Kayla_Rae', email: 'kayla.rae@example.com', notification: true })
    // const [notification, setNotification] = useState(true);
    // const [username, setUsername] = useState();
    // const [email, setEmail] = useState();
    // const [notification, setNotification] = useState();
    // const [vibrate, setVibrate] = useState();
    // const [share, setShare] = useState();
    // const [completion, setCompletion] = useState();

    // function componentDidMount() {
    //     props.getMe().then(res =>
    //         setPerson({ ...res }));
    //         console.log(res);
    //     };
    // };

    // const onSubmit = event => {
    //     event.preventDefault();
    //     editPerson(person);
    //     history.pushState('/');
    //     }

    function handleOnChange(event) {
        setPerson({ [e.target.name]: e.target.value })
    }


    // useEffect(() => {
    //     axios.get(`https://url/${id}`)
    //         .then(res => setPerson(res.data))
            
    //         .catch (error => console.log(error));
        
    //     }, [person]);

    return (
        <div>
            <CardExampleCardProps />

            <Form onSubmit={onSubmit}>
                <Form.Field>
                    <label>User Name</label>
                    <input onChange={handleOnChange} placeholder='User Name' value={username} name={"username"} />
                </Form.Field>
                <Form.Field>
                    <label>Email</label>
                    <input onChange={handleOnChange} placeholder='email' value={this.state.email} name={"email"} />
                </Form.Field>
                <Form.Field>
                    <label>Company</label>
                    <input onChange={handleOnChange} placeholder='Company' value={this.state.companyname} name={"companyname"} />
                </Form.Field>
                <Form.Field>
                    <label>role</label>
                    <input onChange={handleOnChange} placeholder='role' value={this.state.role} name={"role"} />
                </Form.Field>
                <Button positive type='submit'>Submit</Button>
            </Form>
        </div>
    )
}

export default showProfile;
