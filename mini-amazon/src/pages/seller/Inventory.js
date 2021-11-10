import React from "react"
import SideBarComponent from "../../components/SideBarComponent"
import InventoryTable from "../../components/seller/InventoryTable";

const rows = [
    {
        details: "Macbook Air (M1, 2020)",
        quantity: "10",
        price: "$999",
        dateAdded: "May 26, 2019. 6:30PM",
        status: "ACTIVE"
    },
    {
        details: "Macbook Air (M1, 2020)",
        quantity: "10",
        price: "$999",
        dateAdded: "May 26, 2019. 6:30PM",
        status: "ACTIVE"
    },
    {
        details: "Macbook Air (M1, 2020)",
        quantity: "10",
        price: "$999",
        dateAdded: "May 26, 2019. 6:30PM",
        status: "ACTIVE"
    },
    {
        details: "Macbook Air (M1, 2020)",
        quantity: "10",
        price: "$999",
        dateAdded: "May 26, 2019. 6:30PM",
        status: "ACTIVE"
    },
]

function Inventory() {
    return (
        <div>
            <div className={"columns"}>
                <div className={"column is-one-fifth"}>
                    <SideBarComponent type={"seller"}/>
                </div>
                <div className={"column"}>
                    <div>
                        <InventoryTable items={rows}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Inventory;