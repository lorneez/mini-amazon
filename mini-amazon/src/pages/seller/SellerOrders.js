import React, {useContext, useEffect, useState} from "react"
import SideBarComponent from "../../components/SideBarComponent"
import OrderTable from "../../components/OrderTable";
import axios from "axios";
import InventoryTable from "../../components/seller/InventoryTable";
import {AuthContext} from "../../contexts/AuthContext";


function SellerOrders() {

    const auth = useContext(AuthContext);
    const { state } = auth;
    const { userId } = state;

    const [data, setData] = useState([]);

    useEffect(async () => {
        // const result = await axios(
        //     'http://localhost:5000/api/all_seller_orders/?seller_id=' + userId, {
        //         headers: {
        //             'Access-Control-Allow-Origin': '*',
        //         },
        //     }
        // );
        const result = await axios(
            'http://localhost:5000/api/all_seller_orders/?seller_id=0', {
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
                    <section className="hero">
                        <div className="hero-body">
                            <p className="title">
                                Orders
                            </p>
                            <p className="subtitle">
                                Here are the orders you currently have!
                            </p>
                        </div>
                    </section>
                    <div className={"container"}>
                        <OrderTable items={data}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SellerOrders;