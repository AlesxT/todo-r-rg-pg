import React from 'react'
//import axios from 'axios'
import TodoListHeader from './TodoListHeader'
import TodoListCreateTask from './TodoListCreateTask' 
import TasksLists from './TasksLists' 
//
import './TodoList.scss'

class TodoList extends React.Component {

    constructor(props) {
        super(props)
    }

    componentWillMount = () => {
        console.log("this: ", this)
        console.log("this.props: ", this.props)
        //this.getData();
    }

    render() {
        const {project} = this.props
        return (
            <div className="l-width mx-auto p-3">
                <div className="borderr">
                    <TodoListHeader project={project} />
                    <TodoListCreateTask projectId={project.id} />
                    <TasksLists tasks={project.tasks}/>
                </div>
            </div>
        )
    }
}

export default TodoList