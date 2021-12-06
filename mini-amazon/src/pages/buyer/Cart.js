import React, {useState, useEffect} from "react"
import axios from "axios"
import SideBarComponent from "../../components/SideBarComponent"
import CartTable from "../../components/buyer/CartTable"
import CartHeader from "../../components/buyer/CartHeader"

function Cart() {

    const [data, setData] = useState([]);

    useEffect(async () => {
        const result = await axios(
            'http://0.0.0.0:5000/api_user_cart/?user_id=1', {
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
                    <div>
                        <CartHeader/>
                        <CartTable items={data}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cart;