import React from "react"
import SideBarComponent from "../../components/SideBarComponent"
import DashBoardHeader from "../../components/DashBoardHeader"
import SideBrowse from "../../components/SideBrowse"

const recommendedRows = [
    {
        url: "https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1597763166-41CRnvYqmqL.jpg?crop=1xw:1.00xh;center,top&resize=480:*"
    },
    {
        url: "https://assets.wordstream.com/s3fs-public/styles/simple_image/public/images/media/images/amazon-seo-product-images.jpg?RTG4A4jxOolNLZ63fSqHL5uboAaRwXU6&itok=XSbikWqd"
    },
    {
        url: "https://m.media-amazon.com/images/I/71fm3OiZj4L._AC_SX355_.jpg"
    },
    {
        url: "https://twentytwowords.com/wp-content/uploads/2021/08/37-amazon-kitchen-items-that-just-make-sense_0.jpg.optimal.jpg"
    },
    {
        url: "https://purewows3.imgix.net/images/articles/2021_02/amazon_kitchen_items_3.png?auto=format,compress&cs=strip"
    },
    {
        url: "https://www.jetsetter.com//uploads/sites/7/2019/02/81cTPZjifRL._SL1500_-1380x1035.jpg"
    },
    {
        url: "https://m.media-amazon.com/images/I/816WAkU2bpL._AC_SS450_.jpg"
    },
]

const trendingRows = [
    {
        url: "https://m.media-amazon.com/images/I/71o8fjM4yML._SX425_.jpg"
    },
    {
        url: "https://m.media-amazon.com/images/I/61JhXpjyZYL._SX522_.jpg"
    },
    {
        url: "https://m.media-amazon.com/images/I/71DEeJcC1ZS._AC_UL320_.jpg"
    },
    {
        url: "https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1622837670-71zny7btrll-ac-sl1500-1622837659.jpg"
    },
    {
        url: "https://www.refinery29.com/images/9586018.jpg?format=pjpg&auto=webp&resize-filter=lanczos2&quality=50&sharpen=a3%2Cr3%2Ct0&optimize=low&width=960"
    },
    {
        url: "https://m.media-amazon.com/images/I/71UJtA8cFJL._AC_SX522_.jpg"
    },
    {
        url: "https://m.media-amazon.com/images/I/71cQWYVtcBL.jpg"
    },
]

function BuyerDashboard() {
    
    console.log(recommendedRows)
    return (
        <div>
            <div className={"columns"}>
                <div className={"column is-one-fifth"}>
                    <SideBarComponent type={"buyer"}/>
                </div>
                <div className={"column"}>
                    <div className={"container"}>
                        <DashBoardHeader/>
                        <SideBrowse title={'Recommended For You'} products={recommendedRows}/>
                        <SideBrowse title={'Explore Trending Products'} products={trendingRows}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BuyerDashboard;