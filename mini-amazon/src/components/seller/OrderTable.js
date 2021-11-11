import React from "react";

function OrderTable(props) {
    return (
        <table class="table">
            <thead>
            <tr>
                <th><abbr title="Product Name">Product Name</abbr></th>
                <th><abbr title="Item Quantity">Item Quantity</abbr></th>
                <th><abbr title="Shipping Address">Shipping Address</abbr></th>
                <th><abbr title="Customer Name">Customer Name</abbr></th>
                <th><abbr title="Date Created">Date Created</abbr></th>
                <th><abbr title="Status">Status</abbr></th>
            </tr>
            </thead>
            {props.items.map((item)=>(
                <tbody>
                <tr>
                    <th>{item.name}</th>
                    <td>{item.quantity}</td>
                    <td>{item.address}</td>
                    <td>{item.customer}</td>
                    <td>{item.date}</td>
                    <td>{item.status}</td>
                </tr>
                </tbody>
            ))}
        </table>
    )
}

export default OrderTable;