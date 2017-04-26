import React from 'react'
import PropTypes from 'prop-types'
import FilterLink from '../containers/FilterLink'

const FilterNav = ({categories}) => (
  <section>
    <div>
      <FilterLink filter='SHOW_ALL'>All</FilterLink>
    </div>
    <div>
      <FilterLink filter='SHOW_ACTIVE'>Active</FilterLink>
    </div>
    <div>
      <FilterLink filter='SHOW_COMPLETED'>Completed</FilterLink>
    </div>
    {categories.map((category, i) =>
      <div>
        <FilterLink
          filter='SHOW_CATEGORY'
          category={category}
          key={i}
          >{category}</FilterLink>
      </div>
    )}
  </section>
)

FilterNav.propTypes = {
  categories: PropTypes.arrayOf(
    PropTypes.string
  ).isRequired
}

export default FilterNav
