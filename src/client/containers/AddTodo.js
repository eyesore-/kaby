import React from 'react'
import { connect } from 'react-redux'
import { addTodo, addCategory } from '../actions/index'
import { extractCategory, extractText } from '../utils/helpers'

let AddTodo = ({ dispatch }) => {
  let input
  let newTodo = {}
  return (
    <form onSubmit={e => {
      e.preventDefault()
      if (!input.value.trim()) return
      newTodo.category = extractCategory(input.value)
      newTodo.text = extractText(input.value)
      dispatch(addTodo(newTodo))
      if (newTodo.category) dispatch(addCategory(newTodo.category))
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
