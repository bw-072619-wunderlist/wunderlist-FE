import React from 'react';
import { Link } from 'react-router-dom';

const Profile = (props) => {
    // const { person } = props;
    const person = { id: 1, avatar: 'https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/78/78d8944a8c9867974e9d4b5be308dc1634e89a3d_full.jpg', username: 'Kayla_Rae', email: 'kayla.rae@example.com', notification: true, password: 'abc' };
    return (
        <div>
            <img src={person.avatar} alt={person.username}/>
            <div>{person.name}</div>
            <button></button>
            <Link to='/profile/edit'>Edit Profile</Link>
            <div>Get email notifications</div>
            <div>On</div>
            <button>Toggle</button>
            <div>Off</div>
            <div>{person.email}</div>
            <Link to="/">Sign Out</Link>
        </div>
    );
};

export default Profile;
