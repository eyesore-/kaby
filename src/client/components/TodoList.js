import React from 'react'
import PropTypes from 'prop-types'
import Todo from './Todo'

const TodoList = ({ todos, onTodoClick, onDeleteClick }) => (
  <div>
    {todos.map(todo => <Todo
      key={todo.id}
      {...todo}
      onClick={() => onTodoClick(todo.id)}
      deleteClick={() => onDeleteClick(todo.id)}
    />)}
  </div>
)

TodoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    category: PropTypes.shape({
      value: PropTypes.string,
      color: PropTypes.string
    }),
    completed: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired
  }).isRequired).isRequired,
  onTodoClick: PropTypes.func.isRequired,
  onDeleteClick: PropTypes.func.isRequired
}

export default TodoList
