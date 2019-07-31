import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Input, Icon, Modal, Button } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';

import './upperNav.scss';
import TaskModal from '../TaskModal/TaskModal'


export default function NavBar(props) {
    const [showSearch, setShowSearch] = useState(false);
    const [openModal, setOpen] =useState( false)

    const handleChange = () => {
        setShowSearch(!showSearch);
    }

    const show = () => setOpen( true );
    const close = () => setOpen(false)

    return (
        <div className="Nav">
            <Link to="#" className="Search">
                <Input focus={showSearch} placeholder='Search...' />
                <Icon className="searchIcon" name="search" size="large" onClick={handleChange} />
            </Link>
            <div className="Navbar">
                <Link to="#" className="current">HOME</Link>
                <div className="addNav">
                    {/* SAVING DORA CODE
                    <Link to="#" className="addButton"> */}
                      <button className='addButton' onClick={show}>+</button>
                    {/* </Link> */}
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