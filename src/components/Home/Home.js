import React, { useState, useEffect } from "react";

import AxiosWithAuth from "../../utils/AxiosWithAuth";

import HomeTasks from './HomeTasks'

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

  return (
    <div>
      <h1> Hi {userData.username}! Here's your upcoming schedule... </h1>
      <ul>
        {sorted.map(task => (
          <><HomeTasks task={task} /></>
        ))}
      </ul>
    </div>
  );
}

export default Home