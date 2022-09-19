import Search from "components/Search";
import { BannerContentWrapper } from "./styled";

const BannerContent = ()=>{
    return(
        <BannerContentWrapper>
            <h1>Unsplash</h1>
            <p>The internet’s source of freely-usable images.</p>
            <p>Powered by creators everywhere.</p>
            <Search maxwidth='510' align='0' height="54px" style={{borderRadius:'4px',background:'white',margin:"30px 0px"}}/>
            <div className="trending">
                <span>Trending:</span>
                <ul>
                    <li>Flower, </li>
                    <li>Wallpapers, </li>
                    <li>Backgrounds, </li>
                    <li>Happy, </li>
                    <li>Love</li>
                </ul>
            </div>
        </BannerContentWrapper>
    )
}
export default BannerContent;