import React, { Component } from 'react';

//styles
import './Wrapper.less'

class Wrapper extends Component {
	render() {

		const childrenWithExtraProp = React.Children.map(this.props.children, child => {
			return React.cloneElement(child, {
				extraValue : this.props.value
			})
		})

		const wrappedChildren = React.Children.map(childrenWithExtraProp, child =>{
			let isCurrentValue = child.props.value == this.props.value
			let className = 'Wrapper'
			
			if((child.props.value + this.props.value) % 3 == 0) className += ' current'
			else className += ' notCurrent'

			return (<div className={className}>{child}</div>)
		})

		return (
			<div>
				{wrappedChildren}
			</div>
		);
	}
}

export default Wrapper