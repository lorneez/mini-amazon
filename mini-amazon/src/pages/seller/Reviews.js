import React from "react"
import SideBarComponent from "../../components/SideBarComponent"
import ReviewTable from "../../components/seller/ReviewTable";

const rows = [
    {test: 1},
    {test: 1},
    {test: 1},
    {test: 1},
    {test: 1},
    {test: 1},
    {test: 1},
    {test: 1},
    {test: 1},
    {test: 1},
    {test: 1},
    {test: 1},
    {test: 1},
    {test: 1},
    {test: 1},
    {test: 1},
    {test: 1},
    {test: 1},
    {test: 1},
    {test: 1},
    {test: 1}
]

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
                        <ReviewTable items={rows}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Reviews;