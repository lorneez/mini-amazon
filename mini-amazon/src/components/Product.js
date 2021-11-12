import React from 'react'
import { render } from 'react-dom';
import "../pages/product/testProducts.js"

function Product({id, title, price, rating, image}){


    return(
        <div className="product">
            <div className="product__info">
                <p>{title}</p>
                <p className="product__price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className="product__rating">
                    {Array(rating).fill().map((index) => (
                        <i key={index} class="fa fa-star"></i>
                    ))}
                </div>
            </div>
            <img src={image} alt=""/>
            <button>Add to cart</button>
        </div>
        );

}

export default Product;