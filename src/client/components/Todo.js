import React from 'react'
import PropTypes from 'prop-types'

const Todo = ({ onClick, completed, text, deleteClick }) => (
  <div>
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
  completed: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
  deleteClick: PropTypes.func.isRequired
}

export default Todo
