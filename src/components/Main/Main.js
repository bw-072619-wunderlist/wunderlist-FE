import React, { useState, useEffect } from 'react';
import { Switch } from 'react-router-dom'
import Navbar from '../Navigation/UpperNav';
import AccordionExampleStandard from '../Navigation/SideNav';
import Home from '../Home/Home';
import { withRouter } from 'react-router'
import Testing from '../../testing/testing';

import PrivateRoute from '../../utils/PrivateRoute';
// import { TaskContext } from './contexts/TaskContext'
// import { UserContext } from './contexts/UserContext';

import '../../App.scss';
import './main.scss';

import TaskDisplay from '../TaskDisplay/TaskDisplay';
import CalendarDisplay from '../Calendar/Calendar';
import Search from '../Search/Search'
import AxiosWithAuth from '../../utils/AxiosWithAuth';

const MainPage = (props) => {
  const [tasks, setTasks] = useState([])
  const [filteredTasks, setFilteredTasks] = useState([])
  const [searchTerm, setSearch] = useState('')

  const submitSearch = (event, searching) => {
    event.preventDefault()
    setSearch(searching)
    console.log('submitSearch: ', searchTerm)
  }

  useEffect(() => {
    AxiosWithAuth()
      .get('https://wunderlist-be.herokuapp.com/api/v2/todos')
      .then(response => {
        setTasks(response.data)
      })
      .catch(response => {
        console.log('useEffect in Main.js to mount tasks error :', response)
      })
  }, [])

  useEffect(() => {
    console.log('these are the Tasks:', tasks)
    if (searchTerm.length > 0) {
      setFilteredTasks(tasks.filter(task => task.title.includes(searchTerm)))
      props.history.push('/search')
    }
    console.log('checking when this hits')
  }, [searchTerm])

  return (
    <div>
      {/* <TaskContext.Provider value={{ tasks }}> */}
      <Switch>
        <PrivateRoute
          path='/task'
          component={props => (
            <Navbar submitSearch={submitSearch} header='VIEW' />
          )}
        />
        <PrivateRoute
          path='/search'
          component={props => (
            <Navbar submitSearch={submitSearch} header='SEARCH' />
          )}
        />
        <PrivateRoute
          path='/'
          component={props => (
            <Navbar submitSearch={submitSearch} header='HOME' />
          )}
        />
      </Switch>
      <div className="mainPage">
        <AccordionExampleStandard />
        {/* <Calendar /> */}
        <PrivateRoute exact path='/home' component={(props) => <Home props={props} />} />
        <PrivateRoute exact path='/task/:id' component={(props) => <TaskDisplay match={props.match} />} />
        <PrivateRoute exact path='/calendar' component={CalendarDisplay} />
        <PrivateRoute exact path='/search' component={(props) => <Search filteredTasks={filteredTasks} />} />
        <PrivateRoute exact path='/testing' component={Testing} />
      </div>
      {/* </TaskContext.Provider> */}
    </div>
  )
};

export default withRouter(MainPage)