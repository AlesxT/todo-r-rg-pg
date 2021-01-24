import React from 'react'
//import axios from 'axios'
//import styles from './App.module.scss'
import TodoLists from './TodoLists'
import AddProject from './AddProject'

class Dashboard extends React.Component {

	constructor(props) {
		super(props);
	}

	render() {
		return (
			<>
				<TodoLists />
				<AddProject />
			</>
		)
	}
}

export default Dashboard