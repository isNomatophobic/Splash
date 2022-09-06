import React from 'react'
import PropTypes  from 'prop-types'

const Icon = ({path,size}) => {
  return (
    <img src={path} style={{width: `${size}px`}} />
  )
}

Icon.propTypes={
    path: PropTypes.string.isRequired,
}
export default Icon