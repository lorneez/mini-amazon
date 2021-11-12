import React from "react"
import SideBarComponent from "../../components/SideBarComponent"
import InventoryTable from "../../components/seller/InventoryTable";


function Reviews() {
    return (
        <div>
            <div className={"columns"}>
                <div className={"column is-one-fifth"}>
                    <SideBarComponent type={"seller"}/>
                </div>
                <div className={"column"}>
                    <div className={"container"}>
                        Reviews
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Reviews;