import Icon from 'components/Icon';
import { logo} from 'components/images';
import Button from 'components/styled/Button';
import React from 'react'
import {Outlet ,Link } from "react-router-dom";
import styled from 'styled-components';
import { useState,useEffect} from 'react';
import { Popmenu, SearchButton } from 'components/styled';





const StyledUl = styled.ul`
  font-size: 14px;
  padding: 0px;
  margin: 10px 20px;
  list-style-type:none;
  display: flex;
  justify-content: center;
  align-items: center;
`
const SearchContainer = styled.form`
display: flex;
flex-grow: 1;
border-radius: 24px;
border: 1px solid #0000;
padding: 0px;
height: 40px;
width: 0px;
background-color: buttonface;
&:hover{
  border: 1px solid #d9d9d9;
}
transition: all .1s ease-in-out;
&:focus-within{
  background-color: white;
  }
`

const StyledLi = styled.li`
margin: 0px 10px;
display: flex;
justify-content: center;
align-items: center;
`
const StyledInput = styled.input`
  flex-grow: 1;
  width: 0px;
  color: ${props=>props.theme.palette.text.main};
  border: none;
  background-color: transparent;
  &:focus{
  outline: none;
  }
  transition: all .1s ease-in-out;
  `
const SearchIcon = styled.svg`
fill: ${props=>props.theme.palette.text.main};
&:hover{
  fill: ${props=>props.theme.palette.text.secondary};
}
transition: all .1s ease-in-out;
`

const StyledLink = styled(Link)`
  color: ${props=>props.theme.palette.text.main};
  &:hover{
    color: ${props=>props.theme.palette.text.secondary};
  }
  text-decoration: none;
  transition: all .1s ease-in-out;
  `
const Spliter= styled.div`
background-color:${props=>props.theme.palette.text.main};
color:${props=>props.theme.palette.text.main};
`

const Layout = () => {
  const [isActive,setIsActive] = useState([false,false])
  const menuOpen =(id)=>{
    setIsActive(existingItems => {
      return existingItems.map((item, j) => {
      if(j===id)
      {
        return item=!item
      }
      if(item===true)
      {
        return item=!item
      }
      else{
        return item
      }
        })
      })
      console.log(isActive);
    }
  

  const [Screen,setScreen]=useState()
  const [ScreanSubType,setScreenSubType]=useState();
  const Resize =()=>{
    if(window.innerWidth > 980 )
    {
      setScreen('Desktop')
      if(window.innerWidth > 1100)setScreenSubType('Desktop')
      else setScreenSubType('Tablet')
    }
    else 
    {
      setScreen('Small')
      if(window.innerWidth < 760)setScreenSubType('Mobile')
      else setScreenSubType('Tablet')
    }
  }
  useEffect(()=>{
    window.addEventListener('resize',Resize)
    return () => window.removeEventListener('resize', Resize);
  });
  
  return (
    <>
    <nav>
        <StyledUl>
          <StyledLi>
            <StyledLink to="/"><Icon path={logo}/></StyledLink>
          </StyledLi>
            <SearchContainer style={{position:'relative'}}>
              <SearchButton  ><SearchIcon  width="20" height="20"  viewBox="0 0 32 32" version="1.1" aria-hidden="false"><path d="M22 20c1.2-1.6 2-3.7 2-6 0-5.5-4.5-10-10-10S4 8.5 4 14s4.5 10 10 10c2.3 0 4.3-.7 6-2l6.1 6 1.9-2-6-6zm-8 1.3c-4 0-7.3-3.3-7.3-7.3S10 6.7 14 6.7s7.3 3.3 7.3 7.3-3.3 7.3-7.3 7.3z"></path></SearchIcon></SearchButton>
              <StyledInput type="text" placeholder='Search free high resolution photos'/>
              <SearchButton style={{display:ScreanSubType!=='Mobile'?'flex':'none'}}type='button' className='menubutton' onClick={()=>menuOpen(1)}><SearchIcon width="20" height="20"  viewBox="0 0 32 32" version="1.1" aria-hidden="false"><path d="M6.7 25.3H12V28H6.7C5.2 28 4 26.8 4 25.3V20h2.7v5.3zm0-18.6H12V4H6.7C5.2 4 4 5.2 4 6.7V12h2.7V6.7zM25.3 4H20v2.7h5.3V12H28V6.7C28 5.2 26.8 4 25.3 4zm0 21.3H20V28h5.3c1.5 0 2.7-1.2 2.7-2.7V20h-2.7v5.3zm-4-9.3c0 2.9-2.4 5.3-5.3 5.3s-5.3-2.4-5.3-5.3 2.4-5.3 5.3-5.3 5.3 2.4 5.3 5.3zm-2.6 0c0-1.5-1.2-2.7-2.7-2.7s-2.7 1.2-2.7 2.7 1.2 2.7 2.7 2.7 2.7-1.2 2.7-2.7z"></path></SearchIcon></SearchButton>
              <Popmenu visible={isActive[1]}  maxwidth='510' align='-450'>maikatiii</Popmenu>
            </SearchContainer>
          <div className='Desktop' style={{display:ScreanSubType!=='Mobile'?'flex':'none'}}>
          <StyledLi>
            <StyledLink to="/explore">Explore</StyledLink>
          </StyledLi>
          <StyledLi>
            <StyledLink to="/advertise">Advertise</StyledLink>
          </StyledLi>
          <StyledLi>
            <StyledLink to="/blog">Blog</StyledLink>
          </StyledLi>
            <Spliter style={{width:'1px',height:'30px',display:ScreanSubType!=='Mobile'?'flex':'none'}}></Spliter>
          <StyledLi>
            <StyledLink to="/login">Log in</StyledLink>
          </StyledLi>
          <Spliter style={{ backgroundColor:'transparent',display:ScreanSubType!=='Mobile'?'flex':'none',alignItems:'center'}}>/</Spliter>
          <StyledLi>
            <StyledLink to="/signup">Sign up</StyledLink>
          </StyledLi>
          <StyledLi>
            <Button text={Screen==='Desktop'?'Submit a photo':'Submit'}/>
          </StyledLi>
          </div>
          <StyledLi style={{position:'relative'}}>
           <SearchButton className='menubutton' onClick={()=>menuOpen(0)} ><SearchIcon width="24" height="24"  viewBox="0 0 32 32" version="1.1" aria-hidden="false"><path d="M4 21.3h24V24H4v-2.7zM4 8v2.7h24V8H4zm0 9.3h24v-2.7H4v2.7z"></path></SearchIcon></SearchButton>
           <Popmenu visible={isActive[0]} maxwidth='645' minwidth='270' align='0'>maikatiii</Popmenu>
          </StyledLi>
        </StyledUl>
      </nav>

      <Outlet />
    </>
  )
}

export default Layout