import React from 'react'
import Task from './Task'
//import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd'

class TasksLists extends React.Component {

	constructor(props) {
		super(props);
	}
	//<Task key={i} task={task} />
	componentWillMount = () => {
		console.log("this: ", this)
		console.log("this.props: ", this.props)
		//this.getData();
	}

	/*
			<DragDropContext >
				<Droppable droppableId="droppable">
					{(provided) => (
						<div ref={provided.innerRef}>
							{
								this.props.tasks.map((task, index) => (
									<Draggable key={task.id} draggableId={task.id} index={index}>
										{(provided) => (
												<div ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
													<Task task={task} key={task.id} />
												</div>
										)}
									</Draggable>
								))
							}
							{provided.placeholder}
						</div>
					)}
				</Droppable>
			</DragDropContext>
*/
	/*<div name="tasks" className="container">
				{this.props.tasks.map((task, i) =>
					<Task key={i} task={task} />
				)}
			</div>*/

	render() {
		return (
			<div name="tasks" className="container">
				{this.props.tasks.map((task, i) =>
					<Task key={i} task={task} />
				)}
			</div>
		)
	}
}

export default TasksLists