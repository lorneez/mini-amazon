import React from "react"

function OrderDetails(props) {
    return (
        <div className={"container p-6"} style={{background: "white", borderRadius: "5px"}}>
            <section className="hero is-warning" style={{borderRadius: "5px"}}>
                <div className="hero-body">
                    <p className="title p-2">
                        Order {props.item.order_id}
                    </p>
                    <p className="subtitle">
                        <div className={"column"}>
                            <img style={{height: "150px", width: "300px"}} src={props.item.product_image}/>
                        </div>
                        <div className={"column"}>
                            You've ordered {props.item.order_quantity} of {props.item.product_name}.
                        </div>
                        <div className={"column"}>
                            Total Price: {props.item.order_quantity * props.item.product_price}.
                        </div>
                        <div className={"column"}>
                            Timestamp: {props.item.order_time}.
                        </div>
                    </p>
                </div>
            </section>
        </div>
    )
}

export default OrderDetails;