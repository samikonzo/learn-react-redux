global.l = console.log

import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux' // state refresher ?
import { createStore } from 'redux' // store creator, can receive actions
import todoApp from './redux/reducer.js' // global reducer
import store from './redux/store.js'
import App from './components/App.jsx' // main component

ReactDOM.render(
	<Provider store={store}>
		<App/>
	</Provider>
	,
	document.getElementById('app')
)