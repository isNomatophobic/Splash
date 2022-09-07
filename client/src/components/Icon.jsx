import React from 'react'
import PropTypes  from 'prop-types'


const Icon = ({path,size,onclick}) => {
  return (
    <img src={path} style={{width: `${size}px`,cursor: 'pointer'}} onClick={onclick}/>
  )
}

Icon.propTypes={
    path: PropTypes.string.isRequired,
    onclick: PropTypes.func
}
export default Icon