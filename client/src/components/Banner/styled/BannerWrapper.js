import styled from "styled-components";
import { Box } from "components/styled";

const BannerWrapper = styled(Box)`
width:100%;
height: 594px;
position:relative;
display:flex;
justify-content:center;
align-items:center;
@media (max-width: 480px){
    height: 310px;
}
`
export const BannerReadMore = styled('div')`
position:absolute;
left:50%;
bottom:15px;
font-size:13px;
transform:translate(-50%,0%);
color:rgba(255, 255, 255, 0.55);
span{
    color:rgba(255, 255, 255, 0.8);
    cursor:pointer;
}
span:hover{
    color:white;
}
z-index:3;
`
export const BannerAuthor = styled(BannerReadMore)
`
left:13px;
transform:none;
`
export default BannerWrapper