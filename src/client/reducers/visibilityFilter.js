const initialState = {
  filter: 'SHOW_ALL',
  category: undefined
}

const visibilityFilter = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_FILTER':
      return {
        filter: action.filter,
        category: action.category
      }
    default:
      return state
  }
}

export default visibilityFilter
