import React from 'react';
//import ReactDom from 'react-dom';

import SearchPanel from '../SearchPanel'
import TaskList from '../TaskList'


export default function App () {

	const labels = [
		{label: 'Drink coffee', key: 1},
		{label: 'Make awesome react app', key: 2}
	];

	return (
		<div>
			<h1>TODO List</h1>
			<SearchPanel />
			<TaskList labels = {labels} />


		</div>
	);
}
