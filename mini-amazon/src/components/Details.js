import React, {useContext, useState, useEffect} from 'react'
import { RatingView } from 'react-simple-star-rating';
import axios from "axios";
import {AuthContext} from "../contexts/AuthContext";
import ProductReviewModal from '../pages/product/ProductReviewModal';
import CreateReview from '../pages/seller/CreateReview';

function Details(props) {
    console.log("BBBBBBBBBB")
    console.log(props)
    const auth = useContext(AuthContext);
    const { state } = auth;
    const { userId } = state;
    
    async function handleBuy() {
        const url = 'http://localhost:5000/api/buy_product/?product_id=' + props.id + '&user_id=' + userId + '&quantity=' + "1"
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
        const url = 'http://localhost:5000/api/add_cart/?user_id=' + userId + '&product_id=' + props.id + '&quantity=' + "1"
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
                        <img src={props.image} alt=""/>
                    </div>
                    </div>
                </div>
                <div class="mt-5" >
                    <div class="column is-two-thirds">
                    <h1 class="title"> {props.title} </h1>
                    <hr></hr>
                    <RatingView ratingValue={props.rating}></RatingView>
                    <h1 class="title"> Price: ${props.price} </h1>
                    <button class="button is-warning is-medium is-rounded is-fullwidth" onClick={addToCart}>Add to Cart</button>
                    <div class="mt-2"></div>
                    <button class="button is-danger is-medium is-rounded is-fullwidth" onClick={() => handleBuy()}>Buy Now</button>
                    </div>
                    <div>
                        {CreateReview(props.seller_id)}
                    </div>
                    <div>
                        <ProductReviewModal id={props.id} seller={props.seller_id}/>
                        {/*{ProductReviewModal(id, seller)}*/}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Details;

