// Actions for individual todos

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

export const deleteTodo = id => ({
  type: 'DELETE_TODO',
  id
})

// Actions for filtering

export const setCategory = category => ({
  type: 'SET_CATEGORY',
  category
})

export const setFilter = filter => ({
  type: 'SET_FILTER',
  filter
})
