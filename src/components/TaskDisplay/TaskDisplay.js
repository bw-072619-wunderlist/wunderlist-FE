import React, { useState, useEffect } from 'react';

import SubtaskItem from '../SubtaskItem/SubtaskItem';
import AxiosWithAuth from '../../utils/AxiosWithAuth'; 

export default () => {
    const [subtasks, setSubtasks] = useState([]);

    function sortedSubtasks(unsorted) {
        function compareSubtasks(a, b) {
            if (+a.completed > +b.completed) {
                return 1;
            } else if (+a.completed < +b.completed) {
                return -1;
            } else {
                return 0;
            }
        }

        return [...unsorted].sort(compareSubtasks);
    }

    // useEffect(() => {
    //     const key = '9ed169d0'
    //     const headers = { "X-API-Key": key }
    //     axios
    //         .get('https://my.api.mockaroo.com/todos.json', { headers })
    //         .then(res => {
    //             const sorted = sortedSubtasks(res.data);
    //             setSubtasks(sortedSubtasks(res.data));
    //         })
    //         .catch(console.log);
    // }, []);

    useEffect(() => {
        AxiosWithAuth()
            .get(`https://wunderlist-be.herokuapp.com/api/v2/todos/1`)
            .then(res => {
                console.log(res.data.tasks)
                setSubtasks(sortedSubtasks(res.data.tasks));
            })
            .catch(error => {
              console.log(error)
            });
    }, []); 

    return (
        <div>
            <h1>hello world</h1>
            <ul>{subtasks && subtasks.map(task => (
                <SubtaskItem completed={task.completed} name={task.name} />
            ))}</ul>
        </div>
    )
}