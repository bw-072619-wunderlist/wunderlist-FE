import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Input, Icon, Modal, Button } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';

import AxiosWithAuth from '../../utils/AxiosWithAuth'

import './upperNav.scss';
import TaskModal from '../TaskModal/TaskModal'


export default function NavBar(props) {
  const [showSearch, setShowSearch] = useState(false);
  const [search, setSearch] = useState('')
  const [openModal, setOpen] =useState( false)
  const [tasks, setTasks] = useState([])

  const handleChange = () => {
      setShowSearch(!showSearch);
  }

  const searchHandler = (event) => {
    setSearch(event.target.value)
  }

  useEffect(() => {
    AxiosWithAuth()
      .get('https://wunderlist-be.herokuapp.com/api/v2/todos')
      .then(response => {
        setTasks(response.data)
      })
      .catch(response => {
        console.log(response)
      });
  }, [])

  console.log(search)
  console.log(props)

  const show = () => setOpen( true );
  const close = () => setOpen(false)

  return (
    <div className="Nav">
      <Link to="#" className="Search">
        <Input focus={showSearch} placeholder='Search...' name='search' value={search} onChange={searchHandler} />
        <Icon className="searchIcon" name="search" size="large" onClick={props.submitSearch} />
      </Link>
        <div className="Navbar">
          <Link to="#" className="current">HOME</Link>
          <div className="addNav">
            <button className='addButton' onClick={show}>+</button>
            <Modal size={'small'} open={openModal} onClose={close}>
              <TaskModal />
              <Modal.Actions>
                <button negative onClick={close}>Cancel</button>
              </Modal.Actions>
            </Modal>
            <div className="addTask">Add a TASK</div>
          </div>
        </div>
    </div>
  )
};