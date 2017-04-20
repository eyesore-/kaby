export const addTodo = ({ text, id, category }) => {
  return {
    type: 'ADD_TODO',
    id,
    category,
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
