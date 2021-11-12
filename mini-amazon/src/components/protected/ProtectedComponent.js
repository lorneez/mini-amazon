import React from "react";

function ProtectedComponent(props){
    return(
        <div>
            {props.component()}
        </div>
    )
}

export default ProtectedComponent;