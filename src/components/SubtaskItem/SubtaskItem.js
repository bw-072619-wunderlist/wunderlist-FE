import React, { useState, useEffect } from 'react';

import AxiosWithAuth from '../../utils/AxiosWithAuth'

export default ({ completed, name, id }) => {
 
  // const onClick = event => {
  //   event.preventDefault();
  //   console.log(taskState)
  //   // setLoading(true)
  //   // console.log(loading)
  //   // console.log(login)
  //   AxiosWithAuth()
  //     .delete('https://wunderlist-be.herokuapp.com/api/v2/todos', taskState)
  //     .then(response => {
  //       console.log(response)
  //     })
  //     .catch(response => {
  //       console.log(response.error)
  //     })
  // }

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

    return (
        <li>
            <div className={
                completed ? 'checkbox checked' : 'checkbox unchecked'
            }><i className="fas fa-check fa-sm"></i></div>
            <p>{name}</p>
            <div className='del-icon' onClick={deleteSubTask}>
                <i className="fas fa-times fa-lg"></i>
            </div>
        </li>
    )
}