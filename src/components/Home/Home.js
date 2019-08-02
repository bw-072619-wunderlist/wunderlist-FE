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
    <div className = "HomeList">

        <h2> Hi {person.username}! Here's your upcoming schedule... </h2>
      <ul>
        {EverythingState.map(task => (
<li><button className={
                    task.completed ? 'checkbox checked' : 'checkbox unchecked'
                }>
                    <i className='fas fa-check fa-sm'></i>
                </button> {task.completed}{task.title} 
<li>{moment(task.scheduled_at).format("MMM Do YY")}</li> </li>
          
          

        ))}
      </ul>

      </div>
  );
}
