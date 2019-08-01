import React, { useState, useEffect } from 'react';

import AxiosWithAuth from '../../utils/AxiosWithAuth'

export default ({ completed, name, id }) => {
  const [ subtask, setSubtask ] = useState({
    name: name,
    completed: completed,
  })
  const [userField, setUser] = useState('')

  const deleteSubTask = () => {
    console.log(id)
    AxiosWithAuth()
      .delete(`https://wunderlist-be.herokuapp.com/api/v2/tasks/${id}`)
      .then(response => {
        console.log(response)
      })
      .catch(response=> {
        console.log(response)
      })
    }

  const toggleSubTask = () => {
    setSubtask({
      ...subtask,
      completed: !subtask.completed
    })
    AxiosWithAuth()
    .put(`https://wunderlist-be.herokuapp.com/api/v2/tasks/${id}`, subtask)
    .then(response => {
      console.log(response)
    })
    .catch(response => {
      console.log(response)
    })
  }

    return (
        <li>
            <div onClick={toggleSubTask} className={
                completed ? 'checkbox checked' : 'checkbox unchecked'
            }><i className="fas fa-check fa-sm"></i></div>
            <p>{name}</p>
            <div className='del-icon' onClick={deleteSubTask}>
                <i className="fas fa-times fa-lg"></i>
            </div>
        </li>
    )
}