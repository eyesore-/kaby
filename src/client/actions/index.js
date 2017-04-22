export const addTodo = ({ text, id, category }) => ({
  type: 'ADD_TODO',
  id,
  category,
  text
})

export const toggleTodo = id => ({
  type: 'TOGGLE_TODO',
  id
})

export const setFilter = filter => ({
  type: 'SET_FILTER',
  filter
})

export const deleteTodo = id => ({
  type: 'DELETE_TODO',
  id
})
