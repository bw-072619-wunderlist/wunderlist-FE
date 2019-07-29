import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const editProfile = (props) => {
    console.log(props);
    const [person, setPerson] = useState({ id: 1, avatar: 'https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/78/78d8944a8c9867974e9d4b5be308dc1634e89a3d_full.jpg', username: 'Kayla_Rae', email: 'kayla.rae@example.com', notification: true, password: 'abc' });
    const editPerson = event => {
        setPerson({ ...person, [event.target.name]: event.target.value });
    };

    const onSubmit = event => {
        event.preventDefault();
        editPerson(person);
    };

    return (
        <form onSubmit={onSubmit} style={{ display: "flex", flexDirection: "column", maxWidth: "500px", margin: "0 auto" }}>
            <h2>Edit Profile</h2>
            <img>{person.avatar}</img>
            <Link to='#'>Edit Picture</Link>
            <h3>Username</h3>
            <input type='text' placeholder={person.username} value={person.username} name='username' onChange={editPerson} />
            <h3>Username</h3>
            <input type='text' placeholder={person.email} value={person.email} name='email' onChange={editPerson} />
            <h3>Username</h3>
            <h3>On</h3>
            <div>toggle</div>
            <h3>Off</h3>
            <h3>Password</h3>
            <input type='text' placeholder={person.password} value={person.password} name='email' onChange={editPerson} />
            <button>Done</button>
        </form>
    );
};


export default editProfile;


// useEffect(() => {
//     axios.get(`https://url/${userid}`)
//         .then(res => setPerson({ ...res }[e.target.name] : e.target.value))

//         .catch(error => console.log(error));

// }, [person]);



// function handleOnChange(event) {
//     setPerson({ [e.target.name]: e.target.value })
// }