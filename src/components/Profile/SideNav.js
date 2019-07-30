import React, { useState, Component } from 'react';
import { Link } from 'react-router-dom';
import { Accordion, Icon, Image, Checkbox } from 'semantic-ui-react';
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

        return (
            <Accordion>
                <Accordion.Title active={activeIndex === 0} index={0} onClick={handleClick}>
                    <Image src='https://react.semantic-ui.com/images/avatar/large/rachel.png' avatar />
                    Kayla_Rae
                    <Icon name='angle down' />
                </Accordion.Title>
                <Accordion.Content active={activeIndex === 0}>
                    <Link to='/profile/edit'>Edit Profile</Link>
                    <div>Get Email notifications</div>
                    <label>Off</label>
                    <Checkbox toggle checked={person.notification} name='notification' onChange={() => toggleNotification(person.notification)} />
                    <label>On</label>
                    <div>kayla.rae@example.com</div>
                    <Link to='#'>Sign Out</Link>
                </Accordion.Content>

                <Accordion.Title active={activeIndex === 1} index={1} onClick={handleClick}>
                    HOME
                 </Accordion.Title>
                <Accordion.Content active={activeIndex === 1}>
                    <p>List 1</p>
                    <p>List 2</p>
                </Accordion.Content>

                <Accordion.Title active={activeIndex === 2} index={2} onClick={handleClick}>
                   LISTS
                    <Icon name='angle down' />

        </Accordion.Title>
                <Accordion.Content active={activeIndex === 2}>
                    <p>List 1</p>
                    <p>List 2</p>
                </Accordion.Content>
                <Accordion.Title active={activeIndex === 0} index={0} onClick={handleClick}>
                    CALENDAR
                </Accordion.Title>
                <Accordion.Content active={activeIndex === 0}>
                    <p>Calendar</p>
                </Accordion.Content>
            </Accordion>
        )
}
