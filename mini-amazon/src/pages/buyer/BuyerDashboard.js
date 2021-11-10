import React from "react"
import SideBarComponent from "../../components/SideBarComponent"
import DashBoardHeader from "../../components/DashBoardHeader"
import SideBrowse from "../../components/SideBrowse"

function BuyerDashboard() {
    return (
        <div>
            <div className={"columns"}>
                <div className={"column is-one-fifth"}>
                    <SideBarComponent type={"buyer"}/>
                </div>
                <div className={"column"}>
                    <div className={"container"}>
                        <DashBoardHeader/>
                        <SideBrowse title={'Recommended For You'}/>
                        <SideBrowse title={'Explore Trending Products'}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BuyerDashboard;