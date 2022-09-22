import { Box } from 'components/styled'
import styled from 'styled-components'
import React from 'react'

const ImageSearchContainer = styled(Box)`
justify-content: space-between;
`
const HeaderTitle = styled.h4`
`

const ImageSearchHeader = () => {
  return (
    <ImageSearchContainer>
        <HeaderTitle>
           Visual Search
        </HeaderTitle>
    </ImageSearchContainer>
  )
}

export default ImageSearchHeader