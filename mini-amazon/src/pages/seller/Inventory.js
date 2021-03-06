import React, {useContext, useEffect, useState} from "react"
import SideBarComponent from "../../components/SideBarComponent"
import InventoryTable from "../../components/seller/InventoryTable";
import axios from 'axios';
import {AuthContext} from "../../contexts/AuthContext";

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

    const auth = useContext(AuthContext);
    const { state } = auth;
    const { userId } = state;

    const [data, setData] = useState([]);

    useEffect(async () => {
        console.log("called")
        const result = await axios(
            'http://localhost:5000/api/all_products/?seller_id=' + userId, {
                headers: {
                    'Access-Control-Allow-Origin': '*',
                },
            }
        );
        setData(result.data);
    }, []);

    return (
        <div>
            <div className={"columns"}>
                <div className={"column is-one-fifth"}>
                    <SideBarComponent type={"seller"}/>
                </div>
                <div className={"column"}>
                    <section className="hero">
                        <div className="hero-body">
                            <p className="title">
                                Inventory
                            </p>
                            <p className="subtitle">
                                <div>Here are the products you currently have!</div>
                                <a href={"/product/create"}>
                                    Click here to create a product!
                                </a>
                            </p>
                        </div>
                    </section>
                    <div className={"container"}>
                        <InventoryTable items={data}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Inventory;