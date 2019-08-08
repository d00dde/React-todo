import React from 'react';
import './StatusFilter.css';

export default function StatusFilter () {

	return(
		<div className="status-filter">
			<button className="btn btn-primary">All</button>
	        <button className="btn btn-outline-primary">Active</button>
	        <button className="btn btn-outline-primary">Done</button>
		</div>
	);
}
