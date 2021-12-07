import React, { useState } from 'react'
import { render } from 'react-dom';
import "../pages/product/testProducts.js"
import Details from "./Details";


function Product({id, title, price, rating, image}){

    const [showModal, setShowModal] = useState(false);

    function renderModal() {
        return (
            <div className={"modal " + (showModal ? "is-active" : "")} >
                <div className="modal-background" style={{flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: 'rgba(225,225,225,0.8)'}}></div>
                <div className="modal-content">
                    <Details 
                        id={id}
                        title={title}
                        image={image}
                        price={price}
                        rating={rating}/>
                </div>
                <button className="modal-close is-large" aria-label="close" onClick={() => setShowModal(false)}></button>
            </div>
        )
    }

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
            <button className={"button"} aria-label="close">
                Add to cart
            </button>
            <div className={"column"}>
                <button className={"button"} onClick={() => setShowModal(true)}>
                    View
                </button>
            </div>
            {renderModal()}
        </div>
        );

}

export default Product;