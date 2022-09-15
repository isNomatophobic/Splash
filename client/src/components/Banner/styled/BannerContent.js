import { Columns } from "components/styled"
import styled from "styled-components"

const BannerContentWrapper = styled(Columns)`
position:relative;
z-index:3;
color:white;
width:100%;
max-width:850px;
h1{
    margin-bottom:16px;

    font-size:46px;
    font-weight:700;
}
p{
    font-size: 18px;
    font-weight:400;
}
.trending{
    display:flex;
    align-items:center;
    font-size:15px;
    ul{
        color:rgba(255, 255, 255, 0.8);
        display:flex;
        align-items:center;
        margin-left:4px;
    }
    li{
        cursor:pointer;
        white-space:pre;
    }
    li:hover{
        color:white;
    }
}
`
export default BannerContentWrapper