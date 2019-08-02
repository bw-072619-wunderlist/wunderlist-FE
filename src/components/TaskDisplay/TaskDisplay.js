import React, { useState, useEffect } from 'react';
import { Modal } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';

import AxiosWithAuth from '../../utils/AxiosWithAuth';

import EditModal from '../TaskModal/EditModal';
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
    const [classes, setClasses] = useState(
        {
            'addBtn': 'add-btn',
            'addForm': 'gone'
        });
    const [users, setUsers] = useState([])
    // const [newUser, setNewUser] = useState('')

    const show = () => setOpen(true);
    const close = () => setOpen(false)

    const parsedID = parseInt(match.params.id)

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
        setClasses({ ...classes, addBtn: 'add-btn', addForm: 'gone' });
    }

    function deleteSubtask(id) {
        setMoribund(id);
        // setSubtasks(subtasks.filter(subtask => subtask.id !== id));
    }

    function toggleChecked() {
        setTask({ ...task, completed: !task.completed });
    }

    function newCollaborator({ name }) {
        // alert(['add collaborator', name].join(': '));
        setTask({...task, shares: [...task.shares, users.find(usr => usr.username === name)]})
    }

    // const userHandler = (event) => {
    //   setNewUser(event.target.value)
    // }

    useEffect(() => {
      AxiosWithAuth()
        .get('https://wunderlist-be.herokuapp.com/api/v2/users')
        .then(response => {
          setUsers(response.data)
          console.log('users', response)
        })
        .catch(response => {
          console.log(response)
        })
    }, [])

    // useEffect(() => {
    //     AxiosWithAuth()
    //         .get(`https://wunderlist-be.herokuapp.com/api/v2/todos/${id}`)
    //         .then(res => {
    //             setSubtasks(sortedSubtasks(res.data.tasks));
    //             console.log('response: task', res.data)
    //             setTask(res.data)
    //         })
    //         .catch(error => {
    //             console.log('task error', error)
    //         });
    // }, []);

    useEffect(() => {
        if (newSubtask) {
            AxiosWithAuth()
                .post(`https://wunderlist-be.herokuapp.com/api/v2/todos/${parsedID}/tasks`, [newSubtask])
                .then(response => {
                    console.log(response.data)
                })
                .catch(response => {
                    console.log(response)
                })
            setSubtasks(sortedSubtasks([...subtasks, { ...newSubtask, id: subtasks.length }]));
        }
    }, [newSubtask])
    console.log(subtasks)
    useEffect(() => {
        if (moribund !== null) {
            AxiosWithAuth()
                .delete(`https://wunderlist-be.herokuapp.com/api/v2/tasks/${moribund}`)
                .then(response => {
                    console.log('deleted', response)
                    setSubtasks(subtasks.filter(subtask => subtask.id !== moribund));
                })
                .catch(response => {
                    console.log('delete failed', response)
                })
            setMoribund(null);
        } else {
            AxiosWithAuth()
            .get(`https://wunderlist-be.herokuapp.com/api/v2/todos/${id}`)
            .then(res => {
                setSubtasks(sortedSubtasks(res.data.tasks));
                console.log('get task data', res.data)
                setTask(res.data)
            })
            .catch(error => {
                console.log('failed get task data', error)
            });
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
                onClick={() => setClasses({ ...classes, addBtn: 'gone', addForm: '' })}
            >+</button>

            <TextForm
                fields={['name']}
                submitText='ADD SUBTASK'
                submitFun={addSubtask}
                className={classes.addForm}
            />

            {/* <h2>Add Collaborator:</h2>

            <TextForm
                fields={['name']}
                submitText='ADD'
                submitFun={newCollaborator}
            />

            <h2>Current Collaborators:</h2>

            <ul>
                {task.shares && users !== undefined ? task.shares.map(usrId => (
                    <li>{users.find(usr => usr.id === usrId).username}</li>
                )) : <li>None</li>}
            </ul> */}
            

            <Modal size={'small'} open={openModal} onClose={close}>
                <EditModal task={task} id={id} />
                <Modal.Actions>
                    <button negative onClick={close}>Cancel</button>
                </Modal.Actions>
            </Modal>
        </div>
    )
}