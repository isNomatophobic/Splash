import React from 'react'
import { useState,useEffect} from 'react';
import styled from 'styled-components';



const DawnSlideMenu = ({screen,children,title,color}) => {
    const [open,setOpen] = useState(false)
    const Arror = styled.div`
    color: ${props=>props.theme.palette.text.main};
    cursor: pointer;
    font-size: 25px;
    line-height: 15px;
    transition: transform 0.3s ease-in-out;
    transform: rotate(${open?'180':'0'}deg);
`
  return (
    <div style={{display: `${screen==='Desktop'?'none':'flex'}`,flexDirection: 'column'}}>
        <h1 style={{display: 'flex',justifyContent: 'space-between'}}>{title} <Arror onClick={()=>setOpen(!open)}  >⌄</Arror></h1>
        <div className='slider' style={{display: `${open===true ?'flex':'none'}`,justifyContent: 'center'}}>{children}</div>
    </div>
  )
}

export default DawnSlideMenu