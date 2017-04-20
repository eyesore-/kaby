export const addTodo = ({ text, id }) => {
  return {
    type: 'ADD_TODO',
    id: id,
    text
  }
}

export const toggleTodo = id => {
  return {
    type: 'TOGGLE_TODO',
    id
  }
}

export const deleteTodo = id => {
  return {
    type: 'DELETE_TODO',
    id
  }
}
