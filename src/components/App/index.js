import React, {Component} from 'react';
//import ReactDom from 'react-dom';

import SearchPanel from '../SearchPanel'
import TaskList from '../TaskList'
import AddPanel from '../AddPanel'
import './App.css'

export default class App extends Component {

	counter = 0;

	createTask = (label) =>{
		return {
			label: label,
			id: ++this.counter,
			done: false,
			important: false,
			show: true
		}
	}

	state = {
		tasks: [
			this.createTask('Drink coffee'),
			this.createTask ('Make awesome react app')
		],
		filter: 'all'
	}

	render () {
		console.log(this.state.filter);
		return (
			<div className="container">
				<h1 className="app-header">TODO List</h1>
				<SearchPanel filter={this.state.filter}
							filterHandler={this.filterTasks}
							searchHandler={this.searchTasks}/>
				<TaskList tasks = {this.state.tasks.filter((task)=>{
					return task.show;
				})}
					delHandler = {this.delTask}
					toggleDone = {this.toggleDone}
					toggleImportant = {this.toggleImportant}/>
				<AddPanel addHandler={this.addTask}/>
			</div>
		);
	}

	searchTasks = (search) => {
		console.log(search);
	}

	filterTasks = (filter) => {
		this.setState({
			filter: filter
		});
	}

	addTask = (value) => {
		
		const newTask = this.createTask(value);
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
