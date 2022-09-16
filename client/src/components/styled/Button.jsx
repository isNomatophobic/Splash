import React from 'react'
import styled from "styled-components"
import PropTypes  from 'prop-types'
import { breakpoints } from 'theme'


const Buttonst = styled.button`
    background-color: white;
    color: ${props=>props.theme.palette.text.main};
    font-size: 14px;
    height: 32px;
    line-height: 30px;
    padding: 0 11px;
    border: 1px solid ${props=>props.theme.palette.text.main};
    &:hover{
        color: ${props=>props.theme.palette.text.secondary};
        border: 1px solid ${props=>props.theme.palette.text.secondary};
    }
    border-radius: 4px;
    text-align: center;
    text-decoration: none;
    transition: all .1s ease-in-out;
    cursor: pointer;
    `

const Button = ({text,style}) => {
  return (
    <Buttonst style={style}>
        {text}
    </Buttonst>
  )
}

Button.prototypes={
    text: PropTypes.string
}
export default Button