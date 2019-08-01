import React, { useState, useEffect } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { Accordion, Icon, Image, Checkbox, Modal } from 'semantic-ui-react';
import EditProfile from '../Profile/editProfile';

import axios from 'axios';

import 'semantic-ui-css/semantic.min.css';
import './sideNav.scss';


export default function AccordionExampleStandard(props) {

    const data = JSON.parse(localStorage.getItem('data')) || { id: 0, avatar: "", username: "", email: "", notify: true, password: "", token: "" };
    const [person, setPerson] = useState(data);

    useEffect(() => {
        // const oldPerson = JSON.parse(localStorage.getItem('data'));
        // const headers = {
        //     'Content-Type': 'application/json',
        //     'Authorization': localStorage.getItem('token')            
        // }
        // const keys = ['username', 'notify', 'avatar'];
        // var newPerson = {};
        // keys.forEach(key => newPerson[key] = person[key]);
        // axios.put(`https://wunderlist-be.herokuapp.com/api/v2/users/`, newPerson, {'headers': headers})
        // localStorage.setItem('data', JSON.stringify(person))
        
        const oldPerson = JSON.parse(localStorage.getItem('data'));

        const headers = {
            'Content-Type': 'application/json',
            'Authorization': localStorage.getItem('token')
        }

        const putKeys = ['username', 'notify', 'avatar'];

        var putNewPerson = {};
        putKeys.forEach(key => putNewPerson[key] = person[key]);

        var isNewSameAsOld = putKeys.map(key => putNewPerson[key] === oldPerson[key]).reduce((current, acc) => current && acc)

        if (!isNewSameAsOld) {
            axios.put('https://wunderlist-be.herokuapp.com/api/v2/users/', putNewPerson, {'headers': headers})
}


        const authKeys = ['email', 'password'];

        var authNewPerson = {};
        authKeys.forEach(key => authNewPerson[key] = person[key]);

        var isNewSameAsOld = authKeys.map(key => authNewPerson[key] === oldPerson[key]).reduce((current, acc) => current && acc)

        if (!isNewSameAsOld) {
            if (authNewPerson['email'] !== oldPerson['email']) {
                authNewPerson['newEmail'] = authNewPerson['email'];
                authNewPerson['email'] = oldPerson['email'];
            }

            if (authNewPerson['password'] !== oldPerson['password']) {
                authNewPerson['newPassword'] = authNewPerson['password'];
                authNewPerson['password'] = oldPerson['password'];
            }
            console.log(authNewPerson)
            axios.put('https://wunderlist-be.herokuapp.com/api/v2/auths/reset', authNewPerson, {'headers': headers})
}           

        localStorage.setItem('data', JSON.stringify(person))



    }, [person]);

    const [activeIndex, setActiveIndex] = useState(0);

    const handleClick = (e, titleProps) => {
        const { index } = titleProps;
        const newIndex = activeIndex === index ? -1 : index;

        setActiveIndex(newIndex);
    }

    const toggleNotification = notification => {
        setPerson({ ...person, 'notify': !notification });
    }

    const signOut = () => {
      localStorage.removeItem('token')
    }

    const [openModal, setOpen] = useState(false)
    const show = () => setOpen(true);
    const close = () => setOpen(false);

    return (
        <div className="sideNavBar">
        {/* <NavBar /> */ }
        < Accordion >
        <div className="sideNavButtons">
            <Accordion.Title active={activeIndex === 0} index={0} onClick={handleClick}>
                <Image src={person.avatar} avatar />
                Kayla_Rae
                  <Icon name='angle down' />
            </Accordion.Title>
            <Accordion.Content active={activeIndex === 0} className="profileCard">
                        <div className="editProfileBtn" onClick={show}>Edit Profile</div>
                        <Modal open={openModal} onClose={close}>
                            <EditProfile close={close} person={person} setPerson={setPerson} />
                            {/* <Modal.Actions>
                                <button negative onClick={close}>Cancel</button>
                            </Modal.Actions> */}
                        </Modal>
                <div>Get Email notifications</div>
                <div className="toggleDiv">
                    <label className="toggleLabel">Off</label>
                            <Checkbox toggle checked={person.notify} name='notify' onChange={() => toggleNotification(person.notify)} />
                    <label className="toggleLabel">On</label>
                </div>
                <div>{person.email}</div>
                <Link to='/login' onClick={signOut}>Sign Out</Link>
            </Accordion.Content>
            <Accordion.Title active={activeIndex === 1} index={1} onClick={handleClick}>
                HOME
                </Accordion.Title>
            {/* <Accordion.Content active={activeIndex === 1}>
              </Accordion.Content> */}

            <Accordion.Title active={activeIndex === 2} index={2} onClick={handleClick}>
                LISTS
                  <Icon name='angle down' />

            </Accordion.Title>
            <Accordion.Content className="lists" active={activeIndex === 2}>
                <div className="listDiv">
                    <div className="NavIcon">i</div>
                    <p className="listTitle">List 1</p>
                </div>

            </Accordion.Content>
            <Accordion.Title active={activeIndex === 0} index={0} onClick={handleClick}>
                <Link to='/calendar'>CALENDAR</Link>
              </Accordion.Title>
            {/* <Accordion.Content active={activeIndex === 0}>
              </Accordion.Content> */}
        </div>
            </Accordion >
        </div>
    )
}
