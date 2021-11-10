import React from "react"
import SideBarComponent from "../../components/SideBarComponent"
import CartTable from "../../components/CartTable"
import CartHeader from "../../components/CartHeader"

const rows = [
    {
        details: "macbook pro 11111",
        quantity: "10",
        price: "$999",
        dateAdded: "Tuesday May 26, 2019. 6:30PM",
        lastUpdated: "Friday May 29, 2019. 6:30PM",
        amountSold: "123",
        status: "IN STOCK"
    },
    {
        details: "macbook pro 11111",
        quantity: "10",
        price: "$999",
        dateAdded: "Tuesday May 26, 2019. 6:30PM",
        lastUpdated: "Friday May 29, 2019. 6:30PM",
        amountSold: "123",
        status: "IN STOCK"
    },
    {
        details: "macbook pro 11111",
        quantity: "10",
        price: "$999",
        dateAdded: "Tuesday May 26, 2019. 6:30PM",
        lastUpdated: "Friday May 29, 2019. 6:30PM",
        amountSold: "123",
        status: "IN STOCK"
    },
    {
        details: "macbook pro 11111",
        quantity: "10",
        price: "$999",
        dateAdded: "Tuesday May 26, 2019. 6:30PM",
        lastUpdated: "Friday May 29, 2019. 6:30PM",
        amountSold: "123",
        status: "IN STOCK"
    },
]
function Cart() {
    return (
        <div>
            <div className={"columns"}>
                <div className={"column is-one-fifth"}>
                    <SideBarComponent type={"buyer"}/>
                </div>
                <div className={"column"}>
                    <div>
                        <CartHeader/>
                        <CartTable items={rows}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cart;