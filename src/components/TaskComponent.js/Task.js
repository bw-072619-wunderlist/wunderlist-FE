import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

import AxiosWithAuth from '../../utils/AxiosWithAuth';

const HomeTasks = (props) => {
  const [task, setTask] = useState({
    title: props.task.title,
    description: props.task.description,
    completed: props.task.completed,
    repeat: props.task.repeat,
    deleted: props.task.deleted,
    scheduled_at: props.task.scheduled_at
  })
 

  const [updateTask, setUpdate ] = useState({})

  const toggleTask = () => {
    setUpdate({
      ...task,
      completed: true
    })
    console.log('updateTask console.log', updateTask)
    console.log('completed', updateTask.completed)
  }

  useEffect(() => {
    console.log(props.task.id)
    if (updateTask.title) {
      AxiosWithAuth()
      .put(`https://wunderlist-be.herokuapp.com/api/v2/todos/${props.task.id}`, updateTask)
      .then(response => {
        // console.log('counting', response)
        console.log('this is the axios update', response.data)
        setTask(response.data.updated)
      })
      .catch(response => {
        console.log(response)
      })
    }
  },[updateTask])

  return(
    <li>
      <button onClick={toggleTask} className={
        task.completed ? 'checkbox checked' : 'checkbox unchecked'
      }><i className="fas fa-check fa-sm"></i></button>
      <Link to={`/task/${props.task.id}`} ><p>{props.task.title}</p></Link>
      <button className='icon-btn' onClick={() => props.deleteTask(props.task.id)} >
        <i className="fas fa-times fa-lg"></i>
      </button>
    </li>
  )
}

export default HomeTasks



// onClick={() => delFunc(id)}

// onClick={toggleSubTask}