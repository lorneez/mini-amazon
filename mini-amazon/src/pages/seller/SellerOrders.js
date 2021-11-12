import React, {useEffect, useState} from "react"
import SideBarComponent from "../../components/SideBarComponent"
import OrderTable from "../../components/seller/OrderTable";
import axios from "axios";
import InventoryTable from "../../components/seller/InventoryTable";

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

    const [data, setData] = useState([]);

    useEffect(async () => {
        const result = await axios(
            'http://localhost:5000/api/all_user_orders/?user_id=2', {
                headers: {
                    'Access-Control-Allow-Origin': '*',
                },
            }
        );
        console.log(result.data)
        setData(result.data);
    }, []);

    return (
        <div>
            <div className={"columns"}>
                <div className={"column is-one-fifth"}>
                    <SideBarComponent type={"seller"}/>
                </div>
                <div className={"column"}>
                    <div className={"container"}>
                        <OrderTable items={data}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SellerOrders;