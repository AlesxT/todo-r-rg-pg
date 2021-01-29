import axios from 'axios';
import React from 'react';
import './TodoListLogo.scss'



class TodoListLogo extends React.Component {

	constructor(props) {
		super(props);
		
	}

	render() {
		return (

			<span className="tLLogo"><h1>SIMPLE TODO LISTS</h1></span>
	
		)
	}
}

export default TodoListLogo
