import React, { useState, useEffect } from 'react';
import { Modal } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';

import AxiosWithAuth from '../../utils/AxiosWithAuth';

import TaskModal from '../TaskModal/TaskModal';
import SubtaskItem from '../SubtaskItem/SubtaskItem';

export default () => {
    const [subtasks, setSubtasks] = useState([]);
    const [task, setTask] = useState()
    const [openModal, setOpen] =useState( false)

    const show = () => setOpen( true );
    const close = () => setOpen(false)

    function sortedSubtasks(unsorted) {
        function compareSubtasks(a, b) {
            if (+a.completed > +b.completed) {
                return 1;
            } else if (+a.completed < +b.completed) {
                return -1;
            } else {
                return 0;
            }
        }

        return [...unsorted].sort(compareSubtasks);
    }

    useEffect(() => {
        AxiosWithAuth()
            .get(`https://wunderlist-be.herokuapp.com/api/v2/todos/1`)
            .then(res => {
              setSubtasks(sortedSubtasks(res.data.tasks));
              console.log(res.data)
              setTask(res.data)
            })
            .catch(error => {
              console.log(error)
            });
    }, []); 

    return (
        <div>
            <h1>hello world</h1>
            <button onClick={show}>Edit Task</button>
            <ul>{subtasks && subtasks.map(task => (
                <SubtaskItem completed={task.completed} name={task.name} id={task.id} />
            ))}</ul>

        <Modal size={'small'} open={openModal} onClose={close}>
        <TaskModal task={task} />
        <Modal.Actions>
          <button negative onClick={close}>Cancel</button>
        </Modal.Actions>
        </Modal>
        </div>
    )
}