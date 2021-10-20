import React from "react"
import SideBarComponent from "../../components/SideBarComponent"


function Inventory() {
    return (
        <div>
            <div className={"columns"}>
                <div className={"column is-one-fifth"}>
                    <SideBarComponent type={"seller"}/>
                </div>
                <div className={"column"}>
                    <div className={"container"}>
                        Inventory
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Inventory;