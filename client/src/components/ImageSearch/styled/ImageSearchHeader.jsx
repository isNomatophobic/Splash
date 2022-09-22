import { Box } from 'components/styled'
import styled from 'styled-components'
import React from 'react'

const ImageSearchContainer = styled(Box)`
justify-content: space-between;
padding: 10px 16px;
width: 100%;
`
const HeaderTitle = styled.h4`
font-size: 15px;
font-weight: 500;
`
const NeedHelp = styled.a`
color: ${props=>props.theme.palette.text.main};
transition: color .1s ease-in-out,opacity .1s ease-in-out;
&:hover{
  color:${props=>props.theme.palette.text.secondary};
}
`

const ImageSearchHeader = () => {
  return (
    <ImageSearchContainer>
        <HeaderTitle>
           Visual Search
        </HeaderTitle>
        <NeedHelp>
          Need help?
        </NeedHelp>
    </ImageSearchContainer>
  )
}

export default ImageSearchHeader