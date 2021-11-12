import React from "react";

function InventoryItem(props) {
    return (
        <div>
            <div className={"columns"}>
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
                    Status
                </div>
            </div>
        </div>
    )
}

export default InventoryItem;