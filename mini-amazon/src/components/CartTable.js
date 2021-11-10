import React from "react";
import Button from "react-bootstrap/Button";

const styles = {
    table: {
        borderSpacing: "1000px"
    }
}

function CartTable({items}) {
    return (
        <table class="table" style = {styles.table}>
            <thead>
                <tr>
                <th><abbr title="Product Details">Product Details</abbr></th>
                <th><abbr title="Quantity">Quantity</abbr></th>
                <th><abbr title="Price">Price</abbr></th>
                <th><abbr title="Date Added">Date Added</abbr></th>
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

export default CartTable;

