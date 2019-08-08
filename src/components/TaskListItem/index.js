import React, {Component} from 'react';
import './TaskListItem.css'

export default class TascListItem extends Component {

  render () {
    const { task, delHandler, toggleDone, toggleImportant } = this.props;
	const descClass = 'desc ' + 
						(task.done ? 'done ' : '') +
						(task.important ? 'important' : '');
    return (
    	<div className="list-group-item" >
	        <span onClick={toggleDone} className={descClass}>
	        {task.label}</span>
	        <div className="control">
		        <button onClick={delHandler} 
                className="btn btn-outline-danger btn-sm">
		        	<i className="fas fa-trash-alt"></i>
		        </button>
		        <button onClick={toggleImportant} 
                className="btn btn-outline-success btn-sm">
		        	<i className="fas fa-exclamation"></i>
		        </button>
        	</div>	
        </div>
    );
}

}