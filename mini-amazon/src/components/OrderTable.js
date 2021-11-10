import React from "react";
import Button from "react-bootstrap/Button";

const styles = {
    table: {
        borderSpacing: "100px"
    }
}
function OrderTable({items}) {
    return (
        <table class="table" style = {styles.table}>
            <thead>
                <tr>
                <th><abbr title="Order Details">Order Details</abbr></th>
                <th><abbr title="Quantity">Quantity</abbr></th>
                <th><abbr title="Address">Address</abbr></th>
                <th><abbr title="Source">Source</abbr></th>
                <th><abbr title="Date Ordered">Date Ordered</abbr></th>
                <th><abbr title="Status">Status</abbr></th>
                </tr>
            </thead>
            {items.map((item)=>(
            <tbody>
                <tr>
                <th>{item.details}</th>
                <td>{item.quantity}</td>
                <td>{item.address}</td>
                <td>{item.sourceName}</td>
                <td>{item.dateOrdered}</td>
                <td>{item.status}</td>
                </tr>
            </tbody>
            ))}
        </table>
    )
}

export default OrderTable;