import React, {Component} from 'react';
//import ReactDom from 'react-dom';

import SearchPanel from '../SearchPanel'
import TaskList from '../TaskList'
import AddPanel from '../AddPanel'
import './App.css'

let tasks = [
		{label: 'Drink coffee', id: 1, done: false, important: false},
		{label: 'Make awesome react app', id: 2, done: false, important: false}
	];

export default class App extends Component {

	state = {
		tasks: tasks
	}

	counter = tasks.length;
	
	render () {
		return (
			<div className="container">
				<h1 className="app-header">TODO List</h1>
				<SearchPanel />
				<TaskList tasks = {this.state.tasks} 
					delHandler = {this.delTask}
					toggleDone = {this.toggleDone}
					toggleImportant = {this.toggleImportant}/>
				<AddPanel addHandler={this.addTask}/>
			</div>
		);
	}
	addTask = (value) => {
		
		const newTask = {
			label: value,
			id: ++this.counter,
			done: false,
			important: false
		}

		this.setState (({tasks})=>{
			return {
				tasks: [...tasks, newTask]
			};
		});
	}

	delTask = (id) => {
		this.setState(({tasks})=>{
			return {
				tasks: tasks.filter((task) => {
					return task.id !== id;
				})
			};
		});
	}

	toggleDone = (id) => {
		this.setState(({tasks}) =>{
			return {
				tasks: tasks.map((task) => {
					if (task.id === id) {
						return {...task, done: !task.done};
					} else return task;
				})
			};
		});
	}

	toggleImportant = (id) => {
		this.setState(({tasks}) =>{
			return {
				tasks: tasks.map((task) => {
					if (task.id === id) {
						return {...task, important: !task.important};
					} else return task;
				})
			};
		});
	}
}
