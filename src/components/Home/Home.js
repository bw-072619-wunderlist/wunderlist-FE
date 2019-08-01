import React, { useState, useEffect } from "react";
import AxiosWithAuth from "../../utils/AxiosWithAuth";

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

  return (
    <div>
      <div className="home-list">
        <div
          className={
            EverythingState.completed
              ? "checkbox checked"
              : "checkbox unchecked"
          }
        >
          <i className="fas fa-check fa-sm" />
        </div>

        <h1> Hi!{}, Here's your upcoming schedule... </h1>
      <div>
        {EverythingState.map(task => (
          <div>{task.title}</div>
        ))}
      </div>
      </div>
    </div>
  );
}
