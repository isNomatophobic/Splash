import React from 'react'
import PropTypes  from 'prop-types'


const Icon = ({path,size,cursor}) => {
  return (
    <img src={path} style={{width: `${size}px`,cursor: `${cursor}`}} onClick={onclick}/>
  )
}

Icon.propTypes={
    path: PropTypes.string.isRequired,
    onclick: PropTypes.func
}
export default Icon