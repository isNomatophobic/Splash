import React from 'react'
import { useState,useEffect} from 'react';
import styled from 'styled-components';
import { breakpoints } from 'theme';

const MenuContainer = styled.div`
display: flex;
flex-direction: column;
@media (${breakpoints.md}) {
  display: none;
};
`


const Arrow = styled.div`
color: ${props=>props.theme.palette.text.main};
cursor: pointer;
font-size: 25px;
line-height: 15px;
transition: transform 0.1s ease-in-out;
transform: rotate(${props => props.open?'180':'0'}deg);
`
const DawnSlideMenu = ({children,title}) => {
    const [open,setOpen] = useState(false)
  return (
    <MenuContainer>
        <h1 style={{display: 'flex',justifyContent: 'space-between'}}>{title} <Arrow onClick={()=>setOpen(!open)} open={open}>⌄</Arrow></h1>
        <div className='slider' style={{display: `${open===true ?'flex':'none'}`,height: 'fit-content'}}>{children}</div>
    </MenuContainer>
  )
}

export default DawnSlideMenu