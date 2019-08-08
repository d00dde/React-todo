import React, {Component} from 'react';
import './AddPanel.css';

export default class AddPanel extends Component {

	render () {
		return (
			<div className="add-panel">
				<input className="form-control add-task"
				type="text" placeholder="Description task here ..."/>
				<button className="btn btn-primary"
					onClick={() => {
						const desc = document.querySelector('.add-task').value;
						this.props.addHandler(desc);
					}}>Add</button>
			</div>
		);
	}


}