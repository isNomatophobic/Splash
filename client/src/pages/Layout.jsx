import Icon from 'components/Icon';
import { logo} from 'components/images';
import Button from 'components/styled/Button';
import React from 'react'
import {Outlet ,Link } from "react-router-dom";
import styled from 'styled-components';
import { useState,useEffect} from 'react';
import { DownSliderMenu, Popmenu, PopMenuFooter, SearchButton,PopMenuUl } from 'components/styled';
import Search from 'components/Search';
import { SearchIcon } from 'components/Search/search.styled';
import theme, { breakpoints } from 'theme';
import { isContentEditable } from '@testing-library/user-event/dist/utils';





const StyledUl = styled.ul`
  font-size: 14px;
  padding: 0px;
  margin: 10px 20px;
  list-style-type:none;
  display: flex;
  justify-content: center;
  align-items: center;
`


const StyledLi = styled.li`
z-index: 10;
margin: 0px 10px;
display: flex;
justify-content: center;
align-items: center;
white-space:nowrap;
`



const StyledLink = styled(Link)`
  color: ${props=>props.theme.palette.text.main};
  &:hover{
    color: ${props=>props.theme.palette.text.secondary};
  }
  text-decoration: none;
  transition: all .1s ease-in-out;
  z-index: 10;
  height:
  `
const Spliter= styled.div`
background-color:${props=>props.theme.palette.text.main};
color:${props=>props.theme.palette.text.main};
display: flex;
`


const DownArrorButton = styled.div`
border: solid ${props=>props.theme.palette.text.main};
border-width: 0 3px 3px 0;
display: inline-block;
padding: 3px;
transform: rotate(45deg);
-webkit-transform: rotate(45deg);
background-color: white;
cursor: pointer;
&:hover{
  border: solid ${props=>props.theme.palette.text.secondary};
  border-width: 0 3px 3px 0;
}
`
const SectionContainer = styled.div`
  padding: 32px;
display: flex;
flex-direction: column;
z-index: 10;
@media (${breakpoints.md}) {
  flex-direction: row;
}
`

 

const StyledSection = styled.div`
width: 188px;
display: flex;
padding-top: 20px;
flex-direction: column;
@media (${breakpoints.md}) {
  padding-top: 0px;
};
`

const PopMenuTitle= styled.h1`
cursor: default;
display: none;
@media (${breakpoints.md}) {
  display: flex;
};
justify-content:center;
-webkit-touch-callout: none;
-webkit-user-select: none;
-khtml-user-select: none;
-moz-user-select: none;
-ms-user-select: none;
user-select: none;
text-align: center;
`
const Desktop = styled.div`
display: none;
@media ${breakpoints.sm} {
  display: flex;
};
`


const Layout = () => {
  const [isActive,setIsActive] = useState([false,false,false])
  const menuOpen =(id)=>{
    setIsActive(existingItems => {
      return existingItems.map((item, j) => {
      if(j===id)
      {
        return item=!item
      }
      if(item===true && id!==2)
      {
        return item=!item
      }
      if(isActive[0]===false)
      return item=false
      else{
        return item
      } 
    })
      });
    }
  
  

  
  
 




  return (
    <>
    <nav style={{ position: 'fixed',width: '100%',backgroundColor: 'white',top: '0',zIndex:'10'}}>
        <StyledUl>
          <StyledLi>
            <StyledLink style={{width: '32px'}} to="/" ><Icon  path={logo}/></StyledLink>
          </StyledLi>
            <Search maxwidth='510' align='-450' height="40px" visible={isActive[1]} onClick={()=>menuOpen(1)}/>
          <Desktop className='Desktop' style={{}}>
          <StyledLi style={{margin: "0px 20px"}}>
            <StyledLink to="/explore">Explore</StyledLink>
          </StyledLi>
          <StyledLi style={{margin: "0px 20px"}}>
            <StyledLink to="/advertise">Advertise</StyledLink>
          </StyledLi>
          <StyledLi style={{margin: "0px 20px"}}>
            <StyledLink to="/blog">Blog</StyledLink>
          </StyledLi>
            <Spliter style={{width:'1px',height:'30px'}}></Spliter>
          <StyledLi style={{margin: "0px 20px"}}>
            <StyledLink to="/login">Log in</StyledLink>
          </StyledLi>
          <Spliter style={{ backgroundColor:'transparent',alignItems:'center'}}>/</Spliter>
          <StyledLi style={{margin: "0px 20px"}}>
            <StyledLink to="/signup">Sign up</StyledLink>
          </StyledLi>
          <StyledLi style={{margin: "0px"}}>
            <Button text='Submit'/>
          </StyledLi>
          </Desktop>
          <StyledLi style={{position:'relative'}}>
           <SearchButton className='menubutton' onClick={()=>menuOpen(0)} ><SearchIcon width="24" height="24"  viewBox="0 0 32 32" version="1.1" aria-hidden="false"><path d="M4 21.3h24V24H4v-2.7zM4 8v2.7h24V8H4zm0 9.3h24v-2.7H4v2.7z"></path></SearchIcon></SearchButton>
           <Popmenu visible={isActive[0]} maxwidth='645' minwidth='270' align='0'>
            <div style={{width: '100%'}}>

          <SectionContainer>
           <StyledSection style={{paddingTop: '0px'}}>
            <PopMenuTitle>
              title
            </PopMenuTitle>
            <PopMenuUl breakpoint={breakpoints.md} >
              <StyledLi><StyledLink style={{padding: '6px 12px'}} to="/">content</StyledLink></StyledLi>
              <StyledLi><StyledLink style={{padding: '6px 12px'}} to="/">content</StyledLink></StyledLi>
              <StyledLi><StyledLink style={{padding: '6px 12px'}} to="/">content</StyledLink></StyledLi>
            </PopMenuUl>

            <DownSliderMenu  title='Neshto'>
            <PopMenuUl breakpoint={breakpoints.mmd} >
              <StyledLi><StyledLink style={{padding: '6px 12px'}} to="/">content</StyledLink></StyledLi>
              <StyledLi><StyledLink style={{padding: '6px 12px'}} to="/">content</StyledLink></StyledLi>
              <StyledLi><StyledLink style={{padding: '6px 12px'}} to="/">content</StyledLink></StyledLi>
            </PopMenuUl>
              </DownSliderMenu>

            </StyledSection>
           <StyledSection>
           <PopMenuTitle>
              title
            </PopMenuTitle>
            <PopMenuUl breakpoint={breakpoints.md}  >
              <StyledLi><StyledLink style={{padding: '6px 12px'}} to="/">content</StyledLink></StyledLi>
              <StyledLi><StyledLink style={{padding: '6px 12px'}} to="/">content</StyledLink></StyledLi>
              <StyledLi><StyledLink style={{padding: '6px 12px'}} to="/">content</StyledLink></StyledLi>
            </PopMenuUl>

            <DownSliderMenu  title='Neshto'>
            <PopMenuUl breakpoint={breakpoints.mmd} >
              <StyledLi><StyledLink style={{padding: '6px 12px'}} to="/">content</StyledLink></StyledLi>
              <StyledLi><StyledLink style={{padding: '6px 12px'}} to="/">content</StyledLink></StyledLi>
              <StyledLi><StyledLink style={{padding: '6px 12px'}} to="/">content</StyledLink></StyledLi>
            </PopMenuUl>
              </DownSliderMenu>
           </StyledSection>
           <StyledSection>
           <PopMenuTitle>
              title
            </PopMenuTitle>
            <PopMenuUl breakpoint={breakpoints.md} >
              <StyledLi><StyledLink style={{padding: '6px 12px'}} to="/">content</StyledLink></StyledLi>
              <StyledLi><StyledLink style={{padding: '6px 12px'}} to="/">content</StyledLink></StyledLi>
              <StyledLi><StyledLink style={{padding: '6px 12px'}} to="/">content</StyledLink></StyledLi>
            </PopMenuUl>

            <DownSliderMenu  title='Neshto'>
            <PopMenuUl breakpoint={breakpoints.mmd} >
              <StyledLi><StyledLink style={{padding: '6px 12px'}} to="/">content</StyledLink></StyledLi>
              <StyledLi><StyledLink style={{padding: '6px 12px'}} to="/">content</StyledLink></StyledLi>
              <StyledLi><StyledLink style={{padding: '6px 12px'}} to="/">content</StyledLink></StyledLi>
            </PopMenuUl>
              </DownSliderMenu>
           </StyledSection>


           <StyledSection>
           <PopMenuTitle>
              title
            </PopMenuTitle>
            <PopMenuUl breakpoint={breakpoints.md} >
              <StyledLi><StyledLink style={{padding: '6px 12px'}} to="/">content</StyledLink></StyledLi>
              <StyledLi><StyledLink style={{padding: '6px 12px'}} to="/">content</StyledLink></StyledLi>
              <StyledLi><StyledLink style={{padding: '6px 12px'}} to="/">content</StyledLink></StyledLi>
            </PopMenuUl>


            <DownSliderMenu  title='Neshto'>
            <PopMenuUl breakpoint={breakpoints.mmd} >
              <StyledLi><StyledLink style={{padding: '6px 12px'}} to="/">content</StyledLink></StyledLi>
              <StyledLi><StyledLink style={{padding: '6px 12px'}} to="/">content</StyledLink></StyledLi>
              <StyledLi><StyledLink style={{padding: '6px 12px'}} to="/">content</StyledLink></StyledLi>
            </PopMenuUl>
              </DownSliderMenu>
           </StyledSection>
           <StyledSection>
            <DownSliderMenu title='Neshto'>
            <PopMenuUl breakpoint={breakpoints.mmd} >
              <StyledLi><StyledLink style={{padding: '6px 12px'}} to="/">content</StyledLink></StyledLi>
              <StyledLi><StyledLink style={{padding: '6px 12px'}} to="/">content</StyledLink></StyledLi>
              <StyledLi><StyledLink style={{padding: '6px 12px'}} to="/">content</StyledLink></StyledLi>
            </PopMenuUl>
              </DownSliderMenu>
           </StyledSection>
           </SectionContainer>


           <PopMenuFooter breakpoint={breakpoints.md}>
            <ul style={{display: 'flex'}}>
              <StyledLi><StyledLink to="/">English</StyledLink></StyledLi>
              <StyledLi><StyledLink to="/">content</StyledLink></StyledLi>
              <StyledLi><StyledLink to="/">content</StyledLink></StyledLi>
            </ul>
              <div style={{alignItems: 'center',justifyContent: 'center',display: 'flex'}}>
              <StyledLink style={{marginRight: '5px'}} to="/">English</StyledLink>
              <DownArrorButton onClick={()=>menuOpen(2)}><Popmenu visible={isActive[2]}  maxwidth='196' align='-12' style={{transform: 'rotate(-45deg)',top: '35px'}}>maikatiii</Popmenu></DownArrorButton>
              </div>
            </PopMenuFooter>

            <PopMenuFooter breakpoint={breakpoints.msm} style={{padding: '16px 24px',flexDirection: 'column'}}>
              <div style={{display: 'flex',justifyContent: "space-between"}}>
              <Button text='Submit a photo'/>
              <Button text='Log in'/>
              </div>
              <div style={{color: `${theme.palette.text.main}`,marginTop:'16px'}}>New to Splash? <Link style={{color: `${theme.palette.text.main}`}} to="/signup">Sign up for free</Link></div>
            </PopMenuFooter>
            

            
            </div>
           </Popmenu>
          </StyledLi>
        </StyledUl>
      </nav>

      <Outlet />
    </>
  )
}

export default Layout