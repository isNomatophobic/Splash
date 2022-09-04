import styled from "styled-components"
import { breakpoints } from "theme";
import Box from "./Box";

//How to use theme example
//Delete after

const ExampleComponent = styled(Box)`
    padding:10px 20px;
    width:fit-content;
    border-radius:2px;
    margin:20px;
    color:${props=>props.theme.palette.text.main};
    cursor:pointer;
    &:hover{
        background:grey;
        color:${props=>props.theme.palette.text.secondary};
    }
    @media ${breakpoints.lg}{
        background:blue;
    }
`
export default ExampleComponent;