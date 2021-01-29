import axios from 'axios';
import React from 'react';
import './AddProject.scss'
import { connect } from 'react-redux';
import { ADD_PROJECT } from '../../../actions/actionTypes';


class AddProject extends React.Component {

	//constructor(props) {
	//	super(props);
	//}
	constructor(props) {
		super(props);
		//this.state = {
		//projectnew
		//}
	}

	/*
	axios.post('/api/projects', {
				name: projectnew	
			})
				.then((response) => {
					console.log(response);
				}, (error) => {
					console.log(error);
				});

	axios({
				method: 'post',
				url: '/api/projects/',
				data: {
					name: projectnew,
				},
			}).catch(error => {
				console.log(error);
			}).then(response => {
				// this is now called!
				console.log(response);
			});		
	*/
	createProject = () => {
		console.log(this);
		var projectnew = prompt("Please enter your new project");
		if (projectnew != null) {
			console.log(typeof (projectnew));
			axios.post('/api/projects', {
				name: projectnew
			})
				.then((response) => {
					//debugger
					this.props.dispatch({ type: ADD_PROJECT, project: response.data })
					console.log(response);
				}, (error) => {
					console.log(error);
				});
		}
	}

	/*addProject = () => {
		var projectnew = prompt("Please enter your new project");
		if (projectnew != null) {
			axios.post('/api/projects', { project: { name: projectnew } })
				.then(response => {
					this.props.dispatch(addProject(response.data.name))
				})
				.catch(error => console.log(error))
		}
	}*/

	/*addProject = () => {
		let self = this;
		var projectnew = prompt("Please enter your new project");
		//if (projectnew != null) {
		console.log(projectnew);
		axios.post('/api/projects/', {
			name: projectnew
		})
			.then((response) => {
				console.log(response);
			}, (error) => {
				console.log(error);
			});
		//}
	}*/
	render() {
		return (

			<div className="addProjectButtonDiv"><button type="button" className="btn addProjectButton " onClick={this.createProject}>Add TODO List</button></div>
	
		)
	}
}

export default connect()(AddProject)
