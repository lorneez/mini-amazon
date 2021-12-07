import React, { useState } from "react";
import OrderDetails from "../pages/order/OrderDetails";
 
function OrderItem(props) {

    const [showModal, setShowModal] = useState(false);

    function renderModal() {
        return (
            <div className={"modal " + (showModal ? "is-active" : "")}>
                <div className="modal-background"></div>
                <div className="modal-content">
                    <OrderDetails item={props.item}/>
                </div>
                <button className="modal-close is-large" aria-label="close" onClick={() => setShowModal(false)}></button>
            </div>
        )
    }

    return (
        <div>
            <div className={"columns m-2"} style={{background: "#E1E1E3", borderRadius: "5px"}}>
                <div className={"column"}>
                <img src={props.item.product_image}/>
                </div>
                <div className={"column"}>
                    {props.item.order_id}
                </div>
                <div className={"column"}>
                    {props.item.product_id}
                </div>
                <div className={"column"}>
                    {props.item.product_name}
                </div>
                <div className={"column"}>
                    {props.item.order_quantity}
                </div>
                <div className={"column"}>
                    {props.item.product_price}
                </div>
                <div className={"column"}>
                    {props.item.order_time}
                </div>
                <div className={"column"}>
                    <button className={"button"} onClick={() => setShowModal(true)}>
                        View
                    </button>
                </div>
                {renderModal()}
            </div>
        </div>
    )
}

export default OrderItem;