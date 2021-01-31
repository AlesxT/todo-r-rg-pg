import React from 'react'
import axios from 'axios'
import { connect } from 'react-redux'
import { UPDATE_PROJECT, UPDATE_TASK } from '../../../../../../actions/actionTypes'
import './Task.scss'
import {FaEdit, FaTrashAlt} from "react-icons/fa";

class Task extends React.Component {

	constructor(props) {
		super(props);
	}

	putTask = () => {
		//console.log(this.props.task.project_id, this.props.task.id);
		//var statusTF = this.refs.check.checked;
		var taskput = prompt("Please enter your new name for " + this.props.task.name, this.props.task.name);
		if (taskput != null) {
			console.log(taskput);
			axios.put(`/api/tasks/${this.props.task.id}`, {
			
				name: taskput
				//status: statusTF
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
		const conf = confirm('Are you sure you want to delete tasks: ' + this.props.task.name);
		if (conf) {
			//axios.delete('/api/tasks', { data: { id: this.props.task.id } }).then((response) => {
			axios.delete(`/api/tasks/${this.props.task.id}`).then((response) => {
				this.props.dispatch({ type: UPDATE_PROJECT, project: response.data })
				console.log(response);
			})
		}
	}

	putCheckBox = () => {
		var statusTFf = this.refs.check.checked;
		//console.log(this.refs.check.checked);
		//console.log("status: " + statusTFf + " Type: " + typeof (statusTFf));
		//if (true) {
			axios.put(`/api/tasks/${this.props.task.id}`, {
				//id: this.props.task.id,
				//name: this.props.task.name,
				status: statusTFf 
			})
				.then((response) => {
					this.props.dispatch({ type: UPDATE_PROJECT, project: response.data })
					console.log(response);
				}, (error) => {
					console.log(error);
				});
		//}

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
					{this.props.task.name}
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