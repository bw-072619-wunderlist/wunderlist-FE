import React, { useState, useEffect } from 'react';
import { Modal } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';

import AxiosWithAuth from '../../utils/AxiosWithAuth';

import TaskModal from '../TaskModal/TaskModal';
import SubtaskItem from '../SubtaskItem/SubtaskItem';
import TextForm from '../TextForm/TextForm';

export default function TaskDisplay() {
    const [subtasks, setSubtasks] = useState([]);
    const [task, setTask] = useState({})
    const [openModal, setOpen] = useState(false)

    const show = () => setOpen(true);
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

    function addSubtask() { //TODO: Allow adding user-given items.
        setSubtasks(sortedSubtasks([...subtasks, {
            name: "example",
            completed: false,
            id: 778
        }]));
    }

    const deleteSubtask = id => {
        console.log(id)
        AxiosWithAuth()
          .delete(`https://wunderlist-be.herokuapp.com/api/v2/tasks/${id}`)
          .then(response => {
            console.log(response)
          })
          .catch(response => {
            console.log(response)
          })
      }

    useEffect(() => {
        AxiosWithAuth()
            .get(`https://wunderlist-be.herokuapp.com/api/v2/todos/2`)
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
            <div className='fluid-list'>
                <button className={
                    task.completed ? 'checkbox checked' : 'checkbox unchecked'
                }>
                    <i className='fas fa-check fa-sm'></i>
                </button>
                <h1>hello world</h1>
                <div onClick={show}>
                    <i class='fas fa-pencil-alt fa-lg'></i>
                </div>
            </div>

            <ul>{subtasks && subtasks.map(subtask => (
                <SubtaskItem {...subtask} delFunc={deleteSubtask} />
            ))}</ul>

            <button
                className="icon-btn"
                onClick={addSubtask}
            >
                <i class='fas fa-plus fa-lg'></i>
            </button>

            <TextForm fields={['']} submitText='ADD SUBTASK' />

            {/* <form onSubmit={() => alert('add collaborator')}>
                <label>
                    <h2>Add Collaborator:</h2>
                    <input type="text" id="name" value={"fix this"} onChange={() => console.log('fix this too')} />
                </label>
            </form>

            <h2>!!current collaborator!!</h2> */}

            <Modal size={'small'} open={openModal} onClose={close}>
                <TaskModal task={task} />
                <Modal.Actions>
                    <button negative onClick={close}>Cancel</button>
                </Modal.Actions>
            </Modal>
        </div>
    )
}