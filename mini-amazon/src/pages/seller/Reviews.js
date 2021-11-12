import React from "react"
import SideBarComponent from "../../components/SideBarComponent"
import InventoryTable from "../../components/seller/InventoryTable";
import OrderTable from "../../components/seller/OrderTable";


function Reviews() {
    return (
        <div>
            <div className={"columns"}>
                <div className={"column is-one-fifth"}>
                    <SideBarComponent type={"seller"}/>
                </div>
                <div className={"column"}>
                    <section className="hero">
                        <div className="hero-body">
                            <p className="title">
                                Reviews
                            </p>
                            <p className="subtitle">
                                Here are your reviews!
                            </p>
                        </div>
                    </section>
                    <div className={"container"}>
                        Reviews
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Reviews;