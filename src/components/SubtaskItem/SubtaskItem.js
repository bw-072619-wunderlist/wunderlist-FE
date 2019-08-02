import React, { useState, useEffect } from 'react';

import AxiosWithAuth from '../../utils/AxiosWithAuth'

export default ({ completed, name, id, delFunc }) => {
  const [subtask, setSubtask] = useState({
    name: name,
    completed: completed,
  })
  const [userField, setUser] = useState('')

  const toggleSubTask = () => {
    setSubtask({
      ...subtask,
      completed: !subtask.completed
    })
    console.log('toggleSubTask')

  }

  useEffect(() => {
    AxiosWithAuth()
      .put(`https://wunderlist-be.herokuapp.com/api/v2/tasks/${id}`, subtask)
      .then(response => {
        console.log(response)
      })
      .catch(response => {
        console.log(response)
      })
  }, [subtask]);

  return (
    <li>
      <button onClick={toggleSubTask} className={
        subtask.completed ? 'checkbox checked' : 'checkbox unchecked'
      }><i className="fas fa-check fa-sm"></i></button>
      <p>{subtask.name}</p>
      <button className='icon-btn' onClick={() => delFunc(id)}>
        <i className="fas fa-times fa-lg"></i>
      </button>
    </li>
  )
}