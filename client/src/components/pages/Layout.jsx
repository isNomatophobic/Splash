import Icon from 'components/Icon';
import { logo,menu,searchIcon,search } from 'components/images';
import Button from 'components/styled/Button';
import React from 'react'
import {Outlet ,Link } from "react-router-dom";
import styled from 'styled-components';
import { useState,useEffect} from 'react';


const StyledUl = styled.ul`
  padding: 0px;
  margin: 0px 20px;
  list-style-type:none;
  display: flex;
`
const SearchContainer = styled.form`
display: flex;
flex-grow: 1;
border-radius: 24px;
`

const StyledLi = styled.li`
margin: 0px 10px;
`
const StyledInput = styled.input`
  flex-grow: 1;
  `


const StyledLink = styled(Link)`
  color: ${props=>props.theme.palette.text.main};
  &:hover{
    color: ${props=>props.theme.palette.text.secondary};
  }
  text-decoration: none;
  transition: all .1s ease-in-out;
  `

const Layout = () => {
  const [buttontext,setbuttontext]=useState('Submit')
  const Resize =()=>{
    if(window.innerWidth > 720 )setbuttontext('Submit a photo')
    else setbuttontext('Submit')
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
            <SearchContainer>
              <button><Icon path={ search } size='20'/></button>
              <StyledInput type="text" placeholder='Search free high resolution photos'/>
              <button><Icon path={ searchIcon } size='20'/></button>
            </SearchContainer>
          <StyledLi>
            <StyledLink to="/explore">Explore</StyledLink>
          </StyledLi>
          <StyledLi>
            <StyledLink to="/advertise">Advertise</StyledLink>
          </StyledLi>
          <StyledLi>
            <StyledLink to="/blog">Blog</StyledLink>
          </StyledLi>
          <StyledLi>
            <StyledLink to="/login">Log in</StyledLink>
          </StyledLi>
          <StyledLi>
            <StyledLink to="/signup">Sign up</StyledLink>
          </StyledLi>
          <StyledLi>
            <Button text={buttontext}/>
          </StyledLi>
          <StyledLi>
            <Icon path={menu}/>
          </StyledLi>
        </StyledUl>
      </nav>

      <Outlet />
    </>
  )
}

export default Layout