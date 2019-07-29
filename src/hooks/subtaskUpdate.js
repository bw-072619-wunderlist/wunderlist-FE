import { useState } from 'react';

export default (initVal) => {
    const [subtasks, setSubtasks] = useState(initVal);

    function updateItem(list, newItem, idField) {
        const target = list.findIndex(item => {
            return item[id] === newItem[id];
        });
        const updatedItem = {...subtasks[target], ...abbrevSubtask};
        const oldOmitted = 
    }

    function updateSubtask(newVersion) {
        const target = subtasks.findIndex(item => {
            return item.id === newItemnewVersion.id;
        });
        const updatedSubtask = {...subtasks[target], ...newVersion};
        const oldOmitted = subtasks.filter(oldItem => oldItem.id !== newVersion.id);
        const pending = oldOmitted.slice(0, subtasks.findIndex(i => !i.completed))
        const finished
        if (updatedSubtask.completed) {

        }
    }
};