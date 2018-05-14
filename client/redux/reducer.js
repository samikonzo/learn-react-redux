import { combineReducers } from 'redux'
import { ADD_TODO, TOGGLE_TODO, SET_VISIBILITY_FILTER, VisibilityFilters } from './actions'

const { SHOW_ALL } = VisibilityFilters

function todos(state = [], action){
	switch(action.type){
		case ADD_TODO: {
			return [
				...state,
				{
					text: action.text,
					completed: false,
					id: action.id,
				}
			]
		};

		case TOGGLE_TODO: {
			return state.map( (todo, i) => {
				if(i === action.index){
					return Object.assign({}, todo, {
						completed: !todo.completed
					})
				}

				return todo
			})
		};

		default: return state

	}
}

function visibilityFilter(state = SHOW_ALL, action){
	switch(action.type){
		case SET_VISIBILITY_FILTER: {
			return action.filter
		};

		default : return state
	}
}

/**
*	 rootReducer = (state, action) => {
*		prop: propEditor(state[prop], action)	
*	}
*
*	or using comnineReducers
*/

let todoApp = combineReducers({
	visibilityFilter, 
	todos,
})

export default todoApp