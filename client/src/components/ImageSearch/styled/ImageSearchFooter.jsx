import { testimagesearch } from 'components/images'
import { NoBorderButton } from 'components/styled'
import React from 'react'
import styled from 'styled-components'

const Button = styled(NoBorderButton)`
cursor:pointer;
`
const ImageContainer = styled.div`
position:relative;
&:hover:after{
    background-color: rgba(255, 255, 255, 0.2);
}
&:after{
    transition: background-color .1s ease-in-out,opacity .1s ease-in-out;
    border: 1px solid #0000000d;
    bottom: 0;
    content: "";
    left: 0;
    pointer-events: none;
    position: absolute;
    right: 0;
    top: 0;
}
`
const TryImage = styled.img`
width: 82px;
height: 56px;
`
const Container = styled.div`
margin-top: 8px;
align-items: center;
color: #767676;
display: flex;
flex-direction: column;
padding: 16px;
margin: 0px 16px 16px 16px;
`
const ImagesContainer = styled.div`
margin-top: 16px;
display: grid;
gap: 16px;
grid-template-columns: repeat(4,82px);
cursor: pointer;

`

const ImageSearchFooter = () => {
  return (
    <Container>Or try one of the examples below:
        <ImagesContainer>
            <Button><ImageContainer><TryImage src={testimagesearch}/></ImageContainer></Button>
            <Button><ImageContainer><TryImage src={testimagesearch}/></ImageContainer></Button>
            <Button><ImageContainer><TryImage src={testimagesearch}/></ImageContainer></Button>
            <Button><ImageContainer><TryImage src={testimagesearch}/></ImageContainer></Button>
        </ImagesContainer>
    </Container>
  )
}

export default ImageSearchFooter