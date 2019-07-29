import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default () => {
    const [subtasks, setSubtasks] = useState([]);

    function sortedSubtasks(unsorted) {
        function compareSubtasks(a, b) {
            // console.log(a.completed, b.completed, +a.completed > +b.completed)
            if (+a.completed > +b.completed) {
                return -1;
            } else if (+a.completed > +b.completed) {
                return 1;
            } else {
                return 0;
            }
        }

        console.log([...unsorted].sort(compareSubtasks).map(t => t.completed))

        return [...unsorted].sort(compareSubtasks);
    }

    useEffect(() => {
        const key = '9ed169d0'
        const headers = { "X-API-Key": key }
        axios
            .get('https://my.api.mockaroo.com/todos.json', { headers })
            .then(res => {
                setSubtasks(sortedSubtasks(res.data));
            })
            .catch(console.log);
    }, []);

    return (
        <div>
            <h1>hello world</h1>
            {subtasks && subtasks.map(task => (<li>{task.title.concat(task.completed ? " COMPLETED" : " PENDING")}</li>))}
        </div>
    )
}