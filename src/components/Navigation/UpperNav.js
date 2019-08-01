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
  const [filtered, setFiltered] = useState([])
  const [openModal, setOpen] =useState( false)
  // const [tasks, setTasks] = useState([])

  const handleChange = () => {
      setShowSearch(!showSearch);
  }

  const searchHandler = (event) => {
    setSearch(event.target.value)
  }

  useEffect(()=> {
    console.log('useEffect in Main', props.filteredTasks)
  }, [props.filteredTasks])

  console.log(props)
  console.log(search)

  const show = () => setOpen( true );
  const close = () => setOpen(false)

  return (
    <div className="Nav">
      <div className="Search">
        <Input focus={showSearch} placeholder='Search...' name='search' value={search} onChange={searchHandler} />
        <Icon className="searchIcon" name="search" size="large" onClick={(event) => props.submitSearch(event, search)} />
      </div>
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