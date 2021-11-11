import React from "react"
import Product from "../../components/Product";
import { products } from './testProducts.js';

function ProductBrowse() {
    return (
        <div className={"ProductBrowse"}>
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
    );
}

export default ProductBrowse;