import React from 'react'
import PropTypes from 'prop-types'

/*const Link = ({ active, onClick, onMouseover, children }) => {



	if(active){
		return <span>{children}</span>
	}

	return (
		<a 
			href="#"
			onClick={e => {
				e.preventDefault()
				//onClick()
			}}
			onMouseOver={e => {
				e.preventDefault()
				//onMouseover()
			}}
		>
			{children}
		</a>
	)
}
*/

class Link extends React.Component{
	constructor(props){
		super(props)

		l(props)

		this.dispatch = this.props.dispatch
	}


	render(){

		return(
			<a href="#" onClick={e => { 
				e.preventDefault()
				this.dispatch( this.props.onClickAction )
			}}
			> {this.props.children} </a>
		)
	}
}


Link.propTypes = {
	active: PropTypes.bool.isRequired,
	children: PropTypes.node.isRequired,
	//onClick: PropTypes.func.isRequired
}

export default Link