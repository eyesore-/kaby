import { connect } from 'react-redux'
import { toggleTodo, deleteTodo } from '../actions'
import TodoList from '../components/TodoList'

const getVisibleTodos = ({todos, visibilityFilter, categoryFilter}) => {
  switch (visibilityFilter) {
    case 'SHOW_ALL':
      return todos
    case 'SHOW_COMPLETED':
      return todos.filter(t => t.completed)
    case 'SHOW_ACTIVE':
      return todos.filter(t => !t.completed)
    case 'SHOW_CATEGORY':
      return todos.filter(t => t.category === categoryFilter)
    default:
      return todos
  }
}

const mapStateToProps = state => {
  return {
    todos: getVisibleTodos(state)
  }
}
const mapDispatchToProps = dispatch => {
  return {
    onTodoClick: id => { dispatch(toggleTodo(id)) },
    onDeleteClick: id => { dispatch(deleteTodo(id)) }
  }
}

const VisibleTodoList = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList)

export default VisibleTodoList
