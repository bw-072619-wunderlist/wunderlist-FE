import React from 'react'

const HomeTasks = (props) => {

  return(
    <li>
      <button className={
        props.task.completed ? 'checkbox checked' : 'checkbox unchecked'
      }><i className="fas fa-check fa-sm"></i></button>
      <p>{props.task.title}</p>
      <button className='icon-btn' >
        <i className="fas fa-times fa-lg"></i>
      </button>
    </li>
  )
}

export default HomeTasks



// onClick={() => delFunc(id)}

// onClick={toggleSubTask}