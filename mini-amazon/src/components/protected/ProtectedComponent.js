import React from "react";
<<<<<<< HEAD

function ProtectedComponent(props){
    return(
=======
import SideBarComponent from "../SideBarComponent";

function ProtectedComponent(props) {
    return (
>>>>>>> 2646a29f68e6516b32f620c821d98daed6b39067
        <div>
            {props.component()}
        </div>
    )
}

export default ProtectedComponent;