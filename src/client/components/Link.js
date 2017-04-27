import React from 'react'
import PropTypes from 'prop-types'

const Link = ({ active, children, onClick, color }) => {
  if (active) return <span>{ children }</span>

  return (
    <a href="#"
      onClick={e => {
        e.preventDefault()
        onClick()
      }}
      style={{color}}
      >
        {children}
      </a>
  )
}

Link.propTypes = {
  active: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired,
  color: PropTypes.string
}

export default Link
