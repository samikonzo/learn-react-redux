global.l = console.log

import { createStore } from 'redux'
import { addTodo, toggleTodo, setVisibilityFilter, VisibilityFilters} from './actions'
import todoApp from './reducer'
import { initialState } from './reducer'
let store = createStore(todoApp , initialState)

// subscribe
// store.subscribe returns unsubscribe func
let unsubscribe = store.subscribe(() => {
	l(store.getState())
})

// check initial state
l('initial state :')
l(store.getState())

// some actions
store.dispatch( addTodo('Learn about actions '))
store.dispatch( addTodo('Learn about reducers '))
store.dispatch( addTodo('Learn about store '))
store.dispatch( toggleTodo(0))
store.dispatch( toggleTodo(1))


// unsubscribe
unsubscribe()
