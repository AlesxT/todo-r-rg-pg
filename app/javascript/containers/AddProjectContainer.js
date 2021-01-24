import React, { Component } from 'react'
import axios from 'axios'
import { connect } from 'react-redux'
import { getProjects, addProject, toggleProject, deleteProject } from '../actions/actionCreators'
//import addProject from '../components/Dashboard/AddProject'
import AddProject from '../components/Dashboard/AddProject'
//import TodoLists from '../components/Dashboard/TodoLists'

class Projects extends Component {

	/*getProjects() {
		axios.get('/api/projects')
		.then(response => {
		this.state.dispatch(getProjects(response.data));
		})
		.catch(error => console.log(error))
	}*/

	createProject = (name) => {
		if (!(name === '')) {
		//axios.post('/api/projects', {projectф: {name: projectnew}})
		axios.post('/api/projects', {
			name: projectnew
		})
		.then(response => {
			this.props.dispatch(addProject(response.data.name))
		})
		.catch(error => console.log(error))      
		}    
	}

	/*updateProject = (params) => {
		axios.put(`/api/projects/${params.id}`, {project: {done: params.checked}})
		.then(response => {
		this.props.dispatch(toggleProject(params.id))
		})
		.catch(error => console.log(error))      
	}

	deleteProject = (id) => {
		axios.delete(`/api/projects/${id}`)
		.then(response => {
		this.props.dispatch(deleteProject(id))
		})
		.catch(error => console.log(error))
	}*/

  componentDidMount() {
    	this.getProjects();
  }

  render() {
      return (
          <div className="container">
          </div>
      )
  }
}

const mapStateToProps = (state) => {
	return {
		projects: state.projects
	}
}

export default connect(mapStateToProps)(Projects)