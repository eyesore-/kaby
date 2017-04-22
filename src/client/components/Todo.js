import React from 'react'
import PropTypes from 'prop-types'
import FilterLink from '../containers/FilterLink'

const Todo = ({ onClick, completed, category, text, deleteClick }) => (
  <div>
    <FilterLink filter='SHOW_CATEGORY'>
      {category}
    </FilterLink>
    <span
      onClick={onClick}
      style={{color: completed ? 'pink' : 'black'}}
    >{text}</span>
    <span onClick={deleteClick}
    >X</span>
  </div>
)

Todo.propTypes = {
  text: PropTypes.string.isRequired,
  category: PropTypes.string,
  completed: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
  deleteClick: PropTypes.func.isRequired
}

export default Todo
