import Icon from 'components/Icon';
import { logo,company,product,community,translate, legal, translatemb} from 'components/images';
import Button from 'components/styled/Button';
import React from 'react'
import {Outlet ,Link } from "react-router-dom";
import styled from 'styled-components';
import { useState} from 'react';
import { DownSliderMenu, Popmenu, PopMenuFooter, SearchButton,PopMenuUl,BeurgerMenuHeader } from 'components/styled';
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
  margin: 0px;
  text-align: left;
};
`

const PopMenuTitle= styled.h1`
font-size: 14px;
cursor: default;
-webkit-touch-callout: none;
-webkit-user-select: none;
-khtml-user-select: none;
-moz-user-select: none;
-ms-user-select: none;
user-select: none;
text-align: left;
`
const StyledSectionMobile = styled(StyledSection)`
display: flex;
@media (${breakpoints.md}) {
  display: none;
};
`
const Desktop = styled.div`
display: none;
@media ${breakpoints.sm} {
  display: flex;
};
`
const StyledA = styled.a`
color: ${props=>props.theme.palette.text.main};
  &:hover{
    color: ${props=>props.theme.palette.text.secondary};
  }
  text-decoration: none;
  transition: all .1s ease-in-out;
  z-index: 10;
`
const PopMenuA = styled(StyledA)`
padding: 12px 6px;
@media ${breakpoints.sm} {
  padding: 6px 0px;
};
`
const PopMenuLi = styled(StyledLi)`
margin: 0px;
justify-content: left;
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
            <StyledLink style={{width: '32px'}} to="/" ><Icon  path={logo} cursor='pointer'/></StyledLink>
          </StyledLi>
            <Search maxwidth='510' align='-450' height="40px" visible={isActive[1]} onClick={()=>menuOpen(1)}/>
          <Desktop className='Desktop' style={{}}>
          <StyledLi style={{margin: "0px 20px"}}>
          <StyledA href="https://unsplash.com/explore" target="_blank" rel="noreferrer">Explore</StyledA>
          </StyledLi>
          <StyledLi style={{margin: "0px 20px"}}>
          <StyledA href="https://unsplash.com/advertise" target="_blank" rel="noreferrer">Advertise</StyledA>
          </StyledLi>
          <StyledLi style={{margin: "0px 20px"}}>
          <StyledA href="https://unsplash.com/blog" target="_blank" rel="noreferrer">Blog</StyledA>
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
            <BeurgerMenuHeader breakpoint={breakpoints.md}>
            <Icon size='24' path={company}/>
            <PopMenuTitle>
              Company
            </PopMenuTitle>
            </BeurgerMenuHeader>
            <PopMenuUl breakpoint={breakpoints.md} >
              <PopMenuLi><PopMenuA  href='https://unsplash.com/about'>About</PopMenuA></PopMenuLi>
              <PopMenuLi><PopMenuA  href='https://unsplash.com/history'>History</PopMenuA></PopMenuLi>
              <PopMenuLi><PopMenuA  href='https://unsplash.com/hiring'>Join the team</PopMenuA></PopMenuLi>
              <PopMenuLi><PopMenuA  href='https://unsplash.com/press'>Press</PopMenuA></PopMenuLi>
              <PopMenuLi><PopMenuA  href='mailto:support@unsplash.com'>Contact us</PopMenuA></PopMenuLi>
              <PopMenuLi><PopMenuA  href='https://help.unsplash.com/en/?utm_source=unsplash&utm_medium=referral'>Help Center</PopMenuA></PopMenuLi>
            </PopMenuUl>

            <DownSliderMenu  title={<BeurgerMenuHeader breakpoint={breakpoints.mmd}>
            <Icon size='24' path={company}/>
            <PopMenuTitle>
              Company
            </PopMenuTitle>
            </BeurgerMenuHeader>}>
            <PopMenuUl breakpoint={breakpoints.mmd} >
            <PopMenuLi><PopMenuA  href='https://unsplash.com/about'>About</PopMenuA></PopMenuLi>
              <PopMenuLi><PopMenuA  href='https://unsplash.com/history'>History</PopMenuA></PopMenuLi>
              <PopMenuLi><PopMenuA  href='https://unsplash.com/hiring'>Join the team</PopMenuA></PopMenuLi>
              <PopMenuLi><PopMenuA  href='https://unsplash.com/press'>Press</PopMenuA></PopMenuLi>
              <PopMenuLi><PopMenuA  href='mailto:support@unsplash.com'>Contact us</PopMenuA></PopMenuLi>
              <PopMenuLi><PopMenuA  href='https://help.unsplash.com/en/?utm_source=unsplash&utm_medium=referral'>Help Center</PopMenuA></PopMenuLi>
            </PopMenuUl>
              </DownSliderMenu>

            </StyledSection>
           <StyledSection>
           <BeurgerMenuHeader breakpoint={breakpoints.md}>
            <Icon size='24' path={product}/>
            <PopMenuTitle>
              Product
            </PopMenuTitle>
            </BeurgerMenuHeader>
            <PopMenuUl breakpoint={breakpoints.md}  >
              <PopMenuLi><PopMenuA  href='https://unsplash.com/developers'>Developers/API</PopMenuA></PopMenuLi>
              <PopMenuLi><PopMenuA  href='https://unsplash.com/data'>Splash Database</PopMenuA></PopMenuLi>
              <PopMenuLi><PopMenuA  href='https://apps.apple.com/us/app/unsplash/id1290631746?ls=1&utm_medium=referral&utm_source=unsplash'>Splash for IOS</PopMenuA></PopMenuLi>
              <PopMenuLi><PopMenuA  href='https://unsplash.com/apps'>Apps & Plugins</PopMenuA></PopMenuLi>
            </PopMenuUl>

            <DownSliderMenu  title={<BeurgerMenuHeader breakpoint={breakpoints.mmd}>
            <Icon size='24' path={product}/>
            <PopMenuTitle>
              Product
            </PopMenuTitle>
            </BeurgerMenuHeader>}>
            <PopMenuUl breakpoint={breakpoints.mmd} >
            <PopMenuLi><PopMenuA  href='https://unsplash.com/developers'>Developers/API</PopMenuA></PopMenuLi>
              <PopMenuLi><PopMenuA  href='https://unsplash.com/data'>Splash Database</PopMenuA></PopMenuLi>
              <PopMenuLi><PopMenuA  href='https://apps.apple.com/us/app/unsplash/id1290631746?ls=1&utm_medium=referral&utm_source=unsplash'>Splash for IOS</PopMenuA></PopMenuLi>
              <PopMenuLi><PopMenuA  href='https://unsplash.com/apps'>Apps & Plugins</PopMenuA></PopMenuLi>
            </PopMenuUl>
              </DownSliderMenu>
           </StyledSection>
           <StyledSection>
           <BeurgerMenuHeader breakpoint={breakpoints.md}>
            <Icon size='24' path={community}/>
            <PopMenuTitle>
            Community
            </PopMenuTitle>
            </BeurgerMenuHeader>
            <PopMenuUl breakpoint={breakpoints.md} >
              <PopMenuLi><PopMenuA  href='https://unsplash.com/community'>Become a Contributor</PopMenuA></PopMenuLi>
              <PopMenuLi><PopMenuA  href='https://unsplash.com/t'>Topics</PopMenuA></PopMenuLi>
              <PopMenuLi><PopMenuA  href='https://unsplash.com/collections'>Collections</PopMenuA></PopMenuLi>
              <PopMenuLi><PopMenuA  href='https://unsplash.com/trends'>Trends</PopMenuA></PopMenuLi>
              <PopMenuLi><PopMenuA  href='https://unsplash.com/awards'>Splash Awards</PopMenuA></PopMenuLi>
              <PopMenuLi><PopMenuA  href='https://unsplash.com/stats'>Stats</PopMenuA></PopMenuLi>
              <PopMenuLi ><PopMenuA title='Fallow Splash on Twitter' target="_blank" rel="noopener noreferrer" href="https://twitter.com/unsplash?utm_source=unsplash&amp;utm_medium=referral"><SearchIcon width="20" height="20"  viewBox="0 0 32 32" version="1.1" aria-hidden="false"><path d="M29.3 7.9c-.8 1.1-1.6 2.1-2.7 2.9v.7c0 7.2-5.6 15.5-15.7 15.2-3.1 0-6-.8-8.4-2.4.4.1.9.1 1.3.1 2.5 0 4.9-.9 6.8-2.4-2.4 0-4.4-1.6-5-3.7.4.1.7.1 1.1.1.5 0 1.1 0 1.5-.1-2.5-.5-4.4-2.6-4.4-5.3v-.1c.8.4 1.6.7 2.4.7-1.4-1-2.3-2.7-2.3-4.6 0-.9.3-1.9.8-2.6 2.7 3.2 6.6 5.4 11.1 5.6-.1-.4-.1-.8-.1-1.2 0-3 2.4-5.4 5.4-5.4 1.6 0 3.1.7 4 1.6 1.2-.3 2.4-.7 3.4-1.3-.4 1.3-1.3 2.4-2.4 3 1.2-.2 2.3-.5 3.2-.8z"></path></SearchIcon></PopMenuA>
              <PopMenuA style={{margin: '0px 15px'}} title='Fallow Splash on Facebook' target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/pages/Unsplash/274126369394815?utm_source=unsplash&amp;utm_medium=referral"><SearchIcon width="20" height="20"  viewBox="0 0 32 32" version="1.1" aria-hidden="false"><path d="M29.3 16c0 6.7-4.9 12.2-11.2 13.2v-9.3h3.1l.6-3.8h-3.7v-2.5c0-1.1.5-2.1 2.2-2.1H22V8.2S20.5 8 19 8c-3 0-5 1.8-5 5.2V16h-3.4v3.9H14v9.2C7.6 28.2 2.7 22.7 2.7 16c0-7.3 6-13.3 13.3-13.3 7.3 0 13.3 5.9 13.3 13.3z"></path></SearchIcon></PopMenuA>
              <PopMenuA title='Fallow Splash on Instagram' target="_blank" rel="noopener noreferrer" href="https://instagram.com/unsplash?utm_source=unsplash&amp;utm_medium=referral" ><SearchIcon width="20" height="20"  viewBox="0 0 32 32" version="1.1" aria-hidden="false"><path d="M29.2 10.5c-.1-1.4-.3-2.4-.6-3.2-.3-.9-.8-1.6-1.5-2.4-.7-.7-1.5-1.2-2.4-1.5-.8-.3-1.8-.6-3.2-.6-1.4-.1-1.9-.1-5.5-.1s-4.1 0-5.5.1c-1.4 0-2.4.2-3.2.6-.9.3-1.7.8-2.4 1.5S3.7 6.4 3.4 7.3c-.4.8-.6 1.8-.7 3.2-.1 1.4-.1 1.9-.1 5.5s0 4.1.1 5.5c.1 1.4.3 2.4.6 3.2.3.9.8 1.6 1.5 2.4.7.7 1.5 1.2 2.4 1.5.8.3 1.8.6 3.2.6 1.4.1 1.9.1 5.5.1s4.1 0 5.5-.1c1.4-.1 2.4-.3 3.2-.6.9-.3 1.6-.8 2.4-1.5.7-.7 1.2-1.5 1.5-2.4.3-.8.6-1.8.6-3.2.1-1.4.1-1.9.1-5.5.1-3.6.1-4.1 0-5.5zm-2.4 10.9c-.1 1.3-.3 2-.5 2.5-.2.6-.5 1.1-1 1.5-.5.5-.9.8-1.5 1-.5.2-1.2.4-2.5.5-1.4.1-1.8.1-5.4.1-3.6 0-4 0-5.4-.1-1.3-.1-2-.3-2.5-.5-.6-.2-1.1-.5-1.5-1-.5-.5-.8-.9-1-1.5-.2-.5-.4-1.2-.5-2.5.1-1.4.1-1.8.1-5.4s0-4 .1-5.4c.1-1.3.3-2 .5-2.5.2-.6.5-1.1 1-1.5.5-.5.9-.8 1.5-1 .5-.2 1.2-.4 2.5-.5H16c3.6 0 4 0 5.4.1 1.3.1 2 .3 2.5.5.6.2 1.1.5 1.5 1 .5.5.8.9 1 1.5.2.5.4 1.2.5 2.5.1 1.4.1 1.8.1 5.4s-.1 3.9-.2 5.3zM16 9.2c-3.8 0-6.8 3.1-6.8 6.8 0 3.8 3.1 6.8 6.8 6.8 3.8 0 6.8-3.1 6.8-6.8s-3-6.8-6.8-6.8zm0 11.2c-2.5 0-4.4-2-4.4-4.4s2-4.4 4.4-4.4c2.5 0 4.4 2 4.4 4.4s-2 4.4-4.4 4.4zm8.7-11.5c0 .9-.7 1.6-1.6 1.6s-1.6-.7-1.6-1.6.7-1.6 1.6-1.6 1.6.7 1.6 1.6z"></path></SearchIcon></PopMenuA></PopMenuLi>
            </PopMenuUl>

            <DownSliderMenu  title={<BeurgerMenuHeader breakpoint={breakpoints.mmd}>
            <Icon size='24' path={community}/>
            <PopMenuTitle>
            Community
            </PopMenuTitle>
            </BeurgerMenuHeader>}>
            <PopMenuUl breakpoint={breakpoints.mmd} >
            <PopMenuLi><PopMenuA  href='https://unsplash.com/community'>Become a Contributor</PopMenuA></PopMenuLi>
              <PopMenuLi><PopMenuA  href='https://unsplash.com/t'>Topics</PopMenuA></PopMenuLi>
              <PopMenuLi><PopMenuA  href='https://unsplash.com/collections'>Collections</PopMenuA></PopMenuLi>
              <PopMenuLi><PopMenuA  href='https://unsplash.com/trends'>Trends</PopMenuA></PopMenuLi>
              <PopMenuLi><PopMenuA  href='https://unsplash.com/awards'>Splash Awards</PopMenuA></PopMenuLi>
              <PopMenuLi><PopMenuA  href='https://unsplash.com/stats'>Stats</PopMenuA></PopMenuLi>
              <PopMenuLi ><PopMenuA title='Fallow Splash on Twitter' target="_blank" rel="noopener noreferrer" href="https://twitter.com/unsplash?utm_source=unsplash&amp;utm_medium=referral"><SearchIcon width="20" height="20"  viewBox="0 0 32 32" version="1.1" aria-hidden="false"><path d="M29.3 7.9c-.8 1.1-1.6 2.1-2.7 2.9v.7c0 7.2-5.6 15.5-15.7 15.2-3.1 0-6-.8-8.4-2.4.4.1.9.1 1.3.1 2.5 0 4.9-.9 6.8-2.4-2.4 0-4.4-1.6-5-3.7.4.1.7.1 1.1.1.5 0 1.1 0 1.5-.1-2.5-.5-4.4-2.6-4.4-5.3v-.1c.8.4 1.6.7 2.4.7-1.4-1-2.3-2.7-2.3-4.6 0-.9.3-1.9.8-2.6 2.7 3.2 6.6 5.4 11.1 5.6-.1-.4-.1-.8-.1-1.2 0-3 2.4-5.4 5.4-5.4 1.6 0 3.1.7 4 1.6 1.2-.3 2.4-.7 3.4-1.3-.4 1.3-1.3 2.4-2.4 3 1.2-.2 2.3-.5 3.2-.8z"></path></SearchIcon></PopMenuA>
              <PopMenuA style={{margin: '0px 15px'}} title='Fallow Splash on Facebook' target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/pages/Unsplash/274126369394815?utm_source=unsplash&amp;utm_medium=referral"><SearchIcon width="20" height="20"  viewBox="0 0 32 32" version="1.1" aria-hidden="false"><path d="M29.3 16c0 6.7-4.9 12.2-11.2 13.2v-9.3h3.1l.6-3.8h-3.7v-2.5c0-1.1.5-2.1 2.2-2.1H22V8.2S20.5 8 19 8c-3 0-5 1.8-5 5.2V16h-3.4v3.9H14v9.2C7.6 28.2 2.7 22.7 2.7 16c0-7.3 6-13.3 13.3-13.3 7.3 0 13.3 5.9 13.3 13.3z"></path></SearchIcon></PopMenuA>
              <PopMenuA title='Fallow Splash on Instagram' target="_blank" rel="noopener noreferrer" href="https://instagram.com/unsplash?utm_source=unsplash&amp;utm_medium=referral" ><SearchIcon width="20" height="20"  viewBox="0 0 32 32" version="1.1" aria-hidden="false"><path d="M29.2 10.5c-.1-1.4-.3-2.4-.6-3.2-.3-.9-.8-1.6-1.5-2.4-.7-.7-1.5-1.2-2.4-1.5-.8-.3-1.8-.6-3.2-.6-1.4-.1-1.9-.1-5.5-.1s-4.1 0-5.5.1c-1.4 0-2.4.2-3.2.6-.9.3-1.7.8-2.4 1.5S3.7 6.4 3.4 7.3c-.4.8-.6 1.8-.7 3.2-.1 1.4-.1 1.9-.1 5.5s0 4.1.1 5.5c.1 1.4.3 2.4.6 3.2.3.9.8 1.6 1.5 2.4.7.7 1.5 1.2 2.4 1.5.8.3 1.8.6 3.2.6 1.4.1 1.9.1 5.5.1s4.1 0 5.5-.1c1.4-.1 2.4-.3 3.2-.6.9-.3 1.6-.8 2.4-1.5.7-.7 1.2-1.5 1.5-2.4.3-.8.6-1.8.6-3.2.1-1.4.1-1.9.1-5.5.1-3.6.1-4.1 0-5.5zm-2.4 10.9c-.1 1.3-.3 2-.5 2.5-.2.6-.5 1.1-1 1.5-.5.5-.9.8-1.5 1-.5.2-1.2.4-2.5.5-1.4.1-1.8.1-5.4.1-3.6 0-4 0-5.4-.1-1.3-.1-2-.3-2.5-.5-.6-.2-1.1-.5-1.5-1-.5-.5-.8-.9-1-1.5-.2-.5-.4-1.2-.5-2.5.1-1.4.1-1.8.1-5.4s0-4 .1-5.4c.1-1.3.3-2 .5-2.5.2-.6.5-1.1 1-1.5.5-.5.9-.8 1.5-1 .5-.2 1.2-.4 2.5-.5H16c3.6 0 4 0 5.4.1 1.3.1 2 .3 2.5.5.6.2 1.1.5 1.5 1 .5.5.8.9 1 1.5.2.5.4 1.2.5 2.5.1 1.4.1 1.8.1 5.4s-.1 3.9-.2 5.3zM16 9.2c-3.8 0-6.8 3.1-6.8 6.8 0 3.8 3.1 6.8 6.8 6.8 3.8 0 6.8-3.1 6.8-6.8s-3-6.8-6.8-6.8zm0 11.2c-2.5 0-4.4-2-4.4-4.4s2-4.4 4.4-4.4c2.5 0 4.4 2 4.4 4.4s-2 4.4-4.4 4.4zm8.7-11.5c0 .9-.7 1.6-1.6 1.6s-1.6-.7-1.6-1.6.7-1.6 1.6-1.6 1.6.7 1.6 1.6z"></path></SearchIcon></PopMenuA></PopMenuLi>
            </PopMenuUl>
              </DownSliderMenu>
           </StyledSection>


           <StyledSectionMobile>
            <DownSliderMenu  title={<BeurgerMenuHeader breakpoint={breakpoints.mmd}>
            <Icon size='24' path={legal}/>
            <PopMenuTitle>
            Legal
            </PopMenuTitle>
            </BeurgerMenuHeader>}>
            <PopMenuUl breakpoint={breakpoints.mmd} >
              <PopMenuLi><PopMenuA href='https://unsplash.com/license'>License</PopMenuA></PopMenuLi>
              <PopMenuLi><PopMenuA href='https://unsplash.com/privacy'>Privacy Policy</PopMenuA></PopMenuLi>
              <PopMenuLi><PopMenuA href='https://unsplash.com/terms'>Terms</PopMenuA></PopMenuLi>
              <PopMenuLi><PopMenuA href='https://unsplash.com/security'>Security</PopMenuA></PopMenuLi>
            </PopMenuUl>
              </DownSliderMenu>
           </StyledSectionMobile>
           <StyledSectionMobile>
            <DownSliderMenu title={<BeurgerMenuHeader breakpoint={breakpoints.mmd}>
              <Icon size='24' path={translatemb}/>
              <PopMenuTitle style={{color: `${theme.palette.text.secondary}`,fontSize: '14px'}}>
               English
              </PopMenuTitle>
              </BeurgerMenuHeader>}>
            <PopMenuUl breakpoint={breakpoints.mmd} >
              <PopMenuLi><PopMenuA href='/'>English</PopMenuA></PopMenuLi>
              <PopMenuLi><PopMenuA href='https://unsplash.com/es' >Español</PopMenuA></PopMenuLi>
              <PopMenuLi><PopMenuA href='https://unsplash.com/ja' >中国人</PopMenuA></PopMenuLi>
            </PopMenuUl>
              </DownSliderMenu>
           </StyledSectionMobile>
           </SectionContainer>


           <PopMenuFooter breakpoint={breakpoints.md}>
            <ul style={{display: 'flex'}}>
              <StyledLi><StyledA href='https://unsplash.com/license'>License</StyledA></StyledLi>
              <StyledLi><StyledA href='https://unsplash.com/privacy'>Privacy Policy</StyledA></StyledLi>
              <StyledLi><StyledA href='https://unsplash.com/terms'>Terms</StyledA></StyledLi>
              <StyledLi><StyledA href='https://unsplash.com/security'>Security</StyledA></StyledLi>
            </ul>
              <div style={{alignItems: 'center',justifyContent: 'center',display: 'flex',position: 'relative'}}>
              <BeurgerMenuHeader breakpoint={breakpoints.md} style={{gridColumnGap: '8px'}}>
              <Icon size='18' path={translate}/>
              <PopMenuTitle style={{color: `${theme.palette.text.main}`,fontSize: '14px',fontWeight: '400'}}>
               English
              </PopMenuTitle>
              </BeurgerMenuHeader>
              <DownArrorButton style={{marginLeft: '5px'}} onClick={()=>menuOpen(2)}></DownArrorButton>
              <Popmenu visible={isActive[2]}  maxwidth='196' style={{top: '30px',left: '-100px'}}>
              <ul style={{display: 'flex',flexDirection: 'column'}}>
              <StyledLi><StyledA style={{padding: '8px 16px',fontSize:'14px'}} href='/'>English</StyledA></StyledLi>
              <StyledLi><StyledA style={{padding: '8px 16px',fontSize:'14px'}} href='https://unsplash.com/es'>Español</StyledA></StyledLi>
              <StyledLi><StyledA style={{padding: '8px 16px',fontSize:'14px'}} href='https://unsplash.com/ja'>中国人</StyledA></StyledLi>
            </ul>
              </Popmenu>
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