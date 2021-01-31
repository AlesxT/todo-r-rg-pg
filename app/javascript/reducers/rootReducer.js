import { combineReducers } from 'redux'
import projectsReducer from './projectsReducer'
//import tasksReducer from './tasksReducer'


const rootReducer = combineReducers({
    projects: projectsReducer,
    //tasks: tasksReducer
});

export default rootReducer;