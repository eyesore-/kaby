import React from 'react'
import FilterNav from './FilterNav'
import AddTodo from '../containers/AddTodo'
import VisibleTodoList from '../containers/VisibleTodoList'

const App = () => (
  <div>
    <FilterNav />
    <AddTodo />
    <VisibleTodoList />
  </div>
)

export default App
