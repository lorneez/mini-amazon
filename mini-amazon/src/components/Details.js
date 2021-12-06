import React from 'react'
import { RatingView } from 'react-simple-star-rating';
// import * as FaIcons from 'react-icons/fa'
// import * as AiIcons from 'react-icons/Ai'


function Details({id, title, price, rating, image}) {
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
                    <button class="button is-warning is-medium is-rounded is-fullwidth">Add to Cart</button>
                    <div class="mt-2"></div>
                    <button class="button is-danger is-medium is-rounded is-fullwidth" >Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Details;

