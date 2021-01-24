import { GET_PROJECTS, ADD_PROJECT, UPDATE_PROJECT, DELETE_PROJECT } from '../actions/actionTypes'

function projectsReducer(state = [], action) {
	switch (action.type) {
		case GET_PROJECTS:
			return action.projects;

		case ADD_PROJECT:
			//debugger
			console.log(action)
			return [
				...state,
				action.project
			];

		case UPDATE_PROJECT:
			return state.map(project => (project.id === action.project.id ? action.project : project));

		case DELETE_PROJECT:
			return state.filter(project => project.id !== action.projectId);

		default:
			return state;
	}
}

export default projectsReducer