import React from "react";
import Button from "react-bootstrap/Button";

function CartTable({items}) {
    return (
        <table class="table">
            <thead>
                <tr>
                <th><abbr title="Product Details">Product Details</abbr></th>
                <th><abbr title="Quantity">Quantity</abbr></th>
                <th><abbr title="Price">Price</abbr></th>
                <th><abbr title="Date Added">Date Added</abbr></th>
                <th><abbr title="Last Updated">Last Updated</abbr></th>
                <th><abbr title="Amount Sold">Amount Sold</abbr></th>
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
                <td>{item.lastUpdated}</td>
                <td>{item.amountSold}</td>
                <td>{item.status}</td>
                </tr>
            </tbody>
            ))}
        </table>
    )
}

const styles = {
    
}

export default CartTable;

