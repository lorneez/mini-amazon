import React from "react"
import SideBarComponent from "../../components/SideBarComponent"


function BuyerDashboard() {
    return (
        <div>
            <div className={"columns"}>
                <div className={"column is-one-fifth"}>
                    <SideBarComponent type={"buyer"}/>
                </div>
                <div className={"column"}>
                    <div className={"container"}>
                        Buyer Dashboard
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BuyerDashboard;