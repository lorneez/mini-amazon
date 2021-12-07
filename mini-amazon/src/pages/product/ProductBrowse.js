import React from "react"
import Product from "../../components/Product";
import { products } from './testProducts.js';
import SideBarComponent from "../../components/SideBarComponent";

function ProductBrowse() {
    
    return (
        <div>
        <div className={"columns"}>
            <div className={"column is-one-fifth"}>
                <SideBarComponent type={"buyer"}/>
            </div>
            <div className={"column"}>
                <div className={"container mt-5"}>
                    <div className="ProductBrowse-Row">
                        {products.map(item => {
                            return (
                                <Product
                                    id={item.id}
                                    title={item.title}
                                    image={item.image}
                                    price={item.price}
                                    rating={item.rating}
                                />
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
        </div>
    );
}

export default ProductBrowse;