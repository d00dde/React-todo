import React from 'react';
import './StatusFilter.css';

export default function StatusFilter (props) {

	return(
		<div className="status-filter">
			<button onClick={() => {props.clickHandler('all')}}
					className={props.filter === 'all' ? 'btn btn-primary' : 'btn btn-outline-primary'}>All</button>
	        <button onClick={() => {props.clickHandler('active')}}
					className={props.filter === 'active' ? 'btn btn-primary' : 'btn btn-outline-primary'}>Active</button>
	        <button onClick={() => {props.clickHandler('done')}}
					className={props.filter === 'done' ? 'btn btn-primary' : 'btn btn-outline-primary'}>Done</button>
		</div>
	);
}
