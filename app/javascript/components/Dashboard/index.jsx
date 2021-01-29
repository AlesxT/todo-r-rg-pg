import React from 'react'
//import axios from 'axios'
//import styles from './App.module.scss'
import TodoLists from './TodoLists'
import AddProject from './AddProject'
import TodoListLogo from './TodoListLogo'
import './Dashboard.scss'

class Dashboard extends React.Component {

	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="backG">
				<TodoListLogo />
				<TodoLists />
				<AddProject />
			</div>
		)
	}
}

export default Dashboard