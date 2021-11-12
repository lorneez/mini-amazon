import React from "react";
import SideBarComponent from "../SideBarComponent";

function ProtectedComponent(props) {
    return (
        <div>
            {props.component()}
        </div>
    )
}

export default ProtectedComponent;