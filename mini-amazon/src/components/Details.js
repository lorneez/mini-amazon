import React, {useContext, useState, useEffect} from 'react'
import { RatingView } from 'react-simple-star-rating';
import axios from "axios";
import {AuthContext} from "../contexts/AuthContext";
import ProductReviewModal from '../pages/product/ProductReviewModal';
import CreateReview from '../pages/seller/CreateReview';

function Details({id, title, price, rating, image, seller}) {
    const auth = useContext(AuthContext);
    const { state } = auth;
    const { userId } = state;
    
    async function handleBuy() {
        const url = 'http://localhost:5000/api/buy_product/?product_id=' + id + '&user_id=' + userId + '&quantity=' + "1" 
        console.log(url)

        await axios.post(
            url, {
                headers: {
                    'Access-Control-Allow-Origin': '*',
                },
            }
        ).then((response) => {
            console.log(response)
        })
    }

    async function addToCart() {
        const url = 'http://localhost:5000/api/add_cart/?user_id=' + userId + '&product_id=' + id + '&quantity=' + "1" 
        console.log(url)

        await axios.post(
            url, {
                headers: {
                    'Access-Control-Allow-Origin': '*',
                },
            }
        ).then((response) => {
            console.log(response)
        })
    }


console.log("Hello")

    return (
        <div classname="ProductDetails">
            
            <div className={"columns"}>
                <div class="mt-5">
                <div class="mt-5">
                    <div class="column">
                        <img src={image} alt=""/>
                    </div>
                    </div>
                </div>
                <div class="mt-5" >
                    <div class="column is-two-thirds">
                    <h1 class="title"> {title} </h1>
                    <hr></hr>
                    <RatingView ratingValue={rating}></RatingView> 
                    <h1 class="title"> Price: ${price} </h1>
                    <button class="button is-warning is-medium is-rounded is-fullwidth" onClick={addToCart}>Add to Cart</button>
                    <div class="mt-2"></div>
                    <button class="button is-danger is-medium is-rounded is-fullwidth" onClick={() => handleBuy()}>Buy Now</button>
                    </div>
                    <div>
                        {CreateReview(seller)}
                    </div>
                    <div>
                        {ProductReviewModal(id, seller)}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Details;

