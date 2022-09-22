import { Columns } from 'components/styled'
import React from 'react'
import styled from 'styled-components'
import { ImageSearchFooter, ImageSearchHeader,ImageSearchInput} from './styled'


const MainContainer = styled(Columns)`
width:100%;
`
const ImageSearch = () => {
  return (
    <MainContainer>
    <ImageSearchHeader/>
    <ImageSearchInput/>
    <ImageSearchFooter/>
    </MainContainer>
  )
}

export default ImageSearch