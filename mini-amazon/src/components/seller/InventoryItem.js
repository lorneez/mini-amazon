import React from "react";

function InventoryItem(props) {
    return (
        <div>
            <div className={"columns m-2"} style={{background: "#E1E1E3", borderRadius: "5px"}}>
                <div className={"column"}>
                    {props.item.name}
                </div>
                <div className={"column"}>
                    {props.item.available_quantity}
                </div>
                <div className={"column"}>
                    {props.item.price}
                </div>
                <div className={"column"}>
                    Date Created
                </div>
                <div className={"column"}>
                    {props.item.inventory_status ? <div>ACTIVE</div> : <div>INACTIVE</div>}
                </div>
            </div>
        </div>
    )
}

export default InventoryItem;