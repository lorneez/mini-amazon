import React from "react"
import OrderHeader from "../../components/OrderHeader"
import OrderTable from "../../components/OrderTable"
import SideBarComponent from "../../components/SideBarComponent"

const rows = [
    {
        details: "macbook pro 11111",
        quantity: "10",
        address: "2964 Erwin Road Apt 3",
        sourceName: "Apple",
        dateOrdered: "Tuesday May 26, 2019. 6:30PM",
        status: "DELIVERED TO FRONT DOOR"
    },
    {
        details: "macbook pro 11111",
        quantity: "10",
        address: "2964 Erwin Road Apt 3",
        sourceName: "Etsy",
        dateOrdered: "Tuesday May 26, 2019. 6:30PM",
        status: "SHIPPED FROM SELLER"
    },
    {
        details: "macbook pro 11111",
        quantity: "10",
        address: "2964 Erwin Road Apt 3",
        sourceName: "Best Buy",
        dateOrdered: "Tuesday May 26, 2019. 6:30PM",
        status: "IN TRANSIT - D.C."
    },
    {
        details: "macbook pro 11111",
        quantity: "10",
        address: "2964 Erwin Road Apt 3",
        sourceName: "Apple",
        dateOrdered: "Tuesday May 26, 2019. 6:30PM",
        status: "ORDERED"
    },
    {
        details: "macbook pro 11111",
        quantity: "10",
        address: "2964 Erwin Road Apt 3",
        sourceName: "Etsy",
        dateOrdered: "Tuesday May 26, 2019. 6:30PM",
        status: "ORDERED"
    },
]

function Orders() {
    return (
        <div>
            <div className={"columns"}>
                <div className={"column is-one-fifth"}>
                    <SideBarComponent type={"buyer"}/>
                </div>
                <div className={"column"}>
                    <div className={"container"}>
                        <OrderHeader/>
                        <OrderTable items={rows}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Orders;