import React, { useState, useEffect } from 'react';
import { Modal } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';

import AxiosWithAuth from '../../utils/AxiosWithAuth';

import TaskModal from '../TaskModal/TaskModal';
import SubtaskItem from '../SubtaskItem/SubtaskItem';
import TextForm from '../TextForm/TextForm';

// import Testing from '../../testing/testing';


///// Notes for Catherine
// In order to hit the correct url id you need to do it a bit different for a route component
// aka we're using match.params.id to receive the url id. Console.log ( match ) and see what all is in there
// https://reacttraining.com/react-router/web/api/Route/component

// Check the console log of newSubtask, that's exactly what you need to be sending over! No need to try to drill into it.
// The route is expecting an object. aka {name: 'imma subtaskerino'}. It needs to know what key to assign the value you are giving it. :)

// Imma be honest. that is the best death state so far. I approve. (although not exactly what I would call semantic code ;) )
// That filter + delete may be a bit of overkill. I get what you're going for, but I'm not sure if
// that'll do exactly what you expect. Or help make transitions smooth

export default function TaskDisplay({ match }) {
    const [subtasks, setSubtasks] = useState([]);
    const [moribund, setMoribund] = useState(null);
    const [newSubtask, setNewSubtask] = useState(null);
    const [task, setTask] = useState({})
    const [id, setID] = useState(match.params.id)
    const [openModal, setOpen] = useState(false)
    const [classes, setClasses] = useState({ 'addBtn': 'icon-btn', 'addForm': 'gone' });

    const show = () => setOpen(true);
    const close = () => setOpen(false)

    console.log('props.match', match.params.id )

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

    function addSubtask(subtask) {
        setNewSubtask(subtask);
        setClasses({ 'addBtn': 'icon-btn', 'addForm': 'gone' });
    }

    function deleteSubtask(id) {
        console.log('id', id)
        console.log('subtasks', subtasks)
        setMoribund(id);
        setSubtasks(subtasks.filter(subtask => subtask.id !== id));
        console.log('after', subtasks.filter(subtask => subtask.id !== id))
    }

    function toggleChecked() {
        setTask({ ...task, completed: !task.completed });
    }

    useEffect(() => {
        AxiosWithAuth()
            .get(`https://wunderlist-be.herokuapp.com/api/v2/todos/${id}`)
            .then(res => {
                setSubtasks(sortedSubtasks(res.data.tasks));
                console.log('response: task', res.data)
                setTask(res.data)
            })
            .catch(error => {
                console.log('task error', error)
            });
    }, []);

    useEffect(() => {
        console.log('subtasks length', subtasks.length)
        console.log('this is newSubtask', newSubtask)
        if (newSubtask) {
            AxiosWithAuth()
                .post(`https://wunderlist-be.herokuapp.com/api/v2/todos/${match.params.id}/tasks`, newSubtask)
                .then(response => {
                    console.log(response.data)
                })
                .catch(response => {
                    console.log(response)
                })
            setSubtasks(sortedSubtasks([...subtasks, { ...newSubtask, id: subtasks.length }]));
        }
    }, [newSubtask])

    useEffect(() => {
        if (moribund) {
            AxiosWithAuth()
                .delete(`https://wunderlist-be.herokuapp.com/api/v2/tasks/${moribund}`)
                .then(response => {
                    console.log(response)
                })
                .catch(response => {
                    console.log(response)
                })
        }
    }, [moribund]);

    return (
        <div>
            <div className='fluid-list'>
                <button
                    onClick={toggleChecked}
                    className={
                        task.completed ? 'checkbox checked' : 'checkbox unchecked'}
                >
                    <i className='fas fa-check fa-sm'></i>
                </button>
                <h1>{task.title}</h1>
                <div onClick={show}>
                    <i class='fas fa-pencil-alt fa-lg'></i>
                </div>
            </div>

            <ul>{subtasks && subtasks.map(subtask => (
                <SubtaskItem {...subtask} delFunc={deleteSubtask} />
            ))}</ul>

            <button
                className={classes.addBtn}
                onClick={() => setClasses({ addBtn: 'gone', addForm: '' })}
            >
                <i class='fas fa-plus fa-lg'></i>
            </button>

            <TextForm
                fields={['name']}
                submitText='ADD SUBTASK'
                submitFun={addSubtask}
                className={classes.addForm}
            />

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