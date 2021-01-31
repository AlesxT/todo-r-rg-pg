import { GET_PROJECTS, ADD_PROJECT, UPDATE_PROJECT, DELETE_PROJECT } from './actionTypes'

export function getProjects(projects) {
  return { type: GET_PROJECTS, projects: projects }
}

export function addProject( project) {
  return { type: ADD_PROJECT, project }
}

export function updateProject(index) {
  return { type: UPDATE_PROJECT, index: index }
}

export function deleteProject(index) {
  return { type: DELETE_PROJECT, index: index }
}

/*export function updateTask(index) {
  return { type: UPDATE_TASK, index: index }
}*/