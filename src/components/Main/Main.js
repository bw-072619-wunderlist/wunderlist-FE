import React, { useState } from 'react';
import Navbar from '../Navigation/UpperNav';
import AccordionExampleStandard from '../Navigation/SideNav';
import Home from '../Home/Home';
import Testing from '../../testing/testing';

import PrivateRoute from '../../utils/PrivateRoute';
// import { TaskContext } from './contexts/TaskContext'
// import { UserContext } from './contexts/UserContext';

import '../../App.scss';
import './main.scss';

import TaskDisplay from '../TaskDisplay/TaskDisplay';
import CalendarDisplay from '../Calendar/Calendar'
import Search from '../Search/Search'



export default function MainPage(props) {
  const [tasks, setTasks] = useState([])
  const [filteredTasks, setFilteredTasks] = useState('')

  const submitSearch = (event) => {
    event.preventDefault()
    const searchTerm = ''
    const filtered = tasks.filter(task => task.title.includes(searchTerm))
    setFilteredTasks(filtered)
    console.log(filtered)
    props.history.push('/search')
  }

    return (
        <div>
          {/* <TaskContext.Provider value={{ tasks }}> */}
            <Navbar submitSearch={submitSearch} />
            <div className="mainPage">
                <AccordionExampleStandard  />
                {/* <Calendar /> */}
                <PrivateRoute exact path='/' component={(props) => <Home />} />
                {/* <PrivateRoute exact path="/profile/edit" component={(props) => <EditProfile />} /> */}
                {/* <PrivateRoute exact path='/create' component={(props) => <CreateTask />} /> */}
                <PrivateRoute path='/task/:id' component={(props) => <TaskDisplay match={props.match} />} />
                <PrivateRoute path='/calendar' component={CalendarDisplay} />
                <PrivateRoute path='/search' component={(props) => <Search filteredTasks={filteredTasks} />} />
                <PrivateRoute path='/testing' component={Testing} />
            </div>
          {/* </TaskContext.Provider> */}
        </div>
    )
};