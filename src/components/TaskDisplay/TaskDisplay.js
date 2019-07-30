import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default () => {
    const [subtasks, setSubtasks] = useState([]);

    function sortedSubtasks(unsorted) {
        function compareSubtasks(a, b) {
            if (+a.completed > +b.completed) {
                console.log('ueoahtn')
                return 1;
            } else if (+a.completed < +b.completed) {
                console.log('two')
                return -1;
            } else {
                console.log('tri')
                return 0;
            }
        }

        return [...unsorted].sort(compareSubtasks);
    }

    useEffect(() => {
        const key = '9ed169d0'
        const headers = { "X-API-Key": key }
        axios
            .get('https://my.api.mockaroo.com/todos.json', { headers })
            .then(res => {
                const sorted = sortedSubtasks(res.data);
                console.log(res.data.map((thing, index) => thing.title === sorted[index].title))
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