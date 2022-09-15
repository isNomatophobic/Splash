import Icon from 'components/Icon';
import { logo} from 'components/images';
import Button from 'components/styled/Button';
import React from 'react'
import {Outlet ,Link } from "react-router-dom";
import styled from 'styled-components';
import { useState,useEffect} from 'react';
import { DownSliderMenu, Popmenu, SearchButton } from 'components/styled';
import Search from 'components/Search';
import { SearchIcon } from 'components/Search/search.styled';




const PopMenuUl= styled.ul`
padding: 0px;
z-index: 10;
`

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
  `
const Spliter= styled.div`
background-color:${props=>props.theme.palette.text.main};
color:${props=>props.theme.palette.text.main};
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
    Resize();
  },[]);
  useEffect(()=>{
    window.addEventListener('resize',Resize)
    return () => window.removeEventListener('resize', Resize);
  });
  
  const SectionContainer = styled.div`
  padding: 32px;
display: flex;
flex-direction: ${Screen ==='Desktop' ? 'row':'column'};
z-index: 10;
`
const PopMenuFooter = styled.div`
height: 55px;
padding: 16px 32px;
border-top: 1.5px solid #E7E1E1;
display: ${Screen ==='Desktop' ? 'flex':'none'};
display: flex;
justify-content: space-around;

`
const StyledSection = styled.div`
width: 188px;
display: flex;
flex-direction: column;
`

const PopMenuTitle= styled.h1`
cursor: default;
display: ${Screen==='Desktop'?'flex':'none'};
justify-content:center;
alighn
-webkit-touch-callout: none;
-webkit-user-select: none;
-khtml-user-select: none;
-moz-user-select: none;
-ms-user-select: none;
user-select: none;
text-align: center;
`

  return (
    <>
    <nav style={{ position: 'fixed',width: '100%',backgroundColor: 'white',top: '0',zIndex:'10'}}>
        <StyledUl>
          <StyledLi>
            <StyledLink to="/" style={{paddingRight: "1em"}}><Icon path={logo}/></StyledLink>
          </StyledLi>
            <Search height="40px"/>
          <div className='Desktop' style={{display:ScreanSubType!=='Mobile'?'flex':'none'}}>
          <StyledLi style={{margin: "0px 20px"}}>
            <StyledLink to="/explore">Explore</StyledLink>
          </StyledLi>
          <StyledLi style={{margin: "0px 20px"}}>
            <StyledLink to="/advertise">Advertise</StyledLink>
          </StyledLi>
          <StyledLi style={{margin: "0px 20px"}}>
            <StyledLink to="/blog">Blog</StyledLink>
          </StyledLi>
            <Spliter style={{width:'1px',height:'30px',display:ScreanSubType!=='Mobile'?'flex':'none'}}></Spliter>
          <StyledLi style={{margin: "0px 20px"}}>
            <StyledLink to="/login">Log in</StyledLink>
          </StyledLi>
          <Spliter style={{ backgroundColor:'transparent',display:ScreanSubType!=='Mobile'?'flex':'none',alignItems:'center'}}>/</Spliter>
          <StyledLi style={{margin: "0px 20px"}}>
            <StyledLink to="/signup">Sign up</StyledLink>
          </StyledLi>
          <StyledLi style={{margin: "0px"}}>
            <Button text={Screen==='Desktop'?'Submit a photo':'Submit'}/>
          </StyledLi>
          </div>
          <StyledLi style={{position:'relative'}}>
           <SearchButton className='menubutton' onClick={()=>menuOpen(0)} ><SearchIcon width="24" height="24"  viewBox="0 0 32 32" version="1.1" aria-hidden="false"><path d="M4 21.3h24V24H4v-2.7zM4 8v2.7h24V8H4zm0 9.3h24v-2.7H4v2.7z"></path></SearchIcon></SearchButton>
           <Popmenu visible={isActive[0]} maxwidth='645' minwidth='270' align='0'>
            <div style={{width: '100%'}}>

          <SectionContainer>
           <StyledSection >
            <PopMenuTitle>
              title
            </PopMenuTitle>
            <PopMenuUl style={{display: `${Screen==='Desktop'?'block':'none'}`}}>
              <StyledLi><StyledLink style={{padding: '6px 12px'}} to="/">content</StyledLink></StyledLi>
              <StyledLi><StyledLink style={{padding: '6px 12px'}} to="/">content</StyledLink></StyledLi>
              <StyledLi><StyledLink style={{padding: '6px 12px'}} to="/">content</StyledLink></StyledLi>
            </PopMenuUl>

            <DownSliderMenu screen={Screen} title='Neshto'>
            <PopMenuUl>
              <StyledLi><StyledLink style={{padding: '6px 12px'}} to="/">content</StyledLink></StyledLi>
              <StyledLi><StyledLink style={{padding: '6px 12px'}} to="/">content</StyledLink></StyledLi>
              <StyledLi><StyledLink style={{padding: '6px 12px'}} to="/">content</StyledLink></StyledLi>
            </PopMenuUl>
              </DownSliderMenu>

            </StyledSection>
           <StyledSection style={{paddingTop: Screen==='Desktop'?'0px':'20px'}}>
           <PopMenuTitle>
              title
            </PopMenuTitle>
            <PopMenuUl style={{display: `${Screen==='Desktop'?'block':'none'}`}}>
              <StyledLi><StyledLink style={{padding: '6px 12px'}} to="/">content</StyledLink></StyledLi>
              <StyledLi><StyledLink style={{padding: '6px 12px'}} to="/">content</StyledLink></StyledLi>
              <StyledLi><StyledLink style={{padding: '6px 12px'}} to="/">content</StyledLink></StyledLi>
            </PopMenuUl>

            <DownSliderMenu screen={Screen} title='Neshto'>
            <PopMenuUl>
              <StyledLi><StyledLink style={{padding: '6px 12px'}} to="/">content</StyledLink></StyledLi>
              <StyledLi><StyledLink style={{padding: '6px 12px'}} to="/">content</StyledLink></StyledLi>
              <StyledLi><StyledLink style={{padding: '6px 12px'}} to="/">content</StyledLink></StyledLi>
            </PopMenuUl>
              </DownSliderMenu>
           </StyledSection>
           <StyledSection style={{paddingTop: Screen==='Desktop'?'0px':'20px'}}>
           <PopMenuTitle>
              title
            </PopMenuTitle>
            <PopMenuUl style={{display: `${Screen==='Desktop'?'block':'none'}`}}>
              <StyledLi><StyledLink style={{padding: '6px 12px'}} to="/">content</StyledLink></StyledLi>
              <StyledLi><StyledLink style={{padding: '6px 12px'}} to="/">content</StyledLink></StyledLi>
              <StyledLi><StyledLink style={{padding: '6px 12px'}} to="/">content</StyledLink></StyledLi>
            </PopMenuUl>

            <DownSliderMenu screen={Screen} title='Neshto'>
            <PopMenuUl>
              <StyledLi><StyledLink style={{padding: '6px 12px'}} to="/">content</StyledLink></StyledLi>
              <StyledLi><StyledLink style={{padding: '6px 12px'}} to="/">content</StyledLink></StyledLi>
              <StyledLi><StyledLink style={{padding: '6px 12px'}} to="/">content</StyledLink></StyledLi>
            </PopMenuUl>
              </DownSliderMenu>
           </StyledSection>


           <StyledSection style={{display: Screen!=='Desktop'?'flex':'none',paddingTop: Screen==='Desktop'?'0px':'20px'}}>
           <PopMenuTitle>
              title
            </PopMenuTitle>
            <PopMenuUl style={{display: `${Screen==='Desktop'?'block':'none'}`}}>
              <StyledLi><StyledLink style={{padding: '6px 12px'}} to="/">content</StyledLink></StyledLi>
              <StyledLi><StyledLink style={{padding: '6px 12px'}} to="/">content</StyledLink></StyledLi>
              <StyledLi><StyledLink style={{padding: '6px 12px'}} to="/">content</StyledLink></StyledLi>
            </PopMenuUl>


            <DownSliderMenu screen={Screen} title='Neshto'>
            <PopMenuUl>
              <StyledLi><StyledLink style={{padding: '6px 12px'}} to="/">content</StyledLink></StyledLi>
              <StyledLi><StyledLink style={{padding: '6px 12px'}} to="/">content</StyledLink></StyledLi>
              <StyledLi><StyledLink style={{padding: '6px 12px'}} to="/">content</StyledLink></StyledLi>
            </PopMenuUl>
              </DownSliderMenu>
           </StyledSection>
           <StyledSection style={{display: Screen!=='Desktop'?'flex':'none',paddingTop: Screen==='Desktop'?'0px':'20px'}}>
            <DownSliderMenu screen={Screen} title='Neshto'>
            <PopMenuUl>
              <StyledLi><StyledLink style={{padding: '6px 12px'}} to="/">content</StyledLink></StyledLi>
              <StyledLi><StyledLink style={{padding: '6px 12px'}} to="/">content</StyledLink></StyledLi>
              <StyledLi><StyledLink style={{padding: '6px 12px'}} to="/">content</StyledLink></StyledLi>
            </PopMenuUl>
              </DownSliderMenu>
           </StyledSection>
           </SectionContainer>


           <PopMenuFooter style={{display: Screen==='Desktop'?'flex':'none'}}>
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