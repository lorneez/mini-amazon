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
                            title={"Oculus Quest All-in-one VR Gaming Headset – 64GB"}
                            image={"https://images-na.ssl-images-amazon.com/images/I/31pEe2taIPL._AC_US327_FMwebp_QL65_.jpg"}
                            price={11.96}
                            rating={props.rating}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductDetails;