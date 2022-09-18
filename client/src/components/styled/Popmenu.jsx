import React from 'react'
import styled,{ keyframes } from 'styled-components'
import { breakpoints } from 'theme'

const growOut = keyframes`
  0% {
    transform: rotateX(-90deg)
  }
  70% {
    transform: rotateX(20deg)
  }
  100% {
    transform: rotateX(0deg)
  }
  `
  
  const Menu= styled.div`
  background-color: white;
  display:${props => (props.visible ?`flex`:`none`)};
  width:${props => props.minwidth}px;}
  height: fit-content;
  position: absolute;
  right: ${props => props.align}px;
  top: calc(100% + 10px);
  @media (${breakpoints.md}) {
    width:${props => props.maxwidth}px;
  }
  border-radius: 4px;
  box-shadow: 0 8px 16px #00000029;
  border: 1px solid #d1d1d1;
  z-index: 10;
  transition: all 0,5s ease-in-out;
  transform-origin: top center;
  ${props => (props.minwidth && `
  &:before{
  content: '';
  position: absolute;
  border-color: #d1d1d1;
  border: solid transparent;
  border-bottom-color: white;
  border-width: 11px;
  top: -20px;
  right: 6.4px;
  z-index:0;
  }
  &:after{
    content: '';
    position: absolute;
    border: solid transparent;
    border-width: 10px;
    border-bottom-color: #d1d1d1;
    z-index: 0;
    top: -20px;
    right: 7.5px;
    z-index:-1;
  }
  `)}
  `
  

const Popmenu = ({visible,children,minwidth,maxwidth,align,style}) => {
  
    return <Menu visible={visible} minwidth={minwidth} maxwidth={maxwidth} align={align} style={style}>{children}</Menu>
}

export default Popmenu