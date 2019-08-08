import React from 'react';
import TaskListItem from '../TaskListItem';
import './TaskList.css'

export default function TascList({tasks, delHandler, 
                                toggleDone, toggleImportant}) {

    const listElements = tasks.map((elem) => {
        return <li key={elem.id}>
        	<TaskListItem task={elem} 
                    delHandler={() => delHandler(elem.id)}
                    toggleDone={() => toggleDone(elem.id)}
                    toggleImportant={() => toggleImportant(elem.id)}/>
        </li>
    });
    return (
        <ul className="list-group">
            {listElements}
        </ul>

    );
}