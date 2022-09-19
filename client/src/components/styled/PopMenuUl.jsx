import React from 'react'
import styled from 'styled-components'

const ContainerPopMenuUl= styled.ul`
padding: 0px;
z-index: 10;
display: none;
@media (${props=> props.breakpoint})
{
  display: block;
}
`

const PopMenuUl = ({breakpoint,children}) => {
  return (
    <ContainerPopMenuUl breakpoint={breakpoint}>{children}</ContainerPopMenuUl>
  )
}

export default PopMenuUl