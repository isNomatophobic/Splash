import React from 'react'
import styled from 'styled-components'

const FlexSpaceBeween = styled.div`
grid-column-gap: 16px;
align-items: center;
display: grid;
padding-bottom: 8px;
padding-top: 8px;
grid-template-columns: 24px 1fr;
display: none;
@media (${(props)=> (props.breakpoint)}) {
  display: grid;
};
`

export default FlexSpaceBeween