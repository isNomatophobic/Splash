import Icon from 'components/Icon'
import { DragDropImage, link } from 'components/images'
import {  StyledInput } from 'components/Search'
import { Columns } from 'components/styled'
import React from 'react'
import { useRef } from 'react'
import styled from 'styled-components'

const Container = styled(Columns)`
align-items: center;
border: 2px dashed #d1d1d1;
padding: 24px 16px;
border-radius: 2px;
margin: 0px 16px;
`
const DragDrop = styled.button`
cursor: pointer;
display: flex;
flex-direction: column;
align-items: center;
background-color: initial;
border: none;
padding: 0;
text-align: inherit;
width:100%;
`
const DragDropTekst= styled.div`
color: #111;
font-size: 21px;
font-weight: 700;
line-height: 28px;
max-width: 400px;
text-align: center;
`
const Blue=styled.span`
color: blue;
font-size: 21px;
font-weight: 700;
line-height: 28px;
max-width: 400px;
`
const HiddenInput = styled.input`
display: none;
`
const OrStyled = styled.div`
padding: 0px 16px;
color: ${props=>props.theme.palette.text.main};
text-align: center;
`
const IconContainer = styled.label`
align-items: center;
display: flex;
width: 34px;
height: 38px;
`
const SearchContainer = styled.div`
display: flex;
border-radius: 24px;
border: 1px solid #0000;
position:relative;
padding: 0px 8px;
margin-bottom: 16px;
height: ${props=>props.height};
width:300px;
background-color: buttonface;
&:hover{
  border: 1px solid #d9d9d9;
}
transition: all .1s ease-in-out;
&:focus-within{
  background-color: white;
  border: 1px solid #d9d9d9;
  }
`



const ImageSearchMain = () => {
    const inputRef = useRef(null)
    const openFile = () => {
        inputRef.current.click()
    }

    const handleFileChange = event => {
        const fileObj = event.target.files && event.target.files[0];
        if (!fileObj) {
          return;
        }
    
        console.log('fileObj is', fileObj);
    
        event.target.value = null;
      }

  return (
    <Container>
        <DragDrop onClick={openFile}>
            <img src={DragDropImage}/>
            <DragDropTekst>
            Drag and drop your image here or <Blue>Browse</Blue> to chose file. 
        </DragDropTekst>
        </DragDrop>
        <HiddenInput onClick={(e)=>{e.stopPropagation();}} onChange={handleFileChange} type="file"  ref={inputRef} accept="image/jpeg,image/png,image/tiff,image/webp,image/gif,image/svg+xml,application/pdf"/>
        <OrStyled>or</OrStyled>
        <SearchContainer>
            <IconContainer>
            <Icon size='20' path={link}/>
            </IconContainer>
            <StyledInput type="text" placeholder='Paste an image or an URL.'/>
        </SearchContainer>
    </Container>
  )
}

export default ImageSearchMain