import React, { Component } from 'react'
import Footer from './Footer.jsx'
import AddTodo from '../containers/AddTodo.jsx'
import VisibleTodoList from '../containers/VisibleTodoList'
  
class App extends Component{
	constructor(props){
		super(props)
	}

	componentDidMount(){

	}


	render(){

		return(
			<div className="App">
				<AddTodo />
				<VisibleTodoList />
				<Footer />
			</div>
		)
	}
}

export default App
