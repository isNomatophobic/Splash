import testImage from './test_image.jpg'
const { BannerImageWrapper } = require("./styled")

const BannerImage = ()=>{
    return(
        <BannerImageWrapper>
            <img src={testImage} alt="Banner Image"/>
        </BannerImageWrapper>
    )
}
export default BannerImage