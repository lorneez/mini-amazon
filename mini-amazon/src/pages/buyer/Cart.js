import React from "react"
import SideBarComponent from "../../components/SideBarComponent"
import CartTable from "../../components/CartTable"
import CartHeader from "../../components/CartHeader"

const rows = [
    {
        details: "macbook pro 11111 (MG3NDLAA)",
        quantity: "10",
        price: "$999",
        dateAdded: "Tuesday May 26, 2019. 6:30PM",
        status: "IN STOCK"
    },
    {
        details: "macbook pro 11111 (MG3NDLAA)",
        quantity: "10",
        price: "$999",
        dateAdded: "Tuesday May 26, 2019. 6:30PM",
        status: "NO LONGER AVAILABLE - AWAITING RESTOCK"
    },
    {
        details: "macbook pro 11111 (MG3NDLAA)",
        quantity: "10",
        price: "$999",
        dateAdded: "Tuesday May 26, 2019. 6:30PM",
        status: "IN STOCK"
    },
    {
        details: "macbook pro 11111 (MG3NDLAA)",
        quantity: "10",
        price: "$999",
        dateAdded: "Tuesday May 26, 2019. 6:30PM",
        status: "NO LONGER AVAILABLE - AWAITING RESTOCK"
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