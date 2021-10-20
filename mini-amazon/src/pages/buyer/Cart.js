import React from "react"
import SideBarComponent from "../../components/SideBarComponent"


function Cart() {
    return (
        <div>
            <div className={"columns"}>
                <div className={"column is-one-fifth"}>
                    <SideBarComponent type={"buyer"}/>
                </div>
                <div className={"column"}>
                    <div className={"container"}>
                        Cart
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cart;