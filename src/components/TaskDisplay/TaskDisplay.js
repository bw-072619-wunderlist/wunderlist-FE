import React, { useState } from 'react';

export default () => {
    const dummyData = [
        {
            title: "do task 1",
            completed: false,
            created_at: 0,
            updated_at: 1,
            scheduled_at: 10
        }
    ];
    const [subTasks, setSubTasks] = useState(dummyData);
  
  return(
    <div>
      <h1>hello world</h1>
      {subTasks.map(task => (<li>{task.title}</li>))}
    </div>
  )
}