import React, {useState, useEffect, useContext} from "react"
import axios from "axios"
import SideBarComponent from "../../components/SideBarComponent"
import CartTable from "../../components/buyer/CartTable"
import CartHeader from "../../components/buyer/CartHeader"
import {AuthContext} from "../../contexts/AuthContext";

const styles = {
    button:{
        marginLeft: '2px',
        backgroundColor: 'orange'
    }
}
function Cart() {
    const auth = useContext(AuthContext);
    const { state } = auth;
    const { userId } = state;

    const [data, setData] = useState([]);

    useEffect(async () => {
        const result = await axios(
            'http://0.0.0.0:5000/api_user_cart/?user_id=' + userId, {
                headers: {
                    'Access-Control-Allow-Origin': '*',
                },
            }
        );
        console.log(result.data)
        setData(result.data);
    }, []);

    async function buyCart () {
        const result = await axios.post('http://0.0.0.0:5000/api/buy_cart/?user_id=' + userId);
        console.log(result.data)
        const newList = []
        for (var i = 0; i<data.length; i++){
            for(var j = 0; j<result.data.length; j++){
                if(result.data[j].product_name === data[i].product_name){
                    newList.push(data[i]);
                }
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
                    <div>
                        <CartHeader/>
                        <CartTable items={data}/>
                        <button class='button' style={styles.button} onClick={()=>buyCart()}>Buy All Cart Items</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cart;