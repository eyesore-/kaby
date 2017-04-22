import React from 'react'
import PropTypes from 'prop-types'
import CategoryLink from '../containers/CategoryLink'

const Todo = ({ onClick, completed, category, text, deleteClick }) => (
  <div>
    <CategoryLink
      filter='SHOW_CATEGORY'
      category={category}
      >
      {category}
    </CategoryLink>

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
