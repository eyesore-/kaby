import { connect } from 'react-redux'
import { setFilter, setCategory } from '../actions/index'
import Link from '../components/Link'

const mapStateToProps = (state, ownProps) => ({
  active: ownProps.category === state.categoryFilter
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  onClick: () => {
    dispatch(setFilter(ownProps.filter))
    dispatch(setCategory(ownProps.category))
  }
})

const CategoryLink = connect(
  mapStateToProps,
  mapDispatchToProps
)(Link)

export default CategoryLink
