import {  UPDATE_TASK } from '../actions/actionTypes'

function tasksReducer(state = [], action) {
	switch (action.type) {

		case UPDATE_TASK:
			return state.map(project => (project.id === action.project.id ? action.project : project));

		default:
			return state;
	}
}

export default tasksReducer