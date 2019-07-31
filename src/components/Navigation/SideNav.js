import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Accordion, Icon, Image, Checkbox, Modal } from 'semantic-ui-react';
import EditProfile from '../Profile/editProfile';

import 'semantic-ui-css/semantic.min.css';
import './sideNav.scss';


export default function AccordionExampleStandard(props) {
    const mockPerson = {
        id: 1, avatar: 'https://react.semantic-ui.com/images/avatar/large/rachel.png', username: 'Kayla_Rae', email: 'kayla.rae@example.com', notification: false, password: 'abc'
    };
    const [activeIndex, setActiveIndex] = useState(0);
    const [person, setPerson] = useState(mockPerson);

    const handleClick = (e, titleProps) => {
        const { index } = titleProps;
        const newIndex = activeIndex === index ? -1 : index;

        setActiveIndex(newIndex);
    }

    const toggleNotification = notification => {
        setPerson({ ...person, 'notification': !notification });
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
                <Image src='https://react.semantic-ui.com/images/avatar/large/rachel.png' avatar />
                Kayla_Rae
                  <Icon name='angle down' />
            </Accordion.Title>
            <Accordion.Content active={activeIndex === 0} className="profileCard">
                        <div className="editProfileBtn" onClick={show}>Edit Profile</div>
                        <Modal open={openModal} onClose={close}>
                            <EditProfile />
                            <Modal.Actions>
                                <button negative onClick={close}>Cancel</button>
                            </Modal.Actions>
                        </Modal>
                <div>Get Email notifications</div>
                <div className="toggleDiv">
                    <label className="toggleLabel">Off</label>
                    <Checkbox toggle checked={person.notification} name='notification' onChange={() => toggleNotification(person.notification)} />
                    <label className="toggleLabel">On</label>
                </div>
                <div>kayla.rae@example.com</div>
                <Link to='#'>Sign Out</Link>
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
                CALENDAR
              </Accordion.Title>
            {/* <Accordion.Content active={activeIndex === 0}>
              </Accordion.Content> */}
        </div>
            </Accordion >
        </div>
    )
}
