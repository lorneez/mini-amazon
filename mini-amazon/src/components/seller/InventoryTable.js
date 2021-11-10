import React from "react";

function InventoryTable({items}) {
    return (
        <table class="table">
            <thead>
            <tr>
                <th><abbr title="Product Details">Product Details</abbr></th>
                <th><abbr title="Available">Available</abbr></th>
                <th><abbr title="Price">Price</abbr></th>
                <th><abbr title="Date Created">Date Created</abbr></th>
                <th><abbr title="Status">Status</abbr></th>
            </tr>
            </thead>
            {items.map((item)=>(
                <tbody>
                <tr>
                    <th>{item.details}</th>
                    <td>{item.quantity}</td>
                    <td>{item.price}</td>
                    <td>{item.dateAdded}</td>
                    <td>{item.status}</td>
                </tr>
                </tbody>
            ))}
        </table>
    )
}

export default InventoryTable;

