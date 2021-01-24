import React from 'react'
import axios from 'axios'
import {connect} from 'react-redux'
import { UPDATE_PROJECT} from '../../../../../actions/actionTypes'


class TodoListCreateTask extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            taskNew: ''
          };
    }

    taskName= (e) => {
        this.setState({
            taskNew: e.target.value
        })
    }
    
    addTask = () => {
        var taskName = this.state.taskNew;
        console.log(taskName);
        console.log(this.props.projectId);
        //console.log(this.props.project.id);
		//var tasknew = prompt("Please enter your new task");
		if (taskName!= '') {
			//console.log(typeof(tasknew));
			axios.post('/api/tasks/', {
                name: taskName,
                project_id: this.props.projectId
			})
				.then((response) => {
                    //this.props.dispatch({ type: ADD_PROJECT, project: response.data })
                    //this.props.dispatch({ type: GET_PROJECTS, projects: response.data })
                    this.props.dispatch({ type: UPDATE_PROJECT, project: response.data})
                    
					console.log("task resp: " + response);
				}, (error) => {
					console.log(error);
				});
		}
	}

    render() {
        return (
            <div className="input-group mb-3">
                <input type="text" onChange={this.taskName} className="form-control" placeholder="Enter here the task you want to add.."/>
                <div className="input-group-append">
                    <button className="btn btn-success" type="button" onClick={this.addTask}>Add Task</button>
                </div>
            </div>
        )
    }
}

//export default TodoListCreateTask

/*const mapStateToProps = (state) => {
	return{
		projects: state.projects
	}
}*/

export default connect ()(TodoListCreateTask)