import { useState } from 'react';

export default (initVal) => {
    const [subtasks, setSubtasks] = useState(initVal);

    // function updateSubtask(newVersion) {
    //     const target = subtasks.findIndex(item => {
    //         return item.id === newVersion.id;
    //     });
    //     const updatedSubtask = {...subtasks[target], ...newVersion};
    //     const oldOmitted = subtasks.filter(oldItem => oldItem.id !== newVersion.id);
    //     const finishedThreshold = subtasks.findIndex(i => !i.completed);
    //     const pending = oldOmitted.slice(0, finishedThreshold);
    //     const finished = oldOmitted.slice(finishedThreshold);
    //     if (updatedSubtask.completed) {
    //         finished.unshift(updatedSubtask);
    //     } else {
    //         pending.unshift(updatedSubtask);
    //     }
    //     setSubtasks(pending.concat(finished));
    // }

    function delSubtask(name) {
        setSubtasks(subtasks.filter(task => task.name !== name));
    }

    return [subtasks, setSubtasks, delSubtask];
};