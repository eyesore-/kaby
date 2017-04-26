import { connect } from 'react-redux'
import FilterNav from '../components/FilterNav'

const mapStateToProps = state => {
  return {
    categories: state.categories
  }
}

const Nav = connect(
  mapStateToProps
)(FilterNav)

export default Nav
