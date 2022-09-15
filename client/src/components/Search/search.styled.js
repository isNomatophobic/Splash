import styled from "styled-components"
export const SearchContainer = styled.form`
display: flex;
border-radius: 24px;
border: 1px solid #0000;
position:relative;
padding: 0px 8px;
height: ${props=>props.height};
width:100%;
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
export const SearchIcon = styled.svg`
fill: ${props=>props.theme.palette.text.main};
&:hover{
  fill: ${props=>props.theme.palette.text.secondary};
}
transition: all .1s ease-in-out;
`
export const StyledInput = styled.input`
  width: 100%;
  color: ${props=>props.theme.palette.text.main};
  border: none;
  background-color: transparent;
  &:focus{
  outline: none;
  }
  transition: all .1s ease-in-out;
  `