import colors from '../utils/colors'

// Actions for individual todos

export const addTodo = ({ text, category }) => ({
  type: 'ADD_TODO',
  id: Date.now(),
  category: {
    value: category,
    color: colors[Math.floor(Math.random() * colors.length)]
  },
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
