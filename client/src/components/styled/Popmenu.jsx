import React from 'react'
import styled from 'styled-components'

const Menu= styled.div`
  width:650px;
  height: fit-content;
  position: absolute;
  position: absolute;
  right: 0;
  top: calc(100% + 10px);
  @media (max-width: 950px) {
    width:270px;
  }
  border-radius: 4px;
  box-shadow: 0 8px 16px #00000029;
  `
  

const Popmenu = ({visible,children}) => {

  if(visible)
  {
    return <Menu>{children}</Menu>
  }
  return null
}

export default Popmenu