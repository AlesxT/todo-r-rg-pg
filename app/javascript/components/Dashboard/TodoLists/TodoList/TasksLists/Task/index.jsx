import React from 'react'
import axios from 'axios'
import { connect } from 'react-redux'
import { UPDATE_PROJECT } from '../../../../../../actions/actionTypes'
import './Task.scss'
//import { DndProvider, useDrag } from "react-dnd";
//import { HTML5Backend } from "react-dnd-html5-backend";
import {FaEdit, FaTrashAlt} from "react-icons/fa";


import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd'

class Task extends React.Component {

	constructor(props) {
		super(props);
	}
	/*
	<DndProvider backend={HTML5Backend}>
				<div className="taskDiv row border-bottom">
					<div className="col-md-1 butt" >
						<input type="checkbox" ref="check" defaultChecked={this.props.task.status} onClick={this.putCheckBox} />
					</div>
					<div className="col-md taskText border-right border-left">
						<span className="">{this.props.task.id}: {this.props.task.name}</span>
					</div>
					<div className="col-md-1 butt">
						<button type="button" className="btn btn-warning" onClick={this.putTask}>E</button>
					</div>
					<div className="col-md-1 butt">
						<button type="button" className="btn btn-danger" onClick={this.delTask}>D</button>
					</div>
				</div>
			</DndProvider>
	*/

	putTask = () => {
		//var idproject = this.props.project.id;
		console.log(this.props.task.project_id, this.props.task.id);
		var taskput = prompt("Please enter your new name for the project");
		if (taskput != null) {
			console.log(taskput);
			axios.put('/api/tasks', {
				id: this.props.task.id,
				name: taskput
			})
				.then((response) => {
					this.props.dispatch({ type: UPDATE_PROJECT, project: response.data })
					console.log(response);
				}, (error) => {
					console.log(error);
				});
		}
	}

	delTask = () => {
		//const {project} = this.props
		const conf = confirm('Are you sure you want to delete the project: ' + this.props.task.name);
		if (conf) {
			axios.delete('/api/tasks', { data: { id: this.props.task.id } }).then((response) => {
				this.props.dispatch({ type: UPDATE_PROJECT, project: response.data })

				console.log(response);
			})
		}
	}

	putCheckBox = () => {
		var statusTF = this.refs.check.checked
		console.log(this.refs.check.checked);
		console.log("status: " + statusTF + " Type: " + typeof (statusTF));
		if (true) {
			axios.put('/api/tasks', {
				id: this.props.task.id,
				name: this.props.task.name,
				status: statusTF
			})
				.then((response) => {
					this.props.dispatch({ type: UPDATE_PROJECT, project: response.data })
					console.log(response);
				}, (error) => {
					console.log(error);
				});
		}

	}

//
//

	render() {
		return (
			<div className="taskDiv row">
				<div className="col-md-1 buttT" >
					<input type="checkbox" ref="check" defaultChecked={this.props.task.status} onClick={this.putCheckBox} />
				</div>
				<div className="col-md taskText">
					<span className="">{this.props.task.id}: {this.props.task.name}</span>
				</div>
				<div className="col-md-1 buttT iconT ">
					<FaEdit onClick={this.putTask} />
				</div>
				<div className="col-md-1 buttT iconT">
					<FaTrashAlt onClick={this.delTask} />
				</div>
			</div>
		)
	}
}

export default connect()(Task)