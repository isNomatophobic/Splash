import BannerContent from "./BannerContent";
import BannerImage from "./BannerImage";
import { BannerAuthor, BannerReadMore, BannerWrapper } from "./styled";

const name = 'Zetong Li'
const Banner = ()=>{
    return (
        <BannerWrapper>
            <BannerImage/>
            <BannerContent/>
            <BannerReadMore>
                Read more about the <span>Unsplash License</span>
            </BannerReadMore>
            <BannerAuthor>
                <span>Photo</span> by <span>{name}</span>
            </BannerAuthor>
        </BannerWrapper>
    )
}
export default Banner;