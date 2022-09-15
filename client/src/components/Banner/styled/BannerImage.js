import styled from "styled-components";

export const BannerImageWrapper  = styled('div')`
position:absolute;
left:0;
top:0;
width:100%;
z-index:2;
height:100%;
background:red;
&:after{
    position:absolute;
    content:' ';
    top:0;
    left:0;
    width:100%;
    height:100%;
    background:rgba(0,0,0,0.5);
}
img{
width:100%;
height:100%;
position:relative;
}
`