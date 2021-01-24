import React from 'react'
//import styles from './App.module.scss'
import axios from 'axios'
import './TodoListHeader.scss'
import {connect} from 'react-redux'
import {UPDATE_PROJECT, DELETE_PROJECT} from '../../../../../actions/actionTypes'
//import {TOGGLE_PROJECT, DELETE_PROJECT} from 'action/actionTypes'

class TodoListHeader extends React.Component {

    constructor(props) {
        super(props);
    }

    putProject = () => {
        //let self = this;
        //var idproject = this.props.project.id;
        console.log(this.props.project.id);
        var projectput = prompt("Please enter your new name for project");
        if (projectput != null) {
            console.log(projectput);
            axios.put('/api/projects', {
                name: projectput,
                id: this.props.project.id
            })
                .then((response) => {
                    this.props.dispatch({ type: UPDATE_PROJECT, project: response.data})
                    console.log("lol: " + response);
                }, (error) => {
                    console.log(error);
                });
        }
    }

    delProject = () => {
        const {project} = this.props
        const conf = confirm('Are you sure you want to delete the project: ' + this.props.project.name);
        //axios.delete('/api/projects', { data: { id: this.props.project.id } });
        if (conf) {
            axios.delete('/api/projects', { data: { id: project.id } }).then((response) => {
                this.props.dispatch({ type: DELETE_PROJECT, projectId: project.id })
                console.log(response);
            })
        }
    }


    render() {
        return (

            <div className="container header">
                <div className="row h-100">
                    <div className="col-md-1 text-center border">
                        <button type="button" className="btn btn-warning">C</button>
                    </div>
                    <div className="col-md-9 border">
                        <h4 className="">{this.props.project.id}: {this.props.project.name}</h4>
                    </div>
                    <div className="col-md-1 text-center border">
                        <button type="button" className="btn btn-warning" onClick={this.putProject}>E</button>
                    </div>
                    <div className="col-md-1 text-center border">
                        <button type="button" className="btn btn-danger" onClick={this.delProject}>D</button>
                    </div>
                </div>
            </div>

        )
    }
}

//export default TodoListHeader

const mapStateToProps = (state) => {
	return{
		projects: state.projects
	}
}

export default connect (mapStateToProps)(TodoListHeader)