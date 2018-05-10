import { VisibilityFilters } from './actions'

const initialState = {
	visibilityFilters: VisibilityFilters.SHOW_ALL,
	todos: [],
}

/*function todoApp(state, action){
	if( typeof state === 'undefined'){
		return initialState
	}

	// some actions

	return state
}*/

function todoApp(state = initialState, action){

	switch (action.type) {
		case SET_VISIBILITY_FILTER: {
			return Obect.assign({}, state, {
				visibilityFilters: action.filter
			})
		}

		default : return state
	}


	
}