import React from "react"
import SideBarComponent from "../../components/SideBarComponent";

function SignUpPage() {
    return (
        <div>
            <div className={"columns"}>
                <div className={"column is-one-fifth"}>
                    <SideBarComponent type={"landing"}/>
                </div>
                <div className={"column"}>
                    <div className={"container"}>
                        Sign Up Page
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SignUpPage;