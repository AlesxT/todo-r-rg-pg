import React from 'react'
import axios from 'axios'
//import styles from './App.module.scss'
import TodoList from './TodoList'
import { connect } from 'react-redux'
import { GET_PROJECTS } from '../../../actions/actionTypes'

class TodoLists extends React.Component {

	constructor(props) {
		super(props);
		//this.state = {
		//	projects: []
		//};
	}

	getProjects = () => {
		let self = this;
		axios.get('/api/projects')
			.then(function (response) {
				console.log(response.data);
				//self.setState({
				//projects: response.data
				self.props.dispatch({ type: GET_PROJECTS, projects: response.data })
				//})
			})
			.catch(function (error) {
				// handle error
				//{JSON.stringify(this.state.data)}
				console.log(error);
			});
	}

	/*getProjects() {
		axios.get('/api/projects')
		.then(response => {
		this.props.dispatch(getProjects(response.data));
		})
		.catch(error => console.log(error))
	}*/

	componentDidMount = () => {
		this.getProjects();
	} 

	render() {
		return (
			<>
				{this.props.projects.map((project, i) =>

					<TodoList key={i} project={project} />

				)}
			</>
		)
	}
}

const mapStateToProps = (state) => {
	return {
		projects: state.projects
	}
}

export default connect(mapStateToProps)(TodoLists)
//export default TodoLists

//export default TodoLists