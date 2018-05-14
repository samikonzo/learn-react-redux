import { connect } from 'react-redux'
import { setVisibilityFilter } from '../redux/actions.js'
import Link from '../components/Link.jsx'

import { addTodo } from '../redux/actions.js'

const mapStateToProps = (state, ownProps) => {
	return{
		active: ownProps.filter === state.visibilityFilter,
		onClickAction: setVisibilityFilter(ownProps.filter)
	}
}

/*const mapDispatchToProps = (dispatch, ownProps) => {
	return{
		onClick: () => {
			dispatch(setVisibilityFilter(ownProps.filter))
		},

		onMouseover: () => {
			dispatch(addTodo('onMouseOver'))
		}

	} 
}*/



const FilterLink = connect(mapStateToProps)(Link)

export default FilterLink