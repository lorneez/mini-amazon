import React, {useState, useEffect} from "react"
import OrderHeader from "../../components/OrderHeader"
import OrderTable from "../../components/OrderTable"
import SideBarComponent from "../../components/SideBarComponent"
import axios from "axios"

const styles = {
    button:{
        marginLeft: '2px',
        backgroundColor: 'orange'
    }
}

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

    async function buyCart () {
        const result = await axios.post('http://0.0.0.0:5000/api/buy_cart/?user_id=2');
        console.log(result.data)
        const newList = []
        for (var i = 0; i<data.length; i++){
            for(var j = 0; j<result.data.length; j++)
                if(result.data[j].product_name === data[i].product_name){
                    newList.push(data[i]);
                }
        }
        setData(newList);
    }


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
                        <button class='button' style={styles.button} onClick={()=>buyCart()}>Buy All Cart Items</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Orders;