import React from "react"
import Details from "../../components/Details";
import SideBarComponent from "../../components/SideBarComponent";

function ProductDetails(props) {
    return (
        <div>
            <div className={"columns"}>
                <div className={"column is-one-fifth"}>
                    <SideBarComponent type={"buyer"}/>
                </div>
                <div className={"column"}>
                    <div className={"container"}>
                        <Details
                            id={props.id}
                            title={props.Details}
                            image={props.image}
                            price={props.price}
                            rating={props.rating}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductDetails;