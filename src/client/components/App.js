import React from 'react'
import Nav from '../containers/Nav'
import AddTodo from '../containers/AddTodo'
import VisibleTodoList from '../containers/VisibleTodoList'

const App = () => (
  <div>
    <Nav />
    <AddTodo />
    <VisibleTodoList />
  </div>
)

export default App
