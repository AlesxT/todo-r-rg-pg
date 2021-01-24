import React from 'react'
import axios from 'axios'
import {connect} from 'react-redux'
import { UPDATE_PROJECT} from '../../../../../../actions/actionTypes'


class Task extends React.Component {

    constructor(props) {
        super(props);
    }

    putTask = () => {
        //var idproject = this.props.project.id;
        console.log(this.props.task.project_id , this.props.task.id);
		var taskput = prompt("Please enter your new name for the project");
		if (taskput != null) {
            console.log(taskput);
			axios.put('/api/tasks', {
                id: this.props.task.id,
                name: taskput
			})
				.then((response) => {
                    this.props.dispatch({ type: UPDATE_PROJECT, project: response.data})
					console.log(response);
				}, (error) => {
					console.log(error);
				});
		}
    }
    
    delTask = () => {
        //const {project} = this.props
        const conf = confirm('Are you sure you want to delete the project: ' + this.props.task.name);
        //axios.delete('/api/projects', { data: { id: this.props.project.id } });
        if (conf) {
            axios.delete('/api/tasks', { data: { id: this.props.task.id } }).then((response) => {
                //this.props.dispatch({ type: DELETE_PROJECT, projectId: project.id })
                //this.props.dispatch({ type: DELETE_PROJECT, projectId: project.id })
                this.props.dispatch({ type: UPDATE_PROJECT, project: response.data})

                console.log(response);
            })
        }
    }



    render() {
        return (
            <div className="row bg-white">
                <div className="col-md-1 border p-2 text-center">
                    <input type="checkbox" />
                </div>
                <div className="col-md border ">
                    {this.props.task.id}: {this.props.task.name}
    			</div>
                <div className="col-md-1 text-center border">
                    <button type="button" className="btn btn-warning" onClick={this.putTask}>E</button>
                </div>
                <div className="col-md-1 text-center border">
                    <button type="button" className="btn btn-danger" onClick={this.delTask}>D</button>
                </div>
            </div>

        )
    }
}

export default connect ()(Task)