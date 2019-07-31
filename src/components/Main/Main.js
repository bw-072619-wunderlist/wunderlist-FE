import React from 'react';
import Navbar from '../Navigation/UpperNav';
import AccordionExampleStandard from '../Navigation/SideNav';
import Home from '../Home/Home';

import PrivateRoute from '../../utils/PrivateRoute';
// import { UserContext } from './contexts/UserContext';

import '../../App.scss';
import './main.scss';

import TaskDisplay from '../TaskDisplay/TaskDisplay';
// import CreateTask from '../CreateTask/CreateTask'



export default function MainPage(props) {

    return (
        <div>
            <Navbar />
            <div className="mainPage">
                <AccordionExampleStandard />
                {/* <Calendar /> */}
                <PrivateRoute exact path='/' component={(props) => <Home />} />
                {/* <PrivateRoute exact path="/profile/edit" component={(props) => <EditProfile />} /> */}
                {/* <PrivateRoute exact path='/create' component={(props) => <CreateTask />} /> */}
                <PrivateRoute path='/task/:id' component={(props) => <TaskDisplay match={props.match} />} />
            </div>
        </div>
    )
};