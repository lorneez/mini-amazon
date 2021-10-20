import React from "react"
import SideBarComponent from "../../components/SideBarComponent"


function Reviews() {
    return (
        <div>
    <div className={"columns"}>
        <div className={"column is-one-fifth"}>
            <SideBarComponent type={"seller"}/>
        </div>
        <div className={"column"}>
            <div className={"container"}>
                Seller Reviews
            </div>
        </div>
    </div>
</div>
    )
}

export default Reviews;