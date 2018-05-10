import React, { Component } from 'react';

//styles
// import './styles/Inside'

class Inside extends Component {
	render() {
		return (
			<div>
				{this.props.value}				
			</div>
		);
	}
}

export default Inside