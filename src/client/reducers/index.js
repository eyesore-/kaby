import { combineReducers } from 'redux'
import todos from './todos'
import visibilityFilter from './visibilityFilter'
import categoryFilter from './categoryFilter'

const todoApp = combineReducers({
  todos,
  visibilityFilter,
  categoryFilter
})

export default todoApp
