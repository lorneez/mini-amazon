import React from "react"
import SideBarComponent from "../../components/SideBarComponent";

function LandingPage() {
    return (
        <div>
            <div className={"columns"}>
                <div className={"column is-one-fifth"}>
                    <SideBarComponent type={"landing"}/>
                </div>
                <div className={"column"}>
                    <div className={"container"}>
                        Landing Page
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LandingPage;