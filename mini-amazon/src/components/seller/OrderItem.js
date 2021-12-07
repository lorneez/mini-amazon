import React from "react";

function OrderItem(props) {
    return (
        <div>
            <div className={"columns m-2"} style={{background: "#E1E1E3", borderRadius: "5px"}}>
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
                    Address
                </div>
                <div className={"column"}>
                    {props.item.user_id}
                </div>
                <div className={"column"}>
                    {props.item.time_stamp}
                </div>
                <div className={"column"}>
                    {props.item.fulfillment_status ? <div>SHIPPED</div> : <div>NOT SHIPPED</div>}
                </div>
            </div>
        </div>
    )
}

export default OrderItem;