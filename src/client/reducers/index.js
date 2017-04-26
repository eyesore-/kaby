import { combineReducers } from 'redux'
import categories from './categories'
import todos from './todos'
import visibilityFilter from './visibilityFilter'

const todoApp = combineReducers({
  todos,
  categories,
  visibilityFilter
})

export default todoApp
