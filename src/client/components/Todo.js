import React from 'react'
import PropTypes from 'prop-types'
import FilterLink from '../containers/FilterLink'

const Todo = ({ onClick, completed, category, text, deleteClick }) => (
  <div>
    <FilterLink
      filter='SHOW_CATEGORY'
      category={category.value}
      color={category.color}
      >
      {category.value}
    </FilterLink>

    <span
      onClick={onClick}
      style={{color: completed ? 'pink' : 'black'}}
    >{text}</span>
    <span onClick={deleteClick}
    >&#10005;</span>
  </div>
)

Todo.propTypes = {
  text: PropTypes.string.isRequired,
  category: PropTypes.shape({
    value: PropTypes.string,
    color: PropTypes.string
  }),
  completed: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
  deleteClick: PropTypes.func.isRequired
}

export default Todo
