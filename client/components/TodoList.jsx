import React from 'react'
import PropTypes from 'prop-types'
import Todo from './Todo.jsx'

const TodoList = ({ todos, onTodoClick }) => (
	<ul>
		{todos.map( todo => {
			return (<Todo
				key={todo.id}
				{...todo}
				onClick={() => onTodoClick(todo.id)}
			/>)
		})}
	</ul>
)

TodoList.defaultProps = {
	todos: [],
	onTodoClick: () => {},
}

TodoList.propTypes = {
	todos: PropTypes.arrayOf( PropTypes.shape({
		id: PropTypes.number.isRequired,
		completed: PropTypes.bool.isRequired,
		text: PropTypes.string.isRequired
	}).isRequired ).isRequired,
	onTodoClick: PropTypes.func.isRequired,
}






export default TodoList