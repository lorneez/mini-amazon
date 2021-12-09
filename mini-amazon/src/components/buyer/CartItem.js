import React from "react";

function CartItem(props) {
    return (
        <div>
            <div className={"columns m-2"} style={{background: "#E1E1E3", borderRadius: "5px"}}>
                <div className={"column"}>
                    <img src={props.item.product_image}/>
                </div>
                <div className={"column"}>
                    {props.item.product_seller}
                </div>
                <div className={"column"}>
                    {props.item.product_id}
                </div>
                <div className={"column"}>
                    {props.item.product_name}
                </div>
                <div className={"column"}>
                    {props.item.product_quantity}
                </div>
                <div className={"column"}>
                    {props.item.product_price}
                </div>
                <div className={"column"}>
                    {props.item.product_status ? "YES" : "NO"}
                </div>
            </div>
        </div>
    )
}

export default CartItem;