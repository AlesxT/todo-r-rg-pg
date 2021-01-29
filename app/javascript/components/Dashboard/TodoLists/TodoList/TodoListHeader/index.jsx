import React from 'react'
import axios from 'axios'
import './TodoListHeader.scss'
import {connect} from 'react-redux'
import {UPDATE_PROJECT, DELETE_PROJECT} from '../../../../../actions/actionTypes'
import {FaEdit, FaTrashAlt, FaRegCalendarAlt} from "react-icons/fa";

class TodoListHeader extends React.Component {

    constructor(props) {
        super(props);
    }

    putProject = () => {
        console.log(this.props.project.id);
        var projectput = prompt("Please enter your new name for project" , this.props.project.name);
        if (true /*projectput != "" && projectput*/) {
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
                    <div className="col-md-1 buttH iconHc">
                        <FaRegCalendarAlt />
                    </div>
                    <div className="col-md-9 headerText">
                        {this.props.project.name}
                    </div>
                    <div className="col-md-1 buttH iconH">
                        <FaEdit  onClick={this.putProject}/>
                    </div>
                    <div className="col-md-1 buttH iconH">
                        <FaTrashAlt onClick={this.delProject}/>
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