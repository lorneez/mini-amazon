import React from "react"
import SideBarComponent from "../../components/SideBarComponent"


function SellerOrders() {
    return (
        <div>
    <div className={"columns"}>
        <div className={"column is-one-fifth"}>
            <SideBarComponent type={"seller"}/>
        </div>
        <div className={"column"}>
            <div className={"container"}>
                Seller Orders
            </div>
        </div>
    </div>
</div>
    )
}

export default SellerOrders;