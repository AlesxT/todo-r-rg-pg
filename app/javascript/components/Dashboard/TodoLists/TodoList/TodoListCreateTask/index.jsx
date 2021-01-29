import React from 'react'
import axios from 'axios'
import { connect } from 'react-redux'
import { UPDATE_PROJECT } from '../../../../../actions/actionTypes'
import './TodoListCreateTask.scss'

class TodoListCreateTask extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            taskNew: ''
        };
    }

    taskName = (e) => {
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
        if (taskName != '') {
            //console.log(typeof(tasknew));
            axios.post('/api/tasks/', {
                name: taskName,
                project_id: this.props.projectId
            })
                .then((response) => {
                    this.props.dispatch({ type: UPDATE_PROJECT, project: response.data })
                    console.log("task resp: " + response);
                }, (error) => {
                    console.log(error);
                });
        }
    }

    render() {
        return (
            <div name="taskCreate" className="container">
                <div className="row task">
                    <div className="col-md-1">
                    </div>
                    <div className="input-group col-md">
                        <input type="text" onChange={this.taskName} className="form-control inputTextBorder" placeholder="Enter here the task you want to add.." />
                        <div className="input-group-append">
                            <button className="btn addTaskButton" type="button" onClick={this.addTask}>Add Task</button>
                        </div>
                    </div>
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

export default connect()(TodoListCreateTask)