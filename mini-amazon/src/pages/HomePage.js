import React from "react"
import SideBarComponent from "../components/SideBarComponent";

function HomePage() {
    return (
        <div>
            <div className={"columns"}>
                <div className={"column is-one-fifth"}>
                    <SideBarComponent type={"buyer"}/>
                </div>
                <div className={"column"}>
                    <div className={"container"}>
                        Welcome to Zest
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomePage;