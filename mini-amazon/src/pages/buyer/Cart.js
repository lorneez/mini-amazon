import React from "react"
import SideBarComponent from "../../components/SideBarComponent"
import CartTable from "../../components/CartTable"


function Cart() {
    return (
        <div>
            <div className={"columns"}>
                <div className={"column is-one-fifth"}>
                    <SideBarComponent type={"buyer"}/>
                </div>
                <div className={"column"}>
                    <div className={"container"}>
                        <CartTable/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cart;