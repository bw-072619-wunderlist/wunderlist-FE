import React, { useState, useEffect } from 'react';

import AxiosWithAuth from '../../utils/AxiosWithAuth';

import SubtaskItem from '../SubtaskItem/SubtaskItem';

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

    useEffect(() => {
        AxiosWithAuth()
            .get(`https://wunderlist-be.herokuapp.com/api/v2/todos/1`)
            .then(res => {
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