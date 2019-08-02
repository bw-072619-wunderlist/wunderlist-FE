import React, { useState, useEffect } from "react";
import AxiosWithAuth from "../../utils/AxiosWithAuth";
import moment from "moment";


export default function Home() {
  const [EverythingState, setEverythingState] = useState([]);

  //const [sorted, setSorted] = useState([]);

  // useEffect(() => {
  //   const sortedState = EverythingState.sort(
  //     (a, b) => a.scheduled_at > b.scheduled_at
  //   );
  // }, [EverythingState]);
  
  
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

  const person = JSON.parse(localStorage.getItem('data'))
  console.log(person) 

  return (
    <div>

        <h2> Hi! {person.username}, Here's your upcoming schedule... </h2>
      <ul>
        {EverythingState.map(task => (

<li><input type="checkbox" checked={task.completed} /> {task.title} </li>
          // moment({task.schedule_at})
          

        ))}
      </ul>

      </div>
  );
}
