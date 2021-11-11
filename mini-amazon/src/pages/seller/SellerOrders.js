import React from "react"
import SideBarComponent from "../../components/SideBarComponent"
import OrderTable from "../../components/seller/OrderTable";

const rows = [
    {
        name: "Macbook Air (M1, 2020)",
        quantity: "10",
        address: "111 St. Bob Road",
        date: "May 26, 2019. 6:30PM",
        customer: "Lorne Zhang",
        status: "SHIPPED"
    },
    {
        name: "Macbook Air (M1, 2020)",
        quantity: "10",
        address: "111 St. Bob Road",
        date: "May 26, 2019. 6:30PM",
        customer: "Lorne Zhang",
        status: "SHIPPED"
    },
    {
        name: "Macbook Air (M1, 2020)",
        quantity: "10",
        address: "111 St. Bob Road",
        date: "May 26, 2019. 6:30PM",
        customer: "Lorne Zhang",
        status: "SHIPPED"
    },
    {
        name: "Macbook Air (M1, 2020)",
        quantity: "10",
        address: "111 St. Bob Road",
        date: "May 26, 2019. 6:30PM",
        customer: "Lorne Zhang",
        status: "SHIPPED"
    },
]


function SellerOrders() {
    return (
        <div>
            <div className={"columns"}>
                <div className={"column is-one-fifth"}>
                    <SideBarComponent type={"seller"}/>
                </div>
                <div className={"column"}>
                    <div>
                        <OrderTable items={rows}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SellerOrders;