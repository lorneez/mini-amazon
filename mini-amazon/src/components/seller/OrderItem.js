import React from "react";

function OrderItem(props) {
    return (
        <div>
            <div className={"columns m-2"} style={{background: "#E1E1E3", borderRadius: "5px"}}>
                <div className={"column"}>
                    {props.item.id}
                </div>
                <div className={"column"}>
                    {props.item.product_id}
                </div>
                <div className={"column"}>
                    {props.item.quantity}
                </div>
                <div className={"column"}>
                    {props.item.final_price}
                </div>
                <div className={"column"}>
                    {props.item.time_stamp}
                </div>
            </div>
        </div>
    )
}

export default OrderItem;