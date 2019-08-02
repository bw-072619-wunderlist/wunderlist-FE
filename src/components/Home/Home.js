import React, { useState, useEffect } from "react";

import AxiosWithAuth from "../../utils/AxiosWithAuth";

import Task from '../TaskComponent/Task'

const Home = () => {
  const [EverythingState, setEverythingState] = useState([]);

  const [sorted, setSorted] = useState([]);

  const userData = JSON.parse(localStorage.getItem('data'))

  useEffect(() => {
    setSorted(EverythingState.sort(
      (a, b) => a.scheduled_at > b.scheduled_at
    ))
  }, [EverythingState]);
  
  useEffect(() => {
    AxiosWithAuth()
    .get(`https://wunderlist-be.herokuapp.com/api/v2/todos`)
    .then(response => {
      const sorted = [...response.data].sort((a,b) => b.id - a.id)
      console.log('sorted', sorted)
      setEverythingState(sorted);
        //setSorted(sortedState(response.data));
        console.log(response);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  const deleteTask = (id) => {
    console.log(id)
    AxiosWithAuth()
      .delete(`https://wunderlist-be.herokuapp.com/api/v2/todos/${id}`)
      .then(response => {
        console.log(response)
      })
      .catch(response => {
        console.log(response)
      })
  }


  //// TO DO FANCY DATE DISPLAY WITH TASKS
    // Yeah the difficult part was mapping over all of them, and giving them headers by only the date within the map
    // So probably an if statement in the map that's if (I'm the same date as before, add {basic task} else {nice header with date + basic task}

  return (
    <div>
      <h1> Hi {userData.username}! Here's your upcoming schedule... </h1>
      <ul>
        {sorted.map(task => (
          <><Task task={task} deleteTask={deleteTask} /></>
        ))}
      </ul>
    </div>
  );
}

export default Home

