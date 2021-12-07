import React, {useState, useEffect} from "react"
import OrderHeader from "../../components/OrderHeader"
import OrderTable from "../../components/OrderTable"
import SideBarComponent from "../../components/SideBarComponent"
import axios from "axios"



function Orders() {

    const [data, setData] = useState([]);

    useEffect(async () => {
        const result = await axios(
            'http://0.0.0.0:5000/api/all_buyer_orders/?user_id=2', {
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
                    <SideBarComponent type={"buyer"}/>
                </div>
                <div className={"column"}>
                    <div className={"container"}>
                        <OrderHeader/>
                        <OrderTable items={data}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Orders;