import React from 'react';
import TaskListItem from '../TaskListItem';

export default function tascList({labels}) {

    const listElements = labels.map((elem) => {
        return <li key={elem.key}><TaskListItem label={elem.label} /></li>
    });

    return (
        <ul>
            {listElements}
        </ul>

    );
}