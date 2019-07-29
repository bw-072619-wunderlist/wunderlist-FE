import React, { useState, useEffect } from 'react';
import axios from 'axios';

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

    // useEffect(() => {
    //     const key = '9ed169d0'
    //     const headers = { "X-API-Key": key }
    //     axios
    //         .get('https://my.api.mockaroo.com/todos.json', { headers })
    //         .then(console.log)
    //         .catch(console.log);
    // }, []);

    return (
        <div>
            <h1>hello world</h1>
            {subTasks.map(task => (<li>{task.title}</li>))}
        </div>
    )
}