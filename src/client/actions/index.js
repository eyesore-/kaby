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

export const setFilter = ({ filter, category }) => ({
  type: 'SET_FILTER',
  filter,
  category
})

// Action to add categories

export const addCategory = category => ({
  type: 'ADD_CATEGORY',
  category
})
