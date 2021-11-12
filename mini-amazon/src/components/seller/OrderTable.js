import React from "react";

function OrderTable(props) {
    return (
        <div className={"table"}>
            <thead>
            <tr>
                <th><abbr title="Product Name">Product Name</abbr></th>
                <th><abbr title="Item Quantity">Item Quantity</abbr></th>
                <th><abbr title="Final Price">Final Price</abbr></th>
                <th><abbr title="Shipping Address">Shipping Address</abbr></th>
                <th><abbr title="Customer Name">Customer Name</abbr></th>
                <th><abbr title="Date Created">Date Created</abbr></th>
                <th><abbr title="Status">Status</abbr></th>
            </tr>
            </thead>
            {props.items.map((item)=>(
                <tbody>
                <tr>
                    <th>{item.product_id}</th>
                    <td>{item.quantity}</td>
                    <td>{item.final_price}</td>
                    <td>Address</td>
                    <td>{item.user_id}</td>
                    <td>{item.time_stamp}</td>
                    <td>{item.fulfillment_status}</td>
                </tr>
                </tbody>
            ))}
        </div>
    )
}

export default OrderTable;