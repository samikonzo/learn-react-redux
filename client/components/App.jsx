import React, { Component } from 'react'
import Wrapper from './Wrapper.jsx'
import Inside from './Inside.jsx'
import store from '../redux/store'

class App extends Component{
	constructor(props){
		super(props)

		this.state = {
			value : 0
		}
	}

	componentDidMount(){

		let that = this

		setTimeout(function f(){
			let value = that.state.value
			value = ( ++value > 100 ) ? 0 : value
			that.setState({value})

			setTimeout(f, 100)
		}, 1000)

	}


	render(){
		let arrs = []
		for(var i = 0; i < 100; i++){
			arrs[i] = i
		}

		return(
			<Wrapper value={this.state.value}> 
				{
					arrs.map(item => <Inside value={item} key={item}/>)
				}
			</Wrapper>
		)
	}
}

export default App
