import styled, { Box } from 'components/styled'
import React from 'react'

const Container = styled(Box)`
justify-content: space-between;
`
const HeaderTitle = styled.h4`
`

const ImageSearchHeader = () => {
  return (
    <Container>
        <HeaderTitle>
           Visual Search
        </HeaderTitle>
    </Container>
  )
}

export default ImageSearchHeader