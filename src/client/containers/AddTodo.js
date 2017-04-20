import React from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../actions/index'

let AddTodo = ({ dispatch }) => {
  let input
  let newTodo = {}
  return (
    <form onSubmit={e => {
      e.preventDefault()
      if (!input.value.trim()) return
      newTodo.id = Date.now()
      newTodo.text = input.value
      dispatch(addTodo(newTodo))
      input.value = ''
    }}>
      <input ref={node => {
        input = node
      }}/>
    </form>
  )
}

AddTodo = connect()(AddTodo)

export default AddTodo
