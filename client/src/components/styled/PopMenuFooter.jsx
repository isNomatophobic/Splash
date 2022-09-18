import React from 'react'
import styled from 'styled-components';

const FooterContainer = styled.div`
height: 55px;
padding: 16px 32px;
border-top: 1.5px solid #E7E1E1;
display: none;
@media (${props=> props.breakpoint}) {
  display: flex;
};
justify-content: space-around;
`

const PopMenuFooter = ({children,breakpoint}) => {
  return (
    <FooterContainer breakpoint={breakpoint}>{children}</FooterContainer>
  )
}

export default PopMenuFooter