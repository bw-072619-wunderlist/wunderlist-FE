import React from 'react';
import { Link } from 'react-router-dom';

const Profile = (props) => {
    const { person } = props;
    return (
        <div>
            <div>{person.avatar}</div>
            <div>{person.name}</div>
            <button></button>
            <Link to={`/edit/${person.id}`}>Edit Profile</Link>
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
