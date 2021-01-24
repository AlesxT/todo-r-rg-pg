import React from 'react'
import axios from 'axios'
import Task from './Task'


class TasksLists extends React.Component {

    constructor(props) {
        super(props);
    }

    componentWillMount = () => {
        console.log("this: ", this)
        console.log("this.props: ", this.props)
        //this.getData();
    }

    render() {
        return (

            <div name="tasks" className="container">    
                
                
                {this.props.tasks.map((task, i) =>
                    
					<Task key={i} task={task}/>
					
				)}
            </div>

        )
    }
}

export default TasksLists